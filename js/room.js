import { rooms, suites } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const roomList = $(".left-col");

const allRoomsSuites = [...rooms, ...suites];

const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("guest");

const filteredRooms = allRoomsSuites.filter((room) => {
  return room.guest === +guest;
});

const roomsSuites = guest ? filteredRooms : allRoomsSuites;
const htmls = roomsSuites.map((room) => {
  return `<a class="room-item" data-index="${room.id}">
            <div class="room-img">
                <img src="${room.image}">
            </div>
            <div class="room-info">
                <h3>${room.name}</h3>
                <div class="room-features">
                    <p><img src="../assets/images/guest-icon.png" alt="feature-icon"><span>Up to ${room.guest} guests</span> </p>
                    <p><img src="../assets/images/bed-icon.png" alt="feature-icon"><span>King size bed</span></p>
                    <p><img src="../assets/images/size-icon.png" alt="feature-icon"><span>${room.size} m²</span></p>
                </div>
                <p class="room-info-description">A generous space where you can entertain in comfort. Read,
                    chat, or even (if you must) work,
                    all in refined comfort.
                </p>
                <div class="room-price">
                    <h4>$${room.price} <span>/ night</span></h4>
                </div>
            </div>
        </a>`;
});

roomList.innerHTML = htmls.join("\n");

roomList.onclick = function (e) {
  const nodeRoom = e.target.closest(".room-item");
  const index = nodeRoom.getAttribute("data-index");
  window.location.href = `room_details_page.html?roomId=${index}`;
};

var navBar = document.getElementById("navBar");
navBar.onclick = function toggleBtn() {
  navBar.classList.toggle("hidemenu");
};
