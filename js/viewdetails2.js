$(document).ready(function () {
    document.querySelectorAll(".user-id").forEach(el => {
        const id = el.dataset.id;
        el.textContent = id.slice(0, 3) + '*'.repeat(id.length - 3);
    });

    document.querySelectorAll(".toggle-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const talking = btn.closest(".talking");
            const content = talking.querySelector(".review-content");
            const isOpen = talking.classList.contains("active");

            if (isOpen) {
                content.style.maxHeight = "0px";
                talking.classList.remove("active");
                btn.textContent = "펼치기";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                talking.classList.add("active");
                btn.textContent = "접기";
            }
        });
    });

    const likeBox = document.getElementById("likeBox");
    const likeCount = document.getElementById("likeCount");
    const heartIcon = document.getElementById("heartIcon");

    if (likeBox && likeCount && heartIcon) {
        let liked = localStorage.getItem("liked") === "true";

        if (liked) {
            likeBox.classList.add("active");
            heartIcon.textContent = "♥";
            likeCount.textContent = "12";
        } else {
            likeBox.classList.remove("active");
            heartIcon.textContent = "♡";
            likeCount.textContent = "11";
        }

        likeBox.addEventListener("click", () => {
            if (!liked) {
                likeCount.textContent = "12";
                likeBox.classList.add("active");
                heartIcon.textContent = "♥";
                liked = true;
                localStorage.setItem("liked", "true");
            } else {
                likeCount.textContent = "11";
                likeBox.classList.remove("active");
                heartIcon.textContent = "♡";
                liked = false;
                localStorage.setItem("liked", "false");
            }
        });
    }

    const cartCountEl = document.getElementById("cartCount");
    const cartBtn = document.querySelector(".keeping a");

    let cartCount = 0;
    let added = false;

    if (cartCountEl) {
        cartCountEl.textContent = cartCount;
    }

    if (cartBtn) {
        cartBtn.addEventListener("click", function (e) {
            e.preventDefault();

            if (added) return;

            cartCount += 1;
            added = true;

            localStorage.setItem("cartCount", cartCount);
            localStorage.setItem("added-detail", "true");

            if (cartCountEl) {
                cartCountEl.textContent = cartCount;
            }
        });
    }
    const tabs = document.querySelectorAll(".detail-tabs .tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {

            tabs.forEach(item => item.classList.remove("active"));
            this.classList.add("active");


            contents.forEach(item => item.classList.remove("active"));
            contents[index].classList.add("active");
        });
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
    const mainImg = document.getElementById("mainImg");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const thumbs = document.querySelectorAll(".thumb");

    // 메인 이미지 클릭 시 확대
    mainImg.addEventListener("click", () => {
        lightboxImg.src = mainImg.src;
        lightbox.classList.add("active");
    });

    // 라이트박스 닫기
    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // 썸네일 클릭 시 메인 이미지 변경
    thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
            mainImg.src = thumb.src;

            thumbs.forEach((t) => t.classList.remove("active"));
            thumb.classList.add("active");
        });
    });




    const basePrice = 65000;
    const productTitle = "마르그레데이션셔츠";

    let selectedColor = "그레이";
    let selectedSize = "";
    let qty = 1;

    const colorBtns = document.querySelectorAll(".color-btn");
    const sizeBtns = document.querySelectorAll(".size-btn");

    const selectedProduct = document.getElementById("selectedProduct");
    const productName = document.getElementById("productName");
    const productOptionText = document.getElementById("productOptionText");
    const qtyInput = document.getElementById("qtyInput");
    const priceText = document.getElementById("priceText");
    const totalPrice = document.getElementById("totalPrice");
    const totalQty = document.getElementById("totalQty");

    const minusBtn = document.getElementById("minusBtn");
    const plusBtn = document.getElementById("plusBtn");

    function formatPrice(num) {
        return num.toLocaleString("ko-KR") + "원";
    }

    function updateDisplay() {
        if (selectedColor && selectedSize) {
            selectedProduct.style.display = "flex";
            productName.textContent = productTitle;
            productOptionText.textContent = `${selectedColor} / ${selectedSize}`;
            qtyInput.value = qty;
            priceText.textContent = formatPrice(basePrice * qty);
            totalPrice.textContent = formatPrice(basePrice * qty);
            totalQty.textContent = `(${qty}개)`;
        } else {
            selectedProduct.style.display = "none";
            totalPrice.textContent = "0원";
            totalQty.textContent = "(0개)";
        }
    }

    colorBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            colorBtns.forEach((item) => item.classList.remove("active"));
            btn.classList.add("active");
            selectedColor = btn.dataset.color;
            updateDisplay();
        });
    });

    sizeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach((item) => item.classList.remove("active"));
            btn.classList.add("active");
            selectedSize = btn.dataset.size;
            qty = 1;
            updateDisplay();
        });
    });

    plusBtn.addEventListener("click", () => {
        if (!selectedSize) return;
        qty++;
        updateDisplay();
    });

    minusBtn.addEventListener("click", () => {
        if (!selectedSize) return;
        if (qty > 1) {
            qty--;
            updateDisplay();
        }
    });

    updateDisplay();

    /**/
    document.querySelectorAll(".notation-title").forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;


            document.querySelectorAll(".notation-content").forEach((item) => {
                if (item !== content) {
                    item.style.maxHeight = "0px";
                }
            });

            document.querySelectorAll(".notation-title").forEach((item) => {
                if (item !== btn) {
                    item.classList.remove("active");
                }
            });


            btn.classList.toggle("active");

            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
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

    window.addEventListener("scroll", function () {
        const nav = document.querySelector(".nanb");
        if (!nav) return;

        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
   const buttons = document.querySelectorAll('.sort-btns button');
const reviewList = document.querySelector('.talking-list');
const reviews = Array.from(document.querySelectorAll('.talking-list .talking'));

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pageInfo = document.querySelector('.page-info');
const pagination = document.querySelector('.pagination');

const itemsPerPage = 5;
let currentPage = 1;
let currentSort = 'latest';
let sortedReviews = [...reviews];

function sortReviews(type) {
    sortedReviews = [...reviews].sort((a, b) => {
        if (type === 'latest') return Number(b.dataset.date) - Number(a.dataset.date);
        if (type === 'low') return Number(a.dataset.rating) - Number(b.dataset.rating);
        if (type === 'high') return Number(b.dataset.rating) - Number(a.dataset.rating);
        if (type === 'recommend') return Number(b.dataset.like) - Number(a.dataset.like);
        return 0;
    });
}

function renderReviews() {
    reviewList.innerHTML = '';

    const totalPages = Math.ceil(sortedReviews.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleItems = sortedReviews.slice(start, end);

    visibleItems.forEach(item => reviewList.appendChild(item));

    if (totalPages <= 1) {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'flex';
        pageInfo.textContent = `${currentPage} / ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        currentSort = button.dataset.sort;
        currentPage = 1;

        sortReviews(currentSort);
        renderReviews();
    });
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderReviews();
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(sortedReviews.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderReviews();
    }
});

sortReviews(currentSort);
renderReviews();


// ---------------- Q&A 페이지네이션 ----------------
const qnaItems = document.querySelectorAll(".qa-contents .qa-list");
const qnaPrevBtn = document.querySelector(".qna-prev");
const qnaNextBtn = document.querySelector(".qna-next");
const qnaPageInfo = document.querySelector(".page-info2");

const qnaItemsPerPage = 5;
let qnaCurrentPage = 1;
const qnaTotalPages = Math.ceil(qnaItems.length / qnaItemsPerPage);

function showQnaPage(page) {
    const start = (page - 1) * qnaItemsPerPage;
    const end = start + qnaItemsPerPage;

    qnaItems.forEach((item, index) => {
        item.style.display = (index >= start && index < end) ? "block" : "none";
    });

    qnaPageInfo.textContent = `${page} / ${qnaTotalPages}`;
    qnaPrevBtn.disabled = page === 1;
    qnaNextBtn.disabled = page === qnaTotalPages;
}

if (qnaItems.length && qnaPrevBtn && qnaNextBtn && qnaPageInfo) {
    qnaPrevBtn.addEventListener("click", function () {
        if (qnaCurrentPage > 1) {
            qnaCurrentPage--;
            showQnaPage(qnaCurrentPage);
        }
    });

    qnaNextBtn.addEventListener("click", function () {
        if (qnaCurrentPage < qnaTotalPages) {
            qnaCurrentPage++;
            showQnaPage(qnaCurrentPage);
        }
    });

    showQnaPage(qnaCurrentPage);
}
});