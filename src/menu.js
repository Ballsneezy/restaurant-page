export default function createMenuPage() {
    // Get the main content container and clear it
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.justifyContent = 'flex-start';
    content.style.border = '5px solid blue';
    content.style.minHeight = '100vh';
    content.style.width = '100vw';
    content.style.margin = '0';
    content.style.padding = '0';
    content.style.boxSizing = 'border-box';
    content.style.position = 'absolute'; // Added to ensure full width
    content.style.left = '0'; // Added to ensure full width
    content.style.right = '0'; // Added to ensure full width
    content.style.color = 'lime';
    content.style.fontFamily = 'Arial, sans-serif';
  

    // Create and style the main title
    const h1 = document.createElement('h1');
    h1.textContent = 'Big menu type energy';
    h1.style.marginBottom = '20px';
    content.appendChild(h1);

    // Create the main container for the menu grid
    const containerDiv = document.createElement('div');
    
    // Set up the grid layout (3x3)
    containerDiv.style.display = 'grid';
    containerDiv.style.gridTemplateColumns = 'repeat(3, minmax(200px, 1fr))'; // Using minmax for responsive columns
    containerDiv.style.gap = '20px';                          // Space between grid items
    // Style the container box
    containerDiv.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.7)';
    containerDiv.style.padding = '20px';
    containerDiv.style.margin = '20px';
    // Array of menu items, each with title, price, and description
    const menuItems = [
        { title: 'Burger', price: '$1200', desc: 'Classic beef patty with cheese' },
        { title: 'Pizza', price: '$1575', desc: 'Margherita with fresh basil' },
        { title: 'Pasta', price: '$1400', desc: 'Spaghetti with marinara sauce' },
        { title: 'Salad', price: '$1250', desc: 'Fresh garden salad with vinaigrette' },
        { title: 'Steak', price: '$2500', desc: 'Ribeye with garlic butter' },
        { title: 'Fish', price: '$2750', desc: 'Grilled salmon with lemon' },
        { title: 'Soup', price: '$850', desc: 'Tomato bisque with croutons' },
        { title: 'Tacos', price: '$1300', desc: 'Three street-style tacos' },
        { title: 'Dessert', price: '$7750', desc: 'Chocolate lava cake' }
    ];

    // Loop through each menu item and create its display box
    menuItems.forEach(item => {
        // Create container for each menu item
        const menuItem = document.createElement('div');
        menuItem.style.padding = '15px';
        menuItem.style.border = '1px solid #ddd';
        menuItem.style.borderRadius = '5px';
        menuItem.style.backgroundColor = '#f9f9f9';

        // Create and style the title
        const title = document.createElement('h3');
        title.textContent = item.title;
        title.style.margin = '0 0 10px 0';

        // Create and style the price
        const price = document.createElement('p');
        price.textContent = item.price;
        price.style.margin = '0 0 5px 0';
        price.style.color = '#e44d26';  // Red color for price

        // Create and style the description
        const desc = document.createElement('p');
        desc.textContent = item.desc;
        desc.style.margin = '0';
        desc.style.fontSize = '14px';
        desc.style.color = '#666';      // Gray color for description

        // Add all elements to the menu item box
        menuItem.appendChild(title);
        menuItem.appendChild(price);
        menuItem.appendChild(desc);
        
        // Add the menu item to the grid
        containerDiv.appendChild(menuItem);
    });

    // Add the entire grid to the page
    content.appendChild(containerDiv);
}