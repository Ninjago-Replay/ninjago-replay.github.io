// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : شينتارو', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : في اعماق الضلام', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : مهمة انقاذ فاشلة', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : سيف الخلاص', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : ملكة المونس', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : محاكمة مينو', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : الساحر الجمجمة', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : السقوط في الهاوية', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : تحالف المساجين', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : زحف المساجين', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : غريف برينغر', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : الاسياد لا يستسلمون', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : احلك ساعة', pageUrl: 'ep13.html' },
    { title: 'الحلقة 14 : الصعود', pageUrl: 'ep14.html' },
    { title: 'الحلقة 15 : المتهورون يردون الهجوم', pageUrl: 'ep15.html' },
    { title: 'الحلقة 16 : ابن ليلي', pageUrl: 'ep16.html' }
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
