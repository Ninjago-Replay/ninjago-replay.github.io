// Define the array of navigation links and their corresponding URLs
const navigationLinks = [
    { text: 'الرئيسية', url: '../index.html' },
    { text: 'المشاهدة', url: '../watch.html' },
    { text: 'معلومات عنا', url: '../about.html' },
    { text: 'اتصل بنا', url: '../contact.html' },
    // Add more links as needed
];

function createNavigationBar() {
    const navElement = document.getElementById('navigation');

    // Create the logo image element
    const logoImage = document.createElement('img');
    logoImage.src = '../ninjago.png';
    logoImage.alt = 'My Logo';
    navElement.appendChild(logoImage);

    // Create the hamburger menu button for mobile view
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '&#9776;';
    navElement.appendChild(menuButton);

    // Create the div that will hold the navigation links
    const linksContainer = document.createElement('div');
    linksContainer.className = 'links-container';
    navElement.appendChild(linksContainer);

    navigationLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.textContent = link.text;
        linkElement.href = link.url;
        linksContainer.appendChild(linkElement);
    });

    // Add event listener to toggle the navigation links on mobile view
    menuButton.addEventListener('click', () => {
        linksContainer.classList.toggle('show');
    });
}

// Call the function to create the navigation bar on page load
window.onload = createNavigationBar;