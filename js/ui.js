export class UI {
    constructor() {
        this.spotsLayer = document.getElementById('pads-layer');
        this.carsLayer = document.getElementById('cars-layer');
        this.cssInput = document.getElementById('css-input');
        this.nextBtn = document.getElementById('next-btn');
        this.instructionsArea = document.getElementById('instructions');
        this.levelIndicator = document.getElementById('level-indicator');
    }

    renderLevel(level, levelIndex, totalLevels) {
        this.clearBoard();

        if (this.instructionsArea) {
            this.instructionsArea.innerHTML = level.instructions;
        }
        if (this.levelIndicator) {
            this.levelIndicator.textContent = `שלב ${levelIndex + 1} מתוך ${totalLevels}`;
        }
        if (this.cssInput) {
            this.cssInput.value = '';
        }

        this.carsLayer.style.cssText = '';
        this.spotsLayer.style.cssText = level.spotStyle || '';
        this.setNextButtonState(true);
        this.createBoardItems(level);
    }

    clearBoard() {
        this.spotsLayer.innerHTML = '';
        this.carsLayer.innerHTML = '';
    }

    createBoardItems(level) {
        // יצירת חניות
        level.spots.forEach(spot => {
            const spotEl = document.createElement('div');
            spotEl.className = 'parking-spot';
            const img = document.createElement('img');
            img.src = spot.image;
            spotEl.appendChild(img);
            this.spotsLayer.appendChild(spotEl);
        });

        // יצירת מכוניות
        level.cars.forEach(car => {
            const carEl = document.createElement('div');
            carEl.className = 'car';
            const img = document.createElement('img');
            img.src = car.image;
            carEl.appendChild(img);
            this.carsLayer.appendChild(carEl);
        });
    }

    applyUserCss(cssText) {
        this.carsLayer.style.cssText = cssText;
    }

    onInput(callback) {
        if (this.cssInput) {
            this.cssInput.addEventListener('input', (e) => callback(e.target.value));
        }
    }

    onNextLevel(callback) {
        this.nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            callback();
        });
    }

    setNextButtonState(enabled) {
        if (this.nextBtn) {
            this.nextBtn.disabled = !enabled;
        }
    }

    getCars() {
        return this.carsLayer.querySelectorAll('.car');
    }

    getParkingSpots() {
        return this.spotsLayer.querySelectorAll('.parking-spot');
    }
}