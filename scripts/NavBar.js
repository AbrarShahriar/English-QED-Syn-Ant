import { select, createEl } from "./util.js"
import SettingsComp from "./SettingsComp.js"

const links = [
  {
    label: "quiz", 
    link: "/index.html",
    withoutQuery: "/index.html"
  },
  {
    label: "words",
    link: "/words.html?page=1",
    withoutQuery: "/words.html"
  },
  {
    label: "flashcards",
    link: "/flashcards.html",
    withoutQuery: "/flashcards.html"
  }
]

const settingsOptions = [
  {
    label: "Timer On Quiz",
    type: "toggle",
    defaultValue: true,
    key: "toq"
  }
]

const url = new URL(window.location.href)


export default function NavBar(navOptions = links) {
  
  // Navigation options
  
  const nav = select('nav')
  
  navOptions.forEach(option => {
   
    let btn = createEl("button")
    btn.classList.add("nav_option")
    btn.innerText = option.label
    
    if(url.pathname == option.withoutQuery) {
      btn.classList.add("selected")
      btn.disabled = true
    }
    
    btn.addEventListener("click", () => {
      window.location.href = `${url.origin}${option.link}`
    })
    
    nav.append(btn) 
  })
  
  // Settings 
  
  settingsOptions.forEach(setting => {
    nav.append(SettingsComp({ defaultValue: setting.defaultValue, type: setting.type, label: setting.label  , key: setting.key}))
  })
  
  // Created By
  
  const createdBy = createEl("span")
  const createdByLink = createEl("a")
  createdByLink.innerText = "Abrar Shahriar"
  createdByLink.href = "https://abrarshahriar.github.io/"
  
  createdBy.innerText = "Created by "
  createdBy.append(createdByLink)
  
  nav.append(createdBy)
}