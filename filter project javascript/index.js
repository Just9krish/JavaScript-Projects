const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const filterBtns = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");
const searchBox = document.querySelector("#search");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.dataset.filter;

    storeItems.forEach((item) => {
      if (filter == "all") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

searchBox.addEventListener("keyup", (event) => {
  const searchFilter = event.target.value.toLowerCase().trim();

  storeItems.forEach( item => {
    if(item.textContent.includes(searchFilter)) {
        item.style.display = "block"
    } else {
        item.style.display = "none"
    }
  });
});
