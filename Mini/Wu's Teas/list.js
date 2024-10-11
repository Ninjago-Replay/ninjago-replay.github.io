// Sample data for demonstration
const items = [
    { 
      title: "الحلقة الاولى",
      description: "الشاي السري",
      imageUrl: "ep.png",
      buttonUrl: "ep1.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثانية",
      description: "علامة سبيني",
      imageUrl: "ep.png",
      buttonUrl: "ep2.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثالثة",
      description: "ليلة الموسيقى الجزء الأول",
      imageUrl: "ep.png",
      buttonUrl: "ep3.html",
      buttonText: "شاهد الان"
    },
    { 
        title: "الحلقة الرابعة",
        description: "ليلة الموسيقى الجزء الثاني",
        imageUrl: "ep.png",
        buttonUrl: "ep4.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الخامسة",
        description: "الأسماء",
        imageUrl: "ep.png",
        buttonUrl: "ep5.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السادسة",
        description: "الرجال مضحك",
        imageUrl: "ep.png",
        buttonUrl: "ep6.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السابعة",
        description: "يوم التفتيش",
        imageUrl: "ep.png",
        buttonUrl: "ep7.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثامنة",
        description: "باندا-مونيوم",
        imageUrl: "ep.png",
        buttonUrl: "ep8.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة التاسعة",
        description: "جهاز التحكم عن بعد زين",
        imageUrl: "ep.png",
        buttonUrl: "ep9.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة العاشرة",
        description: "غلاية شاي طروادة",
        imageUrl: "ep.png",
        buttonUrl: "ep10.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الحادية عشرة",
        description: "الغبار الغامض",
        imageUrl: "ep.png",
        buttonUrl: "ep11.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثانية عشرة",
        description: "كاي ذو الرأس الهادئ",
        imageUrl: "ep.png",
        buttonUrl: "ep12.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثالثة عشرة",
        description: "زين المتخفي",
        imageUrl: "ep.png",
        buttonUrl: "ep13.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الرابعة عشرة",
        description: "لويد متأخر",
        imageUrl: "ep.png",
        buttonUrl: "ep14.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الخامسة عشرة",
        description: "مراقبة شديدة الانحدار",
        imageUrl: "ep.png",
        buttonUrl: "ep15.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السادسة عشر",
        description: "رمي العملة المعدنية",
        imageUrl: "ep.png",
        buttonUrl: "ep16.html",
        buttonText: "شاهد الان"
      },
      { 
          title: "الحلقة السابعة عشر",
          description: "جدارية نيا",
          imageUrl: "ep.png",
          buttonUrl: "ep17.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الثامنة عشرة",
          description: "لعبة زين للشطرنج",
          imageUrl: "ep.png",
          buttonUrl: "ep18.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة التاسعة عشرة",
          description: "اختبار التذوق",
          imageUrl: "ep.png",
          buttonUrl: "ep19.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة العشرين",
          description: "صداقة جميلة",
          imageUrl: "ep.png",
          buttonUrl: "ep20.html",
          buttonText: "شاهد الان"
        },
  ];
  
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
        rowElement.appendChild(itemElement); 
  
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
  