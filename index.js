// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTop");

// Function to show or hide the scroll-to-top button
const showOrHideScrollToTopBtn = () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Event listener for scrolling
window.addEventListener("scroll", showOrHideScrollToTopBtn);

// Function to scroll to the top of the page smoothly
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Event listener for click on the scroll-to-top button
scrollToTopBtn.addEventListener("click", scrollToTop);
