const drinks = [
  { id:"c1", nameAr:"اسبريسو", nameEn:"Espresso", price:15, category:"coffee",
    image:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    desc:"قهوة مركزة بنكهة غنية وعميقة. أساس كل تجربة قهوة فاخرة.",
    ingredients:["حبوب أرابيكا 100%","ماء مفلتر"] },
  { id:"c2", nameAr:"كابوتشينو", nameEn:"Cappuccino", price:20, category:"coffee",
    image:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
    desc:"توازن مثالي بين الإسبريسو الغني والحليب المبخر والرغوة الكثيفة.",
    ingredients:["إسبريسو","حليب مبخر","رغوة الحليب","مسحوق كاكاو (اختياري)"] },
  { id:"c3", nameAr:"لاتيه", nameEn:"Cafe Latte", price:22, category:"coffee",
    image:"https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80",
    desc:"إسبريسو عميق الطعم ممزوج بحليب مبخر ناعم مع رغوة خفيفة.",
    ingredients:["إسبريسو","حليب مبخر","رغوة خفيفة"] },
  { id:"c4", nameAr:"موكا", nameEn:"Caffe Mocha", price:25, category:"coffee",
    image:"https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80",
    desc:"إسبريسو مع صلصة الموكا والحليب المبخر وكريمة مخفوقة فوقها.",
    ingredients:["إسبريسو","صلصة موكا","حليب مبخر","كريمة مخفوقة"] },
  { id:"c5", nameAr:"أمريكانو", nameEn:"Americano", price:18, category:"coffee",
    image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    desc:"شوت إسبريسو يُضاف إليه ماء ساخن ليُعطي كوباً غنياً بعمق استثنائي.",
    ingredients:["إسبريسو","ماء ساخن"] },
  { id:"c6", nameAr:"فلات وايت", nameEn:"Flat White", price:23, category:"coffee",
    image:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
    desc:"ريستريتو مركز مع حليب كامل الدسم مبخر — قوي بدون ثقل.",
    ingredients:["ريستريتو","حليب كامل الدسم مبخر"] },
  { id:"t1", nameAr:"شاي أخضر", nameEn:"Green Tea", price:15, category:"tea",
    image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    desc:"أوراق شاي أخضر فاخرة تُنقع ببطء، غنية بمضادات الأكسدة.",
    ingredients:["أوراق شاي أخضر ممتازة","ماء ساخن","عسل (اختياري)"] },
  { id:"t2", nameAr:"شاي بالنعناع", nameEn:"Mint Tea", price:18, category:"tea",
    image:"https://images.unsplash.com/photo-1530482054429-cc491f61333b?w=800&q=80",
    desc:"مزيج مهدئ من الشاي الأسود وأوراق النعناع الطازجة.",
    ingredients:["شاي أسود","أوراق نعناع طازجة","سكر أو عسل"] },
  { id:"cd1", nameAr:"قهوة مثلجة", nameEn:"Iced Coffee", price:25, category:"cold",
    image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    desc:"قهوة طازجة التحضير تُقدم بارداً فوق ثلج متكسر.",
    ingredients:["قهوة مخمرة","ثلج","شراب كلاسيك"] },
  { id:"cd2", nameAr:"لاتيه مثلج", nameEn:"Iced Latte", price:28, category:"cold",
    image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80",
    desc:"إسبريسو مع الحليب البارد والثلج — تجربة ريفريشينج.",
    ingredients:["إسبريسو","حليب بارد","ثلج"] },
  { id:"cd3", nameAr:"فرابيه", nameEn:"Frappuccino", price:30, category:"cold",
    image:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
    desc:"مشروب مُمزوج من القهوة والحليب والثلج فوقه كريمة مخفوقة.",
    ingredients:["قهوة روست","حليب كامل","ثلج","كريمة مخفوقة"] },
  { id:"cd4", nameAr:"عصير برتقال", nameEn:"Fresh Orange Juice", price:20, category:"cold",
    image:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80",
    desc:"عصير برتقال طازج 100% — نقي ومشرق ومليء بفيتامين C.",
    ingredients:["برتقال طازج"] },
  { id:"cd5", nameAr:"ليموناضة", nameEn:"Classic Lemonade", price:20, category:"cold",
    image:"https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=800&q=80",
    desc:"توازن منعش بين الحامض والحلو، يُقدم بارداً.",
    ingredients:["عصير ليمون طازج","ماء","شراب سكر","ثلج"] },
  { id:"s1", nameAr:"سموذي مانجو", nameEn:"Mango Smoothie", price:30, category:"smoothie",
    image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80",
    desc:"مزيج استوائي من المانجو الحلوة مع الزبادي ولمسة عسل.",
    ingredients:["بيوريه مانجو","زبادي يوناني","عسل","ثلج"] },
  { id:"s2", nameAr:"سموذي توت", nameEn:"Berry Smoothie", price:32, category:"smoothie",
    image:"https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=800&q=80",
    desc:"مزيج من الفراولة والتوت الأزرق والأحمر غني بمضادات الأكسدة.",
    ingredients:["توت مشكل","حليب لوز","أجاف","ثلج"] },
  { id:"s3", nameAr:"سموذي خضار", nameEn:"Green Detox Smoothie", price:28, category:"smoothie",
    image:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80",
    desc:"مشروب صحي من السبانخ والتفاح الأخضر والخيار والزنجبيل.",
    ingredients:["سبانخ","تفاح أخضر","خيار","زنجبيل","ماء جوز الهند"] }
];

