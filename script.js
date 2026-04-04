// ========== DATA ==========
const drinks = [
  {
    id: "4",
    nameAr: " كنافة نابلسية",
    nameEn: "",
    price: 500,
    category: "konafa",
    image: "1.png",
    desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
    ingredients: []
  },
   {
    id: "5",
    nameAr: " كنافة عربية",
    nameEn: "",
    price: 500 ,
    category: "konafa",
    image: "2.png",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
    ingredients: []
  },
  { id: "9000",
    nameAr: " كنافة اسطنبولية",
    nameEn: "",
    price: 580 ,
    category: "konafa",
    image: "2000.jpg",
    desc: "نوع كنـافة خشنة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية",
    ingredients: []
  },
  {
    id: "400",
    nameAr: "  اسطنبولية و عربية نصف و نصف",
    nameEn: "",
    price: 540,
    category: "konafa",
    image: "3.png",
    desc: "",
    ingredients: []
  },
  {
    id: "400",
    nameAr: "   اسطنبولية و نابلسية نصف و نصف",
    nameEn: "",
    price: 540,
    category: "konafa",
    image: "503.JPG",
    desc: "",
    ingredients: []
  },
  {
    id: "504",
    nameAr: " نابلسية و عربية نصف و نصف ",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "504.JPG",
    desc: "",
    ingredients: []
  },
   {
    id: "1",
    nameAr: "صحن نابلسية",
    nameEn: "",
    price: 90,
    category: "konafa",
    image: "1.png",
    desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
    ingredients: []
  },
  {
    id: "2",
    nameAr: "صحن اسطنبولية",
    nameEn: " نوع خشنة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية",
    price: 100 ,
    category: "konafa",
    image: "2000.jpg",
    desc: "",
    ingredients: []
  },
  {
    id: "2",
    nameAr: "صحن عربية",
    nameEn: "",
    price: 90 ,
    category: "konafa",
    image: "2.png",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاح�� ومحشوة بالجوز",
    ingredients: []
  },
  {
    id: "3",
    nameAr: "صحن اسطنبولية و عربية",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "3.png",
    desc: "",
    ingredients: []
  },
  {
    id: "503",
    nameAr: "صحن اسطنبولية و نابلسية",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "503.JPG",
    desc: "",
    ingredients: []
  },
  {
    id: "504",
    nameAr: "صحن نابلسية و عربية",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "504.JPG",
    desc: "",
    ingredients: []
  },
  {
    id: "1000000",
    nameAr: " بورمة قشطة ",
    nameEn: "",
    price: 500 ,
    category: "konafa",
    image: "1000000.png",
    desc: "معمول من شعيرات الكنافة، بتتلف على شكل أصابع ومحشية قشطة",
    ingredients: []
  },
  {
    id: "500",
    nameAr: " كلاچ ",
    nameEn: "",
    price: 400 ,
    category: "konafa",
    image: "500.JPG",
    desc: "رقائق الجلاش محشوة بالقشطة مع اللبن والزبدة",
    ingredients: []
  },
  
  // ✅ مشكل فستق حلبي
  {
    id: "mishkal-fustuk",
    nameAr: "مشكل فستق حلبي",
    nameEn: "",
    price: 1750,
    category: "baqlawa",
    image: "7.png",
    images: [
      "7.png",
      "6.png",
      "8.png",
      "10.png",
      "13.png",
      "17.png"
    ],
    desc: "مزيج فاخر من أفضل أنواع البقلاوة بالفستق الحلبي الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },

  {
    id: "mishkal-fustuk-mix",
    nameAr: " مشكل فستق حلبي مع لوز و كاجو",
    nameEn: "",
    price: 1250,
    category: "baqlawa",
    image: "7.png",
    images: [
      "7.png",
      "27.png",
      "6.png",
      "23.png",
      "20.png",
      "11.png"
    ],
    desc: "مزيج فاخر من أفضل أنواع البقلاوة بالفستق الحلبي الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },

  {
    id: "6",
    nameAr: "بورما فستق حلبي",
    nameEn: "",
    price: 1800,
    category: "baqlawa",
    image: "6.png",
    desc: "حلوى عربية مصنوعة من عجينة الكــنافة و محشوة بالفستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
   {
    id: "7",
    nameAr: "عش البلبل فستق حلبي",
    nameEn: "",
    price: 1650,
    category: "baqlawa",
    image: "7.png",
    desc: "حلوى من الكــنافة على شكل عش دائري محشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "8",
    nameAr: "بلوريا حمراء",
    nameEn: "",
    price: 1800,
    category: "baqlawa",
    image: "8.png",
    desc: "حلوي شامية من خيوط الكنافة محشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "9",
    nameAr: "بلوريا بيضاء",
    nameEn: "",
    price: 1800,
    category: "baqlawa",
    image: "9.png",
    desc: "حلوي شامية من خيوط الكنافة محشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "10",
    nameAr: "صره فستق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "10.png",
    desc: "رقائق الجلاش محشوة بين الرقائق بالفستق نخب أول,ومحشوة بعدها بالفستق الصحيح أيضاً",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "11",
    nameAr: "اسيا فستق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "11.png",
    desc: "حلوى شرقية مصنوعة من طبقات الجلاش، تُحشى بالفستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "12",
    nameAr: "كل واشكر فستق حلبي",
    nameEn: "",
    price: 1550,
    category: "baqlawa",
    image: "12.png",
    desc: "حلوي عربية فاخرة تصنع من عجينة الجلاش المحشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "13",
    nameAr: "دولمة فستق حلبي",
    nameEn: "",
    price: 1850,
    category: "baqlawa",
    image: "13.png",
    desc: "حلوي ناعمة من رقائق الجلاش محشية علي طولها بالفستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  
  {
    id: "15",
    nameAr: "اساور الست فستق حلبي",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "15.png",
    desc: "حلوى من عجينة الجلاش ملفوفة بشكل دائري وعليها رشة الفستق",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "16",
    nameAr: "سنيور�� فستق حلبي",
    nameEn: "",
    price: 1500,
    category: "baqlawa",
    image: "16.png",
    desc: "حلوى من عجينة الجلاش ملفوفة وداخلها فستق",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "900",
    nameAr: "لوكم فستق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "505.JPG",
    desc: "لوكم طري محشو بكثافة بقطع الفسدق المحمص",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "17",
    nameAr: "بستاشيو ابو السعود",
    nameEn: "",
    price: 2200,
    category: "baqlawa",
    image: "17.png",
    desc: "مزيج من الشيكولاتة البلجيكية وعجينة الكنافة محشوة بالفستق البستاشيو نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "18",
    nameAr: "بقلاوة فستق",
    nameEn: "",
    price: 1250,
    category: "baqlawa",
    image: "18.png",
    desc: "حلوي شرقية عبارة عن طبقات الجلاش محشوة بالفستق الحلو نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
 
  // ✅ مشكل لوز
  {
    id: "mishkal-loz",
    nameAr: "مشكل لوز",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "20.png",
    images: [
      "20.png",
      "21.png",
      "23.png",
      "24.png",
      "26.png",
      "30.png"
    ],
    desc: "مزيج فاخر من أفضل أنواع البقلاوة باللوز الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },

  {
    id: "10000",
    nameAr: "كنافة لوز",
    nameEn: "",
    price: 950 ,
    category: "baqlawa",
    image: "10000.png",
    desc: "حلوى شرقية من خيوط الكنافة المحمّصة ومحشية لوز ",
    ingredients: []
  },
  
  {
    id: "20",
    nameAr: "بورما لوز",
    nameEn: "",
    price: 900,
    category: "baqlawa",
    image: "20.png",
    desc: "حلوى عربية مصنوعة من عجينة الكــنافة و محشوة باللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "21",
    nameAr: "عش البلبل لوز",
    nameEn: "",
    price: 680,
    category: "baqlawa",
    image: "21.png",
    desc: "حلوى من الكنافة على شكل دائري محشوة باللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "23",
    nameAr: "بقلاوة اسطنبولي لوز",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "23.png",
    desc: "حلوى تركية عبارة عن طبقات جلاش محشية لوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "24",
    nameAr: "بقلاوة لوز",
    nameEn: "",
    price: 600,
    category: "baqlawa",
    image: "24.png",
    desc: "حلوي شرقية عبارة عن طبقات من الجلاش محشوة باللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
   {
    id: "25",
    nameAr: "صرة لوز",
    nameEn: "",
    price: 600,
    category: "baqlawa",
    image: "25.png",
    desc: "رقائق الجلاش محشوة بين الرقائق باللوز الحلو، محشوة بعدها باللوز المبشور أيضاً",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "26",
    nameAr: "كل واشكر لوز",
    nameEn: "",
    price: 700,
    category: "baqlawa",
    image: "26.png",
    desc: "حلوي عربية فاخرة تصنع من عجينة الجلاش المحشوة لوز حلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "27",
    nameAr: "اصابع لوز",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "27.png",
    desc: "حلوى من رقائق الجلاش محشية باللوز الحلو، ملفوفة على شكل أصابع ومحمّرة",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  
  {
    id: "29",
    nameAr: "بقلاوة اسطنبولي جوز",
    nameEn: "",
    price: 850,
    category: "baqlawa",
    image: "29.png",
    desc: "حلوى تركية عبارة  عن طبقات جلاش رفيعة ومحشية بالجوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "30",
    nameAr: "عش البلبل كاجو",
    nameEn: "",
    price: 800,
    category: "baqlawa",
    image: "30.png",
    desc: "تصنع من شعر الكنافة على شكل عش دائري محشوة بحبات الكاجو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "31",
    nameAr: "اصابع كاجو",
    nameEn: "",
    price: 800,
    category: "baqlawa",
    image: "31.png",
    desc: "حلوى من رقائق الجلاش ملفوفة على شكل أصابع ومحشية بالكاجو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
   {
    id: "32",
    nameAr: "وربات لوز",
    nameEn: "",
    price: 900,
    category: "baqlawa",
    image: "32.png",
    desc: "رقائق ��لجلاش المحشية بعجينة اللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
     {
    id: "501",
    nameAr: "وربات قشطة" ,
    nameEn: "",
    price: 500,
    category: "konafa",
    image: "501.JPG",
    desc: "رقائق جلاش محشية قش��ة",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "28",
    nameAr: "معمول عجوة",
    nameEn: "",
    price: 700,
    category: "baqlawa",
    image: "28.png",
    desc: "حلوى تقليدية معمول من عجينة السميد ومحشو بمعجون التمر العجوة، يُشكّل بالقوالب",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "280",
    nameAr: "معمول جوز",
    nameEn: "",
    price: 900,
    category: "baqlawa",
    image: "280.png",
    desc: "حلوى تقليدية معمول من عجينة السميد ومحشو باللوز، يُشكّل بالقوالب",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "505",
    nameAr: "لوكم فسدق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "506.JPG",
    desc: "لوكم طري محشو بكثافة بقطع الفسدق المحمص و الكريمة ",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "505b",
    nameAr: "لوكم بندق ",
    nameEn: "",
    price: 950,
    category: "baqlawa",
    image: "506.JPG",
    desc: " لوكم طري محشو بكثافة بقطع البندق المحمص",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  
    {
    id: "3000",
    nameAr: "غريبة",
    nameEn: "",
    price: 400,
    category: "baqlawa",
    image: "IMG_1.JPG",
    desc: " حلوى تقليدية مصنوعة من الدقيق والسمن والسكر، تُشكّل على هيئة كرات وتُزيّن بالفستق ",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "33",
    nameAr: "نمورة بالزبد البلدي",
    nameEn: "",
    price: 360,
    category: "namora",
    image: "33.png",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي",
    ingredients: ["إسبريسو", "حليب", "رغوة حليب", "قرفة"]
  },
  {
    id: "34",
    nameAr: "نمورة محشية لوز",
    nameEn: "",
    price: 420,
    category: "namora",
    image: "IMG_2.JPG",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة باللوز الحلو",
    ingredients: ["إسبريسو", "حليب", "رغوة حليب", "قرفة"]
  }
];

// ========== STATE MANAGEMENT ==========
const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  currentFilter: "none",
  selectedDrink: null,
  selectedWeight: 1,
  currentImageIndex: {}
};

// ========== DOM ELEMENTS ==========
const DOM = {
  loadingScreen: document.getElementById("loading-screen"),
  navbar: document.getElementById("navbar"),
  drinksGrid: document.getElementById("drinks-grid"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  modalOverlay: document.getElementById("modal-overlay"),
  cartModalOverlay: document.getElementById("cart-modal-overlay"),
  cartIconWrap: document.getElementById("cart-icon-wrap"),
  cartCount: document.getElementById("cart-count"),
  toast: document.getElementById("toast"),
  modalClose: document.getElementById("modal-close"),
  cartModalClose: document.getElementById("cart-modal-close"),
  orderBtn: document.getElementById("order-btn"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartTotalPrice: document.getElementById("cart-total-price"),
  checkoutWhatsapp: document.getElementById("checkout-whatsapp"),
  weightModalOverlay: document.getElementById("weight-modal-overlay"),
  weightModalClose: document.getElementById("weight-modal-close")
};

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
  renderDrinks();
  setupEventListeners();
  hideLoadingScreen();
  updateCartUI();
});

// ========== LOADING SCREEN ==========
function hideLoadingScreen() {
  setTimeout(() => {
    DOM.loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      DOM.loadingScreen.style.display = "none";
    }, 800);
  }, 2000);
}

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    DOM.navbar.classList.add("scrolled");
  } else {
    DOM.navbar.classList.remove("scrolled");
  }
});

// ========== CHECK IF ITEM IS PLATE ==========
function isPlateItem(drink) {
  return drink.nameAr.includes("صحن");
}

// ========== FILTER FUNCTIONALITY ==========
const baqlawaTypes = [
  { id: 'fustuk', name: 'بقلاوة فستق', keys: ['فستق', 'بستاشيو', 'بلوريا', 'صره', 'اسيا', 'كل واشكر فستق', 'دولمة', 'اساور', 'سنيورة', 'لوكم فستق', 'مشكل فستق'] },
  { id: 'loz', name: 'بقلاوة لوز', keys: ['لوز','لوكم بندق','كاجو','بقلاوة اسطنبولي جوز', 'وربات لوز', 'مشكل لوز'] },
  { id: 'mix', name: 'أصناف متنوعة', keys: [  'عجوة' ,'معمول جوز','غريبة'] }
];

function filterDrinks(category) {
  state.currentFilter = category;
  const subContainer = document.getElementById("sub-filters-container");
  
  DOM.filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });

  if (category === "baqlawa") {
    subContainer.style.display = "flex";
    subContainer.innerHTML = baqlawaTypes.map(type => `
      <button class="filter-btn sub-btn" onclick="filterSubCategory('${type.id}')" style="background: #1a1a1a; border: 1px solid #d4af37; font-size: 0.9rem; padding: 5px 15px;">
        ${type.name}
      </button>
    `).join("");
    
    DOM.drinksGrid.innerHTML = `<p style="color:#aaa; width:100%; text-align:center;">اختر نوع البقلاوة المفضل لديك</p>`;
  } else {
    subContainer.style.display = "none";
    renderDrinks();
  }
}

function filterSubCategory(subId) {
  const typeData = baqlawaTypes.find(t => t.id === subId);
  
  const filtered = drinks.filter(d => 
    d.category === "baqlawa" && 
    typeData.keys.some(key => d.nameAr.includes(key))
  );

  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.style.background = (btn.innerText === typeData.name) ? "#d4af37" : "#1a1a1a";
    btn.style.color = (btn.innerText === typeData.name) ? "#000" : "#fff";
  });

  displayFilteredDrinks(filtered);
}

// ✅ دالة عرض المنتجات
function displayFilteredDrinks(data) {
  DOM.drinksGrid.innerHTML = "";
  if (data.length === 0) {
    DOM.drinksGrid.innerHTML = `<p style="color:#aaa; width:100%; text-align:center;">قريباً...</p>`;
    return;
  }
  
  data.forEach((drink, index) => {
    let card;
    
    if (drink.images && drink.images.length > 1) {
      card = createCarouselCard(drink);
    } else {
      card = createDrinkCard(drink);
    }
    
    DOM.drinksGrid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), index * 50);
  });
}

