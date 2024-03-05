

export default function WordCard(word, i) {
  let template = `
    <div class="word">
          <p class="word-title">${i}. ${word.main_word}</p>
          
          <div class="syn-ant">
            <div class="synonyms">
              <span class="title">Synonyms</span>
              
              <hr>
              
              <div class="syn_words">
                ${word.synonyms.join(", ")}
              </div>
            </div>
            <div class="antonyms">
              <span class="title">Antonyms</span>
              <hr>
              <div class="ant_words">
                  ${word.antonyms.join(", ")}
              </div>
            </div>
          </div>
        </div>
  `
  
  return template
}