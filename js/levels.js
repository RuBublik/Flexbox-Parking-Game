export const levels = [
    {
        id: 1,
        name: "Hard",
        instructions: "Use <code>justify-content</code> to move the car into its spot.",
        hint: "justify-content: center;",
        template: "#cars-layer",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" }
        ],
        spotStyle: "justify-content: center;"
    },
    {
        id: 2,
        name: "Harder",
        instructions: "Use <code>justify-content</code> to spread the cars out evenly across their parking spots.",
        hint: "justify-content: space-between;",
        template: "#cars-layer",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" }
        ],
        spotStyle: "justify-content: space-between;"
    },
    {
        id: 3,
        name: "Hardest",
        instructions: "Combine two properties! Use <code>justify-content</code> and <code>align-items</code> to center the cars at the bottom of the lot.",
        hint: "justify-content: center; align-items: flex-end;",
        template: "#cars-layer",
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
        template: "#cars-layer",
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
        instructions: "New trick! The green and blue cars are already spaced out correctly — use <code>order</code> on just the <strong>red</strong> car to move it into its spot.",
        hint: "order: 1;",
        cssGiven: "#cars-layer {\n  justify-content: space-between;\n}",
        template: '.car[data-color="red"]',
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" }
        ],
        spotStyle: "justify-content: space-between;"
    },
    {
        id: 6,
        name: "Hardestester",
        instructions: "Advanced! Reverse the cars' horizontal order using <code>flex-direction: row-reverse;</code>, center them, and bring them down to the bottom.",
        hint: "flex-direction: row-reverse; justify-content: center; align-items: flex-end;",
        template: "#cars-layer",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" },
            { color: "green", image: "assets/img/green-car.svg" }
        ],
        spots: [
            { color: "green", image: "assets/img/green-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "blue", image: "assets/img/blue-slot.svg" },
            { color: "green", image: "assets/img/green-slot.svg" }
        ],
        spotStyle: "flex-direction: row-reverse; justify-content: center; align-items: flex-end;"
    },
    {
        id: 7,
        name: "Hardestesterest",
        instructions: "Final challenge! There are more cars than fit in one row — use <code>flex-wrap: wrap;</code> so the extra cars flow onto a second row to reach their spots.",
        hint: "flex-wrap: wrap; justify-content: center;",
        template: "#cars-layer",
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
