import UI from "./UI.js";
import Forca from "./Forca.js";

const Forca_instance = new Forca();
const UI_instance = new UI(Forca_instance);

const btn = document.querySelector(".btn");
const inputText = document.querySelector(".inputText");

Forca_instance.setWord("roxo");
UI_instance.renderFeatureFromWord();

btn.addEventListener("click", () => {

    UI_instance.renderFeatureFromWord(
        Forca_instance.renderCorrectlyLetter(inputText.value)
    );
    Forca_instance.checkWinCondition();
    UI_instance.resetTextInput();

});