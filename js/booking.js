const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("image");
const roomImage = $(".left-side");
roomImage.style.background = `url(${roomId})`;
