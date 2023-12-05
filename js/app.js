import { rooms, suites } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const roomList = $(".rooms");
const htmls = rooms.map((room) => {
  return `<a class="room-item" data-index="${room.id}">
            <img src="${room.image}" alt="room-${room.id}">
            <div>
                <h3>${room.name}</h3>
                <p>From $ ${room.price} for 1 night</p>
            </div>
        </a>`;
});

roomList.innerHTML = htmls.join("\n");

roomList.onclick = function (e) {
  const nodeRoom = e.target.closest(".room-item");
  const index = nodeRoom.getAttribute("data-index");
  window.location.href = `room_details_page.html?roomId=${index}`;
};


var isAuthenticated = sessionStorage.getItem('authenticated') === 'true';

// Function to dynamically change the register button content based on authentication state
function updateRegisterButton() {
  var registerButton = document.getElementById('register_btn');
  console.log('check authentication');
  // If authenticated, change the content to a user icon
  if (isAuthenticated) {
    registerButton.innerHTML = '<i class="fas fa-user"></i> User Account';
    registerButton.href = 'user_info.html'
  } else {
    registerButton.innerHTML = '<i class="fas fa-user"></i> Register Now';
    registerButton.href = 'register.html'
  }
}

// Call the function when the page loads
updateRegisterButton();

