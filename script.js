// ========== DATA ==========
const drinks = [
  {
    id: "4",
    nameAr: "1K.g كنافة نابلسية",
    nameEn: "",
    price: 500,
    category: "konafa",
    image: "1.png",
    desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
    ingredients: []
  },
   {
    id: "5",
    nameAr: "1K.g كنافة عربية",
    nameEn: "",
    price: 500 ,
    category: "konafa",
    image: "2.png",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
    ingredients: []
  },
  { id: "9000",
    nameAr: "1K.g كنافة اسطنبولية",
    nameEn: "",
    price: 580 ,
    category: "konafa",
    image: "2000.jpg",
    desc: "نوع كنـافة خشنة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية",
    ingredients: []
  },
  {
    id: "400",
    nameAr: " 1K.g  اسطنبولية و عربية نصف و نصف",
    nameEn: "",
    price: 540,
    category: "konafa",
    image: "3.png",
    desc: "",
    ingredients: []
  },
  {
    id: "400",
    nameAr: " 1K.g  اسطنبولية و نابلسية نصف و نصف",
    nameEn: "",
    price: 540,
    category: "konafa",
    image: "503.JPG",
    desc: "",
    ingredients: []
  },
  {
    id: "504",
    nameAr: "1K.g نابلسية و عربية نصف و نصف ",
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
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
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
    nameAr: "سنيورة فستق حلبي",
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
    desc: "رقائق الجلاش المحشية بعجينة اللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
     {
    id: "501",
    nameAr: "وربات قشطة" ,
    nameEn: "",
    price: 500,
    category: "konafa",
    image: "501.JPG",
    desc: "رقائق جلاش محشية قشطة",
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
    id: "505",
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
  },
  
  
];
      // ========== STATE MANAGEMENT ==========
const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  currentFilter: "none",
  selectedDrink: null
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
  checkoutWhatsapp: document.getElementById("checkout-whatsapp")
};

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  hideLoadingScreen();
  updateCartUI();
});

// ========== LOADING SCREEN ==========
function hideLoadingScreen() {
  setTimeout(() => {
    DOM.loadingScreen?.classList.add("fade-out");
    setTimeout(() => { if(DOM.loadingScreen) DOM.loadingScreen.style.display = "none"; }, 800);
  }, 2000);
}

// ========== FILTER FUNCTIONALITY ==========
const baqlawaTypes = [
  { id: 'fustuk', name: 'بقلاوة فستق', keys: ['فستق', 'بستاشيو', 'بلوريا', 'صره', 'اسيا', 'كل واشكر فستق', 'دولمة', 'اساور', 'سنيورة'] },
  { id: 'loz', name: 'بقلاوة لوز', keys: ['لوز','لوكم بندق','كاجو','بقلاوة اسطنبولي جوز'] },
  { id: 'mix', name: 'أصناف متنوعة', keys: ['عجوة' ,'معمول جوز','غريبة'] }
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
      <button class="filter-btn sub-btn" onclick="filterSubCategory('${type.id}')" style="background: #1a1a1a; border: 1px solid #d4af37; font-size: 0.9rem; padding: 5px 15px; border-radius:4px; color:white; cursor:pointer;">
        ${type.name}
      </button>
    `).join("");
    DOM.drinksGrid.innerHTML = `<p style="color:#aaa; width:100%; text-align:center; padding:20px;">اختر نوع البقلاوة المفضل لديك</p>`;
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

function displayFilteredDrinks(data) {
  DOM.drinksGrid.innerHTML = "";
  if (data.length === 0) {
    DOM.drinksGrid.innerHTML = `<p style="color:#aaa; width:100%; text-align:center;">قريباً...</p>`;
    return;
  }
  data.forEach((drink, index) => {
    const card = createDrinkCard(drink);
    DOM.drinksGrid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), index * 50);
  });
}

function renderDrinks() {
  if (state.currentFilter === "none") return;
  const filtered = drinks.filter(d => d.category === state.currentFilter);
  displayFilteredDrinks(filtered);
}

// ========== CREATE DRINK CARD ==========
function createDrinkCard(drink) {
  const card = document.createElement("div");
  card.className = "drink-card";
  const cartItem = state.cart.find(item => item.id === drink.id);
  const qty = cartItem ? cartItem.quantity : 0;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${drink.image || 'logo.png'}" alt="${drink.nameAr}" loading="lazy" />
      ${qty > 0 ? `<div class="card-qty-badge" style="position:absolute; top:10px; right:10px; background:#d4af37; color:#000; padding:2px 8px; border-radius:50%; font-weight:bold;">${qty}</div>` : ''}
    </div>
    <div class="card-body" style="padding: 12px; direction:rtl; text-align:right;">
      <div class="card-name-ar" style="font-weight: 700; font-size: 1.1rem; color: #fff;">${drink.nameAr}</div>
      <p style="color: #aaa; font-size: 0.85rem; margin: 5px 0;">${drink.desc || ''}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <div style="color: #d4af37; font-weight: bold;">${drink.price} ج.م</div>
        <button onclick="handleQuickAdd(event, '${drink.id}')" style="background: #d4af37; color: #000; border: none; padding: 6px 12px; border-radius: 6px; font-weight: bold; cursor: pointer; font-family: 'Cairo';">
          ${qty > 0 ? '➕ المزيد' : '🛍 أضف'}
        </button>
      </div>
    </div>
  `;
  return card;
}

