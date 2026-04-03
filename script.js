// ========== DATA ==========
const drinks = [
  { id: "k1", nameAr: "كنافة نابلسية", category: "konafa", image: "1.png", price: 500, desc: "كنـافة ناعمة بالسمن البلدي والجبنة النابلسية", hasWeights: true },
  { id: "k2", nameAr: "كنافة عربية", category: "konafa", image: "2.png", price: 500, desc: "حلوى عربية بالسمن والزبدة الفلاحي محشوة بالجوز", hasWeights: true },
  { id: "k3", nameAr: "كنافة اسطنبولية", category: "konafa", image: "2000.jpg", price: 580, desc: "كنـافة خشنة بالسمن البلدي والجبنة", hasWeights: true },
  { id: "k4", nameAr: "اسطنبولية وعربية (نص ونص)", category: "konafa", image: "3.png", price: 540, desc: "مزيج من الطعم الأصيل", hasWeights: true },
  { id: "k5", nameAr: "اسطنبولية ونابلسية (نص ونص)", category: "konafa", image: "503.JPG", price: 540, desc: "مزيج خشن وناعم", hasWeights: true },
  { id: "k6", nameAr: "بورمة قشطة", category: "konafa", image: "1000000.png", price: 500, desc: "كنافة ملفوفة محشية قشطة", hasWeights: true },
  { id: "k7", nameAr: "كلاچ", category: "konafa", image: "500.JPG", price: 400, desc: "رقائق الجلاش محشوة بالقشطة واللبن", hasWeights: true },
  
  // البقلاوة
  { id: "b1", nameAr: "كنافة لوز", category: "baqlawa", image: "10000.png", price: 950, desc: "خيوط الكنافة المحمّصة ومحشية لوز" },
  { id: "b2", nameAr: "بورما فستق حلبي", category: "baqlawa", image: "6.png", price: 1800, desc: "عجينة الكنافة محشوة بالفستق نخب أول" },
  { id: "b3", nameAr: "عش البلبل فستق", category: "baqlawa", image: "7.png", price: 1650, desc: "كنافة دائرية محشوة فستق" },
  { id: "b4", nameAr: "بلوريا حمراء", category: "baqlawa", image: "8.png", price: 1800, desc: "حلوي شامية محشوة فستق" },
  { id: "b5", nameAr: "بلوريا بيضاء", category: "baqlawa", image: "9.png", price: 1800, desc: "حلوي شامية محشوة فستق" },
  { id: "b6", nameAr: "صره فستق حلبي", category: "baqlawa", image: "10.png", price: 1950, desc: "جلاش محشو فستق نخب أول" },
  { id: "b7", nameAr: "بستاشيو ابو السعود", category: "baqlawa", image: "17.png", price: 2200, desc: "شيكولاتة بلجيكية وكنافة بالفستق" },
  { id: "b8", nameAr: "معمول عجوة", category: "baqlawa", image: "28.png", price: 700, desc: "سميد محشو بمعجون التمر" },
  { id: "b9", nameAr: "غريبة", category: "baqlawa", image: "IMG_1.JPG", price: 400, desc: "تذوب في الفم ومزينة بالفستق" },
  
  // النمورة
  { id: "n1", nameAr: "نمورة بالزبد البلدي", category: "namora", image: "33.png", price: 360, desc: "حلوى عربية بالسمن والزبدة الفلاحي" },
  { id: "n2", nameAr: "نمورة محشية لوز", category: "namora", image: "IMG_2.JPG", price: 420, desc: "حلوى عربية محشوة باللوز الحلو" }
];

const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  currentFilter: "none",
  selectedDrink: null
};

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
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  hideLoadingScreen();
  updateCartUI();
});

function hideLoadingScreen() {
  setTimeout(() => {
    DOM.loadingScreen.classList.add("fade-out");
    setTimeout(() => DOM.loadingScreen.style.display = "none", 800);
  }, 1500);
}

