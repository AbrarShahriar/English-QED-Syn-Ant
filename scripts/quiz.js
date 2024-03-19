import QuizOption from "./QuizOptions.js"
import { generateQuestion, select, getGotRight, calculateAccuracy, selectAll, handleLoader, Settings } from "./util.js"
import data from "./data.js"
import "./common.js"

console.log(data.length)
let questionCount = 0

renderQuestion()
handleLoader("hide")

select(".next").addEventListener("click", renderQuestion)

function renderQuestion() {
  
  let interval = null
  if(Settings.getSetting("toq")) {
    select(".timer").style.display = "block"
    let t = 0
    interval = setInterval(() => {
      select(".timer_cover").style.transform = `translateX(${t}%)`
    
      if (t >= 100) {
        clearInterval(interval)
      } else {
        t += 0.25
      }
    
    }, 10)
  } else {
    select(".timer").style.display = "none"
  }
  
  
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
  
  QuizOption({ generatedOptions: newQuestion.options, commons: newQuestion.commons, questionCount, interval })
  
}