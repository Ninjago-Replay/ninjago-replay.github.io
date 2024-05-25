// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : عودة الثعابين', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : البيت', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : لدغة ثعبان', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : لا تثق في ثعبان', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : علبة الدود', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : ملك الثعابين', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : التروس', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : مرة واحدة للعض - جحر مرتين', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : الحداد الملكي', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : النينجا الاخضر', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : كل لا شيء', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : ظهور المفترس الاعضم', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : يوم المفترس الاعضم', pageUrl: 'ep13.html' },
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

