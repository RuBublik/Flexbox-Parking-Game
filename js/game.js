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
        this.checkWinCondition();
    }

    checkWinCondition(){
        const cars = this.ui.getCars();
        const spots = this.ui.getParkingSpots();

        const isWin = CollisionDetector.isAllAligned(cars, spots);
        this.ui.setNextButtonState(isWin);
    }

    reset() {
        this.loadCurrentLevel();
    }
    
    nextLevel() {
        if (this.currentLevelIndex < this.levels.length - 1) {
            this.currentLevelIndex++;
            this.loadCurrentLevel();
        } else {
            alert('כל הכבוד! סיימת את כל השלבים! 🎉');
            this.currentLevelIndex = 0;
            this.loadCurrentLevel();
        }   
    }
}
