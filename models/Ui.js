export default class UI {
    /**
     * 
     * @param {string} text question to render
     */
    showQuestion (text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
    }

    /**
     * 
     * @param {string[]} choices choices to render 
     */
    showChoices(choices, callback) {
        const choicesList = document.getElementById('choices')
        choicesList.innerHTML = ''

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.className = 'button'
            button.innerText = choices[i]
            button.addEventListener('click', () => callback(choices[i]))

            choicesList.append(button)
        }
    }

    /**
     * 
     * @param {number} score the total score 
     * @param {length} length the total length of the quiz
     */
    showScore(score, length) { 
        const quizEndHTML = `
            <h1>Results:</h1>
            <h2>You scored ${score} out of ${length}</h2>
            <button class="button" onClick="location.reload()">Restart</button>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML
    }

    showProgress(currentQuestion, totalQuestions) {
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentQuestion} of ${totalQuestions}`
    }
} 