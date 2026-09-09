export class CollisionDetector {
    static isAllAligned(cars, spots) {
        if (cars.length === 0 || cars.length !== spots.length) return false;

        const threshold = 15;

        for (let i = 0; i < cars.length; i++) {
            const carRect = cars[i].getBoundingClientRect();
            const spotRect = spots[i].getBoundingClientRect();

            const xDiff = Math.abs(carRect.left - spotRect.left);
            const yDiff = Math.abs(carRect.top - spotRect.top);

            if (xDiff > threshold || yDiff > threshold) {
                return false;
            }
        }
        return true;
    }
}