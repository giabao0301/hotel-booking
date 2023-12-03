import { rooms, suites } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const roomList = $(".left-col");
const htmls = rooms.map((room) => {
  return `<a class="room" href="./room_details_page.html">
            <div class="room-img">
                <img src="${room.image}">
            </div>
            <div class="room-info">
                <h3>${room.name}</h3>
                <div class="room-features">
                    <p><img src="../assets/images/guest-icon.png" alt=""><span>Up to ${room.guest} guests</span> </p>
                    <p><img src="../assets/images/bed-icon.png" alt=""><span>King size bed</span></p>
                    <p><img src="../assets/images/size-icon.png" alt=""><span>${room.size} m²</span></p>
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
  const nodeRoom = e.target.children;
  console.log(nodeRoom);
};

var navBar = document.getElementById("navBar");
navBar.onclick = function toggleBtn() {
  navBar.classList.toggle("hidemenu");
};
