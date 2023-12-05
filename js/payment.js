const urlParams = new URLSearchParams(window.location.search);

const fullNameParam = urlParams.get("fullName");
const phoneNumberParam = urlParams.get("phoneNum");
const roomPriceParam = urlParams.get("price");
const nightsParam = urlParams.get("night");
const totalPriceParam = urlParams.get("totalPrice");
const roomNumberParam = urlParams.get("roomNumber");

const paymentPrice = document.getElementById('payment-price')
const paymentNight = document.getElementById('payment-night')
const paymentRoom = document.getElementById('payment-room')
const paymentTotal = document.getElementById('payment-total')
const paymentUsername = document.getElementById('payment-username')
const paymentPhone = document.getElementById('payment-phone')
const paymentSubmitButton = document.getElementById('payment-submit-btn')
const emailInput = document.getElementById('email')
const cardNumberInput = document.getElementById('card-number')
const cvvInput = document.getElementById('cvv')

paymentPrice.textContent = roomPriceParam
paymentNight.textContent = nightsParam
paymentRoom.textContent = roomNumberParam
paymentTotal.textContent = totalPriceParam
paymentUsername.textContent = fullNameParam
paymentPhone.textContent = phoneNumberParam
console.log(emailInput.value);
paymentSubmitButton.addEventListener('click', () => {
    if (emailInput.value != '' && cardNumberInput.value != '' && cvvInput.value) {
        window.location.href = `index.html`;
    } else {
        alert('Please input required information')
    }
})
