export class CollisionDetector {
    static isAllAligned(cars, spots) {
        if (cars.length === 0 || cars.length !== spots.length) return false;

        const threshold = 15;

        for (let i = 0; i < cars.length; i++) {
            const carEl = cars[i];
            const carElColor = carEl.dataset.color;

            const carElRect = carEl.getBoundingClientRect();

            let isCloseEnough = false;
            for (let j = 0; j < spots.length; j++) {
                if (spots[j].dataset.color === carElColor) {
                    const spotEl = spots[j];
                    const spotElRect = spotEl.getBoundingClientRect();

                    const xDiff = Math.abs(carElRect.left - spotElRect.left);
                    const yDiff = Math.abs(carElRect.top - spotElRect.top);
                    if (xDiff <= threshold && yDiff <= threshold) {
                        isCloseEnough = true;
                        break;
                    }
                }
            }
            if (!isCloseEnough) {
                return false;
            }
        }

        return true;
    }
}