export const levels = [
    {
        id: 1,
        name: "Hard",
        instructions: "Use <code>justify-content</code> to spread the cars out evenly across their parking spots.",
        hint: "justify-content: space-between;",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "justify-content: space-between;"
    },
    {
        id: 2,
        name: "Harder",
        instructions: "Use <code>justify-content</code> to center the cars in the parking lot.",
        hint: "justify-content: center;",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" }
        ],
        spotStyle: "justify-content: center;"
    },
    {
        id: 3,
        name: "Hardest",
        instructions: "Combine two properties! Use <code>justify-content</code> and <code>align-items</code> to center the cars at the bottom of the lot.",
        hint: "justify-content: center; align-items: flex-end;",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "justify-content: center; align-items: flex-end;"
    },
    {
        id: 4,
        name: "Hardester",
        instructions: "Switch the layout to a column using <code>flex-direction: column;</code> and space the cars out vertically using <code>justify-content</code>.",
        hint: "flex-direction: column; justify-content: space-between;",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "flex-direction: column; justify-content: space-between;"
    },
    {
        id: 5,
        name: "Hardestest",
        instructions: "Advanced! Reverse the cars' horizontal order using <code>flex-direction: row-reverse;</code>, center them, and bring them down to the bottom.",
        hint: "flex-direction: row-reverse; justify-content: center; align-items: flex-end;",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "flex-direction: row-reverse; justify-content: center; align-items: flex-end;"
    },
    {
        id: 6,
        name: "Hardestester",
        instructions: "Final challenge! Reverse the cars' horizontal order using <code>flex-direction: row-reverse;</code>, space them out edge to edge, and bring them down to the bottom.",
        hint: "flex-direction: row-reverse; justify-content: space-between; align-items: flex-end;",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "flex-direction: row-reverse; justify-content: space-between; align-items: flex-end;"
    },
    {
        id: 7,
        name: "Hardestesterest",
        instructions: "New trick! There are more cars than fit in one row — use <code>flex-wrap: wrap;</code> so the extra cars flow onto a second row to reach their spots.",
        hint: "flex-wrap: wrap; justify-content: center;",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" },
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" },
            { color: "green", image: "assets/img/green-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" },
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" },
            { color: "green", image: "assets/img/green-slot.svg" }
        ],
        spotStyle: "flex-wrap: wrap; justify-content: center;"
    }
];