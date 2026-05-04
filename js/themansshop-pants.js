$(document).ready(function () {
    const cartCountEl = document.getElementById("cartCount");
    const heartButtons = document.querySelectorAll(".heart");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    function updateCartCount() {
        if (cartCountEl) {
            cartCountEl.textContent = cartItems.length;
        }
    }

    heartButtons.forEach((heart, index) => {
        const productCard =
            heart.closest(".prdList-grid4") ||
            heart.closest(".product-item") ||
            heart.closest("[id^='anchorBoxId']");

        let productId = productCard ? productCard.getAttribute("id") : null;

        if (!productId || productId.trim() === "") {
            productId = `product-${index}`;
        }

        heart.dataset.productId = productId;

        const heartLi = heart.querySelector("li");

        if (cartItems.includes(productId)) {
            if (heartLi) {
                heartLi.classList.add("active");
            }
        }

        heart.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const currentId = heart.dataset.productId;

            if (cartItems.includes(currentId)) {
                cartItems = cartItems.filter(item => item !== currentId);
                if (heartLi) {
                    heartLi.classList.remove("active");
                }
            } else {
                cartItems.push(currentId);
                if (heartLi) {
                    heartLi.classList.add("active");
                }
            }

            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            updateCartCount();
        });
    });

    updateCartCount();

    window.addEventListener("scroll", function () {
        const nav = document.querySelector(".nanb");
        if (!nav) return;

        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        topBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const sortToggle = document.getElementById("sortToggle");
    const sortMenu = document.getElementById("sortMenu");
    const filterItems = document.querySelectorAll("#sortMenu li");
    const productGroups = document.querySelectorAll(".contact-grid .prdList-grid4");
    const productTotal = document.getElementById("productTotal");

    function updateProductCount() {
        const visibleItems = document.querySelectorAll(".contact-grid .prdList-grid4:not(.hide)");
        if (productTotal) {
            productTotal.textContent = "(" + visibleItems.length + ")";
        }
    }

    function filterProducts(filter) {
        productGroups.forEach((group) => {
            const img = group.querySelector("img");
            if (!img) return;

            const category = img.alt.trim().toLowerCase();

            if (filter === "all" || category === filter) {
                group.classList.remove("hide");
            } else {
                group.classList.add("hide");
            }
        });

        updateProductCount();
    }

    updateProductCount();

    if (sortToggle && sortMenu) {
        sortToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            sortMenu.classList.toggle("active");
        });
    }

    filterItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function () {
            const filter = this.dataset.filter;
            const text = this.textContent.trim();

            filterProducts(filter);

            if (sortToggle) {
                sortToggle.innerHTML = `${text} <span class="arrow">⌄</span>`;
            }

            if (sortMenu) {
                sortMenu.classList.remove("active");
            }
        });
    });

    document.addEventListener("click", function (e) {
        if (
            sortMenu &&
            sortToggle &&
            !sortMenu.contains(e.target) &&
            !sortToggle.contains(e.target)
        ) {
            sortMenu.classList.remove("active");
        }
    });

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeBtn = document.getElementById("closeBtn");

    if (menuBtn && sideMenu && menuOverlay && closeBtn) {
        function openMenu() {
            sideMenu.classList.add("active");
            menuOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        function closeMenu() {
            sideMenu.classList.remove("active");
            menuOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }

        menuBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openMenu();
        });

        closeBtn.addEventListener("click", function () {
            closeMenu();
        });

        menuOverlay.addEventListener("click", function () {
            closeMenu();
        });
    }
});