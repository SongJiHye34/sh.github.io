$(document).ready(function () {

    const menuLinks = document.querySelectorAll(".menu .list a");
    const inputBox = document.getElementById("input-Box");
    const textInputBox = document.getElementById("text-input-box");

    if (!menuLinks.length || !inputBox || !textInputBox) return;

    function openMenu() {
        inputBox.classList.add("active");
        textInputBox.classList.add("active");
    }

    function closeMenu() {
        inputBox.classList.remove("active");
        textInputBox.classList.remove("active");
    }


    menuLinks.forEach(link => {
        link.addEventListener("mouseenter", openMenu);
    });


    inputBox.addEventListener("mouseenter", openMenu);


    inputBox.addEventListener("mouseleave", closeMenu);

    window.addEventListener("scroll", closeMenu);

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        scrollbar: {
            el: ".main-scrollbar",
            draggable: true,
            hide: false
        },
    });
    const aTitleLinks = document.querySelectorAll(".card .buy-btn");

    aTitleLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            this.classList.remove("blink");
            void this.offsetWidth;
            this.classList.add("blink");
        });
    });
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    const closeBtn = document.getElementById("closeBtn");

    if (menuBtn && sideMenu && overlay) {
        menuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            sideMenu.classList.add("active");
            overlay.classList.add("active");
        });

        overlay.addEventListener("click", () => {
            sideMenu.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    if (closeBtn && sideMenu && overlay) {
        closeBtn.addEventListener("click", () => {
            sideMenu.classList.remove("active");
            overlay.classList.remove("active");
        });
    }
    $(document).ready(function () {
        const menuLinks = document.querySelectorAll(".menu .list a");
        const inputBox = document.getElementById("input-Box");
        const textInputBox = document.getElementById("text-input-box");

        if (menuLinks.length && inputBox && textInputBox) {
            function openMenu() {
                inputBox.classList.add("active");
                textInputBox.classList.add("active");
            }

            function closeMenu() {
                inputBox.classList.remove("active");
                textInputBox.classList.remove("active");
            }

            menuLinks.forEach(link => {
                link.addEventListener("mouseenter", openMenu);
            });

            inputBox.addEventListener("mouseenter", openMenu);
            inputBox.addEventListener("mouseleave", closeMenu);
            window.addEventListener("scroll", closeMenu);
        }

        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            scrollbar: {
                el: ".main-scrollbar",
                draggable: true,
                hide: false
            },
        });

        // 전화상담 토글
        const consultToggle = document.getElementById("consultToggle");
        const consultBox = document.getElementById("consultBox");

        if (consultToggle && consultBox) {
            consultToggle.addEventListener("click", function () {
                consultBox.classList.toggle("active");
            });
        }

        // 맨 위로 한 번에 이동
        const topBtn = document.getElementById("topBtn");

        if (topBtn) {
            topBtn.addEventListener("click", function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    });
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function runSearch() {
        const keyword = searchInput.value.toLowerCase().trim();

        if (keyword.includes("셔츠")) {
            location.href = "shirt.html";
        } else if (keyword.includes("정장")) {
            location.href = "suit.html";
        } else {
            alert("검색 결과가 없습니다.");
        }
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", runSearch);

        searchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                runSearch();
            }
        });
    }

    const track = document.querySelector(".banner-track");
    const banner = document.querySelector(".i-banner");

    let index = 0;

    function slide() {
        if (!track) return;
        index = (index + 1) % 3;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    let interval;
    if (track && banner) {
        interval = setInterval(slide, 5000);

        banner.addEventListener("mouseenter", () => clearInterval(interval));
        banner.addEventListener("mouseleave", () => {
            interval = setInterval(slide, 5000);
        });
    }

    const track2 = document.querySelector(".bnr2-track");
    const subTrack = document.querySelector(".sub-track");
    const slides2 = document.querySelectorAll(".bnr2-slide");
    const prev2 = document.querySelector(".bnr2 .prev");
    const next2 = document.querySelector(".bnr2 .next");
    const banner2 = document.querySelector(".bnr2");

    let index2 = 0;
    const total2 = slides2.length;

    function update2() {
        if (track2) track2.style.transform = `translateX(-${index2 * 100}%)`;
        if (subTrack) subTrack.style.transform = `translateX(-${index2 * 100}%)`;
    }

    let interval2;
    if (track2 && subTrack && total2 > 0) {
        interval2 = setInterval(() => {
            index2 = (index2 + 1) % total2;
            update2();
        }, 5000);
    }

    if (next2 && total2 > 0) {
        next2.addEventListener("click", () => {
            index2 = (index2 + 1) % total2;
            update2();
        });
    }

    if (prev2 && total2 > 0) {
        prev2.addEventListener("click", () => {
            index2 = (index2 - 1 + total2) % total2;
            update2();
        });
    }

    if (banner2 && interval2) {
        banner2.addEventListener("mouseenter", () => clearInterval(interval2));
        banner2.addEventListener("mouseleave", () => {
            interval2 = setInterval(() => {
                index2 = (index2 + 1) % total2;
                update2();
            }, 5000);
        });
    }

    // A
    const swiperAEl = document.querySelector(".productSwiperA");
    const swiperA = swiperAEl ? new Swiper(".productSwiperA", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".A-next",
            prevEl: ".A-prev"
        },
        scrollbar: {
            el: ".A-scrollbar",
            draggable: true,
            hide: false
        },
        observer: true,
        observeParents: true
    }) : null;

    // B
    const swiperBEl = document.querySelector(".productSwiperB");
    const swiperB = swiperBEl ? new Swiper(".productSwiperB", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".B-next",
            prevEl: ".B-prev"
        },
        scrollbar: {
            el: ".B-scrollbar",
            draggable: true,
            hide: false
        },
        observer: true,
        observeParents: true
    }) : null;

    // C
    const swiperCEl = document.querySelector(".productSwiperC");
    const swiperC = swiperCEl ? new Swiper(".productSwiperC", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".C-next",
            prevEl: ".C-prev"
        },
        scrollbar: {
            el: ".C-scrollbar",
            draggable: true,
            hide: false
        },
        observer: true,
        observeParents: true
    }) : null;


    // 탭
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".link-web .A-link, .link-web .B-link, .link-web .C-link");

    if (tabs.length > 0 && contents.length > 0) {
        // 처음엔 첫 번째만 보이게
        tabs[0].classList.add("active");
        contents[0].classList.add("active");

        tabs.forEach((tab, idx) => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                contents.forEach(c => c.classList.remove("active"));

                tab.classList.add("active");
                if (contents[idx]) {
                    contents[idx].classList.add("active");
                }

                // 보이는 순간 swiper 다시 계산
                if (idx === 0 && swiperA) swiperA.update();
                if (idx === 1 && swiperB) swiperB.update();
                if (idx === 2 && swiperC) swiperC.update();
            });
        });
    }

    const hearts = document.querySelectorAll(".toggle");

    hearts.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            btn.classList.add("active");

            setTimeout(() => {
                btn.classList.remove("active");
            }, 1000);
        });
    });
let productSwiperA;

function handleSwiper() {


  if (window.innerWidth > 360) {

    if (!productSwiperA) {
      productSwiperA = new Swiper(".productSwiperA", {
        slidesPerView: 1,
        spaceBetween: 20,
      });
    }

  }

  else {

    if (productSwiperA) {
      productSwiperA.destroy(true, true);
      productSwiperA = undefined;
    }

  }

}

handleSwiper();

window.addEventListener("resize", handleSwiper);
});
