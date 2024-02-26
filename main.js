import QuizOption from "././QuizOptions.js"
import {generateQuestion, select} from "././util.js"

renderQuestion()

select(".next").addEventListener("click", renderQuestion)

function renderQuestion() {
  select(".options").innerHTML = ""
  select(".question").innerText = ""
  select(".next").disabled = true
  
  let randomType = Math.round(Math.random())
  let newQuestion = generateQuestion(randomType ? "synonym" : "antonym")
  
  select(".question").innerText = newQuestion.title
  
  QuizOption(newQuestion.options)
}