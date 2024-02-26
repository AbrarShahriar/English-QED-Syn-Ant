import QuizOption from "././QuizOptions.js"
import {generateQuestion, select} from "././util.js"

renderQuestion()

select(".next").addEventListener("click", renderQuestion)

function renderQuestion() {
  select(".options").innerHTML = ""
  select(".question").innerText = ""
  
  let randomType = Math.round(Math.random())
  let newQuestion = generateQuestion(randomType ? "synonym" : "antonym")
  
  select(".question").innerText = newQuestion.title
  
  QuizOption(newQuestion.options)
}