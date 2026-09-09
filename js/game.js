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

    }
    
    reset() {
        // TODO: reload current level
    }
    
    nextLevel() {
        // TODO
    }
}

document.addEventListener("DOMContentLoaded", function() {
    game.start();
});