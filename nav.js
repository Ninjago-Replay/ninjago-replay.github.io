const navigationLinks = [
    { img: '/Media/Photo/Website/home.png', url: `/index.html` },
    { img: '/Media/Photo/Website/watch.png', url: `/watch.html` },
    { img: '/Media/Photo/Website/info.png', url: `/about.html` },
    { img: '/Media/Photo/Website/contact.png', url: `/contact.html` }
];

function createNavigationBar() {
    const navElement = document.getElementById('navigation');
    const links = navigationLinks;

    const logoImage = document.createElement('img');
    logoImage.src = '/ninjago.png';
    logoImage.alt = 'My Logo';
    logoImage.className = 'logo-image'; 
    navElement.appendChild(logoImage);

    const linksContainer = document.createElement('div');
    linksContainer.className = 'links-container';
    navElement.appendChild(linksContainer);

    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    const menuIcon = document.createElement('img');
    menuIcon.src = "/Media/Photo/Website/menu-open.png"; // Default image
    menuButton.appendChild(menuIcon);
    navElement.appendChild(menuButton);

    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.className = 'nav-links';
        linkElement.href = link.url;

        const imgElement = document.createElement('img');
        imgElement.src = link.img;
        imgElement.alt = ''; 
        imgElement.className = 'nav-icon'; 

        linkElement.appendChild(imgElement);
        linksContainer.appendChild(linkElement);
    });
    const themeToggleButton = document.createElement('button');
    themeToggleButton.className = 'theme-toggle-button';
    themeToggleButton.innerHTML = '<img src="/Media/Photo/Website/dark-theme.png">'; 
    navElement.appendChild(themeToggleButton);


    // Apply initial theme based on preference or saved settings
    function applyInitialTheme(themeToggleButton) {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme = savedTheme || (prefersDarkScheme ? 'dark' : 'light');
    applyTheme(theme, themeToggleButton); }
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            themeToggleButton.innerHTML = '<img src="/Media/Photo/Website/light-theme.png">'; 
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            themeToggleButton.innerHTML = '<img src="/Media/Photo/Website/dark-theme.png">'; 
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDarkScheme ? 'dark' : 'light');
    }

    menuButton.addEventListener('click', () => { 
        linksContainer.classList.toggle('show');
        linksContainer.classList.toggle('mobile'); 
    
        // Toggle the image source
        if (linksContainer.classList.contains('show')) {
            menuIcon.src = "/Media/Photo/Website/menu-close.png"; // Image when menu is open
        } else {
            menuIcon.src = "/Media/Photo/Website/menu-open.png"; // Image when menu is closed
        }
    });

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

document.addEventListener('DOMContentLoaded', createNavigationBar);

