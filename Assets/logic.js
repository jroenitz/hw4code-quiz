const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })

function startGame() {
    Console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(questions){
    questionElement.innerText = question.question
}

function setPreviousQuestion() {
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  



const question = [
    {
        title: "JavaScript is the same as Java.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        title:"Whats the first thing you type to get something on github",
        choices:["git add .", 'git push',"git go","git"],
        answer: "git add ."
    },
    {
        title: "In css how do we make text Bold",
        choices: ["bold", "thick", "font-weight", "font-large"],
        answer: "font-weight"

    },
    {
        title: "What tool do you use to help with debugging during development?",
        choices:["terminal","google","javascript","console.log"],
        answer: "console.log"
    },
    {
        title:"How did you feel about this quiz?",
        choices: ["terrible", "I got everything right"],
        answer:"I got everything right"
    }

];