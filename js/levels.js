export const levels = [
    {
        id: 1,
        instructions: "השתמש ב- ???? כדי להביא את המכוניות לחניות מימין.",
        cars: [
            { id: 1, image: "assets/img/green-car.svg" },
            { id: 2, image: "assets/img/red-car.svg" },
            { id: 3, image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { id: 1, image: "assets/img/green-slot.svg" },
            { id: 2, image: "assets/img/red-slot.svg" },
            { id: 3, image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "justify-content: space-between;"
    },
    {
        id: 2,
        instructions: "השתמש ב- <code>justify-content</code> כדי למרכז את המכוניות בחניון.",
        cars: [
            { id: 1, image: "assets/img/green-car.svg" },
            { id: 2, image: "assets/img/red-car.svg" }
        ],
        spots: [
            { id: 1, image: "assets/img/green-slot.svg" },
            { id: 2, image: "assets/img/red-slot.svg" }
        ],
        spotStyle: "justify-content: center;"
    },
    {
        id: 3,
        instructions: "שלב שתי תכונות! השתמש ב- <code>justify-content</code> וב- <code>align-items</code> כדי למרכז את המכוניות בתחתית החניון.",
        cars: [
            { id: 1, image: "assets/img/green-car.svg" },
            { id: 2, image: "assets/img/red-car.svg" },
            { id: 3, image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { id: 1, image: "assets/img/green-slot.svg" },
            { id: 2, image: "assets/img/red-slot.svg" },
            { id: 3, image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "justify-content: center; align-items: flex-end;"
    },
    {
        id: 4,
        instructions: "שנה את סדר התצוגה לטור בעזרת <code>flex-direction: column;</code> ורווח את המכוניות אנכית בעזרת <code>justify-content</code>.",
        cars: [
            { id: 1, image: "assets/img/green-car.svg" },
            { id: 2, image: "assets/img/red-car.svg" },
            { id: 3, image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { id: 1, image: "assets/img/green-slot.svg" },
            { id: 2, image: "assets/img/red-slot.svg" },
            { id: 3, image: "assets/img/blue-slot.svg" }
        ],
        spotStyle: "flex-direction: column; justify-content: space-between;"
    },
    {
        id: 5,
        instructions: "שלב מתקדם! הפוך את סדר המכוניות אופקית בעזרת <code>flex-direction: row-reverse;</code>, רווח אותן מקצה לקצה והורד אותן לתחתית.",
        cars: [
            { id: 1, image: "assets/img/green-car.svg" },
            { id: 2, image: "assets/img/red-car.svg" },
            { id: 3, image: "assets/img/blue-car.svg" }
        ],
        spots: [
            { id: 3, image: "assets/img/blue-slot.svg" },
            { id: 2, image: "assets/img/red-slot.svg" },
            { id: 1, image: "assets/img/green-slot.svg" }
        ],
        spotStyle: "flex-direction: row-reverse; justify-content: space-between; align-items: flex-end;"
    }
];