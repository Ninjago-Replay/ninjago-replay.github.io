function createNavigationBar() {
    const navElement = document.getElementById('navigation');
    const links = navigationLinks;

    const logoImage = document.createElement('img');
    logoImage.src = '/ninjago.png';
    logoImage.alt = 'My Logo';
    logoImage.className = 'logo-image'; 
    navElement.appendChild(logoImage);

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

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

document.addEventListener('DOMContentLoaded', createNavigationBar);