const baqlawaTypes = [
  { id: 'fustuk', name: 'بقلاوة فستق', keys: ['فستق', 'بستاشيو', 'بلوريا', 'صره', 'اسيا', 'دولمة', 'اساور'] },
  { id: 'loz', name: 'بقلاوة لوز/كاجو', keys: ['لوز','بندق','كاجو','جوز'] },
  { id: 'mix', name: 'نواشف ومعمول', keys: ['عجوة' ,'معمول','غريبة'] }
];

function filterDrinks(category) {
  state.currentFilter = category;
  const subContainer = document.getElementById("sub-filters-container");
  DOM.filterBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === category));

  if (category === "baqlawa") {
    subContainer.style.display = "flex";
    subContainer.innerHTML = baqlawaTypes.map(type => `
      <button class="filter-btn sub-btn" onclick="filterSubCategory('${type.id}')">
        ${type.name}
      </button>`).join("");
    DOM.drinksGrid.innerHTML = `<p class="select-hint">اختر نوع البقلاوة المفضل لديك</p>`;
  } else {
    subContainer.style.display = "none";
    renderDrinks();
  }
}

function filterSubCategory(subId) {
  const typeData = baqlawaTypes.find(t => t.id === subId);
  const filtered = drinks.filter(d => d.category === "baqlawa" && typeData.keys.some(key => d.nameAr.includes(key)));
  displayFilteredDrinks(filtered);
}

function renderDrinks() {
  if (state.currentFilter === "none") return;
  const filtered = drinks.filter(d => d.category === state.currentFilter);
  displayFilteredDrinks(filtered);
}

function displayFilteredDrinks(data) {
  DOM.drinksGrid.innerHTML = "";
  data.forEach((drink, index) => {
    const card = createDrinkCard(drink);
    DOM.drinksGrid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), index * 30);
  });
}

