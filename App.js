const apiEndpoint = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const iconBtn = document.querySelector(".icon-dice");

const fetchAdvice = async () => {
  advice.textContent = "Loading...";
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    const { slip } = data;
    console.log(slip);
    advice.textContent = `"${slip.advice}"`;
    adviceNumber.textContent = `ADVICE #${slip.id}`;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", fetchAdvice);
iconBtn.addEventListener("click", fetchAdvice);
