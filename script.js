// ========== DATA ==========
const drinks = [
  {
    id: "4",
    nameAr: "1K.g كنافة نابلسية",
    nameEn: "",
    price: 500,
    category: "konafa",
    image: "",
    desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
    ingredients: []
  },
   {
    id: "5",
    nameAr: "1K.g كنافة عربية",
    nameEn: "",
    price: 500 ,
    category: "konafa",
    image: "",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
    ingredients: []
  },
   {
    id: "1",
    nameAr: "صحن نابلسية",
    nameEn: "",
    price: 90,
    category: "konafa",
    image: "",
    desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
    ingredients: []
  },
  {
    id: "2",
    nameAr: "صحن عربية",
    nameEn: "",
    price: 90 ,
    category: "konafa",
    image: "",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
    ingredients: []
  },
  {
    id: "3",
    nameAr: "صحن نابلسية و عربية",
    nameEn: "",
    price: 125,
    category: "konafa",
    image: "",
    desc: "",
    ingredients: []
  },
  {
    id: "10",
    nameAr: "اسبريسو",
    nameEn: "Espresso",
    price: 15,
    category: "baqlawa",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    desc: "قهوة مركزة عالية الجودة بنكهة غنية وعميقة",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "9",
    nameAr: "كابتشينو",
    nameEn: "Cappuccino",
    price: 25,
    category: "namora",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    desc: "قهوة إيطالية تقليدية مع حليب رقيق ورغوة كريمية",
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

// ========== FILTER FUNCTIONALITY ==========
function filterDrinks(category) {
  state.currentFilter = category;
  
  DOM.filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });
  
  renderDrinks();
}

// ========== RENDER DRINKS (المعدلة) ==========
function renderDrinks() {
  if (state.currentFilter === "none") {
    DOM.drinksGrid.innerHTML = "";
    return;
  }

  const filtered = state.currentFilter === "all"
    ? drinks
    : drinks.filter(d => d.category === state.currentFilter);
  
  DOM.drinksGrid.innerHTML = "";
  
  filtered.forEach((drink, index) => {
    const card = createDrinkCard(drink);
    DOM.drinksGrid.appendChild(card);
    
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 50);
  });
}

// ========== CREATE CARD (المعدلة لإضافة زر الطلب مباشرة) ==========
function createDrinkCard(drink) {
  const card = document.createElement("div");
  card.className = "drink-card";
  
  // فحص إذا كان المنتج موجود في السلة لعرض الكمية
  const cartItem = state.cart.find(item => item.id === drink.id);
  const qty = cartItem ? cartItem.quantity : 0;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${drink.image || 'logo.png'}" alt="${drink.nameAr}" loading="lazy" />
      <div class="card-overlay"></div>
      ${qty > 0 ? `<div class="card-qty-badge">${qty}</div>` : ''}
    </div>
    <div class="card-body">
      <div class="card-row">
        <div style="text-align: right;">
          <div class="card-name-ar">${drink.nameAr}</div>
          <div class="card-name-en">${drink.nameEn}</div>
        </div>
        <div class="card-price">
          <strong>${drink.price}</strong>
          <small>ج.م</small>
        </div>
      </div>
      
      <button class="quick-add-btn" onclick="handleQuickAdd(event, '${drink.id}')">
        ${qty > 0 ? '➕ إضافة المزيد' : '🛍 أضف للطلب'}
      </button>
    </div>
  `;
  
  // لغينا فتح المودال هنا عشان الطلب يبقى من برا بس
  return card;
}

// دالة جديدة للتعامل مع الإضافة السريعة وإعادة الرسم فوراً
function handleQuickAdd(event, drinkId) {
  event.stopPropagation(); // منع أي أحداث أخرى
  const drink = drinks.find(d => d.id === drinkId);
  if (drink) {
    addToCart(drink);
    renderDrinks(); // تحديث المنيو فوراً عشان الرقم يظهر على الكرت
  }
}

// تعديل بسيط في addToCart عشان ميقفلش مودال مش مفتوح أصلاً
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
      image: drink.image
    });
  }
  
  saveCart();
  updateCartUI();
  showToast(`تم إضافة ${drink.nameAr} ✓`);
  // closeModal(); <-- لغينا السطر ده عشان ميعملش error
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
      image: drink.image
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
    DOM.cartItemsList.innerHTML = "<p style='text-align:center; color: var(--text-muted); padding: 2rem;'>لا توجد عناصر في السلة</p>";
    return;
  }
  
  DOM.cartItemsList.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nameAr}</div>
        <div class="cart-item-name-en">${item.nameEn}</div>
      </div>
      <div class="cart-qty-control">
        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">−</button>
        <div class="qty-display">${item.quantity}</div>
        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
      </div>
      <div class="cart-item-price">${item.price * item.quantity} ج.م</div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
    </div>
  `).join("");
}

// ========== WHATSAPP CHECKOUT ==========
function sendToWhatsapp() {
  if (state.cart.length === 0) {
    showToast("السلة فارغة");
    return;
  }
  
  const cartSummary = state.cart.map(item => 
    `📍 ${item.nameAr} (${item.nameEn})\n  الكمية: ${item.quantity} × ${item.price} = ${item.price * item.quantity} ج.م`
  ).join("\n\n");
  
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const message = `🍴 *طلب جديد من ABU ALSOUDE* 🍴\n\n${cartSummary}\n\n${'='.repeat(40)}\n💰 *الإجمالي: ${totalPrice} ج.م*`;
  
  const whatsappURL = `https://wa.me/201125933005?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
  
  state.cart = [];
  saveCart();
  updateCartUI();
  closeCartModal();
  showToast("تم إرسال الطلب بنجاح ✓");
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message) {
  DOM.toast.textContent = message;
  DOM.toast.classList.remove("hidden");
  DOM.toast.classList.add("show");
  
  setTimeout(() => {
    DOM.toast.classList.remove("show");
    setTimeout(() => {
      DOM.toast.classList.add("hidden");
    }, 400);
  }, 2500);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
  // تم حذف مستمع حدث التبديل هنا
  
  DOM.filterBtns.forEach(btn => {
    btn.addEventListener("click", () => filterDrinks(btn.dataset.filter));
  });
  
  DOM.modalClose.addEventListener("click", closeModal);
  DOM.modalOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.modalOverlay) closeModal();
  });
  
  DOM.orderBtn.addEventListener("click", () => {
    if (state.selectedDrink) {
      addToCart(state.selectedDrink);
    }
  });
  
  DOM.cartModalClose.addEventListener("click", closeCartModal);
  DOM.cartModalOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.cartModalOverlay) closeCartModal();
  });
  
  DOM.checkoutWhatsapp.addEventListener("click", sendToWhatsapp);
  DOM.cartIconWrap.addEventListener("click", openCartModal);
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCartModal();
    }
  });
}
