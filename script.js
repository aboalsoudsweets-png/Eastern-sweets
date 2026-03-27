// 1. قاعدة بيانات المشروبات
const drinks = [
  { id: 1, nameAr: "اسبريسو", nameEn: "Espresso", price: 15, category: "coffee", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500", desc: "قهوة مركزة بنكهة غنية وعميقة.", ingredients: ["حبوب أرابيكا 100%", "ماء مفلتر"] },
  { id: 2, nameAr: "لاتيه", nameEn: "Latte", price: 20, category: "coffee", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500", desc: "مزيج ناعم من الاسبريسو والحليب المبخر.", ingredients: ["اسبريسو", "حليب طازج", "رغوة خفيفة"] },
  { id: 3, nameAr: "كابتشينو", nameEn: "Cappuccino", price: 22, category: "coffee", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500", desc: "توازن مثالي بين الاسبريسو والحليب والرغوة الغنية.", ingredients: ["اسبريسو", "حليب", "رغوة كثيفة"] },
  { id: 4, nameAr: "آيس كراميل ماكياتو", nameEn: "Iced Caramel Macchiato", price: 25, category: "cold", image: "https://images.unsplash.com/photo-1461023058943-07fcaf1f17e7?w=500", desc: "قهوة مثلجة مع طبقات الكراميل والحليب.", ingredients: ["سيروب كراميل", "حليب مثلج", "اسبريسو"] }
];

// 2. المتغيرات الأساسية
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
const drinksGrid = document.getElementById("drinks-grid");
const cartCountEl = document.getElementById("cart-count");

// تحديث العداد عند تشغيل الصفحة
if (cartCountEl) cartCountEl.textContent = cart.length;

// 3. وظيفة عرض المشروبات
function renderCards() {
  if (!drinksGrid) return;
  drinksGrid.innerHTML = drinks.map(drink => `
    <div class="drink-card visible" onclick='openDrinkModal(${JSON.stringify(drink)})'>
      <div class="card-img-wrap"><img src="${drink.image}" alt="${drink.nameEn}"></div>
      <div class="card-body">
        <div class="card-name-ar">${drink.nameAr}</div>
        <div class="card-price"><strong>${drink.price} ر.س</strong></div>
        <div class="card-action">عرض التفاصيل ←</div>
      </div>
    </div>
  `).join("");
}

// 4. وظيفة مودال تفاصيل المشروب
window.openDrinkModal = function(drink) {
  document.getElementById("modal-img").src = drink.image;
  document.getElementById("modal-name-ar").textContent = drink.nameAr;
  document.getElementById("modal-name-en").textContent = drink.nameEn;
  document.getElementById("modal-price").textContent = drink.price;
  document.getElementById("modal-desc").textContent = drink.desc;
  document.getElementById("modal-ing-list").innerHTML = drink.ingredients.map(i => `<li>${i}</li>`).join("");
  
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("hidden");
  modal.classList.add("open");

  document.getElementById("order-btn").onclick = () => {
    addToCart(drink);
    modal.classList.add("hidden");
  };
};

// 5. وظيفة الإضافة للسلة
function addToCart(drink) {
  cart.push(drink);
  localStorage.setItem("myCart", JSON.stringify(cart));
  if (cartCountEl) cartCountEl.textContent = cart.length;
  showToast(`تمت إضافة ${drink.nameAr} للسلة`);
}

// 6. برمجة فتح وإغلاق السلة (Cart Modal)
const cartIcon = document.getElementById("cart-icon-wrap");
const cartModal = document.getElementById("cart-modal-overlay");
const cartClose = document.getElementById("cart-modal-close");

if (cartIcon) {
  cartIcon.onclick = () => {
    renderCartItems();
    cartModal.classList.remove("hidden");
    cartModal.classList.add("open");
  };
}

if (cartClose) {
  cartClose.onclick = () => {
    cartModal.classList.add("hidden");
    cartModal.classList.remove("open");
  };
}

// 7. عرض محتويات السلة
function renderCartItems() {
  const list = document.getElementById("cart-items-list");
  const totalEl = document.getElementById("cart-total-price");
  let total = 0;

  if (cart.length === 0) {
    list.innerHTML = "<p style='text-align:center; padding:1rem;'>السلة فارغة ☕</p>";
    totalEl.textContent = "0";
    return;
  }

  list.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; margin-bottom:10px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${item.image}" style="width:40px; height:40px; border-radius:5px; object-fit:cover;">
          <span>${item.nameAr}</span>
        </div>
        <button onclick="removeFromCart(${index})" style="background:none; border:none; cursor:pointer;">🗑️</button>
      </div>
    `;
  }).join("");
  totalEl.textContent = total;
}

// 8. حذف من السلة
window.removeFromCart = function(index) {
  cart.splice(index, 1);
  localStorage.setItem("myCart", JSON.stringify(cart));
  cartCountEl.textContent = cart.length;
  renderCartItems();
};

// 9. إرسال للواتساب (رقمك المعتمد)
document.getElementById("checkout-whatsapp").onclick = () => {
  if (cart.length === 0) return alert("السلة فارغة!");
  
  let msg = "مرحباً MR CAFE، طلب جديد:%0a%0a";
  let total = 0;
  cart.forEach((item, i) => {
    msg += `${i+1}. ${item.nameAr} (${item.price} ر.س)%0a`;
    total += item.price;
  });
  msg += `%0a💰 الإجمالي: ${total} ر.س`;
  
  window.open(`https://wa.me/201125933005?text=${msg}`, "_blank");
};

// 10. التنبيه (Toast)
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}

// إغلاق المودالات عند الضغط في الخارج
window.onclick = function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.add("hidden");
  }
};

// تشغيل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  // إخفاء شاشة التحميل بعد ثانية
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(() => document.getElementById("loading-screen").style.display = "none", 500);
  }, 1000);
});
