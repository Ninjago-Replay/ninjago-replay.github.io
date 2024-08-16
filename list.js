// Sample data for demonstration
const items = [
    { 
      title: "الموسم التجريبي",
      description: "طريق النينجا",
      imageUrl: "pilot.png",
      buttonUrl: "s0/index.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الموسم الاول",
      description: "عودة الثعابين",
      imageUrl: "s1.png",
      buttonUrl: "s1/index.html",
      buttonText: "شاهد الان"
    },
    { 
      title: "الموسم الثاني",
      description: "تراث النينجا الأخضر",
      imageUrl: "s2.png",
      buttonUrl: "s2/index.html",
      buttonText: "شاهد الان"
    },
    { 
        title: "الموسم الثالث",
        description: "إعادة التشغيل",
        imageUrl: "s3.png",
        buttonUrl: "s3/index.html",
        buttonText: "شاهد الان"
      },
    { 
        title: "الموسم الرابع",
        description: "بطولة العناصر",
        imageUrl: "s4.png",
        buttonUrl: "s4/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم الخامس",
        description: "غزو الاشباح",
        imageUrl: "s5.png",
        buttonUrl: "s5/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم السادس",
        description: "محاربة القراصنة",
        imageUrl: "s6.png",
        buttonUrl: "s6/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "حلقة خاصة",
        description: "يوم الرحيل",
        imageUrl: "dod.png",
        buttonUrl: "Day of the Departed/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم السابع",
        description: "عقارب الساعة",
        imageUrl: "s7.png",
        buttonUrl: "s7/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم الثامن",
        description: "أبناء جرمدون",
        imageUrl: "s8.png",
        buttonUrl: "s8/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم التاسع",
        description: "المطاردة",
        imageUrl: "s9.png",
        buttonUrl: "s9/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم العاشر",
        description: "مسيرة أوني",
        imageUrl: "s10.png",
        buttonUrl: "s10/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم الحادية عشرة",
        description: "أسرار سبينجيتسو المحرمة",
        imageUrl: "s11.png",
        buttonUrl: "s11/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم الثانية عشرة",
        description: " الإمبراطورية برايم",
        imageUrl: "s12.png",
        buttonUrl: "s12/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم الثالثة عشرة",
        description: "سيد الجبل",
        imageUrl: "s13.png",
        buttonUrl: "s13/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم",
        description: "الجزيرة",
        imageUrl: "island.png",
        buttonUrl: "Island/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم الرابعة عشرة",
        description: "سيدة البحر",
        imageUrl: "s14.png",
        buttonUrl: "s14/index.html",
        buttonText: "شاهد الان"
      },
      { 
        title: "الموسم الخامسة عشرة",
        description: "البلور",
        imageUrl: "s15.png",
        buttonUrl: "s15/index.html",
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
        const buttonElement = document.createElement("a");
        buttonElement.href = item.buttonUrl;
        buttonElement.textContent = item.buttonText;
        itemElement.appendChild(buttonElement);
      }
    }
  }
  
  // Render the repeater component with sample data
  renderRepeater(items);
