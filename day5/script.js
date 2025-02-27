// ハンバーガーメニュー 開閉
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

function playThaiAudio() {
  document.getElementById("thai-audio").play();
}
