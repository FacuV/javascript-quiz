export class Question {
    
    /**
     * 
     * @param {string} text this is the text of the question 
     * @param {string[]} choices this is the array of choices for the question 
     * @param {string} answer this is the answer to the question 
     */

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice this is the choice that the user selected 
     * @returns {boolean} return true is the answer is correct
     */

    correctAnswer(choice) {
        return choice === this.answer;
    }
}