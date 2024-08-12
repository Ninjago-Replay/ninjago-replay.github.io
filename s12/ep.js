// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : أتود أن تدخل إمبراطورية برايم', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : جزيرة داير', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : المستوى الثالث عشر', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : القائد العظيم جاي اللامع', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : أنا آوكينو', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : الخلل', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : منحدرات الجنون', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : متاهة التنين الأحمر', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : خطوة إلى أمام / خطوتان إلى الخلف', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : المتسابقة سبعة', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : سباق خمسة مليار', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : توقف ، إنخف ، عبور جانبي', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : تحقيق سري في نينجاغو', pageUrl: 'ep13.html' },
    { title: 'الحلقة 14 : الأب الضال', pageUrl: 'ep14.html' },
    { title: 'الحلقة 15 : معبد الجنون', pageUrl: 'ep15.html' },
    { title: 'الحلقة 16 : إنتهت اللعبة', pageUrl: 'ep16.html' }
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

