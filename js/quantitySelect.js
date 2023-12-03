const quantitySelect = document.getElementById('quantity');
const guestSelect = document.getElementById('guest');

// Generate options dynamically using a loop
for (let i = 1; i <= 10; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  quantitySelect.appendChild(option);

  // Clone the option element for the guest select
  const guestOption = option.cloneNode(true);
  guestSelect.appendChild(guestOption);
}

// Get the selected values
const selectedQuantity = quantitySelect.value;
const selectedGuest = guestSelect.value;

console.log(selectedQuantity);
console.log(selectedGuest);
