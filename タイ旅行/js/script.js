// ハンバーガーメニューの開閉をスムーズにする
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

// スクロール時のパララックス効果
window.addEventListener("scroll", function () {
  let bg = document.querySelector(".hero::before");
  let scrollY = window.scrollY;
  document.querySelector(".hero").style.backgroundPositionY = `${
    scrollY * 0.5
  }px`;
});
