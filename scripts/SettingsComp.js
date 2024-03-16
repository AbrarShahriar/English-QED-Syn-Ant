import { createEl, Settings } from "./util.js"

export default function SettingsComp({ type, defaultValue = false, label = "", key = "" }) {
  
  const div = createEl("div")
  div.classList.add("settings_option")
  
  const span = createEl("span")
  span.innerText = label
  
  switch (type) {
    case 'toggle':
      const toggle = createEl("div")
      toggle.classList.add("toggle")
      
      const circle = createEl("div")
      circle.classList.add("circle")
      
      let isToggled = Settings.getSetting(key) == null ? defaultValue : Settings.getSetting(key)
      
      
      if(isToggled) {
        circle.style.transform = "translateX(calc(100%)) translateY(-50%)"
        circle.classList.add("isToggled")
        toggle.classList.add("isToggled")
      }
      
      toggle.addEventListener("click", () => {
        
        circle.classList.toggle("isToggled")
        toggle.classList.toggle("isToggled")
        
        if(isToggled) {
          circle.style.transform = "translateX(0%) translateY(-50%)"
          isToggled = false
        } else {
          circle.style.transform = "translateX(calc(100%)) translateY(-50%)"
          isToggled = true
        }
        
        Settings.setSetting(key, isToggled)

      })
      
      toggle.append(circle)
      
      div.append(span)
      div.append(toggle)
      break;
    
    default:
      return
  }
  
  return div
}