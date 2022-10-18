const formElements = document.querySelector("form");

formElements.addEventListener("submit", function (e) {
  e.preventDefault();
  const billAmount = Number(document.getElementById("input-bill").value);
  const numberOfCustomer = Number(document.getElementById("input-users").value);
  const serviceValue = Number(document.getElementById("input-service").value);

  const feedback = document.querySelector(".feedback");

  if (billAmount == "" || billAmount <= 0) {
    feedback.classList.add("showItem", "alert-danger");
    let pElement = document.createElement("p");
    pElement.innerHTML = "Bill amount cannot be blank.";
    feedback.appendChild(pElement);
  }

  if (numberOfCustomer <= 0) {
    feedback.classList.add("showItem", "alert-danger");
    let pElement = document.createElement("p");
    pElement.innerHTML = "Number of customer must be more than zero.";
    feedback.appendChild(pElement);
  }

  setTimeout(() => {
    feedback.classList.remove("showItem", "alert-danger");
  }, 10000);

  calculateTip(billAmount, numberOfCustomer, serviceValue)
});

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

  document.getElementById("tip-amount").textContent = tipAmount;
  document.getElementById("total-amount").textContent = totalAmount;
  document.getElementById("person-amount").textContent = eachPerson;
}
