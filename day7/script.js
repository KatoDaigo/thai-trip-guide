/* ハンバーガーメニュー開閉 */
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

function togglePanel(panelId) {
  const panel = document.getElementById(panelId);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
