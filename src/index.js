import "./style.css";

const buttons = document.querySelectorAll("button");

let isBlue = false;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        isBlue = !isBlue; // toggle the state
        btn.style.backgroundColor = isBlue ? 'blue' : 'red'; // set the background color based on the state
    });
});

