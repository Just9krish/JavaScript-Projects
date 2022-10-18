const formElements = document.querySelector("form");

formElements.addEventListener("submit", function (e) {
  e.preventDefault();

  let billAmount = Number(document.getElementById("input-bill").value);
  let numberOfCustomer = Number(document.getElementById("input-users").value);
  let serviceValue = Number(document.getElementById("input-service").value);

  const isFeedback = validateForm(billAmount, numberOfCustomer);

  if (!isFeedback) {
    const loader = document.querySelector(".loader");
    const resultsElements = document.querySelector(".results");

    loader.classList.add("showItem");
    const result = calculateTip(billAmount, numberOfCustomer, serviceValue);

    setTimeout(function () {
      loader.classList.remove("showItem");

      document.getElementById("tip-amount").textContent = `${result[0].toFixed(
        2
      )}`;
      document.getElementById(
        "total-amount"
      ).textContent = `${result[1].toFixed(2)}`;
      document.getElementById(
        "person-amount"
      ).textContent = `${result[2].toFixed(2)}`;
      resultsElements.classList.add("showItem");
    }, 2000);
  }
});

const reset = document.querySelector(".resetBtn");

reset.addEventListener("click", function () {
  document.getElementById("input-bill").value = parseInt("0");
  document.getElementById("input-users").value = parseInt("0");
  document.querySelector(".results").classList.remove("showItem");
});

function validateForm(billAmount, numberOfCustomer) {
  const feedback = document.querySelector(".feedback");

  let isFeedback = false;

  if (billAmount == "" || billAmount <= 0) {
    feedback.classList.add("showItem", "alert-danger");
    let pElement = document.createElement("p");
    pElement.innerHTML = "Bill amount cannot be blank.";
    feedback.appendChild(pElement);
    isFeedback = true;
  }

  if (numberOfCustomer <= 0) {
    feedback.classList.add("showItem", "alert-danger");
    let pElement = document.createElement("p");
    pElement.innerHTML = "Number of customer must be more than zero.";
    feedback.appendChild(pElement);
    isFeedback = true;
  }

  setTimeout(() => {
    feedback.classList.remove("showItem", "alert-danger");
  }, 10000);

  return isFeedback;
}

function calculateTip(billAmount, numberOfCustomer, selectedService) {
  let percentageTip = 0;

  if (selectedService == 1) {
    percentageTip = 0.2;
  } else if (selectedService == 2) {
    percentageTip = 0.1;
  } else {
    percentageTip = 0.02;
  }

  const tipAmount = billAmount * percentageTip;
  const totalAmount = billAmount + tipAmount;
  const eachPerson = totalAmount / numberOfCustomer;

  return [tipAmount, totalAmount, eachPerson];
}
