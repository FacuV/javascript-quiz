import { Question } from "./Question.js"

export default class Quiz {

    questionIndex = 0
    score = 0
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} the current question
     */
    getQuestionIndex() {
        // const randomQuestion = this.questions.sort(function() { return Math.random() - 0.5 })
        return this.questions[this.questionIndex]
    }

    isEnded() {
        return this.questions.length === this.questionIndex
    }

    /**
     * 
     * @param {string} answer this is the choice that the user selected
     */
    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }

        this.questionIndex++

    }

}