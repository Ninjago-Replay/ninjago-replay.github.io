// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : قدرات مهدورة', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : البحث عن القوي', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : بداية مليئة بالإضطرابات', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : داخل معدة الخنفساء', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : افخاخ مضحكة و كيفية النجاة منها', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : الأخبار لا تنام أبدا', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : النينجا في مواجهة الحمم البركانية', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : كارثة أفعوانية', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : الهزيمة', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : التاريخ القديم', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : لا تثق أبدا في البشر', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : تحت الحصار', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : نادي المستكشفين', pageUrl: 'ep13.html' },
    { title: 'الحلقة 14 : المملكة المهجورة', pageUrl: 'ep14.html' },
    { title: 'الحلقة 15 : وداع قاسي', pageUrl: 'ep15.html' },
    { title: 'الحلقة 16 : المملكة الغامضة', pageUrl: 'ep16.html' },
    { title: 'الحلقة 17 : صانع النار', pageUrl: 'ep17.html' },
    { title: 'الحلقة 18 : حليف غير متوقع', pageUrl: 'ep18.html' },
    { title: 'الحلقة 19 : الأسوا على الإطلاق', pageUrl: 'ep19.html' },
    { title: 'الحلقة 20 : الرسالة', pageUrl: 'ep20.html' },
    { title: 'الحلقة 21 : شجرة المسافر', pageUrl: 'ep21.html' },
    { title: 'الحلقة 22 : رثاء كراغ', pageUrl: 'ep22.html' },
    { title: 'الحلقة 23 : سر الذئب', pageUrl: 'ep23.html' },
    { title: 'الحلقة 24 : آخر المتحولين', pageUrl: 'ep24.html' },
    { title: 'الحلقة 25 : عدوي، صديقي', pageUrl: 'ep25.html' },
    { title: 'الحلقة 26 : بروتوكول الكاي جوو', pageUrl: 'ep26.html' },
    { title: 'الحلقة 27 : فساد', pageUrl: 'ep27.html' },
    { title: 'الحلقة 28 : امل ضعيف', pageUrl: 'ep28.html' },
    { title: 'الحلقة 29 : النهاية تقترب', pageUrl: 'ep29.html' },
    { title: 'الحلقة 30 : نهاية المغامرة', pageUrl: 'ep30.html' },
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

