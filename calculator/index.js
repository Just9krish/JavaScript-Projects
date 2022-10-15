(function () {
  const screen = document.querySelector(".screen");
  const btns = document.querySelectorAll(".btn");
  const clear = document.querySelector(".btn-clear");
  const equal = document.querySelector(".btn-equal");

  btns.forEach(function (btn) {
    btn.addEventListener("click", (event) => {
      let value = event.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", (event) => {
    if (screen.value === "") {
      screen.value = "Please Enter a Value";
    } else {
      console.log(screen.value);
    }
  });

  console.log(screen.value);

  clear.addEventListener("click", (event) => {
    screen.value = "";
  });
})();
