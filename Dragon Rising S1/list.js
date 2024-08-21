// Sample data for demonstration
const items = [
    { 
      title: "الحلقة الاولى",
      description: "الإندماج : الموسم الأول",
      imageUrl: "ep1.png",
      buttonUrl: "ep1.html",
      buttonText: "شاهد الان",
      part: "الجزء الاول"
    },
    { 
      title: "الحلقة الثانية",
      description: "الإندماج : الموسم الثاني",
      imageUrl: "ep2.png",
      buttonUrl: "ep2.html",
      buttonText: "شاهد الان",
      part: "الجزء الاول"
    },
    { 
      title: "الحلقة الثالثة",
      description: "كرنفال مفترق الطرق",
      imageUrl: "ep3.png",
      buttonUrl: "ep3.html",
      buttonText: "شاهد الان",
      part: "الجزء الاول"
    },
    { 
        title: "الحلقة الرابعة",
        description: "ما وراء الجنون",
        imageUrl: "ep4.png",
        buttonUrl: "ep4.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة الخامسة",
        description: "كتاب القدر",
        imageUrl: "ep5.png",
        buttonUrl: "ep5.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة السادسة",
        description: "العودة إلى إمبريام",
        imageUrl: "ep6.png",
        buttonUrl: "ep6.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة السابعة",
        description: "وحوش بلهاء",
        imageUrl: "ep7.png",
        buttonUrl: "ep7.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة الثامنة",
        description: "سأكون الخطر",
        imageUrl: "ep8.png",
        buttonUrl: "ep8.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة التاسعة",
        description: "الهدوء الداخلي",
        imageUrl: "ep9.png",
        buttonUrl: "ep9.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة العاشرة",
        description: "معركة المعبد الثاني",
        imageUrl: "ep10.png",
        buttonUrl: "ep10.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة الحادية عشرة",
        description: "معبد قلوب التنين",
        imageUrl: "ep11.png",
        buttonUrl: "ep11.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الثانية عشرة",
        description: "عصابات البحر",
        imageUrl: "ep12.png",
        buttonUrl: "ep12.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الثالثة عشرة",
        description: "غير مناسب على الإطلاق",
        imageUrl: "ep13.png",
        buttonUrl: "ep13.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الرابعة عشرة",
        description: "الجن الأخير",
        imageUrl: "ep14.png",
        buttonUrl: "ep14.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الخامسة عشرة",
        description: "يسمونه الموت",
        imageUrl: "ep15.png",
        buttonUrl: "ep15.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة السادسة عشر",
        description: "أرض الأشياء المفقودة",
        imageUrl: "ep16.png",
        buttonUrl: "ep16.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
          title: "الحلقة السابعة عشر",
          description: "الإدارة",
          imageUrl: "ep17.png",
          buttonUrl: "ep17.html",
          buttonText: "شاهد الان",
          part: "الجزء الثاني"
        },
        { 
          title: "الحلقة الثامنة عشرة",
          description: "القوة المطلقة",
          imageUrl: "ep18.png",
          buttonUrl: "ep18.html",
          buttonText: "شاهد الان",
          part: "الجزء الثاني"
        },
        { 
          title: "الحلقة التاسعة عشرة",
          description: "نحن جميعا التنين",
          imageUrl: "ep19.png",
          buttonUrl: "ep19.html",
          buttonText: "شاهد الان",
          part: "الجزء الثاني"
        },
        { 
          title: "الحلقة العشرين",
          description: "القوة في الداخل",
          imageUrl: "ep20.png",
          buttonUrl: "ep20.html",
          buttonText: "شاهد الان",
          part: "الجزء الثاني"
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
        case "الجزء الاول":
            return "red";
        case "الجزء الثاني":
            return "blue";
        default:
            return "gray"; // Default color for other parts
    }
}

renderRepeater(items);
  