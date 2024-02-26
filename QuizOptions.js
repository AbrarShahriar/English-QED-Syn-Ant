import { createEl, select } from "./util.js"


export default function QuizOption(generatedOptions, commons) {
  let options = []
  let parent = select(".options")
  
  
  for (let i = 0; i < generatedOptions.length; i++) {
    let div = createEl("button")
    div.classList.add('option')
    div.innerText = generatedOptions[i].label
    
    div.addEventListener("click", () => {
        if (!generatedOptions[i].isAnswer) {
          div.classList.add("_wrong")
        }

        generatedOptions.forEach((option, j) => {
          if(option.isAnswer) {
            options[j].classList.add("_right")
          } else {
            options[j].disabled = true
            select(".next").classList.add("disabled")
            select(".next").disabled = false
          }
        })
        
        select(".synonyms > .words").innerText = commons.synonyms.join(", ")
        select(".synonyms").classList.remove("hide")
        select(".antonyms > .words").innerText = commons.antonyms.join(", ")
        select(".antonyms").classList.remove("hide")
    })
    options[i] = div
  }
  
  options.forEach(optionEl => parent.append(optionEl))
} 

