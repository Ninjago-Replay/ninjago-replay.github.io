// Sample data for demonstration
const items = [
    { 
      title: "الحلقة الاولى",
      description: "القمر الدامي",
      imageUrl: "ep1.png",
      buttonUrl: "ep1.html",
      buttonText: "شاهد الان",
      part: "الجزء الاول"
    },
    { 
      title: "الحلقة الثانية",
      description: "احلام مدمرة",
      imageUrl: "ep2.png",
      buttonUrl: "ep2.html",
      buttonText: "شاهد الان",
      part: "الجزء الاول"
    },
    { 
      title: "الحلقة الثالثة",
      description: "بعد كهف الوهم",
      imageUrl: "ep3.png",
      buttonUrl: "ep3.html",
      buttonText: "شاهد الان",
      part: "الجزء الاول"
    },
    { 
        title: "الحلقة الرابعة",
        description: "قوة من الشمال",
        imageUrl: "ep4.png",
        buttonUrl: "ep4.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة الخامسة",
        description: "التعويذة عند الشلال",
        imageUrl: "ep5.png",
        buttonUrl: "ep5.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة السادسة",
        description: "إلى أرض الالغاز",
        imageUrl: "ep6.png",
        buttonUrl: "ep6.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة السابعة",
        description: "هاربون من الجنون",
        imageUrl: "ep7.png",
        buttonUrl: "ep7.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة الثامنة",
        description: "اسرار الوايلدنس",
        imageUrl: "ep8.png",
        buttonUrl: "ep8.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة التاسعة",
        description: "غابة الأرواح",
        imageUrl: "ep9.png",
        buttonUrl: "ep9.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة العاشرة",
        description: "صعود النينجا",
        imageUrl: "ep10.png",
        buttonUrl: "ep10.html",
        buttonText: "شاهد الان",
        part: "الجزء الاول"
      },
      { 
        title: "الحلقة الحادية عشرة",
        description: "شكل الحركة",
        imageUrl: "ep11.png",
        buttonUrl: "ep11.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الثانية عشرة",
        description: "داخل مدينة المعابد",
        imageUrl: "ep12.png",
        buttonUrl: "ep12.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الثالثة عشرة",
        description: "إنهم يجتمعون للاحتفال بالعيد",
        imageUrl: "ep13.png",
        buttonUrl: "ep13.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الرابعة عشرة",
        description: "داخل المتاهة",
        imageUrl: "ep14.png",
        buttonUrl: "ep14.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة الخامسة عشرة",
        description: "متحدون نسقط",
        imageUrl: "ep15.png",
        buttonUrl: "ep15.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
        title: "الحلقة السادسة عشر",
        description: "الحقيقة والكذب",
        imageUrl: "ep16.png",
        buttonUrl: "ep16.html",
        buttonText: "شاهد الان",
        part: "الجزء الثاني"
      },
      { 
          title: "الحلقة السابعة عشر",
          description: "سيف الحطام",
          imageUrl: "ep17.png",
          buttonUrl: "ep17.html",
          buttonText: "شاهد الان",
          part: "الجزء الثاني"
        },
        { 
          title: "الحلقة الثامنة عشرة",
          description: "الأدلة والمشتبه بهم",
          imageUrl: "ep18.png",
          buttonUrl: "ep18.html",
          buttonText: "شاهد الان",
          part: "الجزء الثاني"
        },
        { 
          title: "الحلقة التاسعة عشرة",
          description: "المباراة النهائية",
          imageUrl: "ep19.png",
          buttonUrl: "ep19.html",
          buttonText: "شاهد الان",
          part: "الجزء الثاني"
        },
        { 
          title: "الحلقة العشرين",
          description: "عناصر الخيانة",
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
  