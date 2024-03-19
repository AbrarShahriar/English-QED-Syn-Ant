import data from "./data.js"
import WordCard from "./WordCard.js"
import { select, handleLoader } from "./util.js"
import Pagination from "./Pagination.js"
import "./common.js"

const url = new URL(window.location.href)

const searchParams = new URLSearchParams(url.search);

let curPageNumber = parseInt(searchParams.get("page"))

if(!curPageNumber) {
  url.searchParams.set('page', 1);
  window.location.href = `${url}`
}

const wordPage = select(".words_page")
const goto = select(".goto")
const pages = select(".pages")

// console.log("curPageNumber", curPageNumber, "page query", searchParams.get("page"))

let custom = 0
let offset = 10

let start = !curPageNumber ? 0 : (curPageNumber-1)*offset
let end = !curPageNumber ? offset-1 : (curPageNumber-1)*offset + offset - 1
let indexOffset = 0

// console.log("start", start, "end", end)

let pageNumber = Math.ceil(data.length/offset)
// console.log(pageNumber)
let pageNumberArr = []

data.slice(start, end).forEach((word, i) => {
  wordPage.innerHTML += WordCard(word)
  handleLoader("hide")
})

pages.append(Pagination({
  totalPageNumbers: pageNumber,
  url,
  curPageNumber
}))

goto.addEventListener("click", e => {
  e.preventDefault()
  
  url.searchParams.set('page', select(".goto-input").value);
  window.location.href = `${url}`
})