const categoryEmoji = { coffee:"☕", tea:"🍵", cold:"🧃", smoothie:"🥤" };
let activeFilter = "all";

// نظام السلة - تعريف المتغيرات والعناصر
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
const cartCountEl   = document.getElementById("cart-count");
const cartModal     = document.getElementById("cart-modal-overlay");
const cartItemsList = document.getElementById("cart-items-list");
const cartTotalEl   = document.getElementById("cart-total-price");
const cartIconWrap  = document.getElementById("cart-icon-wrap");
const cartModalClose= document.getElementById("cart-modal-close");
const checkoutBtn   = document.getElementById("checkout-whatsapp");

// تحديث العداد فوراً
if (cartCountEl) cartCountEl.textContent = cart.length;


const loadingScreen = document.getElementById("loading-screen");
const navbar        = document.getElementById("navbar");
const heroBg        = document.getElementById("hero-bg");
const drinksGrid    = document.getElementById("drinks-grid");
const modalOverlay  = document.getElementById("modal-overlay");
const modalImg      = document.getElementById("modal-img");
const modalNameAr   = document.getElementById("modal-name-ar");
const modalNameEn   = document.getElementById("modal-name-en");
const modalPrice    = document.getElementById("modal-price");
const modalDesc     = document.getElementById("modal-desc");
const modalIngList  = document.getElementById("modal-ing-list");
const modalClose    = document.getElementById("modal-close");
const orderBtn      = document.getElementById("order-btn");
const toast         = document.getElementById("toast");
const themeToggle   = document.getElementById("theme-toggle");
const yearEl        = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme
const savedTheme = localStorage.getItem("mr-cafe-theme") || "dark";
document.documentElement.className = savedTheme;
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
  document.documentElement.className = next;
  localStorage.setItem("mr-cafe-theme", next);
});

// Loading screen
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => { loadingScreen.style.display = "none"; }, 900);
  }, 2800);
});

// Navbar scroll
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// Parallax
window.addEventListener("scroll", () => {
  const ratio = window.scrollY / window.innerHeight;
  heroBg.style.transform = `scale(1.08) translateY(${ratio * 30}%)`;
});

