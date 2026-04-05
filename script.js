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

// ==========================================
// 2. إدارة الحالة (State Management)
// ==========================================
let tempSelectedDrink = null; 

const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  currentFilter: "none"
};

// ==========================================
// 3. عناصر الواجهة (DOM Elements)
// ==========================================
const DOM = {
  loadingScreen: document.getElementById("loading-screen"),
  drinksGrid: document.getElementById("drinks-grid"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  subContainer: document.getElementById("sub-filters-container"),
  cartModal: document.getElementById("cart-modal-overlay"),
  weightModal: document.getElementById("weight-modal-overlay"),
  cartCount: document.getElementById("cart-count"),
  cartTotalPrice: document.getElementById("cart-total-price"),
  cartItemsList: document.getElementById("cart-items-list"),
  toast: document.getElementById("toast"),
  checkoutBtn: document.getElementById("checkout-whatsapp")
};

// ==========================================
// 4. التشغيل الأولي (Initialization)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  updateCartUI();
  // إخفاء شاشة التحميل بعد ثانيتين
  setTimeout(() => {
    if(DOM.loadingScreen) DOM.loadingScreen.style.display = "none";
  }, 1500);
});

// ==========================================
// 5. نظام الفلترة (Filtering System)
// ==========================================
const baqlawaTypes = [
  { id: 'fustuk', name: 'بقلاوة فستق', keys: ['فستق', 'بستاشيو', 'بلوريا', 'صره'] },
  { id: 'loz', name: 'بقلاوة لوز/جوز', keys: ['لوز','بندق','كاجو','جوز'] },
  { id: 'mix', name: 'أصناف متنوعة', keys: ['عجوة' ,'معمول','غريبة'] }
];

function filterDrinks(category) {
  state.currentFilter = category;
  DOM.filterBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === category));

  if (category === "baqlawa") {
    DOM.subContainer.style.display = "flex";
    DOM.subContainer.innerHTML = baqlawaTypes.map(type => `
      <button class="filter-btn sub-btn" onclick="filterSubCategory('${type.id}')">${type.name}</button>
    `).join("");
    DOM.drinksGrid.innerHTML = `<p style="color:#aaa; width:100%; text-align:center; padding:20px;">اختر النوع من الأعلى</p>`;
  } else {
    DOM.subContainer.style.display = "none";
    renderDrinks();
  }
}

function filterSubCategory(subId) {
  const typeData = baqlawaTypes.find(t => t.id === subId);
  const filtered = drinks.filter(d => d.category === "baqlawa" && typeData.keys.some(key => d.nameAr.includes(key)));
  displayDrinks(filtered);
}

function renderDrinks() {
  if (state.currentFilter === "none") return;
  const filtered = drinks.filter(d => d.category === state.currentFilter);
  displayDrinks(filtered);
}

