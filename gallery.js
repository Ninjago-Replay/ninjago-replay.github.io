const images = [
    { src: "Info/Characters/Lloyd/dr2.png", title: "لويد" },
    { src: "Info/Characters/Wu/dr2.png", title: "المعلم وو" },
    { src: "Info/Characters/Kai/dr2.png", title: "كاي" },
    { src: "Info/Characters/Jay/dr2.png", title: "جاي" },
    { src: "Info/Characters/Zane/dr2.png", title: "زين" },
    { src: "Info/Characters/Cole/dr2.png", title: "كول" },
    { src: "Info/Characters/Nya/dr2.png", title: "نيا" },
    { src: "Info/Characters/P.I.X.E.L/SamX.png", title: "بيكسل" },
    { src: "Info/Characters/Arin/dr2.png", title: "ارين" },
    { src: "Info/Characters/Sora/dr2.png", title: "سورا" },
    { src: "Info/Characters/Wyldfyre/dr2.png", title: "وايلدفاير" }
];

let startIndex = 0;

function updateGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const imgIndex = (startIndex + i) % images.length;
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = images[imgIndex].src;
        img.alt = images[imgIndex].title;

        const title = document.createElement('div');
        title.classList.add('gallery-title');
        title.innerText = images[imgIndex].title;

        galleryItem.appendChild(img);
        galleryItem.appendChild(title);
        gallery.appendChild(galleryItem);
    }
}

function prevImage() {
    startIndex = (startIndex - 1 + images.length) % images.length;
    updateGallery();
}

function nextImage() {
    startIndex = (startIndex + 1) % images.length;
    updateGallery();
}

// Call the function to create the navigation bar on page load
window.addEventListener('load', function() {
    updateGallery();
});
