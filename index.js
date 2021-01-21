const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let timerId;
let hasStarted = false;


startButton.addEventListener('click', changeBodyColor);
stopButton.addEventListener("click", clearTimer);

function changeBodyColor() {
    if (hasStarted) {
        return;
    }
    hasStarted = true;
      timerId = setInterval(() => {
        const randomNumber = randomIntegerFromInterval(0, colors.length - 1);
        bodyRef.setAttribute(
          "style",
          `background-color:${colors[randomNumber]}`
        );
      }, 1000);
};
    
function clearTimer() {
    hasStarted = false;
    clearInterval(timerId);
}