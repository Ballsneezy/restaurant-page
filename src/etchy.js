// ---------------------------------------------------------
// creating all elements and styles for container 
// ---------------------------------------------------------

const newDiv = document.createElement('div');
newDiv.classList.add('box');
// Make it fill the entire viewport
newDiv.style.position = 'fixed';
newDiv.style.top = '0';
newDiv.style.left = '0';
newDiv.style.width = '100vw';
newDiv.style.height = '100vh';
newDiv.style.zIndex = '-1'; // Put it behind other content
document.body.appendChild(newDiv);

const box = document.querySelector('.box');

function generateGrid(n) {
    box.innerHTML = '';

    for(let i = 0; i < n * n; i++) {
        const miniBox = document.createElement('div');
        miniBox.classList.add('miniBox');
        miniBox.style.width = `calc(100%/${n})`;
        miniBox.style.height = `calc(100%/${n})`;
        miniBox.style.backgroundColor = 'white'; // Start with white
        miniBox.dataset.brightness = 100; // Track brightness level
        box.appendChild(miniBox);
        
        miniBox.addEventListener('mouseenter', () => {
            // Get current brightness and decrease it
            let brightness = parseInt(miniBox.dataset.brightness);
            brightness = Math.max(0, brightness - 10); // Decrease by 10, but don't go below 0
            miniBox.dataset.brightness = brightness;
            
            // Apply the new brightness
            miniBox.style.backgroundColor = `rgb(${brightness}%, ${brightness}%, ${brightness}%)`;
        });
    }
}

let num = 16;
generateGrid(num);

const button = document.createElement('button');
button.textContent = 'Reset Grid';
button.style.position = 'fixed'; // Fix button position
button.style.top = '20px';
button.style.left = '20px';
button.style.zIndex = '1'; // Keep button above the grid
document.body.insertBefore(button, document.body.firstChild);

button.addEventListener('click', () => {
    const inputValue = prompt("Enter grid size (e.g., 16 for 16x16)", '16');
    if (inputValue && !isNaN(inputValue) && inputValue > 0 && inputValue <= 100) {
        generateGrid(inputValue);
    } else {
        alert("Please enter a valid number between 1 and 100");
    }
});