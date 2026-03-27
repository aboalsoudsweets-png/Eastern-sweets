const drinks = [
    { id:"c1", nameAr:"اسبريسو", nameEn:"Espresso", price:15, category:"coffee", image:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500", desc:"قهوة مركزة غنية.", ingredients:["أرابيكا 100%"] },
    { id:"c2", nameAr:"لاتيه", nameEn:"Latte", price:20, category:"coffee", image:"https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500", desc:"اسبريسو مع حليب ناعم.", ingredients:["اسبريسو","حليب"] }
];

let cart = JSON.parse(localStorage.getItem("myCart")) || [];

// 1. وظيفة عرض الكروت
function renderCards(filter = "all") {
    const grid = document.getElementById("drinks-grid");
    if(!grid) return;
    const list = filter === "all" ? drinks : drinks.filter(d => d.category === filter);
    grid.innerHTML = list.map(d => `
        <div class="drink-card visible" onclick='openModal(${JSON.stringify(d)})'>
            <img src="${d.image}" style="width:100%">
            <h3>${d.nameAr}</h3>
            <p>${d.price} ر.س</p>
        </div>
    `).join("");
}

// 2. وظيفة المودال
function openModal(drink) {
    document.getElementById("modal-img").src = drink.image;
    document.getElementById("modal-name-ar").textContent = drink.nameAr;
    document.getElementById("modal-price").textContent = drink.price;
    document.getElementById("modal-desc").textContent = drink.desc;
    document.getElementById("modal-overlay").classList.remove("hidden");
    
    document.getElementById("order-btn").onclick = () => {
        cart.push(drink);
        localStorage.setItem("myCart", JSON.stringify(cart));
        document.getElementById("cart-count").textContent = cart.length;
        document.getElementById("modal-overlay").classList.add("hidden");
    };
}

// 3. فتح وإغلاق السلة
document.getElementById("cart-icon-wrap").onclick = () => {
    const list = document.getElementById("cart-items-list");
    let total = 0;
    list.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `<div>${item.nameAr} - ${item.price} ر.س</div>`;
    }).join("");
    document.getElementById("cart-total-price").textContent = total;
    document.getElementById("cart-modal-overlay").classList.remove("hidden");
};

document.getElementById("cart-modal-close").onclick = () => {
    document.getElementById("cart-modal-overlay").classList.add("hidden");
};

document.getElementById("modal-close").onclick = () => {
    document.getElementById("modal-overlay").classList.add("hidden");
};

// 4. واتساب
document.getElementById("checkout-whatsapp").onclick = () => {
    let msg = "طلب جديد من MR CAFE:%0a" + cart.map(i => `- ${i.nameAr}`).join("%0a");
    window.open(`https://wa.me/201125933005?text=${msg}`);
};

// تشغيل عند التحميل
window.onload = () => {
    renderCards();
    document.getElementById("cart-count").textContent = cart.length;
    setTimeout(() => document.getElementById("loading-screen").style.display="none", 1000);
};
