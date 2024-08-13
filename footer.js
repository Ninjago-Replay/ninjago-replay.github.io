// footer.js

// Define footer content
var footerContent = {
    copyright: "© 2024 Ninjago Replay. كل الحقوق محفوظة",
    version: "2024.8.13"
};

// Function to create and append the footer
function createFooter() {
    var footer = document.createElement("footer");
    footer.style.display = "flex";
    footer.style.justifyContent = "space-between";
    footer.style.alignItems = "center";
    
    var paragraph1 = document.createElement("p");
    paragraph1.style.textAlign = "center";
    paragraph1.textContent = footerContent.copyright;
    
    var paragraph2 = document.createElement("p");
    paragraph2.style.textAlign = "right";
    paragraph2.textContent = footerContent.version;

    footer.appendChild(paragraph1);
    footer.appendChild(paragraph2);
    
    document.body.appendChild(footer);
}

// Call the function to create the footer when the DOM is ready
document.addEventListener("DOMContentLoaded", createFooter);
