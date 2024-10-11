// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : الشاي السري', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : علامة سبيني', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : ليلة الموسيقى الجزء الأول', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : ليلة الموسيقى الجزء الثاني', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : الأسماء', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : الرجال مضحك', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : يوم التفتيش', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : باندا-مونيوم', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : جهاز التحكم عن بعد زين', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : غلاية شاي طروادة', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : الغبار الغامض', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : كاي ذو الرأس الهادئ', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : زين المتخفي', pageUrl: 'ep13.html' },
    { title: 'الحلقة 14 : لويد متأخر', pageUrl: 'ep14.html' },
    { title: 'الحلقة 15 : مراقبة شديدة الانحدار', pageUrl: 'ep15.html' },
    { title: 'الحلقة 16 : رمي العملة المعدنية', pageUrl: 'ep16.html' },
    { title: 'الحلقة 17 : جدارية نيا', pageUrl: 'ep17.html' },
    { title: 'الحلقة 18 : لعبة زين للشطرنج', pageUrl: 'ep18.html' },
    { title: 'الحلقة 19 : اختبار التذوق', pageUrl: 'ep19.html' },
    { title: 'الحلقة 20 : صداقة جميلة', pageUrl: 'ep20.html' },
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

