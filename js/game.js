import { CollisionDetector } from './collision.js';

const STORAGE_KEY = 'flexboxParkingGame';

export class GameEngine {
    constructor(levels, ui) {
        this.levels = levels;
        this.ui = ui;
        this.currentLevelIndex = 0;
        this.highestLevelReached = 0;
        this.score = 0;
        this.hintUsedForCurrentLevel = false;
        this.scoredCurrentLevel = false;
        this.currentUserCss = '';
        this.state = {}; // levelIndex -> { solution: cssText, hintUsed: boolean }

        this.loadProgress();
    }

    loadProgress() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (saved) {
                this.currentLevelIndex = saved.currentLevelIndex || 0;
                this.highestLevelReached = saved.highestLevelReached || 0;
                this.score = saved.score || 0;
                this.state = saved.state || {};
            }
        } catch (e) {
            // corrupt or missing data - keep defaults
        }
    }

    saveProgress() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            currentLevelIndex: this.currentLevelIndex,
            highestLevelReached: this.highestLevelReached,
            score: this.score,
            state: this.state,
        }));
    }

    start() {
        this.ui.onInput((cssValue) => this.handleUserInput(cssValue));
        this.ui.onCheck(() => this.check());
        this.ui.onNextLevel(() => this.nextLevel());
        this.ui.onPrevLevel(() => this.prevLevel());
        this.ui.onHint(() => this.hint());
        this.ui.onReset(() => this.reset());
        this.ui.updateScore(this.score);
        this.loadCurrentLevel();
    }

    reset() {
        this.applyLevelState();
        this.currentUserCss = '';
    }

    loadCurrentLevel() {
        const alreadySolved = this.applyLevelState();

        if (alreadySolved) {
            const savedState = this.state[this.currentLevelIndex];
            if (savedState) {
                this.ui.setUserCode(savedState.solution);
                this.handleUserInput(savedState.solution);
            }
        }
    }

    applyLevelState() {
        const level = this.levels[this.currentLevelIndex];
        const alreadySolved = this.currentLevelIndex < this.highestLevelReached;
        const savedState = this.state[this.currentLevelIndex];
        this.hintUsedForCurrentLevel = savedState ? savedState.hintUsed : false;
        this.scoredCurrentLevel = alreadySolved; // revisiting a solved level does not re-score it
        this.ui.renderLevel(level, this.currentLevelIndex, this.levels.length);
        this.ui.setNextButtonState(alreadySolved);
        this.ui.setPrevButtonState(this.currentLevelIndex > 0);
        return alreadySolved;
    }

    prevLevel() {
        if (this.currentLevelIndex > 0) {
            this.currentLevelIndex--;
            this.loadCurrentLevel();
            this.saveProgress();
        }
    }

    handleUserInput(cssValue) {
        this.currentUserCss = cssValue;
        this.ui.applyUserCss(cssValue);
    }

    saveLevelState() {
        this.state[this.currentLevelIndex] = {
            solution: this.currentUserCss,
            hintUsed: this.hintUsedForCurrentLevel,
        };
    }

    updateScore() {
        if (!this.scoredCurrentLevel) {
            this.score += this.hintUsedForCurrentLevel ? 1 : 10;
            this.scoredCurrentLevel = true;
            this.ui.updateScore(this.score);
        }
    }

    check() {
        const cars = this.ui.getCars();
        const spots = this.ui.getParkingSpots();
        const isWin = CollisionDetector.isAllAligned(cars, spots);

        if (isWin) {
            this.ui.setNextButtonState(true);
            this.ui.shakeNextBtnVertical();
            this.ui.showFeedback('Correct! :D', true);
            this.updateScore();
            this.saveLevelState();
            this.saveProgress();
        } else {
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
            this.saveProgress();
        } else {
            alert('Great job! You finished all levels! Score: ' + this.score);
        }
    }

    hint() {
        const level = this.levels[this.currentLevelIndex];
        this.hintUsedForCurrentLevel = true;
        this.ui.showHint(level.hint);
        this.handleUserInput(level.hint);
    }
}
