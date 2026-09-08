export class UI {
    constructor() {
        
    }

    renderLevel(level, levelIndex, totalLevels) {

    }

    clearBoard() {
        this.padsLayer.innerHTML = '';
        this.carsLayer.innerHTML = '';
    }

    createBoardItems(level) {
        
    }

    applyUserCss(cssText) {
        this.carsLayer.style.cssText = cssText;
    }

    setNextButtonState(enabled) {
        this.nextBtn.disabled = !enabled;
    }

}