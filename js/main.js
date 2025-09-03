/**
 * メインビジュアル用 Swiper の初期化
 * ループ・自動再生・ページネーション・ナビゲーション（前/次）を有効化
 */
const swiper = new Swiper(".p-mainvisual__swiper", {
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".p-mainvisual .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * ハンバーガーメニューの開閉設定
 */
const button = document.querySelector(".l-header__hamburger");
const mainNav = document.querySelector(".l-header__nav");

if (button && mainNav) {
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
    mainNav.classList.toggle("is-active");
  });
}

/**
 * 見出しをスクロール時のフェードイン設定
 */
const options = {
  root: null,
  rootMargin: "-20% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(fadeIn, options);
document.querySelectorAll(".is-visible").forEach((visible) => {
  observer.observe(visible);
});

/**
 * 交差開始時に見出し部に .fadeIn を付与
 * @param {IntersectionObserverEntry[]} entries
 */
function fadeIn(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
    }
  });
}

/** GSAP に ScrollTrigger プラグインを登録（初期化）*/
gsap.registerPlugin(ScrollTrigger);

/**
 * パララックス効果: mainvisualに付与
 */
gsap.to(".section--parallax .swiper-slide", {
  backgroundPosition: "50% 80%",
  ease: "none",
  scrollTrigger: {
    trigger: ".p-mainvisual.section--parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

/**
 * パララックス効果：worksに付与
 */
gsap.to(".p-works.section--parallax", {
  backgroundPosition: "50% 80%",
  ease: "none",
  scrollTrigger: {
    trigger: ".p-works.section--parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

/**
 * パララックス効果：contactに付与
 */
gsap.to(".p-contact.section--parallax", {
  backgroundPosition: "50% 80%",
  ease: "none",
  scrollTrigger: {
    trigger: ".p-contact.section--parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
