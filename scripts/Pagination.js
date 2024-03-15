import { select, createEl } from "./util.js"

export default function Pagination({ totalPageNumbers, url, curPageNumber = 123 }) {
  let div = createEl("div")
  div.classList.add("pages_container")
  
  let spans = []
  
  for (let i = 1; i <= totalPageNumbers; i++) {
    
    let span = createEl("span")
    span.classList.add("page")
    span.innerText = i

    if(curPageNumber == i) {
      span.classList.add("selected")
    }
    
    span.addEventListener("click", e => {
      e.preventDefault()
      url.searchParams.set('page', i);
      window.location.href = `${url}`
    })
    
    spans.push(span)
  }
  
  let more = createEl("span")
  more.innerText = "..."
  
  let maxPageNumber = 7
  let startIndex = !curPageNumber ? 0 : curPageNumber-1
  
  // console.log("startIndex", startIndex)
  
  // console.log(startIndex-1, spans[startIndex-1], startIndex, spans[startIndex], startIndex+1 ,spans[startIndex+1])
  // console.log(spans.length-3, spans[spans.length-3], spans.length-2, spans[spans.length-2], spans.length-1, spans[spans.length-1])
  
  
  if (startIndex - 1 != -1) {
    div.append(spans[startIndex - 1])
  }
  div.append(spans[startIndex])
  
  if (startIndex < spans.length - 1) {
    div.append(spans[startIndex+1])
  }
  
  div.append(more)
  
  div.append(spans[spans.length-3])
  div.append(spans[spans.length-2])
  div.append(spans[spans.length-1])

 return div
}