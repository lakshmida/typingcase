let paragraphElement = document.getElementById("descritionPara");
let inputElement = document.getElementById("inputContainer");
let submitButtonElement = document.getElementById("submitButton");
let typingWordsElement = document.getElementById("typingWords");
let startButtonElement = document.getElementById("startButton");
let containerElement = document.getElementById("container");
let timerIdElement = document.getElementById("timerId");
let count = 0;
let settimer = null;
let togglecontainerEle = document.getElementById("toggleContainer");

startButtonElement.addEventListener("click", function () {
  count = 0;
  settimer = setInterval(function () {
    typingWordsElement.textContent = count - 1;
    timerIdElement.textContent = count;
    count += 1;
  }, 1000);
  inputElement.value = "";
  togglecontainerEle.classList.add("visible");
});
let stringValue = "";
let a = paragraphElement.textContent;
let inputCount = 0;

inputElement.addEventListener("keydown", function (event) {
  inputCount = inputElement.value.length;
  let valuetarget = event.key;
  let userInput = a[inputCount];
  if (valuetarget === userInput) {
    inputElement.style.color = "green";
  } else {
    inputElement.style.color = "red";
  }
});

let submitEvent = () => {
  let first = paragraphElement.textContent;
  let second = inputElement.value;

  if (first === second) {
    typingWordsElement.textContent = "You did it " + (count - 1) + " Seconds";
    clearInterval(settimer);
  } else {
    typingWordsElement.textContent = "You not did it";
    clearInterval(settimer);
  }
  togglecontainerEle.classList.remove("visible");
  clearInterval(settimer);
};

submitButtonElement.addEventListener("click", submitEvent);
