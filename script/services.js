const toggle1 = document.getElementById("article1-toggle");
const toggle2 = document.getElementById("article2-toggle");
const snippet1 = document.getElementById("article1-snippet");
const snippet2 = document.getElementById("article2-snippet");
const content1 = document.getElementById("article-1-content");
const content2 = document.getElementById("article-2-content");


toggle1.addEventListener("click", () => {
    snippet1.classList.toggle("hide");
    content1.classList.toggle("hide");
    toggle1.innerHTML = toggle1.innerHTML == "See more" ? "Show less" : "See more"
})

toggle2.addEventListener("click", () => {
    snippet2.classList.toggle("hide");
    content2.classList.toggle("hide");
    toggle2.innerHTML = toggle2.innerHTML == "See more" ? "Show less" : "See more"
})




