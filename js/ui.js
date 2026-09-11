export class UI {
    constructor() {
        this.spotsLayer = document.getElementById('pads-layer');
        this.carsLayer = document.getElementById('cars-layer');
        this.nextBtn = document.getElementById('next-btn');
        this.instructionsArea = document.getElementById('instructions');
        this.levelIndicator = document.getElementById('level-indicator');
        this.userCodeInput = document.getElementById('css-input-user-code');
    }

    renderLevel(level, levelIndex, totalLevels) {
        this.clearBoard();

        if (this.instructionsArea) {
            this.instructionsArea.innerHTML = level.instructions;
        }
        if (this.levelIndicator) {
            this.levelIndicator.textContent = `Level ${levelIndex + 1} of ${totalLevels}`;
        }
        if (this.userCodeInput) {
            this.userCodeInput.value = '';
            this.userCodeInput.placeholder = level.hint;
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
        level.spots.forEach(spot => {
            const spotEl = document.createElement('div');
            spotEl.className = 'parking-spot';
            spotEl.dataset.color = spot.color;
            const img = document.createElement('img');
            img.src = spot.image;
            spotEl.appendChild(img);
            this.spotsLayer.appendChild(spotEl);
        });

        level.cars.forEach(car => {
            const carEl = document.createElement('div');
            carEl.className = 'car';
            carEl.dataset.color = car.color;
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
        if (this.userCodeInput) {
            this.userCodeInput.addEventListener('input', (e) => callback(e.target.value));
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