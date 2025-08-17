const header = document.getElementById("header");
const logo = document.getElementById("logo");

const LOGO_MAX = 8;
const LOGO_MIN = 2.5;
const HEADER_MAX = 12;
const HEADER_MIN = 4;
const MARGIN_MAX = -4;
const MARGIN_MIN = 0;
const SCROLL_THRESHOLD = 150;

window.addEventListener("scroll", () => {
  const scrollY = Math.min(window.scrollY, SCROLL_THRESHOLD);
  const progress = scrollY / SCROLL_THRESHOLD;

  const logoHeight = LOGO_MAX - (LOGO_MAX - LOGO_MIN) * progress;
  const headerHeight = HEADER_MAX - (HEADER_MAX - HEADER_MIN) * progress;
  const logoMargin = MARGIN_MAX + (MARGIN_MIN - MARGIN_MAX) * progress;

  logo.style.height = logoHeight + "rem";
  logo.style.marginBottom = logoMargin + "rem";
  header.style.height = headerHeight + "rem";

  header.style.boxShadow = scrollY >= SCROLL_THRESHOLD 
    ? "0 2px 4px rgba(0,0,0,0.1)" 
    : "0 0 0 rgba(0,0,0,0)";
});