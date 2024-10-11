// Define an array of episodes with title and photo URL
const episodes = [
    { title: 'الحلقة 1 : القمر الدامي', pageUrl: 'ep1.html' },
    { title: 'الحلقة 2 : احلام مدمرة', pageUrl: 'ep2.html' },
    { title: 'الحلقة 3 : بعد كهف الوهم', pageUrl: 'ep3.html' },
    { title: 'الحلقة 4 : قوة من الشمال', pageUrl: 'ep4.html' },
    { title: 'الحلقة 5 : التعويذة عند الشلال', pageUrl: 'ep5.html' },
    { title: 'الحلقة 6 : إلى أرض الالغاز', pageUrl: 'ep6.html' },
    { title: 'الحلقة 7 : هاربون من الجنون', pageUrl: 'ep7.html' },
    { title: 'الحلقة 8 : اسرار الوايلدنس', pageUrl: 'ep8.html' },
    { title: 'الحلقة 9 : غابة الأرواح', pageUrl: 'ep9.html' },
    { title: 'الحلقة 10 : صعود النينجا', pageUrl: 'ep10.html' },
    { title: 'الحلقة 11 : شكل الحركة', pageUrl: 'ep11.html' },
    { title: 'الحلقة 12 : داخل مدينة المعابد', pageUrl: 'ep12.html' },
    { title: 'الحلقة 13 : إنهم يجتمعون للاحتفال بالعيد', pageUrl: 'ep13.html' },
    { title: 'الحلقة 14 : داخل المتاهة', pageUrl: 'ep14.html' },
    { title: 'الحلقة 15 : متحدون نسقط', pageUrl: 'ep15.html' },
    { title: 'الحلقة 16 : الحقيقة والكذب', pageUrl: 'ep16.html' },
    { title: 'الحلقة 17 : سيف الحطام', pageUrl: 'ep17.html' },
    { title: 'الحلقة 18 : الأدلة والمشتبه بهم', pageUrl: 'ep18.html' },
    { title: 'الحلقة 19 : المباراة النهائية', pageUrl: 'ep19.html' },
    { title: 'الحلقة 20 : عناصر الخيانة', pageUrl: 'ep20.html' },
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

