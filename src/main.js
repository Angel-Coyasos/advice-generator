const diceBtn = document.querySelector('#diceBtn');
const adviceID = document.querySelector('#adviceID');
const advice = document.querySelector('#advice');

getAdvice();

diceBtn.addEventListener( 'click', async () => {
    getAdvice()
} );

function getAdvice () {

    //Generar Id Aleatorio
    const id = Math.floor(Math.random()*100) + 1;

    //Interactuar con la API
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then( res => res.json() )
    .then( data => {
        const adviceMsg = data.slip.advice;
        advice.innerText = adviceMsg
        adviceID.innerText = id
    } )
    .catch( error => {
        adviceID.innerText = 'Error!';
        advice.innerHTML = `Intentalo de Nuevo! <br> <span class="text-red-500 text-3xl">${error.status}<span>`;
    } )

}