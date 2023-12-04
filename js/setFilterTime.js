const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("roomId");

const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];
const nextDay = new Date(currentDate);
nextDay.setDate(currentDate.getDate() + 1);
const nextDayFormatted = nextDay.toISOString().split("T")[0];

const checkinValue = urlParams.get("checkin");
const checkoutValue = urlParams.get("checkout");
const quantityValue = urlParams.get("quantity");
const guestValue = urlParams.get("guest");

const quantitySelect = document.getElementById("quantity");
const guestSelect = document.getElementById("guest");
const checkinSelect = document.getElementById("checkin");
const checkoutSelect = document.getElementById("checkout");

checkinSelect.min = formattedDate;
checkoutSelect.min = checkinValue;

if (checkinValue != null) {
  checkinSelect.value = checkinValue;
} else {
  checkinSelect.value = formattedDate;
}

if (checkoutValue != null) {
  checkoutSelect.value = checkoutValue;
} else {
  checkoutSelect.value = nextDayFormatted;
}

if (quantityValue != null) {
  quantitySelect.value = quantityValue;
} else {
  quantitySelect.value = 1;
}

if (guestValue != null) {
  guestSelect.value = guestValue;
} else {
  guestSelect.value = 1;
}

checkinSelect.addEventListener("change", () => {
  nextDay.setDate(new Date(checkinSelect.value).getDate() + 1);
  const nextFormatted = nextDay.toISOString().split("T")[0];
  checkoutSelect.min = nextFormatted;
  if (checkinSelect.value > checkoutSelect.value) {
    checkoutSelect.value = nextFormatted;
  }
});
