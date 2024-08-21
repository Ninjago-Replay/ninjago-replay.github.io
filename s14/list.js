// Sample data for demonstration
const items = [
    { 
      title: "الحلقة الاولى",
      description: "فيضان كبير",
      imageUrl: "ep1.png",
      buttonUrl: "ep1.html",
      buttonText: "شاهد الان",
      part:"الهاوية"
    },
    { 
      title: "الحلقة الثانية",
      description: "نداء من الاعماق",
      imageUrl: "ep2.png",
      buttonUrl: "ep2.html",
      buttonText: "شاهد الان",
      part:"الهاوية"
    },
    { 
      title: "الحلقة الثالثة",
      description: "غير قابلة للغرق",
      imageUrl: "ep3.png",
      buttonUrl: "ep3.html",
      buttonText: "شاهد الان",
      part:"الهاوية"
    },
    { 
        title: "الحلقة الرابعة",
        description: "خمسة الاف قادمة من الاسفل",
        imageUrl: "ep4.png",
        buttonUrl: "ep4.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة الخامسة",
        description: "غضب كالمار",
        imageUrl: "ep5.png",
        buttonUrl: "ep5.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة السادسة",
        description: "عاش الملك",
        imageUrl: "ep6.png",
        buttonUrl: "ep6.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة السابعة",
        description: "الهروب من مرلوبيا",
        imageUrl: "ep7.png",
        buttonUrl: "ep7.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة الثامنة",
        description: "قصة بنثومار",
        imageUrl: "ep8.png",
        buttonUrl: "ep8.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة التاسعة",
        description: "تميمة العاصفة",
        imageUrl: "ep9.png",
        buttonUrl: "ep9.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة العاشرة",
        description: "لغز ابو الهول",
        imageUrl: "ep10.png",
        buttonUrl: "ep10.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة الحادية عشرة",
        description: "فتاة الجرائد",
        imageUrl: "ep11.png",
        buttonUrl: "ep11.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة الثانية عشرة",
        description: "سيدة البحر",
        imageUrl: "ep12.png",
        buttonUrl: "ep12.html",
        buttonText: "شاهد الان",
        part:"الهاوية"
      },
      { 
        title: "الحلقة الثالثة عشرة",
        description: "الهدوء ما قبل العاصفة",
        imageUrl: "ep13.png",
        buttonUrl: "ep13.html",
        buttonText: "شاهد الان",
        part:"الفيضان"
      },
      { 
        title: "الحلقة الرابعة عشرة",
        description: "هجوم على نينجاجو",
        imageUrl: "ep14.png",
        buttonUrl: "ep14.html",
        buttonText: "شاهد الان",
        part:"الفيضان"
      },
      { 
        title: "الحلقة الخامسة عشرة",
        description: "نياد",
        imageUrl: "ep15.png",
        buttonUrl: "ep15.html",
        buttonText: "شاهد الان",
        part:"الفيضان"
      },
      { 
        title: "الحلقة السادسة عشر",
        description: "حول التيار",
        imageUrl: "ep16.png",
        buttonUrl: "ep16.html",
        buttonText: "شاهد الان",
        part:"الفيضان"
      },
  ];
  
  function renderRepeater(data) {
    const repeaterElement = document.getElementById("repeater");
    repeaterElement.innerHTML = ""; // Clear previous content

    // Group items by part
    const parts = data.reduce((acc, item) => {
        if (!acc[item.part]) {
            acc[item.part] = [];
        }
        acc[item.part].push(item);
        return acc;
    }, {});

    // Render parts
    Object.keys(parts).forEach(partTitle => {
        renderPart(repeaterElement, parts[partTitle], partTitle, getPartColor(partTitle));
    });
}

function renderPart(container, data, title, color) {
    // Create and append banner
    const bannerElement = document.createElement("div");
    bannerElement.classList.add("banner");
    bannerElement.style.backgroundColor = color;
    bannerElement.textContent = title;
    container.appendChild(bannerElement);

    // Create and append row container
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    container.appendChild(rowElement); // Append row to container

    // Create items for the row
    for (let i = 0; i < data.length; i += 3) {
        // Create row container
        const rowItemElement = document.createElement("div");
        rowItemElement.classList.add("row");
        rowElement.appendChild(rowItemElement); // Append row to container

        // Create three items for the row
        for (let j = i; j < i + 3 && j < data.length; j++) {
            const item = data[j];

            // Create item container
            const itemElement = document.createElement("div");
            itemElement.classList.add("item");
            rowItemElement.appendChild(itemElement); // Append item to row

            // Create image element
            const imageElement = document.createElement("img");
            imageElement.src = item.imageUrl;
            itemElement.appendChild(imageElement);

            // Create title element
            const titleElement = document.createElement("h2");
            titleElement.textContent = item.title;
            itemElement.appendChild(titleElement);

            // Create description element
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = item.description;
            itemElement.appendChild(descriptionElement);

            // Create button element
            const buttonElement = document.createElement("button");
            buttonElement.textContent = item.buttonText;
            buttonElement.onclick = () => window.location.href = item.buttonUrl;
            itemElement.appendChild(buttonElement);
        }
    }
}

// Function to get color for each part
function getPartColor(partTitle) {
    switch (partTitle) {
        case "الهاوية":
            return "red";
        case "الفيضان":
            return "blue";
        default:
            return "gray"; // Default color for other parts
    }
}

renderRepeater(items);
  