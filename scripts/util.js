import data from "./data.js"

let gotRight = 0

export const createEl = el => document.createElement(el)
export const select = el => document.querySelector(el)
export const selectAll = selector => document.querySelectorAll(selector)
export const random = (min=0, max=100) => Math.floor(Math.random() * max)
export const generateQuestion = type => {
  let title = ""
  let selectedWord = data[random(0, data.length)]
  let options = []
  
  let randomI = random(0,4)

  let commons = {
    synonyms: selectedWord.synonyms,
    antonyms: selectedWord.antonyms
  }
  
  switch (type) {
    case "synonym":
      title = `What is the <span class="syn-color">synonym</span> of the word "<span class="word-color">${selectedWord.main_word.toUpperCase()}</span>"?`
      
      options[randomI] = {
        label: selectedWord.synonyms[random(0, selectedWord.synonyms.length)],
        isAnswer: true
      }
      
      for (var i = 0; i < 4; i++) {
        if(i != randomI) {
          options[i] = {
            label: data[random(0, data.length)].main_word,
            isAnswer: false
          }
        }
      }
      
      break;
    
    case "antonym":
      title = `What is the <span class="ant-color">antonym</span> of the word "<span class="word-color">${selectedWord.main_word.toUpperCase()}</span>"?`
      
      options[randomI] = {
        label: selectedWord.antonyms[random(0, selectedWord.antonyms.length)],
        isAnswer: true
      }
      
      for (var i = 0; i < 4; i++) {
        if (i != randomI) {
          options[i] = {
            label: data[random(0, data.length)].main_word,
            isAnswer: false
          }
        }
      }
      break;
      
    default:
      return
  }
  
  return {
    title, options, commons
  }
} 

export const getGotRight = () => gotRight
export const increaseGotRight = () => {
  gotRight++
  select(".got-right").innerText = gotRight
  return gotRight
}
export const calculateAccuracy = (questionCount) => {
    select(".accuracy").innerText = `${Math.round((getGotRight()/questionCount) * 100)}%`
}
export const handleLoader = action => {
  switch (action) {
    case 'show':
      select(".loader_container").style.display = "block"
      break;
      
    case 'hide':
      select(".loader_container").style.display = "none"
      break
    
    default:
      return
  }
}
export const Settings = {
  setSetting: (key, value) => {
    localStorage.setItem(key, value)
  },
  getSetting: (key) => {
    let val = localStorage.getItem(key)
    if(val == "true") {
      return true
    } else if (val == "false") {
      return false
    }
    return val
  },
  resetSetting: () => localStorage.clear()
}