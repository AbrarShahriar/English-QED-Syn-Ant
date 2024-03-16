import { createEl, select, increaseGotRight, calculateAccuracy, Settings } from "./util.js"


export default function QuizOption({ generatedOptions, commons, questionCount, interval }) {
  let options = []
  let parent = select(".options")
  
  for (let i = 0; i < generatedOptions.length; i++) {
    let button = createEl("button")
    button.classList.add('option')
    button.classList.add('btn')
    
    button.innerHTML = `${generatedOptions[i].label}`
    
    button.addEventListener("click", () => {
      
        if(interval) {
          clearInterval(interval)
        }
      
        if (!generatedOptions[i].isAnswer) {
          button.classList.add("_wrong")
          button.innerHTML = `${generatedOptions[i].label} <i class="material-icons">clear</i>`
        } else {
          increaseGotRight()
        }
        
        calculateAccuracy(questionCount)

        generatedOptions.forEach((option, j) => {
          if(option.isAnswer) {
            options[j].classList.add("_right")
            options[j].innerHTML = `${generatedOptions[j].label} <i class="material-icons">done</i>`

          } else {
            select(".next").disabled = false
          }
          
           options[j].disabled = true

        })
        
        select(".synonyms > .words").innerText = commons.synonyms.join(", ")
        select(".synonyms").classList.remove("hide")
        select(".antonyms > .words").innerText = commons.antonyms.join(", ")
        select(".antonyms").classList.remove("hide")
    })
    options[i] = button
  }
  
  options.forEach(optionEl => parent.append(optionEl))
} 

