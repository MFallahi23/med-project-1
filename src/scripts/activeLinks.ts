const navLinks: NodeListOf<HTMLElement> =
  document.querySelectorAll(".header__nav-link");

const navMobileLinks: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".header__mobile-link"
);

navLinks.forEach((navLink) => {
  if (window.location.pathname === navLink.getAttribute("href")) {
    navLink.classList.add("header__nav-link--active");
  }
});

navMobileLinks.forEach((navLink) => {
  if (window.location.pathname === navLink.getAttribute("href")) {
    navLink.classList.add("header__mobile-link--active");
  }
});
