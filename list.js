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
    title: "الموسم الثالثة عشرة",
    description: "سيد الجبل",
    imageUrl: "s13.png",
    buttonUrl: "s13/index.html",
    buttonText: "شاهد الان",
    type : "موسم رائيسي",
    part: "نينجاغو"
  },
  { 
    title: "الموسم",
    description: "الجزيرة",
    imageUrl: "island.png",
    buttonUrl: "island/index.html",
    buttonText: "شاهد الان",
    type : "موسم رائيسي",
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
    title: "الموسم الاول",
    description: "نهوض التنانين",
    imageUrl: "dr.png",
    buttonUrl: "Dragon Rising S1/index.html",
    buttonText: "شاهد الان",
    type : "موسم رائيسي",
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
];
// Sample data for demonstration (insert your items array here)

// Function to render the repeater component with optional filters
function renderRepeater(data, filters = {}) {
const repeaterElement = document.getElementById("repeater");
repeaterElement.innerHTML = ""; // Clear previous content

// Apply filters
const filteredData = data.filter(item => {
    const matchesType = !filters.type || item.type === filters.type;
    const matchesPart = !filters.part || item.part === filters.part;
    return matchesType && matchesPart;
});

// Group items by part
const parts = filteredData.reduce((acc, item) => {
    if (!acc[item.part]) {
        acc[item.part] = [];
    }
    acc[item.part].push(item);
    return acc;
}, {});

// Separate special parts
const specialParts = {
    "نينجاغو حلاقات اضافية": parts["نينجاغو حلاقات اضافية"] || [],
    "فيلم": parts["فيلم"] || [],
};

// Remove special parts from the main parts object
Object.keys(specialParts).forEach(part => {
    delete parts[part];
});

// Render general parts
Object.keys(parts).forEach(partTitle => {
    renderPart(repeaterElement, parts[partTitle], partTitle, getPartColor(partTitle));
});

// Render special parts last
Object.keys(specialParts).forEach(partTitle => {
    if (specialParts[partTitle].length > 0) {
        renderPart(repeaterElement, specialParts[partTitle], partTitle, getPartColor(partTitle));
    }
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

        // Create type element
        const typeElement = document.createElement("p");
        typeElement.textContent = ` ${item.type}`;
        typeElement.classList.add("type");
        itemElement.appendChild(typeElement);

        // Create button element
        const buttonElement = document.createElement("button");
          buttonElement.textContent = "شاهد الان";
          buttonElement.onclick = () => window.location.href = item.buttonUrl;
          itemElement.appendChild(buttonElement);
    }
}
}

// Function to get color for each part
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
        return "grey";
}
}

// Function to populate filter dropdowns
function populateFilters(data) {
const filterPartElement = document.getElementById("filterPart");
const filterTypeElement = document.getElementById("filterType");

// Create a unique list of parts from the data
const parts = [...new Set(data.map(item => item.part))];

// Clear existing options
filterPartElement.innerHTML = '<option value="">جميع الأجزاء</option>';

// Add options for each part, with special parts listed last
parts.forEach(part => {
    if (part !== "فيلم" && part !== "نينجاغو حلاقات اضافية") {
        filterPartElement.innerHTML += `<option value="${part}">${part}</option>`;
    }
});


// Create a unique list of types from the data
const types = [...new Set(data.map(item => item.type))];

// Clear existing options
filterTypeElement.innerHTML = '<option value="">جميع الأنواع</option>';

// Add options for each type
types.forEach(type => {
    filterTypeElement.innerHTML += `<option value="${type}">${type}</option>`;
});
}

// Function to handle filter change
function handleFilterChange() {
const filterType = document.getElementById("filterType").value;
const filterPart = document.getElementById("filterPart").value;

renderRepeater(items, { type: filterType, part: filterPart });
}

// Attach event listeners
document.getElementById("filterType").addEventListener("change", handleFilterChange);
document.getElementById("filterPart").addEventListener("change", handleFilterChange);

// Populate filters on initial load
populateFilters(items);

// Initial render
renderRepeater(items);
