export default class UI {

    constructor(forca) {
        this.forca = forca;
    }

    renderFeatureFromWord() {
        for (let letter of this.forca.getActualWord()) {
            const wordCamp = document.querySelector(".word");
            const createSpan = document.createElement("span");
            createSpan.innerText = letter.toUpperCase();
            wordCamp.append(createSpan);
        };
        this.resetTextInput();
    };

    resetTextInput() {
        const input = document.querySelector(".inputText");
        input.value = '';
    };

};