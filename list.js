// Sample data for demonstration
const items = [
    { 
      title: "الموسم التجريبي",
      description: "طريق النينجا",
      imageUrl: "pilot.png",
      buttonUrl: "s0/index.html",
      buttonText: "شاهد الان",
      type: "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم التجريبي",
      description: "أفلام مصغرة للموسم التجريبي",
      imageUrl: "pilot.png",
      buttonUrl: "Mini/Pilot/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الاول",
      description: "عودة الثعابين",
      imageUrl: "s1.png",
      buttonUrl: "s1/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الثاني",
      description: "تراث النينجا الأخضر",
      imageUrl: "s2.png",
      buttonUrl: "s2/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الثالث",
      description: "إعادة التشغيل",
      imageUrl: "s3.png",
      buttonUrl: "s3/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الرابع",
      description: "بطولة العناصر",
      imageUrl: "s4.png",
      buttonUrl: "s4/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الرابع",
      description: "تشين",
      imageUrl: "s4.png",
      buttonUrl: "Mini/Chen/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الخامس",
      description: "غزو الاشباح",
      imageUrl: "s5.png",
      buttonUrl: "s5/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم السادس",
      description: "محاربة القراصنة",
      imageUrl: "s6.png",
      buttonUrl: "s6/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم السادس",
      description: "الروايات الطويلة",
      imageUrl: "s6.png",
      buttonUrl: "Mini/Tall Tales/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : اسياد السبينجيتسو"
    }, 
    { 
      title: "حلقة خاصة",
      description: "يوم الرحيل",
      imageUrl: "dod.png",
      buttonUrl: "Day of the Departed/index.html",
      buttonText: "شاهد الان",
      type : "حلقة اساسية",
      part: "نينجاغو : اسياد السبينجيتسو"
    },  
    { 
      title: "الموسم السابع",
      description: "عقارب الساعة",
      imageUrl: "s7.png",
      buttonUrl: "s7/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    }, 
    { 
      title: "الموسم السابع",
      description: "العملية: المعادن الثقيلة",
      imageUrl: "s7.png",
      buttonUrl: "Mini/Operation Heavy Metal/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم السابع",
      description: "عودة الساموراي اكس",
      imageUrl: "s7.png",
      buttonUrl: "Mini/Samurai X Rising/index.html",
      buttonText: "شاهد الان",
      type: "حلقة اضافية",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الاضافي",
      description: "شاي وو",
      imageUrl: "Mini/Wu Tea.png",
      buttonUrl: "Mini/Wu's Teas/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو حلاقات اضافية"
    }, 
    { 
      title: "حلقة اضافية",
      description: "عيد ميلاد سعيد",
      imageUrl: "Mini/Happy Birthday.png",
      buttonUrl: "Mini/Happy Birthday to You/index.html",
      buttonText: "شاهد الان",
      type: "حلقة اضافية",
      part: "نينجاغو حلاقات اضافية"
    },
    { 
      title: "الموسم الاضافي",
      description: "فك الشفرة",
      imageUrl: "Mini/Decoded.png",
      buttonUrl: "Mini/Decoded/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الثامن",
      description: "أبناء جرمدون",
      imageUrl: "s8.png",
      buttonUrl: "s8/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم التاسع",
      description: "المطاردة",
      imageUrl: "s9.png",
      buttonUrl: "s9/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم التاسع",
      description: "حكايات من دير سبينجيتسو",
      imageUrl: "Mini/Tales From The Monastery.png",
      buttonUrl: "Mini/Tales from the Monastery of Spinjitzu/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم العاشر",
      description: "مسيرة أوني",
      imageUrl: "s10.png",
      buttonUrl: "s10/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : اسياد السبينجيتسو"
    },
    { 
      title: "الموسم الحادية عشرة",
      description: "أسرار سبينجيتسو المحرمة",
      imageUrl: "s11.png",
      buttonUrl: "s11/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو"
    },
    { 
      title: "الموسم الثانية عشرة",
      description: " الإمبراطورية برايم",
      imageUrl: "s12.png",
      buttonUrl: "s12/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو"
    },
    { 
      title: "الموسم الثانية عشرة",
      description: "أفلام قصيرة عن الإمبراطورية برايم",
      imageUrl: "s12.png",
      buttonUrl: "Mini/Prime Empire/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو"
    },
    { 
      title: "الموسم الاضافي",
      description: "نينجاجو: إعادة تصور",
      imageUrl: "Mini/Ninjago Reimagined Legacy.png",
      buttonUrl: "Mini/Ninjago Reimagined/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو حلاقات اضافية"
    },
    { 
      title: "الموسم الاضافي",
      description: "فيديوهات النينجا",
      imageUrl: "Mini/Ninjago Vlogs.png",
      buttonUrl: "Mini/Ninja Vlogs/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو حلاقات اضافية"
    },
    { 
      title: "الموسم الثالثة عشرة",
      description: "سيد الجبل",
      imageUrl: "s13.png",
      buttonUrl: "s13/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو"
    },
    { 
      title: "الموسم ما قبل الرابعة عشرة",
      description: "الجزيرة",
      imageUrl: "island.png",
      buttonUrl: "island/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو"
    },
    { 
      title: "الموسم ما قبل الرابعة عشرة",
      description: "فضائل السبينجيتسو",
      imageUrl: "island.png",
      buttonUrl: "Mini/The Virtues of Spinjitzu/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو"
    },    
    { 
      title: "الموسم الرابعة عشرة",
      description: "سيدة البحر",
      imageUrl: "s14.png",
      buttonUrl: "s14/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو"
    },
    { 
      title: "الموسم الخامسة عشرة",
      description: "البلور",
      imageUrl: "s15.png",
      buttonUrl: "s15/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو"
    },
    { 
      title: "الموسم الاضافي",
      description: "هل ستدخل عالم الأحلام؟",
      imageUrl: "Mini/Will you enter the Dream World.png",
      buttonUrl: "Mini/Will you enter the Dream World/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو حلاقات اضافية"
    },
    { 
      title: "حلقة اضافية",
      description: "فريق الأحلام",
      imageUrl: "Mini/Dream Team.png",
      buttonUrl: "Mini/Dream Team/index.html",
      buttonText: "شاهد الان",
      type: "حلقة اضافية",
      part: "نينجاغو حلاقات اضافية"
    },
    { 
      title: "الموسم الاول",
      description: "نهوض التنانين",
      imageUrl: "dr.png",
      buttonUrl: "Dragon Rising S1/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : نهوض التنانين"
    },
    { 
      title: "الموسم الاول",
      description: "العناصر الميكانيكية",
      imageUrl: "dr.png",
      buttonUrl: "Mini/The Elemental Mechs/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : نهوض التنانين"
    },
    { 
      title: "الموسم الثاني",
      description: "طقوس القمر الدموي",
      imageUrl: "dr2.png",
      buttonUrl: "Dragon Rising S2/index.html",
      buttonText: "شاهد الان",
      type : "موسم رائيسي",
      part: "نينجاغو : نهوض التنانين"
    },
    { 
      title: "الموسم الاضافي",
      description: "العودة إلى البرية",
      imageUrl: "Mini/Return to the Wyldness.png",
      buttonUrl: "Mini/Return to the Wyldness/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : نهوض التنانين"
    },
    { 
      title: "الموسم الاضافي",
      description: "قصص وايلدفاير",
      imageUrl: "Mini/Wyldfyre Stories.png",
      buttonUrl: "Mini/Wyldfyre Stories/index.html",
      buttonText: "شاهد الان",
      type: "أفلام قصيرة",
      part: "نينجاغو : نهوض التنانين"
    },
    { 
      title: "الموسم الاضافي",
      description: "ملاحظات صوتية لـ وايلدفاير",
      imageUrl: "Mini/Wyldfyre Voice Notes.png",
      buttonUrl: "Mini/Wyldfyre Voice Notes/index.html",
      buttonText: "شاهد الان",
      type: "ملاحظات صوتية",
      part: "نينجاغو : نهوض التنانين"
    },
  ];
  let searchTerm = ""; // Global variable to hold the search term

  function handleSearchChange() {
    searchTerm = document.getElementById("searchInput").value.toLowerCase();
    renderRepeater(items, {
      type: document.getElementById("filterType").value,
      part: document.getElementById("filterPart").value
    });
  }

  function renderRepeater(data, filters = {}) {
    const repeaterElement = document.getElementById("repeater");
    repeaterElement.innerHTML = ""; // Clear previous content

    const bannerImageMap = {
      "نينجاغو : اسياد السبينجيتسو": "Media/Photo/Website/Ninjago Master of Spinjitzu.png",
      "نينجاغو": "Media/Photo/Website/Ninjago.png",
      "نينجاغو : نهوض التنانين": "Media/Photo/Website/Ninjago Dragon Rising.png",
      "فيلم": "Media/Photo/Website/Ninjago Movie.png",
      "نينجاغو حلاقات اضافية": "Media/Photo/Website/Ninjago Mini-Movies.png",
      "all": "ninjago.png"
    };

    const parts = {};
    const specialParts = {
      "نينجاغو حلاقات اضافية": [],
      "فيلم": [],
    };

    data.forEach(item => {
      const matchesType = !filters.type || item.type === filters.type;
      const matchesPart = !filters.part || filters.part === "all" || item.part === filters.part;
      const matchesSearch = searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm) ||
        item.type.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm);

        if (matchesType && matchesPart && matchesSearch) {
          if (filters.part === "all") {
            parts["All"] = parts["All"] || [];
            parts["All"].push(item);
          } else if (specialParts[item.part] !== undefined) {
            specialParts[item.part].push(item);
          } else {
            parts[item.part] = parts[item.part] || [];
            parts[item.part].push(item);
          }
        }
      });

      // Render general parts
      if (filters.part === "all") {
        renderPart(repeaterElement, parts["All"], "جميع الأجزاء", "red", bannerImageMap["all"]);
      } else {
        Object.keys(parts).forEach(partTitle => {
          renderPart(repeaterElement, parts[partTitle], partTitle, getPartColor(partTitle), bannerImageMap[partTitle]);
        });
      }

      // Render special parts last
        Object.keys(specialParts).forEach(partTitle => {
          if (specialParts[partTitle].length > 0) {
            renderPart(repeaterElement, specialParts[partTitle], partTitle, getPartColor(partTitle), bannerImageMap[partTitle]);
          }
        });
      }

      function renderPart(container, data, title, color, bannerImage) {
        const bannerElement = document.createElement("div");
        bannerElement.classList.add("banner");
        bannerElement.style.backgroundColor = color;

        const imageElement = document.createElement("img");
        imageElement.src = bannerImage;
        imageElement.style.display = bannerImage ? "block" : "none";
        bannerElement.appendChild(imageElement);

        const titleElement = document.createElement("h2");
        titleElement.textContent = title;
        titleElement.style.display = bannerImage ? "none" : "block";
        bannerElement.appendChild(titleElement);

        container.appendChild(bannerElement);

        const rowElement = document.createElement("div");
        rowElement.classList.add("row");
        container.appendChild(rowElement);

        for (let i = 0; i < data.length; i += 3) {
          const rowItemElement = document.createElement("div");
          rowItemElement.classList.add("row");
          rowElement.appendChild(rowItemElement);

          for (let j = i; j < i + 3 && j < data.length; j++) {
            const item = data[j];

          const itemElement = document.createElement("div");
          itemElement.classList.add("item");
          rowItemElement.appendChild(itemElement);

          const itemImageElement = document.createElement("img");
          itemImageElement.src = item.imageUrl;
          itemElement.appendChild(itemImageElement);

          const itemTitleElement = document.createElement("h2");
          itemTitleElement.textContent = item.title;
          itemElement.appendChild(itemTitleElement);

          const descriptionElement = document.createElement("p");
          descriptionElement.textContent = item.description;
          itemElement.appendChild(descriptionElement);

          const typeElement = document.createElement("p");
          typeElement.textContent = ` ${item.type}`;
          typeElement.classList.add("type");
          itemElement.appendChild(typeElement);

          const buttonElement = document.createElement("button");
          buttonElement.textContent = "شاهد الان";
          buttonElement.onclick = () => window.location.href = item.buttonUrl;
          itemElement.appendChild(buttonElement);
          }
        }
      }

      function getPartColor(partTitle) {
        switch (partTitle) {
          case "نينجاغو : اسياد السبينجيتسو":
            return "red";
        case "نينجاغو":
          return "blue";
        case "نينجاغو : نهوض التنانين":
          return "green";
        case "فيلم":
          return "black";
        case "نينجاغو حلاقات اضافية":
          return "purple";  
        default:
          return "red";
        }
      }

        function populateFilters(data) {
            const filterPartElement = document.getElementById("filterPart");
            const filterTypeElement = document.getElementById("filterType");

            const parts = [...new Set(data.map(item => item.part))];
            filterPartElement.innerHTML = '<option value="">جميع الأجزاء</option>';
            filterPartElement.innerHTML += '<option value="all">دمج الكل</option>';

            parts.forEach(part => {
                if (part !== "فيلم" && part !== "نينجاغو حلاقات اضافية") {
                    filterPartElement.innerHTML += `<option value="${part}">${part}</option>`;
                }
            });

            filterPartElement.innerHTML += '<option value="نينجاغو حلاقات اضافية">نينجاغو حلاقات اضافية</option>';

            const types = [...new Set(data.map(item => item.type))];
            filterTypeElement.innerHTML = '<option value="">جميع الأنواع</option>';
            types.forEach(type => {
                filterTypeElement.innerHTML += `<option value="${type}">${type}</option>`;
            });
        }

function handleFilterChange() {
  renderRepeater(items, {
    type: document.getElementById("filterType").value,
    part: document.getElementById("filterPart").value
  });
}

document.getElementById("filterType").addEventListener("change", handleFilterChange);
document.getElementById("filterPart").addEventListener("change", handleFilterChange);
populateFilters(items);
renderRepeater(items);