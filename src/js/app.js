let url = "https://api.adviceslip.com/advice";

const button = document.getElementById("button");
let number = document.getElementById("number");
let advice = document.getElementById("advice");
const loader = document.getElementById("loader");

const showLoader = () => {
  loader.classList.add("loader--active");
  button.disabled = true;
};

const hideLoader = () => {
  loader.classList.remove("loader--active");
  button.disabled = false;
};

const getAdvice = () => {
  showLoader();

  fetch(url)
    .then((res) => res.json())
    .then(({ slip }) => {
      hideLoader();
      number.textContent = `#${slip.id}`;
      advice.textContent = slip.advice;
    })
    .catch((error) => {
      console.log(`❌Error: ${error}`);
    });
};

button.addEventListener("click", getAdvice);
