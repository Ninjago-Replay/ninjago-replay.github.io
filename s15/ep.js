// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : عزاء للبحر', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : نداء الوطن', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : شكل نيا', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : مشكلة العمدة', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : العدو العام 1، 2، 3، 4، 5', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : وعد مؤلم', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : مدينة نينجاجو ضد النينجا', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : سجن كريبتاريم بلوز', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : كلب الصيد ماكبراغ', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : فائدة الحزن', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : الشرير الخامس', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : مجلس الملك الكريستال', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : ظل الشرير', pageUrl: 'ep13.html' },
    { title: 'الحلقة 14 : نموذج العنكبوت', pageUrl: 'ep14.html' },
    { title: 'الحلقة 15 : سقوط الديار', pageUrl: 'ep15.html' },
    { title: 'الحلقة 16 : الظلام الباطني', pageUrl: 'ep16.html' },
    { title: 'الحلقة 17 : قدوم الملك', pageUrl: 'ep17.html' },
    { title: 'الحلقة 18 : العودة إلى عين برايمفال', pageUrl: 'ep18.html' },
    { title: 'الحلقة 19 : كارثة بلورية', pageUrl: 'ep19.html' },
    { title: 'الحلقة 20 : كريستوفين', pageUrl: 'ep20.html' },
    { title: 'الحلقة 21 : درس في غضب', pageUrl: 'ep21.html' },
    { title: 'الحلقة 22 : شجاع ولكن غبي', pageUrl: 'ep22.html' },
    { title: 'الحلقة 23 : وقت الإستسلام', pageUrl: 'ep23.html' },
    { title: 'الحلقة 24 : عودة امبراطورية الجليد', pageUrl: 'ep24.html' },
    { title: 'الحلقة 25 : لم الشمل', pageUrl: 'ep25.html' },
    { title: 'الحلقة 26 : متوافق', pageUrl: 'ep26.html' },
    { title: 'الحلقة 27 : نداءات الإستغاثة', pageUrl: 'ep27.html' },
    { title: 'الحلقة 28 : مسألة ثقة', pageUrl: 'ep28.html' },
    { title: 'الحلقة 29 : صورة التنين', pageUrl: 'ep29.html' },
    { title: 'الحلقة 30 : جذور', pageUrl: 'ep30.html' },
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