// ✅ دالة إنشاء كرت الكاروسيل
function createCarouselCard(drink) {
  const card = document.createElement("div");
  card.className = "drink-card carousel-card";
  
  const cartItem = state.cart.find(item => item.id === drink.id);
  const qty = cartItem ? cartItem.quantity : 0;
  
  const carouselId = `carousel-${drink.id}`;
  const images = drink.images || [drink.image];
  
  if (!state.currentImageIndex[carouselId]) {
    state.currentImageIndex[carouselId] = 0;
  }

  const slidesHTML = images.map((img, index) => `
    <div class="carousel-slide" data-index="${index}">
      <img src="${img}" alt="${drink.nameAr}" loading="lazy" />
    </div>
  `).join('');

  card.innerHTML = `
    <div class="carousel-wrapper">
      <div class="carousel-container" id="${carouselId}-container">
        <div class="carousel-track" id="${carouselId}-track">
          ${slidesHTML}
        </div>
        
        <div class="carousel-dots">
          ${images.map((_, i) => `
            <span class="dot ${i === 0 ? 'active' : ''}" onclick="goToImageSlide('${carouselId}', ${i})"></span>
          `).join('')}
        </div>
      </div>
      ${qty > 0 ? `<div class="card-qty-badge">${qty}</div>` : ''}
    </div>
    
    <div class="card-body" style="padding: 12px;">
      <div style="text-align: right; width: 100%;">
        <div class="card-name-ar" style="font-weight: 700; font-size: 1.1rem; color: #fff;">
          ${drink.nameAr}
        </div>
        <div class="card-desc-simple" style="color: #aaa; font-size: 0.85rem; margin-top: 4px; line-height: 1.3;">
          ${drink.desc || ''}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
        <div class="card-price" style="margin: 0;">
          <strong style="color: #d4af37; font-size: 1.2rem;">${drink.price}</strong>
          <small style="color: #d4af37;">ج.م</small>
        </div>
        
        <button class="quick-add-btn" 
                onclick="handleQuickAdd(event, '${drink.id}')" 
                style="background: #d4af37; color: #000; border: none; padding: 6px 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo';">
          ${qty > 0 ? '➕ المزيد' : '🛍 اضف للسلة'}
        </button>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    const container = document.getElementById(`${carouselId}-container`);
    if (container) {
      container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        changeImageSlide(carouselId, direction);
      }, { passive: false });
      
      let touchStartX = 0;
      container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      });
      
      container.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const direction = touchStartX > touchEndX ? 1 : -1;
        if (Math.abs(touchStartX - touchEndX) > 50) {
          changeImageSlide(carouselId, direction);
        }
      });
    }
  }, 100);
  
  return card;
}

// ========== CREATE REGULAR CARD ==========
function createDrinkCard(drink) {
  const card = document.createElement("div");
  card.className = "drink-card";
  
  const cartItem = state.cart.find(item => item.id === drink.id);
  const qty = cartItem ? cartItem.quantity : 0;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${drink.image || 'logo.png'}" alt="${drink.nameAr}" loading="lazy" />
      <div class="card-overlay"></div>
      ${qty > 0 ? `<div class="card-qty-badge">${qty}</div>` : ''}
    </div>
    <div class="card-body" style="padding: 12px;">
      <div class="card-row" style="margin-bottom: 8px;">
        <div style="text-align: right; width: 100%;">
          <div class="card-name-ar" style="font-weight: 700; font-size: 1.1rem; color: #fff;">${drink.nameAr}</div>
          
          <div class="card-desc-simple" style="color: #aaa; font-size: 0.85rem; margin-top: 4px; line-height: 1.3;">
            ${drink.desc || ''}
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
        <div class="card-price" style="margin: 0;">
          <strong style="color: #d4af37; font-size: 1.2rem;">${drink.price}</strong>
          <small style="color: #d4af37;">ج.م</small>
        </div>
        
        <button class="quick-add-btn" 
                onclick="handleQuickAdd(event, '${drink.id}')" 
                style="background: #d4af37; color: #000; border: none; padding: 6px 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo';">
          ${qty > 0 ? '➕ المزيد' : '🛍 اضف للسلة'}
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// ✅ تحريك الكاروسيل عند السكرول
function changeImageSlide(carouselId, direction) {
  const track = document.getElementById(`${carouselId}-track`);
  
  if (!track) return;
  
  const slides = track.querySelectorAll('.carousel-slide').length;
  let newIndex = (state.currentImageIndex[carouselId] || 0) + direction;
  
  if (newIndex >= slides) newIndex = 0;
  if (newIndex < 0) newIndex = slides - 1;
  
  state.currentImageIndex[carouselId] = newIndex;
  
  track.style.transform = `translateX(-${newIndex * 100}%)`;
  updateImageDots(carouselId, newIndex);
}

// ✅ الانتقال المباشر للصورة
function goToImageSlide(carouselId, index) {
  const track = document.getElementById(`${carouselId}-track`);
  
  if (!track) return;
  
  state.currentImageIndex[carouselId] = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  updateImageDots(carouselId, index);
}

// ✅ تحديث النقاط
function updateImageDots(carouselId, index) {
  const container = document.getElementById(`${carouselId}-container`);
  
  if (!container) return;
  
  const dots = container.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// ========== HANDLE QUICK ADD ==========
function handleQuickAdd(event, drinkId) {
  event.stopPropagation(); 
  const drink = drinks.find(d => d.id === drinkId);
  
  if (drink) {
    if (isPlateItem(drink)) {
      addToCartSimple(drink);
    } else {
      // ✅ تحقق إذا كان مشكل
      if (drink.nameAr.includes("مشكل")) {
        openMishkalWeightModal(drink);
      } else {
        openWeightModal(drink);
      }
    }
  }
}

// ✅ WEIGHT MODAL للمشكل (6 أوزان)
function openMishkalWeightModal(drink) {
  state.selectedDrink = drink;
  state.selectedWeight = 1;
  
  const weightModalOverlay = document.getElementById("weight-modal-overlay");
  
  weightModalOverlay.innerHTML = `
    <div class="weight-modal-content" style="background: #1a1a1a; border: 2px solid #d4af37; border-radius: 12px; padding: 30px; max-width: 450px; text-align: center; color: white; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
      <h2 style="color: #d4af37; margin-bottom: 20px; font-size: 1.3rem;">اختر الوزن المفضل</h2>
      
      <div class="weights-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
        <button class="mishkal-weight-btn" onclick="selectMishkalWeight(0.25)" data-multiplier="0.25" style="background: #d4af37; color: #000; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; font-size: 0.95rem; transition: all 0.3s;">
          ربع كيلو<br><small style="color: #666; font-size: 0.85rem;">${Math.round(drink.price * 0.25)} ج.م</small>
        </button>
        
        <button class="mishkal-weight-btn" onclick="selectMishkalWeight(0.5)" data-multiplier="0.5" style="background: #444; color: white; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; font-size: 0.95rem; transition: all 0.3s;">
          نصف كيلو<br><small style="color: #aaa; font-size: 0.85rem;">${Math.round(drink.price * 0.5)} ج.م</small>
        </button>
        
        <button class="mishkal-weight-btn" onclick="selectMishkalWeight(1)" data-multiplier="1" style="background: #444; color: white; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; font-size: 0.95rem; transition: all 0.3s;">
          كيلو<br><small style="color: #aaa; font-size: 0.85rem;">${Math.round(drink.price * 1)} ج.م</small>
        </button>
        
        <button class="mishkal-weight-btn" onclick="selectMishkalWeight(1.25)" data-multiplier="1.25" style="background: #444; color: white; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; font-size: 0.95rem; transition: all 0.3s;">
          كيلو وربع<br><small style="color: #aaa; font-size: 0.85rem;">${Math.round(drink.price * 1.25)} ج.م</small>
        </button>
        
        <button class="mishkal-weight-btn" onclick="selectMishkalWeight(1.5)" data-multiplier="1.5" style="background: #444; color: white; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; font-size: 0.95rem; transition: all 0.3s;">
          كيلو ونصف<br><small style="color: #aaa; font-size: 0.85rem;">${Math.round(drink.price * 1.5)} ج.م</small>
        </button>
        
        <button class="mishkal-weight-btn" onclick="selectMishkalWeight(2)" data-multiplier="2" style="background: #444; color: white; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; font-size: 0.95rem; transition: all 0.3s;">
          كيلوين<br><small style="color: #aaa; font-size: 0.85rem;">${Math.round(drink.price * 2)} ج.م</small>
        </button>
      </div>
      
      <div style="display: flex; gap: 10px;">
        <button onclick="addMishkalToCart()" style="flex: 1; background: #d4af37; color: #000; border: none; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; transition: all 0.3s;">
          إضافة للسلة
        </button>
        <button onclick="closeMishkalWeightModal()" style="flex: 1; background: #444; color: white; border: 1px solid #d4af37; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; transition: all 0.3s;">
          إلغاء
        </button>
      </div>
    </div>
  `;
  
  weightModalOverlay.classList.remove("hidden");
  weightModalOverlay.classList.add("open");
}

// ✅ تحديد وزن المشكل
function selectMishkalWeight(multiplier) {
  state.selectedWeight = multiplier;
  
  const buttons = document.querySelectorAll(".mishkal-weight-btn");
  buttons.forEach(btn => {
    const btnMultiplier = parseFloat(btn.dataset.multiplier);
    if (btnMultiplier === multiplier) {
      btn.style.background = "#d4af37";
      btn.style.color = "#000";
    } else {
      btn.style.background = "#444";
      btn.style.color = "white";
    }
  });
}

// ✅ إضافة المشكل للسلة
function addMishkalToCart() {
  if (!state.selectedDrink) return;
  
  const drink = state.selectedDrink;
  const weight = state.selectedWeight;
  const finalPrice = Math.round(drink.price * weight);
  
  const existingItem = state.cart.find(item => 
    item.id === drink.id && item.weight === weight
  );
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: drink.id,
      nameAr: drink.nameAr,
      nameEn: drink.nameEn,
      price: finalPrice,
      quantity: 1,
      image: drink.image,
      weight: weight,
      originalPrice: drink.price
    });
  }
  
  saveCart();
  updateCartUI();
  
  const weightLabels = {
    0.25: "ربع كيلو",
    0.5: "نصف كيلو",
    1: "كيلو",
    1.25: "كيلو وربع",
    1.5: "كيلو ونصف",
    2: "كيلوين"
  };
  
  const weightLabel = weightLabels[weight] || "وزن";
  showToast(`تم إضافة ${drink.nameAr} (${weightLabel}) ✓`);
  
  closeMishkalWeightModal();
  renderDrinks();
}

// ✅ إغلاق نافذة المشكل
function closeMishkalWeightModal() {
  const weightModalOverlay = document.getElementById("weight-modal-overlay");
  weightModalOverlay.classList.remove("open");
  weightModalOverlay.classList.add("closing");
  
  setTimeout(() => {
    weightModalOverlay.classList.add("hidden");
    weightModalOverlay.classList.remove("closing");
  }, 300);
}

// ========== WEIGHT MODAL (للمنتجات العادية - 3 أوزان) ==========
function openWeightModal(drink) {
  state.selectedDrink = drink;
  state.selectedWeight = 1;
  
  const weightModalOverlay = document.getElementById("weight-modal-overlay");
  
  weightModalOverlay.innerHTML = `
    <div class="weight-modal-content" style="background: #1a1a1a; border: 2px solid #d4af37; border-radius: 12px; padding: 30px; max-width: 400px; text-align: center; color: white; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
      <h2 style="color: #d4af37; margin-bottom: 20px; font-size: 1.3rem;">اختر الوزن المفضل</h2>
      
      <div class="weights-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 20px;">
        <button class="weight-btn-normal" onclick="selectNormalWeight(0.25)" data-multiplier="0.25" style="background: #d4af37; color: #000; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; transition: all 0.3s;">
          ربع كيلو<br><small style="color: #666; font-size: 0.85rem;">${Math.round(drink.price * 0.25)} ج.م</small>
        </button>
        
        <button class="weight-btn-normal" onclick="selectNormalWeight(0.5)" data-multiplier="0.5" style="background: #444; color: white; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; transition: all 0.3s;">
          نصف كيلو<br><small style="color: #aaa; font-size: 0.85rem;">${Math.round(drink.price * 0.5)} ج.م</small>
        </button>
        
        <button class="weight-btn-normal" onclick="selectNormalWeight(1)" data-multiplier="1" style="background: #444; color: white; border: 2px solid #d4af37; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; transition: all 0.3s;">
          كيلو<br><small style="color: #aaa; font-size: 0.85rem;">${Math.round(drink.price * 1)} ج.م</small>
        </button>
      </div>
      
      <div style="display: flex; gap: 10px;">
        <button onclick="addNormalToCart()" style="flex: 1; background: #d4af37; color: #000; border: none; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; transition: all 0.3s;">
          إضافة للسلة
        </button>
        <button onclick="closeWeightModal()" style="flex: 1; background: #444; color: white; border: 1px solid #d4af37; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo'; transition: all 0.3s;">
          إلغاء
        </button>
      </div>
    </div>
  `;
  
  weightModalOverlay.classList.remove("hidden");
  weightModalOverlay.classList.add("open");
}

// ✅ تحديد الوزن العادي
function selectNormalWeight(multiplier) {
  state.selectedWeight = multiplier;
  
  const buttons = document.querySelectorAll(".weight-btn-normal");
  buttons.forEach(btn => {
    const btnMultiplier = parseFloat(btn.dataset.multiplier);
    if (btnMultiplier === multiplier) {
      btn.style.background = "#d4af37";
      btn.style.color = "#000";
    } else {
      btn.style.background = "#444";
      btn.style.color = "white";
    }
  });
}

// ✅ إضافة المنتج العادي للسلة
function addNormalToCart() {
  if (!state.selectedDrink) return;
  
  const drink = state.selectedDrink;
  const weight = state.selectedWeight;
  const finalPrice = Math.round(drink.price * weight);
  
  const existingItem = state.cart.find(item => 
    item.id === drink.id && item.weight === weight
  );
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: drink.id,
      nameAr: drink.nameAr,
      nameEn: drink.nameEn,
      price: finalPrice,
      quantity: 1,
      image: drink.image,
      weight: weight,
      originalPrice: drink.price
    });
  }
  
  saveCart();
  updateCartUI();
  
  const weightLabels = {
    0.25: "ربع كيلو",
    0.5: "نصف كيلو",
    1: "كيلو"
  };
  
  const weightLabel = weightLabels[weight] || "وزن";
  showToast(`تم إضافة ${drink.nameAr} (${weightLabel}) ✓`);
  
  closeWeightModal();
  renderDrinks();
}

// ✅ إغلاق نافذة الأوزان العادية
function closeWeightModal() {
  const weightModalOverlay = document.getElementById("weight-modal-overlay");
  weightModalOverlay.classList.remove("open");
  weightModalOverlay.classList.add("closing");
  
  setTimeout(() => {
    weightModalOverlay.classList.add("hidden");
    weightModalOverlay.classList.remove("closing");
  }, 300);
}

// ========== ADD TO CART SIMPLE (للصحون) ==========
function addToCartSimple(drink) {
  const existingItem = state.cart.find(item => item.id === drink.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: drink.id,
      nameAr: drink.nameAr,
      nameEn: drink.nameEn,
      price: drink.price,
      quantity: 1,
      image: drink.image,
      weight: 1
    });
  }
  saveCart();
  updateCartUI();
  showToast(`تم إضافة ${drink.nameAr} ✓`);
  renderDrinks();
}

// ========== MODAL MANAGEMENT ==========
function openModal(drink) {
  state.selectedDrink = drink;
  
  document.getElementById("modal-img").src = drink.image;
  document.getElementById("modal-name-ar").textContent = drink.nameAr;
  document.getElementById("modal-name-en").textContent = drink.nameEn;
  document.getElementById("modal-price").textContent = drink.price;
  document.getElementById("modal-desc").textContent = drink.desc;
  
  const ingList = document.getElementById("modal-ing-list");
  ingList.innerHTML = drink.ingredients.map(ing => `<li>${ing}</li>`).join("");
  
  DOM.modalOverlay.classList.remove("hidden");
  DOM.modalOverlay.classList.add("open");
}

function closeModal() {
  DOM.modalOverlay.classList.remove("open");
  DOM.modalOverlay.classList.add("closing");
  
  setTimeout(() => {
    DOM.modalOverlay.classList.add("hidden");
    DOM.modalOverlay.classList.remove("closing");
  }, 300);
}

// ========== CART MANAGEMENT ==========
function addToCart(drink) {
  const existingItem = state.cart.find(item => item.id === drink.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: drink.id,
      nameAr: drink.nameAr,
      nameEn: drink.nameEn,
      price: drink.price,
      quantity: 1,
      image: drink.image,
      weight: 1
    });
  }
  
  saveCart();
  updateCartUI();
  showToast(`تم إضافة ${drink.nameAr} للسلة ✓`);
  closeModal();
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter(item => item.id !== itemId);
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast("تم الحذف من السلة");
}

function updateCartQuantity(itemId, quantity) {
  const item = state.cart.find(item => item.id === itemId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      item.quantity = quantity;
      saveCart();
      updateCartUI();
      renderCartItems();
    }
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartCount.textContent = totalItems;
  
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  DOM.cartTotalPrice.textContent = totalPrice;
}

function openCartModal() {
  if (state.cart.length === 0) {
    showToast("السلة فارغة");
    return;
  }
  
  renderCartItems();
  DOM.cartModalOverlay.classList.remove("hidden");
  DOM.cartModalOverlay.classList.add("open");
}

function closeCartModal() {
  DOM.cartModalOverlay.classList.remove("open");
  DOM.cartModalOverlay.classList.add("closing");
  
  setTimeout(() => {
    DOM.cartModalOverlay.classList.add("hidden");
    DOM.cartModalOverlay.classList.remove("closing");
  }, 300);
}

function renderCartItems() {
  if (state.cart.length === 0) {
    DOM.cartItemsList.innerHTML = "<p style='text-align:center; color: #aaa; padding: 2rem;'>لا توجد عناصر في السلة</p>";
    return;
  }
  
  const weightLabels = {
    0.25: "ربع كيلو",
    0.5: "نصف كيلو",
    0.75: "ثلاث أرباع كيلو",
    1: "كيلو",
    1.25: "كيلو وربع",
    1.5: "كيلو ونصف",
    2: "كيلوين"
  };

  let itemsHtml = state.cart.map(item => {
    const weightLabel = weightLabels[item.weight] || "وزن";
    const drink = drinks.find(d => d.id === item.id);
    return `
    <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 10px; direction: rtl;">
      <div class="cart-item-info" style="flex: 1; text-align: right;">
        <div class="cart-item-name" style="font-weight: bold; color: white;">${item.nameAr}</div>
        <div style="color: #aaa; font-size: 0.85rem;">${!isPlateItem(drink) ? weightLabel : ''}</div>
        <div style="color: #d4af37; font-size: 0.9rem;">${item.price * item.quantity} ج.م</div>
      </div>
      <div class="cart-qty-control" style="display: flex; align-items: center; gap: 10px; margin: 0 15px;">
        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})" style="background:#444; border:none; color:white; width:25px; height:25px; border-radius:4px; cursor
