import QuizOption from "././QuizOptions.js"
import { generateQuestion, select, getGotRight, calculateAccuracy, selectAll } from "././util.js"
import data from "././data.js"
import "./common.js"



console.log(data.length)
let questionCount = 0

renderQuestion()

select(".next").addEventListener("click", renderQuestion)

function renderQuestion() {
  questionCount++
  
  select(".total-questions-solved").innerText = questionCount
  
  select(".options").innerHTML = ""
  select(".question").innerHTML = ""
  select(".next").disabled = true
  
  select(".synonyms").classList.add("hide")
  select(".antonyms").classList.add("hide")
  
  let randomType = Math.round(Math.random())
  let newQuestion = generateQuestion(randomType ? "synonym" : "antonym")
  
  select(".question").innerHTML = newQuestion.title
  
  QuizOption(newQuestion.options, newQuestion.commons, questionCount)
  
}

function search(arr, n, x)

    {

           

        // Start searching from both ends

        let front = 0, back = n - 1;

       

        // Keep searching while two indexes

        // do not cross.

        while (front <= back)

        {

            if (arr[front] == x || arr[back] == x)

                return true;

            front++;

            back--;

        }

           

        return false;

    }