function toggleDetails(id) {
  let details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

// スクロールしたら「バンコクへ戻る」セクションを表示
document.addEventListener("scroll", function () {
  let nextStep = document.getElementById("nextStep");
  let scrollPosition = window.scrollY + window.innerHeight;
  let elementPosition = nextStep.offsetTop;

  if (scrollPosition > elementPosition + 50) {
    nextStep.classList.add("show");
  }
});

// スクロールしたら「次はアジアティーク！」セクションを表示
document.addEventListener("scroll", function () {
  let nextStop = document.getElementById("nextStop");
  let scrollPosition = window.scrollY + window.innerHeight;
  let elementPosition = nextStop.offsetTop;

  if (scrollPosition > elementPosition + 50) {
    nextStop.classList.add("show");
  }
});

// 選択肢を表示する関数
function showChoice(choice) {
  let choiceResult = document.getElementById("choiceResult");
  let message = "";

  if (choice === "bar") {
    message = "🍻 夜景がきれいなルーフトップバーで乾杯！";
  } else if (choice === "nightMarket") {
    message = "🏮 ローカルナイトマーケットでグルメ巡り！";
  } else if (choice === "hotel") {
    message = "🏨 ホテルでのんびり、翌日に備えよう！";
  }

  choiceResult.innerHTML = message;
  choiceResult.classList.add("show");
}
