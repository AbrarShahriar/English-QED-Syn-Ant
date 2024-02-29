import QuizOption from "././QuizOptions.js"
import { generateQuestion, select, getGotRight, calculateAccuracy } from "././util.js"
import data from "././data.js"

select(".total").innerText = `Total Words: ${data.length}`

let questionCount = 0

renderQuestion()

select(".next").addEventListener("click", renderQuestion)

function renderQuestion() {
  questionCount++
  
  select(".total-questions-solved").innerText = questionCount
  
  select(".options").innerHTML = ""
  select(".question").innerHTML = ""
  select(".next").disabled = true
  
  select(".synonyms").classList.add("hide")
  select(".antonyms").classList.add("hide")
  
  let randomType = Math.round(Math.random())
  let newQuestion = generateQuestion(randomType ? "synonym" : "antonym")
  
  select(".question").innerHTML = newQuestion.title
  
  QuizOption(newQuestion.options, newQuestion.commons, questionCount)
  
}