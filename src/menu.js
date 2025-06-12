export default function createMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const h1 = document.createElement('h1');
    h1.textContent = 'Big menu type energy';
    content.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'This is the menu page';
    content.appendChild(p);

    const img = document.createElement('img');
    // Add your image source here
    // img.src = 'path/to/your/image.jpg';
    content.appendChild(img);
}