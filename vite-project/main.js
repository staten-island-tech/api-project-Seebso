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
  name: document.querySelector('#nickname'),
  id: document.querySelector('#level'),
  error: document.querySelector('#error'),
};
function clearinfo(){
  DOMSelectors.id.innerHTML = "";
  DOMSelectors.name.innerHTML = "";
  DOMSelectors.error.innerHTML = "";
}
DOMSelectors.button.addEventListener("click", function () {
  let pokemon = DOMSelectors.inp.value;
  console.log(pokemon)
  clearinfo()
  if (pokemon.trim() === ""){
    DOMSelectors.error.innerHTML = "You didn't enter anything lol what am i supposed to do"
    return;
  }
  getData(pokemon);
})
async function getData(pokemon){
  /* let URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}` */
  let URL = `https://enka.network/api/uid/${pokemon}`
  DOMSelectors.error.innerHTML = "Fetching data..."
  try {
    const response = await fetch(URL,{
      mode:  'no-cors' ,
    })
    console.log(URL);
    if (response.status == 404){
      DOMSelectors.error.innerHTML = `Pokemon "${pokemon}" not found. Are you sure you typed the right name/id?`
      return;
    }
    DOMSelectors.error.innerHTML = ""
    const data = await response.json()
    console.log(data);
    DOMSelectors.name.innerHTML = data.nickname
    DOMSelectors.id.innerHTML = data.level
  } catch (error) {
    console.log(error);
  }
}
getData("648627899");
/* , {
  mode:  'no-cors' ,
}) */
