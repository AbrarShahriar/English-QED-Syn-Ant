import "./common.js"
import { select, random } from "./util.js"
import data from "./data.js"

const mainWord = select(".main-word")
const synonymsContainer = select(".synonyms > .words")
const antonymsContainer = select(".antonyms > .words")
const nextBtn = select(".next")

renderRandomCard()

nextBtn.addEventListener("click", e => {
  e.preventDefault()
  
  nextBtn.disabled = true
 
  setTimeout(() => {
   renderRandomCard()
   nextBtn.disabled = false
 }, 500)
})

function renderRandomCard() {
  let randomIndex = random(0, data.length)

  mainWord.innerText = data[randomIndex].main_word
  synonymsContainer.innerText = data[randomIndex].synonyms.join(", ")
  antonymsContainer.innerText = data[randomIndex].antonyms.join(", ")
}