function handleQuickAdd(event, drinkId) {
  event.stopPropagation(); 
  const drink = drinks.find(d => d.id === drinkId);
  if (drink) {
    addToCartSimple(drink);
    renderDrinks();
  }
}

function addToCartSimple(drink) {
  const existingItem = state.cart.find(item => item.id === drink.id);
  if (existingItem) { existingItem.quantity += 1; } 
  else { state.cart.push({ ...drink, quantity: 1 }); }
  saveCart();
  updateCartUI();
  showToast(`تمت إضافة ${drink.nameAr} ✓`);
}

// ========== CART LOGIC ==========
function saveCart() { localStorage.setItem("cart", JSON.stringify(state.cart)); }

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartCount.textContent = totalItems;
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  DOM.cartTotalPrice.textContent = totalPrice;
}

function renderCartItems() {
  if (state.cart.length === 0) {
    DOM.cartItemsList.innerHTML = "<p style='text-align:center; color: #aaa; padding: 20px;'>السلة فارغة</p>";
    return;
  }
  
  // عرض المنتجات فقط في هذا الـ Div
  DOM.cartItemsList.innerHTML = state.cart.map(item => `
    <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding: 8px; background: #1a1a1a; border-radius: 8px; direction: rtl;">
      <div style="flex: 1;">
        <div style="font-weight: bold; color: white; font-size:0.9rem;">${item.nameAr}</div>
        <div style="color: #d4af37; font-size: 0.8rem;">${item.price * item.quantity} ج.م</div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <button onclick="updateQty('${item.id}', -1)" style="background:#333; color:white; border:none; width:24px; height:24px; border-radius:4px; cursor:pointer;">-</button>
        <span style="color:white; min-width:20px; text-align:center;">${item.quantity}</span>
        <button onclick="updateQty('${item.id}', 1)" style="background:#333; color:white; border:none; width:24px; height:24px; border-radius:4px; cursor:pointer;">+</button>
      </div>
    </div>
  `).join("");
}

function updateQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) state.cart = state.cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    renderCartItems();
    renderDrinks();
  }
}

function openCartModal() {
  renderCartItems();
  DOM.cartModalOverlay.classList.remove("hidden");
  DOM.cartModalOverlay.classList.add("open");
}

function closeCartModal() {
  DOM.cartModalOverlay.classList.add("closing");
  setTimeout(() => {
    DOM.cartModalOverlay.classList.remove("open", "closing");
    DOM.cartModalOverlay.classList.add("hidden");
  }, 300);
}

// ========== WHATSAPP CHECKOUT ==========
function sendToWhatsapp() {
  const name = document.getElementById('cust-name')?.value.trim();
  const phone = document.getElementById('cust-phone')?.value.trim();
  const address = document.getElementById('cust-address')?.value.trim();

  if (!name || !phone || !address) {
    showToast("⚠️ يرجى ملئ بيانات التوصيل");
    return;
  }

  const itemsText = state.cart.map(item => `• ${item.nameAr} (${item.quantity} كيلو/صحن)`).join('\n');
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const message = `*طلب جديد من أبو السعود*\n\n*الاسم:* ${name}\n*الهاتف:* ${phone}\n*العنوان:* ${address}\n\n*الطلبات:*\n${itemsText}\n\n*الإجمالي:* ${total} ج.م`;
  
  window.open(`https://wa.me/201070100122?text=${encodeURIComponent(message)}`, "_blank");
}

function showToast(msg) {
  DOM.toast.textContent = msg;
  DOM.toast.classList.add("show");
  setTimeout(() => DOM.toast.classList.remove("show"), 2500);
}

function setupEventListeners() {
  DOM.filterBtns.forEach(btn => btn.addEventListener("click", () => filterDrinks(btn.dataset.filter)));
  DOM.cartIconWrap.addEventListener("click", openCartModal);
  DOM.cartModalClose.addEventListener("click", closeCartModal);
  DOM.checkoutWhatsapp.addEventListener("click", sendToWhatsapp);
  
  // إغلاق المودالات عند الضغط خارجها
  window.onclick = (e) => {
    if (e.target == DOM.cartModalOverlay) closeCartModal();
    if (e.target == DOM.modalOverlay) closeModal();
  };
}
