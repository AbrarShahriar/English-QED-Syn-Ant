import data from "././data.js"
import WordCard from "././WordCard.js"
import { select } from "././util.js"
import "./common.js"

const wordPage = select(".words_page")
const loadMore = select(".load")

let custom = 0

let start = 0 + custom
let end = 10 + custom
let indexOffset = 0
let offset = 10

data.slice(start, end).forEach((word, i) => {
  wordPage.innerHTML += WordCard(word, i+1+custom)
})

loadMore.addEventListener("click", e => {
  e.preventDefault()
  
  start += offset
  end += offset
  indexOffset += offset
  
  data.slice(start, end).forEach((word, i) => {
    wordPage.innerHTML += WordCard(word, i+1+custom+indexOffset)
    
    if(end >= data.length) {
      loadMore.disabled = true
    }
  })
})