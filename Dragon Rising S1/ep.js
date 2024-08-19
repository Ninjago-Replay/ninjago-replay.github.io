// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : الإندماج : الحزء الأول', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : الإندماج : الحزء الثاني', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : كرنفال كروسرود', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : ما وراء الجنون', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : كتاب القدر', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : العودة إلى إمبريام', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : وحوش بلهاء', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : سأكون الخطر', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : الهدوء الداخلي', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : معركة المعبد الثاني', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : معبد قلوب التنين', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : عصابات البحر', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : غير مناسب على الإطلاق', pageUrl: 'ep13.html' },
    { title: 'الحلقة 14 : الجن الأخير', pageUrl: 'ep14.html' },
    { title: 'الحلقة 15 : يسمونه الموت', pageUrl: 'ep15.html' },
    { title: 'الحلقة 16 : أرض الأشياء المفقودة', pageUrl: 'ep16.html' },
    { title: 'الحلقة 17 : الإدارة', pageUrl: 'ep17.html' },
    { title: 'الحلقة 18 : القوة المطلقة', pageUrl: 'ep18.html' },
    { title: 'الحلقة 19 : نحن جميعا تنانين', pageUrl: 'ep19.html' },
    { title: 'الحلقة 20 : القوة في الداخل', pageUrl: 'ep20.html' },
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

