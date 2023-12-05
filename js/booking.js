const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const leftSide = $(".left-side");
const totalAmount = $(".total-amount");

const secondToDay = (value) => Math.floor(value / (1000 * 60 * 60 * 24));
const priceCal = (day, price, night) => day * price * night
const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("roomId");
const roomImage = urlParams.get("image");
const roomName = urlParams.get("name");
const roomSize = urlParams.get("size");
const roomGuest = urlParams.get("guest");
const roomPrice = urlParams.get("price");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const quantitySelect = document.getElementById('quantity')
let startDate = new Date(checkin.value)
let endDate = new Date(checkout.value)
let dayNumber = secondToDay(endDate.getTime() - startDate.getTime())
console.log(quantity);
let totalPrice = priceCal(dayNumber, roomPrice, quantitySelect.value)

const roomInfoHtmls = `<image src="${roomImage}" alt="room-image"/>
                        <div class="text-box">
                          <h1 class="home-heading">${roomName}</h1>
                          <p class="home-price">${roomPrice} USD / 1 night</p>
                          <p class="home-desc"><i>Entire room for ${roomGuest} guest</i></p>
                      </div>`;

leftSide.innerHTML = roomInfoHtmls;

const totalAmountHtmls = `<table class="table">
                              <tr>
                                <td>${roomPrice} x ${dayNumber} nights</td>
                                <td class="price">${roomPrice * dayNumber} USD</td>
                              </tr>
                              <tr class="total">
                                <td>Total</td>
                                <td id="totalPrice" class="price">${totalPrice} USD</td>
                              </tr>
                            </table>`;

totalAmount.innerHTML = totalAmountHtmls;

quantitySelect.addEventListener('change', () => {
  totalPrice = priceCal(dayNumber, roomPrice, quantitySelect.value)
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = `${totalPrice} USD`;
})

checkin.addEventListener('change', () => {
  startDate = new Date(checkin.value)
  if (startDate < endDate) {
    dayNumber = secondToDay(endDate.getTime() - startDate.getTime())
  } else {
    const nextDay = new Date(currentDate);
    nextDay.setDate(startDate.getDate() + 1);
    dayNumber = secondToDay(nextDay.getTime() - startDate.getTime())
  }
  totalPrice = priceCal(dayNumber, roomPrice, quantitySelect.value)
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = `${totalPrice} USD`;
})

checkout.addEventListener('change', () => {
  endDate = new Date(checkout.value)
  dayNumber = secondToDay(endDate.getTime() - startDate.getTime())
  totalPrice = priceCal(dayNumber, roomPrice, quantitySelect.value)
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = `${totalPrice} USD`;
})

const bookingButton = document.getElementById('booking_btn')
const phoneInput = document.getElementById('phone-num')
const nameInput = document.getElementById('full-name')
console.log(nameInput.value);
console.log(phoneInput.value);
bookingButton.addEventListener('click', () => {
  console.log(nameInput.value);
  console.log(phoneInput.value);
  if (phoneInput.value != '' && nameInput.value != '') {
    window.location.href = `payment.html?phoneNum=${phoneInput.value}&fullName=${nameInput.value}&price=${roomPrice}&totalPrice=${totalPrice}&night=${dayNumber}&roomNumber=${quantitySelect.value}`;
  } else {
    alert('Please input required information')
  }
})

const paymentMethodElement = document.querySelector('.payment-method');

// Get all the radio buttons within the <div> element
const radioButtons = paymentMethodElement.querySelectorAll('input[type="radio"]');

// Initialize a variable to store the selected value
let selectedValue;

// Loop through the radio buttons to find the selected one
radioButtons.forEach(radioButton => {
  if (radioButton.checked) {
    selectedValue = radioButton.value;
  }
});
