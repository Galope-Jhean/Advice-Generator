const button = document.querySelector("button");
const adviceText = document.querySelector(".advice");
const adviceID = document.querySelector(".header");
const id = 0;


//api fetch
async function getAdvice() {
    await fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceText.textContent = `“ ${data.slip.advice} ”`;
        adviceID.textContent = `ADVICE #${data.slip.id}`;
    });
}

window.onload = () => {
    getAdvice();
}

button.addEventListener("click", () => {getAdvice()});