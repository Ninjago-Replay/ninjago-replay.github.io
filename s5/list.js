// Sample data for demonstration
const items = [
    { 
      title: "الحلقة الاولى",
      description: "رياح التغيير",
      imageUrl: "ep1.png",
      buttonUrl: "ep1.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثانية",
      description: "قصة شبح",
      imageUrl: "ep2.png",
      buttonUrl: "ep2.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثالثة",
      description: "الستيكس و الحجارة",
      imageUrl: "ep3.png",
      buttonUrl: "ep3.html",
      buttonText: "شاهد الان"
    },
    { 
        title: "الحلقة الرابعة",
        description: "معبد على تل الاشباح",
        imageUrl: "ep4.png",
        buttonUrl: "ep4.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الخامسة",
        description: "المفاجاة",
        imageUrl: "ep5.png",
        buttonUrl: "ep5.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السادسة",
        description: "مملكة السحوب",
        imageUrl: "ep6.png",
        buttonUrl: "ep6.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السابعة",
        description: "الممر الملتوي",
        imageUrl: "ep7.png",
        buttonUrl: "ep7.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثامنة",
        description: "خطر جسيم",
        imageUrl: "ep8.png",
        buttonUrl: "ep8.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة التاسعة",
        description: "لعنة العالم الموسم الأول",
        imageUrl: "ep9.png",
        buttonUrl: "ep9.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة العاشرة",
        description: "لعنة العالم الموسم الثاني",
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
  