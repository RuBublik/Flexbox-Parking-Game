import { levels } from './levels.js';
import { UI } from './ui.js';
import { GameEngine } from './game.js';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const game = new GameEngine(levels, ui);
    game.start();
});