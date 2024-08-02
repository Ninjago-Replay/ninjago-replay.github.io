// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : رياح التغيير', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : قصة شبح', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : الستيكس و الحجارة', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : معبد على تل الاشباح', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : المفاجاة', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : مملكة السحوب', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : الممر الملتوي', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : خطر جسيم', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : لعنة العالم الجزء الأول', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : لعنة العالم الجزء الثاني', pageUrl: 'ep10.html' }
];

// Function to create the episode list
function createEpisodeList() {
    const episodeList = document.getElementById('episode-list');

    episodes.forEach((episode) => {
        const listItem = document.createElement('li');
        listItem.className = 'episode-item';
        listItem.innerHTML = `<a href="${episode.pageUrl}">${episode.title}</a>`;
        episodeList.appendChild(listItem);
    });
}

// Function to toggle the episode list visibility
function toggleEpisodeList() {
    const episodeList = document.getElementById('episode-list');
    const toggleButton = document.getElementById('toggle-button');
    if (episodeList.style.display === 'none') {
        episodeList.style.display = 'block';
        toggleButton.textContent = 'إخفاء القائمة';
    } else {
        episodeList.style.display = 'none';
        toggleButton.textContent = 'عرض قائمة';
    }
}

// Add event listener to the button
function setupToggleButton() {
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', toggleEpisodeList);
}

// Add event listener to DOMContentLoaded event to ensure the script runs after the HTML content is loaded
document.addEventListener('DOMContentLoaded', function() {
    createEpisodeList();
    setupToggleButton();
});

