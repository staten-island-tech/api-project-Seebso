import './style.css'
import javascriptLogo from './javascript.svg'
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
`
const DOMSelectors = {
  inp: document.querySelector('#inp'),
  button: document.querySelector('#btn'),
};
setupCounter(document.querySelector('#counter'))
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.inp.value;
  console.log(input)
  getData(URL);
})
async function getData(input){
  let URL = `https://pokeapi.co/api/v2/pokemon/gyarados`
  console.log(URL)
  console.log(input)
  try {
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(input)
  getData(URL);
})
getData(URL);
/* , {
  mode:  'no-cors' ,
}) */
