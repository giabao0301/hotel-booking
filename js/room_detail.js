const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get('roomId');

console.log(`haha ${roomId}`);

var navBar = document.getElementById("navBar");
function togglebnt() {
  navBar.classList.toggle("hidemenu");
}