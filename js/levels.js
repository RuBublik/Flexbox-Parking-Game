export const levels = [
    {
        id: 1,
        instructions: "Use <code>justify-content</code> to spread the cars out evenly across their parking spots.",
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
        instructions: "Use <code>justify-content</code> to center the cars in the parking lot.",
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
        instructions: "Combine two properties! Use <code>justify-content</code> and <code>align-items</code> to center the cars at the bottom of the lot.",
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
        instructions: "Switch the layout to a column using <code>flex-direction: column;</code> and space the cars out vertically using <code>justify-content</code>.",
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
        instructions: "Advanced! Reverse the cars' horizontal order using <code>flex-direction: row-reverse;</code>, space them out edge to edge, and bring them down to the bottom.",
        cars: [
            { color: "green", image: "assets/img/green-car.svg" },
            { color: "red", image: "assets/img/red-car.svg" },
            { color: "blue", image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { color: "blue", image: "assets/img/blue-slot.svg" },
            { color: "red", image: "assets/img/red-slot.svg" },
            { color: "green", image: "assets/img/green-slot.svg" }
        ],
        spotStyle: "flex-direction: row-reverse; justify-content: space-between; align-items: flex-end;"
    }
];