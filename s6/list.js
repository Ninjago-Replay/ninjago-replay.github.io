// Sample data for demonstration
const items = [
    { 
      title: "الحلقة الاولى",
      description: "سيئ السمعة ",
      imageUrl: "ep1.png",
      buttonUrl: "ep1.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثانية",
      description: "العدو الأول للشعب",
      imageUrl: "ep2.png",
      buttonUrl: "ep2.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثالثة",
      description: "اللغز",
      imageUrl: "ep3.png",
      buttonUrl: "ep3.html",
      buttonText: "شاهد الان"
    },
    { 
        title: "الحلقة الرابعة",
        description: "الكارثة الكبيرة",
        imageUrl: "ep4.png",
        buttonUrl: "ep4.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الخامسة",
        description: "مهمة مستحيلة",
        imageUrl: "ep5.png",
        buttonUrl: "ep5.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السادسة",
        description: "العشاء مع ناداكان",
        imageUrl: "ep6.png",
        buttonUrl: "ep6.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السابعة",
        description: "يوم الأمنيات",
        imageUrl: "ep7.png",
        buttonUrl: "ep7.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثامنة",
        description: "الوسيلة الأخيرة",
        imageUrl: "ep8.png",
        buttonUrl: "ep8.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة التاسعة",
        description: "عملية الهبوط في الوطن",
        imageUrl: "ep9.png",
        buttonUrl: "ep9.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة العاشرة",
        description: "رحلة العودة",
        imageUrl: "ep10.png",
        buttonUrl: "ep10.html",
        buttonText: "شاهد الان"
      },
  ];
  
  // Function to render the repeater component
  function renderRepeater(data) {
    const repeaterElement = document.getElementById("repeater");
    repeaterElement.innerHTML = ""; // Clear previous content
  
    for (let i = 0; i < data.length; i += 3) {
      // Create row container
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      repeaterElement.appendChild(rowElement); // Append row to repeater
  
      // Create three items for the row
      for (let j = i; j < i + 3 && j < data.length; j++) {
        const item = data[j];
  
        // Create item container
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        rowElement.appendChild(itemElement); // Append item to row
  
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
          buttonElement.textContent = "شاهد الان";
          buttonElement.onclick = () => window.location.href = item.buttonUrl;
          itemElement.appendChild(buttonElement);
      }
    }
  }
  
  // Render the repeater component with sample data
  renderRepeater(items);
  