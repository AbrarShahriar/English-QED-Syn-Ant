import { placeBgItems, createEl, select } from "./util.js"
import { links } from "./routes.js"

const url = new URL(window.location.href) 

const actions = select(".actions")

links.forEach(link => {
  let div = createEl("div")
  div.classList.add("action")
  
  let span = createEl("span")
  span.innerText = link.label
  
  div.addEventListener("click", () => {
    window.location.href = `${url.origin}${link.link}`
  })
  
  div.append(span)
  
  actions.append(div)
})

placeBgItems(50)