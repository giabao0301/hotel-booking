const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const leftSide = $(".left-side");
const totalAmount = $(".total-amount");

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("roomId");
const roomImage = urlParams.get("image");
const roomName = urlParams.get("name");
const roomSize = urlParams.get("size");
const roomGuest = urlParams.get("guest");
const roomPrice = urlParams.get("price");
const checkIn = $("#checkin");
const checkOut = $("#checkout");

console.log(checkOut.value);

const roomInfoHtmls = `<image src="${roomImage}" alt="room-image"/>
                        <div class="text-box">
                          <h1 class="home-heading">${roomName}</h1>
                          <p class="home-price">${roomPrice} USD / 1 night</p>
                          <p class="home-desc"><i>Entire room for ${roomGuest} guest</i></p>
                      </div>`;

leftSide.innerHTML = roomInfoHtmls;

const totalAmountHtmls = `<table class="table">
                              <tr>
                                <td>${roomPrice} x nights</td>
                                <td class="price">${roomPrice * 2} USD</td>
                              </tr>
                              <tr class="total">
                                <td>Total</td>
                                <td class="price">546.41 USD</td>
                              </tr>
                            </table>`;

totalAmount.innerHTML = totalAmountHtmls;
