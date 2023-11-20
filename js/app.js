import rooms from "./data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const roomList = $(".rooms");

const htmls = rooms.map((room) => {
  return `<a href="#" class="room">
            <img src="${room.image}" alt="">
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
