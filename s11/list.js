// Sample data for demonstration
const items = [
    { 
      title: "الحلقة الاولى",
      description: "قدرات مهدورة",
      imageUrl: "ep1.png",
      buttonUrl: "ep1.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثانية",
      description: "البحث عن القوي",
      imageUrl: "ep2.png",
      buttonUrl: "ep2.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الحلقة الثالثة",
      description: "بداية مليئة بالإضطرابات",
      imageUrl: "ep3.png",
      buttonUrl: "ep3.html",
      buttonText: "شاهد الان"
    },
    { 
        title: "الحلقة الرابعة",
        description: "داخل معدة الخنفساء",
        imageUrl: "ep4.png",
        buttonUrl: "ep4.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الخامسة",
        description: "افخاخ مضحكة و كيفية النجاة منها",
        imageUrl: "ep5.png",
        buttonUrl: "ep5.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السادسة",
        description: "الأخبار لا تنام أبدا",
        imageUrl: "ep6.png",
        buttonUrl: "ep6.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السابعة",
        description: "النينجا في مواجهة الحمم البركانية",
        imageUrl: "ep7.png",
        buttonUrl: "ep7.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثامنة",
        description: "كارثة أفعوانية",
        imageUrl: "ep8.png",
        buttonUrl: "ep8.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة التاسعة",
        description: "الهزيمة",
        imageUrl: "ep9.png",
        buttonUrl: "ep9.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة العاشرة",
        description: "التاريخ القديم",
        imageUrl: "ep10.png",
        buttonUrl: "ep10.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الحادية عشرة",
        description: "لا تثق أبدا في البشر",
        imageUrl: "ep11.png",
        buttonUrl: "ep11.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثانية عشرة",
        description: "تحت الحصار",
        imageUrl: "ep12.png",
        buttonUrl: "ep12.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الثالثة عشرة",
        description: "نادي المستكشفين",
        imageUrl: "ep13.png",
        buttonUrl: "ep13.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الرابعة عشرة",
        description: "المملكة المهجورة",
        imageUrl: "ep14.png",
        buttonUrl: "ep14.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة الخامسة عشرة",
        description: "وداع قاسي",
        imageUrl: "ep15.png",
        buttonUrl: "ep15.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الحلقة السادسة عشر",
        description: "المملكة الغامضة",
        imageUrl: "ep16.png",
        buttonUrl: "ep16.html",
        buttonText: "شاهد الان"
      },
      { 
          title: "الحلقة السابعة عشر",
          description: "صانع النار",
          imageUrl: "ep17.png",
          buttonUrl: "ep17.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الثامنة عشرة",
          description: "حليف غير متوقع",
          imageUrl: "ep18.png",
          buttonUrl: "ep18.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة التاسعة عشرة",
          description: "الأسوا على الإطلاق",
          imageUrl: "ep19.png",
          buttonUrl: "ep19.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة العشرين",
          description: "الرسالة",
          imageUrl: "ep20.png",
          buttonUrl: "ep20.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الحادية والعشرون",
          description: "شجرة المسافر",
          imageUrl: "ep21.png",
          buttonUrl: "ep21.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الثانية والعشرون",
          description: "رثاء كراغ",
          imageUrl: "ep22.png",
          buttonUrl: "ep22.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الثالثة والعشرون",
          description: "سر الذئب",
          imageUrl: "ep23.png",
          buttonUrl: "ep23.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الرابعة والعشرون",
          description: "آخر المتحولين",
          imageUrl: "ep24.png",
          buttonUrl: "ep24.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الخامسة والعشرون",
          description: "عدوي، صديقي",
          imageUrl: "ep25.png",
          buttonUrl: "ep25.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة السادسة والعشرون",
          description: "بروتوكول الكاي جوو",
          imageUrl: "ep26.png",
          buttonUrl: "ep26.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة السابعة والعشرون",
          description: "فساد",
          imageUrl: "ep27.png",
          buttonUrl: "ep27.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الثامنة والعشرون",
          description: "امل ضعيف",
          imageUrl: "ep28.png",
          buttonUrl: "ep28.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة التاسعة والعشرون",
          description: "النهاية تقترب",
          imageUrl: "ep29.png",
          buttonUrl: "ep29.html",
          buttonText: "شاهد الان"
        },
        { 
          title: "الحلقة الثلاثون",
          description: "نهاية المغامرة",
          imageUrl: "ep30.png",
          buttonUrl: "ep30.html",
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
  