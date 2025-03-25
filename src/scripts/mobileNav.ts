const mobileNav: HTMLElement | null = document.querySelector(
  ".header__mobile-nav"
);
const openBtn: HTMLElement | null = document.querySelector(
  ".header__burger-btn"
);

const closeBtn: HTMLElement | null = document.querySelector(
  ".header__mobile-btn"
);

openBtn?.addEventListener("click", function (e) {
  mobileNav?.classList.add("header__mobile-nav--open");
});

closeBtn?.addEventListener("click", function (e) {
  mobileNav?.classList.remove("header__mobile-nav--open");
});

console.log("hello");
