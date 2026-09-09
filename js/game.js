export class GameEngine {
    constructor(levels, ui) {
        this.levels = levels;
        this.ui = ui;
        this.currentLevelIndex = 0;
    }
    
    start() {
    }

    loadCurrentLevel() {
    }

    handleUserInput(cssValue) {
    }

    apply(prop, value) {
        // TODO: move objects
    }
    
    check_solution() {
        // TODO: compare state against level's winning state
    }
    
    reset() {
        // TODO: reload current level
    }
    
    next_level() {
        // TODO
    }
}

document.addEventListener("DOMContentLoaded", function() {
    game.start();
});