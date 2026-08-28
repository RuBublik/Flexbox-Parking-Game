const game = {
    idx: 0,
    elems: {},

    start() {
        // TODO: attach elements
        //
        //game.elemss.name = document.getElementById("level-name");
        //game.elems.hint = document.getElementById("level-hint");

        game.load(0);
    },

    load(idx) {
        game.idx = idx;
        const level = levels[idx];

        // test connection with levels.js
        console.log("level.name: '" + level.name + "' " + "level.hint: '" + level.hint + "'");

        // TODO: load relevant properties from levels
    },

    apply(prop, value) {
        // TODO: move objects
    },
    
    check_solution() {
        // TODO: compare state against level's winning state
    },
    
    reset() {
        // TODO: reload current level
    },
    
    next_level() {
        // TODO
    }
}

document.addEventListener("DOMContentLoaded", function() {
    game.start();
});