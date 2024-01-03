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
  let URL = `https://valorant-api.com/v1/weapons/skins`
 /*  let URL = `https://enka.network/api/uid/${pokemon}` */
  DOMSelectors.error.innerHTML = "Fetching data..."
  try {
    const response = await fetch(URL)
    console.log(URL);
    if (response.status == 404){
      DOMSelectors.error.innerHTML = `Pokemon "${pokemon}" not found. Are you sure you typed the right name/id?`
      return;
    }
    DOMSelectors.error.innerHTML = ""
    const data = await response.json()
    console.log(data);
    const weight = data.weight/10;
    const height = data.height/10
    DOMSelectors.error.insertAdjacentHTML("afterend",`<div class="card"><h1 class="name"> ${data.name}</h1><div class="info"><h3 class="id"> <div>ID: ${data.id}</div><div>Height: ${height}m</div><div>Weight: ${weight}kg</div></h3><img width="150" src="${data.sprites.front_default}"/></div><button type="button"class="but">remove</button></div>`)
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

/* , {
  mode:  'no-cors' ,
}) */
