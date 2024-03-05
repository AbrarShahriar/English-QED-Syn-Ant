import { select } from "./util.js"

/*
 * Navigation Bar
 */
const backdrop = select(".backdrop")
const nav = select("nav")
const navOpen = select(".nav-open")
const navClose = select(".nav-close")

window.onclick = event => {
  if (event.target == backdrop) {
    backdrop.style.display = "none";
  }
}
window.onscroll = event => {
  backdrop.style.display = "none";
}
navOpen.addEventListener("click", e => {
  e.preventDefault()
  backdrop.style.display = "block";
})
navClose.addEventListener("click", e => {
  e.preventDefault()
  backdrop.style.display = "none";

})