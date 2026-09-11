import { CollisionDetector } from './collision.js';
export class GameEngine {
    constructor(levels, ui) {
        this.levels = levels;
        this.ui = ui;
        this.currentLevelIndex = 0;
    }
    
    start() {
        this.ui.onInput((cssValue) => this.handleUserInput(cssValue));
        this.ui.onNextLevel(() => this.nextLevel());
        this.loadCurrentLevel();
    }

    loadCurrentLevel() {
        const level = this.levels[this.currentLevelIndex];
        this.ui.renderLevel(level, this.currentLevelIndex, this.levels.length);
    }

    handleUserInput(cssValue) {
        this.ui.applyUserCss(cssValue);
    }
    nextLevel() {
        const cars = this.ui.getCars();
        const spots = this.ui.getParkingSpots();
        const isWin = CollisionDetector.isAllAligned(cars, spots);

        if (isWin) {
            if (this.currentLevelIndex < this.levels.length - 1) {
                this.currentLevelIndex++;
                this.loadCurrentLevel();
            } else {
                alert('Great job! You finished all levels! 🎉');
                this.currentLevelIndex = 0;
                this.loadCurrentLevel();
            }
        } else {
            alert('Cars are not in the right spots yet, try again!');
        }
    }    
}
