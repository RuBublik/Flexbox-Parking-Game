import { CollisionDetector } from './collision.js';
export class GameEngine {
    constructor(levels, ui) {
        this.levels = levels;
        this.ui = ui;
        this.currentLevelIndex = 0;
        this.highestLevelReached = 0;
    }

    start() {
        this.ui.onInput((cssValue) => this.handleUserInput(cssValue));
        this.ui.onCheck(() => this.check());
        this.ui.onNextLevel(() => this.nextLevel());
        this.ui.onPrevLevel(() => this.prevLevel());
        this.ui.onHint(() => this.hint());
        this.ui.onReset(() => this.reset());
        this.loadCurrentLevel();
    }

    reset() {
        this.loadCurrentLevel();
    }

    loadCurrentLevel() {
        const level = this.levels[this.currentLevelIndex];
        const alreadySolved = this.currentLevelIndex < this.highestLevelReached;
        this.ui.renderLevel(level, this.currentLevelIndex, this.levels.length);
        this.ui.setNextButtonState(alreadySolved);
        this.ui.setPrevButtonState(this.currentLevelIndex > 0);
    }

    prevLevel() {
        if (this.currentLevelIndex > 0) {
            this.currentLevelIndex--;
            this.loadCurrentLevel();
        }
    }

    handleUserInput(cssValue) {
        this.ui.applyUserCss(cssValue);
    }

    check() {
        const cars = this.ui.getCars();
        const spots = this.ui.getParkingSpots();
        const isWin = CollisionDetector.isAllAligned(cars, spots);

        if (isWin) {
            this.ui.setNextButtonState(true);
            this.ui.shakeNextBtnVertical();
            this.ui.showFeedback('Correct! :D', true);
        } else {
            this.ui.setNextButtonState(false);
            this.ui.shakeEditorHorizontal();
            this.ui.showFeedback('Wrong, try again.', false);
        }
    }

    nextLevel() {
        if (this.currentLevelIndex < this.levels.length - 1) {
            this.currentLevelIndex++;
            if (this.currentLevelIndex > this.highestLevelReached) {
                this.highestLevelReached = this.currentLevelIndex;
            }
            this.loadCurrentLevel();
        } else {
            alert('Great job! You finished all levels! 🎉');
        }
    }

    hint() {
        const level = this.levels[this.currentLevelIndex];
        this.ui.showHint(level.hint);
        this.handleUserInput(level.hint);
    }
}
