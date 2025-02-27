/* ハンバーガーメニュー開閉 */
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

/* ページ読み込み後、日本到着アニメーション */
document.addEventListener("DOMContentLoaded", function () {
  let arrivalText = document.getElementById("arrival-text");
  arrivalText.style.opacity = 0; // 初期状態: 非表示
  setTimeout(() => {
    arrivalText.style.opacity = 1; // フェードイン
  }, 1000);
});

/* 5人分の感想を保存 (ローカルストレージ) */
function saveFeedback() {
  for (let i = 1; i <= 5; i++) {
    let feedback = document.getElementById("feedback" + i).value;
    localStorage.setItem("feedback" + i, feedback);
  }
  document.getElementById("save-message").innerText = "📌 感想を保存しました！";
}

/* 読み込み時に、過去の感想を表示 */
document.addEventListener("DOMContentLoaded", function () {
  // 日本到着テキストのフェードインは上で定義済み

  // 感想を復元
  for (let i = 1; i <= 5; i++) {
    let savedFeedback = localStorage.getItem("feedback" + i);
    if (savedFeedback) {
      document.getElementById("feedback" + i).value = savedFeedback;
    }
  }
});