function displayDrinks(data) {
  DOM.drinksGrid.innerHTML = data.length ? "" : "<p style='color:#aaa; width:100%; text-align:center;'>قريباً...</p>";
  data.forEach((drink, index) => {
    const totalInCart = state.cart.filter(i => i.originalId === drink.id).reduce((s, i) => s + i.quantity, 0);
    const card = document.createElement("div");
    card.className = "drink-card visible";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${drink.image}" alt="${drink.nameAr}">
        ${totalInCart > 0 ? `<div class="card-qty-badge">${totalInCart}</div>` : ''}
      </div>
      <div class="card-body" style="padding:15px; text-align:right;">
        <div style="font-weight:bold; color:white; font-size:1.1rem;">${drink.nameAr}</div>
        <p style="color:#888; font-size:0.8rem; margin:5px 0;">${drink.desc}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
          <span style="color:#d4af37; font-weight:bold;">${drink.price} ج.م</span>
          <button onclick="handleOpenWeights('${drink.id}')" style="background:#d4af37; border:none; padding:7px 15px; border-radius:6px; cursor:pointer; font-weight:bold;">🛍 أضف</button>
        </div>
      </div>
    `;
    DOM.drinksGrid.appendChild(card);
  });
}

// ==========================================
// 6. منطق الأوزان والسلة (Weights & Cart)
// ==========================================
function handleOpenWeights(id) {
  tempSelectedDrink = drinks.find(d => d.id === id);
  DOM.weightModal.classList.remove("hidden");
  DOM.weightModal.classList.add("open");
}

function addToCartFinal(multiplier) {
  const labels = { "1": "كيلو", "0.5": "نصف كيلو", "0.25": "ربع كيلو" };
  const itemId = `${tempSelectedDrink.id}_${multiplier}`;
  
  const existing = state.cart.find(i => i.id === itemId);
  if (existing) {
    existing.quantity++;
  } else {
    state.cart.push({
      id: itemId,
      originalId: tempSelectedDrink.id,
      nameAr: `${tempSelectedDrink.nameAr} (${labels[multiplier]})`,
      price: tempSelectedDrink.price * multiplier,
      quantity: 1
    });
  }

  saveCart();
  closeModals();
  showToast(`تمت إضافة ${labels[multiplier]} للطلب`);
  renderDrinks();
}

function updateQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) state.cart = state.cart.filter(i => i.id !== id);
    saveCart();
    renderCartItems();
    renderDrinks();
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  updateCartUI();
}

function updateCartUI() {
  const count = state.cart.reduce((s, i) => s + i.quantity, 0);
  const total = state.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  DOM.cartCount.textContent = count;
  DOM.cartTotalPrice.textContent = total;
}

function renderCartItems() {
  if (!state.cart.length) {
    DOM.cartItemsList.innerHTML = "<p style='text-align:center; color:#666; padding:20px;'>السلة فارغة حالياً</p>";
    return;
  }
  DOM.cartItemsList.innerHTML = state.cart.map(item => `
    <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; background:#111; padding:10px; border-radius:8px; margin-bottom:8px;">
      <div style="flex:1; text-align:right;">
        <div style="color:white; font-weight:bold; font-size:0.9rem;">${item.nameAr}</div>
        <div style="color:#d4af37; font-size:0.85rem;">${item.price * item.quantity} ج.م</div>
      </div>
      <div style="display:flex; align-items:center; gap:10px; background:#222; padding:5px 10px; border-radius:5px;">
        <button onclick="updateQty('${item.id}', 1)" style="color:#d4af37; background:none; border:none; font-size:1.2rem; cursor:pointer;">+</button>
        <span style="color:white; font-weight:bold;">${item.quantity}</span>
        <button onclick="updateQty('${item.id}', -1)" style="color:#ff4444; background:none; border:none; font-size:1.2rem; cursor:pointer;">-</button>
      </div>
    </div>
  `).join("");
}

// ==========================================
// 7. واتساب والخدمات (Checkout & UI)
// ==========================================
function sendToWhatsapp() {
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();

  if (!name || !phone || !address) return showToast("⚠️ يرجى كتابة بيانات التوصيل");
  if (!state.cart.length) return showToast("⚠️ السلة فارغة");

  const items = state.cart.map(i => `• ${i.nameAr} (العدد: ${i.quantity})`).join('\n');
  const msg = `*طلب جديد من منيو أبو السعود*\n\n*الاسم:* ${name}\n*الهاتف:* ${phone}\n*العنوان:* ${address}\n\n*الطلبات:*\n${items}\n\n*الإجمالي:* ${DOM.cartTotalPrice.textContent} ج.م`;
  
  window.open(`https://wa.me/201070100122?text=${encodeURIComponent(msg)}`, "_blank");
}

function showToast(msg) {
  DOM.toast.textContent = msg;
  DOM.toast.classList.add("show");
  setTimeout(() => DOM.toast.classList.remove("show"), 2500);
}

function closeModals() {
  DOM.cartModal.classList.add("hidden");
  DOM.weightModal.classList.add("hidden");
  DOM.cartModal.classList.remove("open");
  DOM.weightModal.classList.remove("open");
}

function setupEventListeners() {
  // فلاتر الأقسام
  DOM.filterBtns.forEach(btn => btn.addEventListener("click", () => filterDrinks(btn.dataset.filter)));
  
  // فتح السلة
  DOM.cartIconWrap.addEventListener("click", () => {
    renderCartItems();
    DOM.cartModal.classList.remove("hidden");
    DOM.cartModal.classList.add("open");
  });

  // إغلاق المودالات
  document.getElementById("cart-modal-close").onclick = closeModals;
  document.getElementById("weight-modal-close").onclick = closeModals;

  // أزرار الأوزان داخل المودال
  document.querySelectorAll('.weight-btn').forEach(btn => {
    btn.onclick = () => addToCartFinal(parseFloat(btn.dataset.multiplier));
  });

  // زر الواتساب
  DOM.checkoutBtn.onclick = sendToWhatsapp;

  // الضغط خارج المودال للإغلاق
  window.onclick = (e) => {
    if (e.target == DOM.cartModal || e.target == DOM.weightModal) closeModals();
  };
}
      
