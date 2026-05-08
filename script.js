function alertDev() {
    alert(
      "This website is currently in preview mode while we complete development. Some features are temporarily unavailable.",
    );
}

// Hamburger menu functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.getElementById("mobile-nav");

if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("hidden");
    });

    // Close mobile menu when a link is clicked
    const mobileNavLinks = mobileNav.querySelectorAll("a");
    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alertDev();
            // Uncomment below line when links are functional
            // mobileNav.classList.add("hidden");
        });
    });
}

// Existing navigation functionality
const siteNavel = document.getElementById("site-nav");
if (siteNavel) {
    const links = siteNavel.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alertDev();
        });
    });
}

const devBlocks = document.querySelectorAll(".dev-block");
devBlocks.forEach((block) => {
    block.addEventListener("click", (e) => {
        e.preventDefault();
        alertDev();
    });
});


