import QuizOption from "././QuizOptions.js"
import {generateQuestion, select, getGotRight} from "././util.js"
import data from "././data.js"

select(".total").innerText = `Total Words: ${data.length}`

let questionCount = 0

renderQuestion()

select(".next").addEventListener("click", renderQuestion)

function renderQuestion() {
  questionCount++
  select(".count").innerText = `${getGotRight()}/${questionCount}`
  
  select(".options").innerHTML = ""
  select(".question").innerText = ""
  select(".next").disabled = true
  
  select(".synonyms").classList.add("hide")
  select(".antonyms").classList.add("hide")
  
  select(".accuracy").innerText = `${Math.round((getGotRight()/questionCount) * 100)}%`

  
  let randomType = Math.round(Math.random())
  let newQuestion = generateQuestion(randomType ? "synonym" : "antonym")
  
  select(".question").innerText = newQuestion.title
  
  QuizOption(newQuestion.options, newQuestion.commons)
  
}