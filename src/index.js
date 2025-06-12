import "./style.css";
import createMenuPage from './menu.js';
import createContactPage from './contact.js';
import createHomePage from './home.js';

// get the buttons, header, nav, and content elements
const nav = document.querySelector("nav");
const content = document.querySelector("#content");
const header = document.querySelector("header");
const navButtons = document.querySelectorAll('nav button');

// add a class and id to the nav buttons
navButtons.forEach(button => {
  button.classList.add("nav-button");
});
navButtons.forEach(button => {
  button.id = button.textContent.toLowerCase();
});

// nav styles
nav.classList.add("nav");
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.alignItems = "center";
nav.style.gap = "10px";

// header styles
header.classList.add("header");
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";

// content styles
content.classList.add("content");
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.alignItems = "center";

//button styles
let isBlue = false; //sets the initial state of the buttons to blue
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    isBlue = !isBlue;
    button.style.backgroundColor = isBlue ? "blue" : "lime";
  });
});

// button styles
navButtons.forEach(button => {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.padding = "10px";
    button.style.borderRadius = "5px";
    button.style.border = "dotted";
    button.style.borderColor = "red";
    button.style.borderWidth = "2px";
    button.style.borderStyle = "dashed";
    button.style.borderRadius = "10px";
    button.style.borderTopRightRadius = "20px";
    button.style.borderBottomLeftRadius = "20px";
    button.style.outline = "none";
    button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    button.style.boxSizing = "border-box";
    button.style.margin = "0";
    button.style.padding = "10px";
    button.style.width = "100px";
    button.style.cursor = "grabbing";
    button.style.transition = "background-color 0.3s ease";
    button.style.fontSize = "16px";
    button.style.fontWeight = "bold";
    button.style.textTransform = "uppercase";
    button.style.letterSpacing = "1px";
    button.style.textAlign = "center";
    button.style.color = "red";
    button.style.fontWeight = "bold";
    button.style.textTransform = "uppercase";
    button.style.letterSpacing = "1px";
    button.style.textAlign = "center";
    button.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";

});

//home page
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    createHomePage();
});

// Menu page
const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    createMenuPage();
});

// Contact page
const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
    createContactPage();
});


createHomePage();