function createDrinkCard(drink) {
  const card = document.createElement("div");
  card.className = "drink-card";
  const totalQty = state.cart.filter(item => item.id === drink.id).reduce((sum, i) => sum + i.quantity, 0);

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${drink.image}" alt="${drink.nameAr}" loading="lazy" />
      ${totalQty > 0 ? `<div class="card-qty-badge">${totalQty}</div>` : ''}
    </div>
    <div class="card-body">
      <div class="card-name-ar">${drink.nameAr}</div>
      <p class="card-desc-simple">${drink.desc}</p>
      <div class="card-footer">
        <div class="card-price"><strong>${drink.price}</strong> <small>ج.م</small></div>
        <button class="quick-add-btn" onclick="openModalById('${drink.id}')">🛍 اضف للسلة</button>
      </div>
    </div>`;
  return card;
}
function openModalById(id) {
  const drink = drinks.find(d => d.id === id);
  state.selectedDrink = drink;
  document.getElementById("modal-img").src = drink.image;
  document.getElementById("modal-name-ar").textContent = drink.nameAr;
  document.getElementById("modal-price").textContent = drink.price;
  document.getElementById("modal-desc").textContent = drink.desc;
  
  // إعادة تعيين الوزن لـ 1 كيلو عند الفتح
  const weightSelect = document.getElementById("weight-select");
  if(weightSelect) weightSelect.value = "1";

  DOM.modalOverlay.classList.remove("hidden");
  DOM.modalOverlay.classList.add("open");
}

function closeModal() {
  DOM.modalOverlay.classList.remove("open");
  setTimeout(() => DOM.modalOverlay.classList.add("hidden"), 300);
}

function addToCart() {
  const drink = state.selectedDrink;
  const weightSelect = document.getElementById("weight-select");
  const weightVal = weightSelect ? weightSelect.value : "1";
  const weightLabels = { "1": "كيلو", "0.5": "نصف كيلو", "0.25": "ربع كيلو" };
  
  // حساب السعر بناء على الوزن
  const basePrice = drink.price;
  let finalPrice = basePrice;
  if(weightVal === "0.5") finalPrice = Math.ceil(basePrice / 2);
  else if(weightVal === "0.25") finalPrice = Math.ceil(basePrice / 4);

  const cartId = `${drink.id}-${weightVal}`;
  const existing = state.cart.find(i => i.cartId === cartId);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      cartId,
      id: drink.id,
      nameAr: `${drink.nameAr} (${weightLabels[weightVal]})`,
      price: finalPrice,
      quantity: 1
    });
  }
  
  saveCart();
  updateCartUI();
  closeModal();
  showToast("تمت الإضافة للسلة ✓");
  renderDrinks();
}

function renderCartItems() {
  if (state.cart.length === 0) {
    DOM.cartItemsList.innerHTML = "<p style='text-align:center; color:#aaa; padding:20px;'>السلة فارغة</p>";
    return;
  }

  const itemsHtml = state.cart.map(item => `
    <div class="cart-item">
      <div style="flex:1; text-align:right;">
        <div style="font-weight:bold; color:#fff;">${item.nameAr}</div>
        <div style="color:#d4af37;">${item.price * item.quantity} ج.م</div>
      </div>
      <div class="qty-control">
        <button onclick="changeQty('${item.cartId}', -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeQty('${item.cartId}', 1)">+</button>
      </div>
    </div>`).join("");

  const formHtml = `
    <div class="checkout-form" id="customer-form">
      <input type="text" id="cust-name" placeholder="الاسم بالكامل">
      <input type="tel" id="cust-phone" placeholder="رقم الموبايل">
      <input type="text" id="cust-address" placeholder="العنوان">
      <textarea id="cust-notes" placeholder="ملاحظات الطلب"></textarea>
    </div>`;

  DOM.cartItemsList.innerHTML = itemsHtml + formHtml;
}

function changeQty(cartId, delta) {
  const item = state.cart.find(i => i.cartId === cartId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) state.cart = state.cart.filter(i => i.cartId !== cartId);
    saveCart();
    updateCartUI();
    renderCartItems();
    renderDrinks();
  }
}

function sendToWhatsapp() {
  const name = document.getElementById('cust-name')?.value.trim();
  const phone = document.getElementById('cust-phone')?.value.trim();
  const address = document.getElementById('cust-address')?.value.trim();
  const notes = document.getElementById('cust-notes')?.value.trim();

  if (!name || !phone || !address) {
    showToast("⚠️ يرجى إكمال البيانات");
    return;
  }

  const summary = state.cart.map(i => `• ${i.nameAr} [${i.quantity} قطعة]`).join("\n");
  const total = state.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  const msg = `*طلب جديد من حلويات أبو السعود*\n\n👤: ${name}\n📞: ${phone}\n📍: ${address}\n📝: ${notes}\n\n*الطلبات:*\n${summary}\n\n💰 الإجمالي: ${total} ج.م`;
  
  window.open(`https://wa.me/201070100122?text=${encodeURIComponent(msg)}`, "_blank");
  state.cart = [];
  saveCart();
  updateCartUI();
  location.reload(); // لإعادة تصفير كل شيء
}

function saveCart() { localStorage.setItem("cart", JSON.stringify(state.cart)); }
function updateCartUI() {
  const count = state.cart.reduce((s, i) => s + i.quantity, 0);
  const total = state.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  DOM.cartCount.textContent = count;
  DOM.cartTotalPrice.textContent = total;
}

function showToast(m) {
  DOM.toast.textContent = m;
  DOM.toast.classList.add("show");
  setTimeout(() => DOM.toast.classList.remove("show"), 2000);
}

function setupEventListeners() {
  DOM.filterBtns.forEach(btn => btn.addEventListener("click", () => filterDrinks(btn.dataset.filter)));
  DOM.modalClose.addEventListener("click", closeModal);
  DOM.orderBtn.addEventListener("click", addToCart);
  DOM.cartIconWrap.addEventListener("click", () => { renderCartItems(); DOM.cartModalOverlay.classList.add("open"); DOM.cartModalOverlay.classList.remove("hidden"); });
  DOM.cartModalClose.addEventListener("click", () => DOM.cartModalOverlay.classList.remove("open"));
  DOM.checkoutWhatsapp.addEventListener("click", sendToWhatsapp);
}
