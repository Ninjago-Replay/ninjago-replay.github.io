// Define the array of navigation links and their corresponding URLs
const navigationLinks = [
    { text: 'الرئيسية', url: '../index.html' },
    { text: 'المشاهدة', url: '../watch.html' },
    { text: 'معلومات عنا', url: '../about.html' },
    { text: 'اتصل بنا', url: '../contact.html' },
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
    menuButton.innerHTML = '&#9776;'; // Hamburger icon
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

    // Add the theme toggle button
    const themeToggleButton = document.createElement('button');
    themeToggleButton.className = 'theme-toggle-button';
    themeToggleButton.innerHTML = '🌙'; // Moon icon for dark theme
    navElement.appendChild(themeToggleButton);

    // Function to apply the theme based on user's preference or system default
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            themeToggleButton.innerHTML = '🌕'; // Sun icon for light theme
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            themeToggleButton.innerHTML = '🌙'; // Moon icon for dark theme
        }
    }

    // Check localStorage for the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Check system preference if no saved theme is found
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDarkScheme ? 'dark' : 'light');
    }

    // Add event listener to toggle the navigation links on mobile view
    menuButton.addEventListener('click', () => {
        linksContainer.classList.toggle('show');
    });

    // Add event listener to toggle the dark theme
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Call the function to create the navigation bar on page load
window.onload = createNavigationBar;

