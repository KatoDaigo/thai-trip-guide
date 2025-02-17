document.addEventListener("DOMContentLoaded", () => {
  // ◆ 持ち物のチェックを保存 ◆
  const checklist = document.querySelectorAll(
    "#checklist input[type='checkbox']"
  );
  checklist.forEach((item) => {
    const storedValue = localStorage.getItem(item.id);
    if (storedValue === "checked") {
      item.checked = true;
    }

    item.addEventListener("change", () => {
      if (item.checked) {
        localStorage.setItem(item.id, "checked");
      } else {
        localStorage.removeItem(item.id);
      }
    });
  });
});

// ◆ ハンバーガーメニューの開閉 ◆
function toggleMenu() {
  const menu = document.querySelector(".side-menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}
