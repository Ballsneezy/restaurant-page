export default function createHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const h1 = document.createElement('h1');
    h1.textContent = 'El camando sauce home page';
    content.appendChild(h1);
}