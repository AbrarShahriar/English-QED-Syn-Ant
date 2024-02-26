import data from "./data.js"

export const createEl = el => document.createElement(el)
export const select = el => document.querySelector(el)
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
      title = `What is the synonym of the word "${selectedWord.main_word.toUpperCase()}?"`
      
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
      title = `What is the antonym of the word "${selectedWord.main_word.toUpperCase()}?"`
      
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