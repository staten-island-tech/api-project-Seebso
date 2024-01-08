import './style.css'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
` */
const DOMSelectors = {
  inp: document.querySelector('.inp'),
  button: document.querySelector('#btn'),
  name: document.querySelector('#displayName'),
  id: document.querySelector('#id'),
  error: document.querySelector('#error'),
  card: document.getElementById("an"),
  buto: document.querySelector('#container'),
};
function clearinfo(){
  /* DOMSelectors.id.innerHTML = "";
  DOMSelectors.name.innerHTML = ""; */
  DOMSelectors.error.innerHTML = "";
}
DOMSelectors.button.addEventListener("click", function () {
  let title = DOMSelectors.inp.value;
  console.log(title)
  clearinfo()
  if (title.trim() === ""){
    DOMSelectors.error.innerHTML = "You didn't enter anything lol what am i supposed to do"
    return;
  }
  let encodedTitle = title.replaceAll(" ", "+")
  getData(encodedTitle);
})
async function getData(title){
  let URL = `https://openlibrary.org/search.json?title=${title}`
 /*  let URL = `https://enka.network/api/uid/${pokemon}` */
  DOMSelectors.error.innerHTML = "Fetching data..."
  try {
    const response = await fetch(URL)
    console.log(URL);
    if (response.status == 404){
      DOMSelectors.error.innerHTML = `Book name "${title}" not found. Are you sure you typed the right book name?`
      return;
    }
    DOMSelectors.error.innerHTML = ""
    const data = await response.json()
    console.log(data);
    if (data.docs.length == 0){
      DOMSelectors.error.innerHTML = `Book name "${title}" not found. Are you sure you typed the right book name?`
      return;
    }
    let book = data.docs[0];
    if(book["author_name"] == undefined){
      book["author_name"] = "Not Found"
    }
    let authorarraystring = book["author_name"].toString();
    let author = authorarraystring.length > 40 ? authorarraystring.substring(0,40) + "..." : authorarraystring;
    DOMSelectors.error.insertAdjacentHTML("afterend",`<div class="card"><h2 class="name"> ${book.title}</h2><div class="info"><h3 class="id"> <div title="${authorarraystring}">Author: ${author}</div><div>Year Published: ${book.first_publish_year}</div><div>Pages: ${book.number_of_pages_median}</div></div><button type="button"class="but">remove</button></div>`)
    remove();
  } catch (error) {
    console.log(error);
  }
}
function remove() {
  let buto = document.querySelectorAll(".but");
  buto.forEach((but) => 
      but.addEventListener("click",  (clic) => {
          clic.currentTarget.parentNode.remove();
          console.log("e")
      })
  );
}
getData("Harry");
/* , {
  mode:  'no-cors' ,
}) */
