export default class Forca {

    constructor() {
        this.mapWord;
        this.maskWord;
        this.isMutate;
        this.person;
        this.isSetPerson = false;
    }

    getWordLength(word) {
        return word.length;
    };

    lost_one_life() {

        if (this.isSetPerson === false) {
            let query_selector_person_elements = [
                document.querySelector('.body'),
                document.querySelector('.body-some'),
                document.querySelector('.hand'),
                document.querySelector('.footer'),
            ];
            this.person = query_selector_person_elements;
            this.isSetPerson = true;
        };

        if (this.person.length > 0) {
            let element = this.person.shift();
            element.style.display = 'flex';
        } else {
            this.returnWinLoseCondition("lose");
        };
    };

    clearLetters() {
        const letterField = document.querySelector(".word");
        letterField.innerHTML = '';
    };

    setWord(word) {
        this.mapWord = Object.entries(word);
        this.maskWord = Object.entries('_'.repeat(this.mapWord.length));
    };

    getActualWord() {
        let word = '';
        for (let letter of this.maskWord) {
            let [_, value] = letter;
            word += value;
        };
        return word;
    };

    modifyLetter(key_find) {
        for (let position in key_find) {
            for (let pos in this.mapWord) {
                const [key, letter] = this.mapWord[pos];
                if (letter.toUpperCase() === key_find[position].toUpperCase()) {
                    this.maskWord[key] = [`${key}`, letter];
                    this.isMutate = true;
                };
            };
        };

    };

    checkWinCondition() {
        let countBlackPosition = 0;
        for (let content of this.maskWord) {
            let [_, value] = content;
            value === '_' ? countBlackPosition += 1 : null
        };
        return countBlackPosition === 0 ? this.returnWinLoseCondition("win") : false
    };

    renderCorrectlyLetter(input) {
        if (input !== '') {
            this.clearLetters();
            this.modifyLetter(input);
            this.isMutate ? this.isMutate = undefined : this.lost_one_life()
        }
        else {
            this.clearLetters();
            alert('Digite algum valor válido!');
        };
    };

    returnWinLoseCondition(lose_or_win) {
        document.querySelector('.inputText').style.display = "none";
        document.querySelector('.btn').style.display = "none";
        const showResult = document.querySelector('.result')
        showResult.innerText = lose_or_win === "win" ? "YOU WIN" : "YOU LOSE";
        showResult.style.color = lose_or_win === "win" ? "blue" : "red";
        showResult.style.display = 'flex';

    };

};