// Render cards
function renderCards(filter) {
  drinksGrid.innerHTML = "";
  const list = filter === "all" ? drinks : drinks.filter(d => d.category === filter);
  if (!list.length) {
    drinksGrid.innerHTML = `<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;padding:4rem 0">لا توجد مشروبات في هذا التصنيف</p>`;
    return;
  }
  list.forEach((drink, i) => {
    const card = document.createElement("div");
    card.className = "drink-card";
    card.style.transitionDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${drink.image}" alt="${drink.nameEn}" loading="lazy"/>
        <div class="card-overlay"></div>
        <div class="card-glow"></div>
        <span class="card-badge">${categoryEmoji[drink.category]}</span>
      </div>
      <div class="card-body">
        <div class="card-row">
          <div>
            <p class="card-name-ar">${drink.nameAr}</p>
            <p class="card-name-en">${drink.nameEn}</p>
          </div>
          <div class="card-price">
            <strong>${drink.price}</strong>
            <small>ر.س</small>
          </div>
        </div>
        <p class="card-cta">عرض التفاصيل ←</p>
      </div>`;
    card.addEventListener("click", () => openModal(drink));
    drinksGrid.appendChild(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add("visible")));
  });
  observeCards();
}

function observeCards() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin:"0px 0px -40px 0px" });
  document.querySelectorAll(".drink-card").forEach(c => obs.observe(c));
}

// Filters
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderCards(activeFilter);
  });
});

// Modal
function openModal(drink) {
  modalImg.src = drink.image; modalImg.alt = drink.nameEn;
  modalNameAr.textContent = drink.nameAr;
  modalNameEn.textContent = drink.nameEn;
  modalPrice.textContent  = drink.price;
  modalDesc.textContent   = drink.desc;
  modalIngList.innerHTML  = drink.ingredients.map(i => `<li>${i}</li>`).join("");
  modalOverlay.classList.remove("hidden","closing");
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  orderBtn.onclick = () => { 
    // إضافة المشروب الحالي لمصفوفة السلة
    cart.push(drink);
    
    // حفظ السلة المحدثة في ذاكرة المتصفح
    localStorage.setItem("myCart", JSON.stringify(cart));
    
    // تحديث رقم العداد الموجود فوق أيقونة السلة
    if (cartCountEl) cartCountEl.textContent = cart.length;
    
    // إغلاق النافذة المنبثقة وإظهار رسالة التأكيد
    closeModal(); 
    showToast(`✅ تمت إضافة ${drink.nameAr} للطلب!`); 
};

}
function closeModal() {
  modalOverlay.classList.remove("open");
  modalOverlay.classList.add("closing");
  document.body.style.overflow = "";
  setTimeout(() => { modalOverlay.classList.add("hidden"); modalOverlay.classList.remove("closing"); }, 320);
}
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// Toast
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.remove("hidden");
  requestAnimationFrame(() => toast.classList.add("show"));
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 400);
  }, 3000);
}

renderCards("all");



// 1. دالة عرض محتويات السلة وتحديث الإجمالي
function renderCartItems() {
    cartItemsList.innerHTML = "";
    let total = 0;
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = "<p style='text-align:center; padding:1rem;'>السلة فارغة ☕</p>";
        cartTotalEl.textContent = "0";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement("div");
        itemDiv.style = "display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; margin-bottom:10px; border:1px solid rgba(255,255,255,0.1);";
        itemDiv.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="${item.image}" style="width:40px; height:40px; border-radius:5px; object-fit:cover;">
                <span>${item.nameAr}</span>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">🗑️</button>`;
        cartItemsList.appendChild(itemDiv);
    });
    cartTotalEl.textContent = total;
}

// 2. دالة حذف صنف معين من السلة
window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("myCart", JSON.stringify(cart));
    if (cartCountEl) cartCountEl.textContent = cart.length;
    renderCartItems(); // إعادة عرض السلة بعد الحذف
};

// 3. برمجة فتح وإغلاق نافذة السلة
if (cartIconWrap) {
    cartIconWrap.onclick = () => {
        renderCartItems();
        cartModal.classList.remove("hidden");
        cartModal.classList.add("open");
        document.body.style.overflow = "hidden"; // منع سكرول الصفحة خلف السلة
    };
}

if (cartModalClose) {
    cartModalClose.onclick = () => {
        cartModal.classList.add("hidden");
        cartModal.classList.remove("open");
        document.body.style.overflow = ""; // إعادة السكرول
    };
}

// 4. زر إرسال الطلب للواتساب
if (checkoutBtn) {
    checkoutBtn.onclick = () => {
        if (cart.length === 0) {
            alert("سلتك فارغة، أضف بعض المشروبات أولاً!");
            return;
        }
        
        let msg = "مرحباً MR CAFE، أريد طلب الآتي:%0a%0a";
        let total = 0;
        cart.forEach((item, i) => {
            msg += `${i + 1}. *${item.nameAr}* (${item.price} ر.س)%0a`;
            total += item.price;
        });
        msg += `%0a💰 *الإجمالي: ${total} ر.س*`;
        
        // استبدل الرقم بالرقم الخاص بك
        window.open(`https://wa.me/201125933005?text=${msg}`, "_blank");
    };
}
