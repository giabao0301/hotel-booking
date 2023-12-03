import { rooms, suites } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const roomDetails = $(".room-details");
const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("roomId");

const choosenRoom = rooms.find((room) => {
  return room.id === roomId;
});

console.log(choosenRoom);

const htmls = `<div class="gallery">
                    <div class="gallery-img-1"><img src="${choosenRoom.image}"></div>
                    <div><img src="${choosenRoom.image}"></div>
                    <div><img src="${choosenRoom.image}"></div>
                </div>
                <div class="small-details">
                <h1>${choosenRoom.name}</h1>
                    <p>Indulge in luxury and comfort in our Grand Deluxe Room, featuring spacious interiors, modern amenities, and
                    stunning views, ensuring a sophisticated retreat for the discerning traveler.
                    </p>
                <div class="room-features">
                <p><img src="../assets/images/guest-icon.png" alt=""><span>Up to ${choosenRoom.guest} guests</span> </p>
                <p><img src="../assets/images/bed-icon.png" alt=""><span>King size bed</span></p>
                <p><img src="../assets/images/size-icon.png" alt=""><span>${choosenRoom.size} m²</span></p>
                </div>
                <h3>YOU WILL APPRECIATE</h3>
                <p>Our Grand Deluxe Rooms come with the following options:</p>
                <div class="room-features">
                <p><img src="../assets/images/twin_bed.png" alt=""><span>Twinable room</span> </p>
                <p><img src="../assets/images/connecting_room.png" alt=""><span>Connecting room</span></p>
                <p><img src="../assets/images/balcony.png" alt=""><span>Balcony</span></p>
                </div>
                <h4>$${choosenRoom.price} / night</h4>
                <button>Book now</button>
                <hr class="line">
            </div>`;

roomDetails.innerHTML = htmls;

console.log(`haha ${roomId}`);
