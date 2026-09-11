export class UI {
    constructor() {
        this.spotsLayer = document.getElementById('pads-layer');
        this.carsLayer = document.getElementById('cars-layer');
        this.nextBtn = document.getElementById('next-btn');
        this.hintBtn = document.getElementById('hint-btn');
        this.checkBtn = document.getElementById('check-btn');
        this.instructionsArea = document.getElementById('instructions');
        this.levelIndicator = document.getElementById('level-indicator');
        this.userCodeInput = document.getElementById('css-input-user-code');
        this.codeEditor = document.querySelector('.code-editor');
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
        }

        this.carsLayer.style.cssText = '';
        this.spotsLayer.style.cssText = level.spotStyle || '';
        this.setNextButtonState(false);
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

    onHint(callback) {
        this.hintBtn.addEventListener('click', (e) => {
            e.preventDefault();
            callback();
        });
    }

    onCheck(callback) {
        this.checkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            callback();
        });
    }

    showHint(hint) {
        if (this.userCodeInput) {
            this.userCodeInput.value = hint;
        }
    }

    shakeNextBtnVertical() {
        this.shakeElement(this.nextBtn, 'vertical');
    }
    shakeEditorHorizontal() {
        this.shakeElement(this.codeEditor, 'horizontal');
    }

    shakeElement(element,direction) {
        if (!element) return;

        var effect = '';
        if (direction === 'horizontal') { effect = 'shake-horizontal'; } 
        else if (direction === 'vertical') { effect = 'shake-vertical'; }
        else { return; }

        element.classList.remove(effect);
        void element.offsetWidth; // restart the animation on repeated failures
        element.classList.add(effect);
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