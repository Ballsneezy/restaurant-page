export default function createContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const h1 = document.createElement('h1');
    h1.textContent = 'Big boy contact page';
    content.appendChild(h1);
}