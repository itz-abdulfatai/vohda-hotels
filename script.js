function alertDev() {
    alert(
      "This website is currently in preview mode while we complete development. Some features are temporarily unavailable.",
    );
}


const siteNavel = document.getElementById("site-nav");
const links = siteNavel.querySelectorAll("a");
const devBlocks = document.querySelectorAll(".dev-block");

devBlocks.forEach((block) => {
    block.addEventListener("click", (e) => {
        e.preventDefault();
        alertDev();
    });
})

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alertDev();
    });
})

