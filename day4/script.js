/* ハンバーガーメニュー開閉 */
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

/* 🎲 ホテルで何しよう？ */
function randomRelax() {
  const activities = [
    "🏊‍♂️ プールで泳ぐ！",
    "🍹 ホテルでドリンクタイム",
    "🛏️ 部屋でゴロゴロ Netflix",
    "🧘‍♂️ ジムで軽く運動",
  ];
  let rand = Math.floor(Math.random() * activities.length);
  document.getElementById("relax-result").innerText =
    "決定！ " + activities[rand];
}

/* 🎭 偽物ブランド診断 */
function fakeBrandCheck() {
  const brands = [
    "👜 超そっくりなル○ヴィトン発見！",
    "⌚ ロレ○ックスもどきがここに…！",
    "👟 偽物なのに値段が高すぎるスニーカー！",
    "💼 タグのスペルミスに爆笑（笑）",
  ];
  let rand2 = Math.floor(Math.random() * brands.length);
  document.getElementById("fake-result").innerText =
    "見つけた！ " + brands[rand2];
}

/* 移動方法詳細を開閉 */
function toggleTransport(id) {
  let detail = document.getElementById(id);
  if (detail.style.display === "block") {
    detail.style.display = "none";
  } else {
    detail.style.display = "block";
  }
}

/* スクロールでbackgroundふわっと切り替え
   -> plane.jpg が見えそうな位置(airportセクション付近)で paton.png に変更 */
window.addEventListener("scroll", function () {
  let airportSection = document.querySelector(".airport");
  let body = document.body;
  let rect = airportSection.getBoundingClientRect();

  // 画面内に入ったら backgroundをpaton.pngに
  if (rect.top < window.innerHeight * 0.6) {
    body.style.background =
      "url('../img/four/paton.png') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  } else {
    // 戻ったら home.pngに
    body.style.background =
      "url('../img/four/home.png') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  }
});
