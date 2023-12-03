import { rooms, suites } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const roomList = $(".rooms");
const htmls = rooms.map((room) => {
  return `<a href="#" class="room-item">
            <img src="${room.image}" alt="room-${room.id}">
            <div>
                <h3>${room.name}</h3>
                <p>From $ ${room.price} for 1 night</p>
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
