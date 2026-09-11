export class UI {
    constructor() {
        this.spotsLayer = document.getElementById('pads-layer');
        this.carsLayer = document.getElementById('cars-layer');
        this.nextBtn = document.getElementById('next-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.hintBtn = document.getElementById('hint-btn');
        this.checkBtn = document.getElementById('check-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.instructionsArea = document.getElementById('instructions');
        this.score = document.getElementById('score-number');
        this.levelIndicatorNumeric = document.getElementById('level-indicator-numeric');
        this.levelIndicatorName = document.getElementById('level-indicator-name');
        this.userCodeInput = document.getElementById('css-input-user-code');
        this.codeEditor = document.querySelector('.code-editor');
        this.feedbackEl = document.getElementById('check-feedback');
    }

    renderLevel(level, levelIndex, totalLevels) {
        this.clearBoard();

        if (this.instructionsArea) {
            this.instructionsArea.innerHTML = `<p>${level.instructions}</p>`;
        }
        if (this.levelIndicatorNumeric && this.levelIndicatorName) {
            this.levelIndicatorNumeric.textContent = `Level: ${levelIndex + 1} of ${totalLevels}`;
            this.levelIndicatorName.textContent = `${level.name}`;
        }
        if (this.userCodeInput) {
            this.userCodeInput.value = '';
        }
        if (this.feedbackEl) {
            this.feedbackEl.textContent = '';
            this.feedbackEl.className = '';
        }

        this.carsLayer.style.cssText = '';
        this.spotsLayer.style.cssText = level.spotStyle || '';
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
            img.alt = `${spot.color} parking spot`;
            spotEl.appendChild(img);
            this.spotsLayer.appendChild(spotEl);
        });

        level.cars.forEach(car => {
            const carEl = document.createElement('div');
            carEl.className = 'car';
            carEl.dataset.color = car.color;
            const img = document.createElement('img');
            img.src = car.image;
            img.alt = `${car.color} car`;
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

    onPrevLevel(callback) {
        this.prevBtn.addEventListener('click', (e) => {
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

    onReset(callback) {
        this.resetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            callback();
        });
    }

    setUserCode(value) {
        if (this.userCodeInput) {
            this.userCodeInput.value = value;
        }
    }

    showHint(hint) {
        this.setUserCode(hint);
    }

    updateScore(score) {
        if (this.score) {
            this.score.textContent = `${score}`;
        }
    }

    showFeedback(message, isSuccess) {
        if (!this.feedbackEl) return;
        this.feedbackEl.textContent = message;
        this.feedbackEl.className = isSuccess ? 'success' : 'error';
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

    setPrevButtonState(enabled) {
        if (this.prevBtn) {
            this.prevBtn.disabled = !enabled;
        }
    }

    getCars() {
        return this.carsLayer.querySelectorAll('.car');
    }

    getParkingSpots() {
        return this.spotsLayer.querySelectorAll('.parking-spot');
    }
}