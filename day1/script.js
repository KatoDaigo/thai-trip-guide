// ハンバーガーメニューの開閉
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

document.addEventListener("DOMContentLoaded", function () {
  let members = document.querySelectorAll(".floating-member");
  members.forEach((member, index) => {
    setTimeout(() => {
      member.style.opacity = "1";
    }, index * 500); // 0.5秒ごとに順番に登場
  });
});

function updateCountdown() {
  let now = new Date();
  let eventTime = new Date("2025-02-28T11:25:00"); // 2月28日 11:25集合

  let diff = eventTime - now;
  let countdownElement = document.getElementById("countdown");

  if (diff <= 0) {
    countdownElement.innerText = "🚨 遅刻確定！急げ！🚨";
    countdownElement.style.color = "red";
    countdownElement.style.animation = "blink 1s infinite alternate";
  } else {
    let hours = Math.floor(diff / 3600000);
    let minutes = Math.floor((diff % 3600000) / 60000);
    let seconds = Math.floor((diff % 60000) / 1000);

    let timeText = "";
    if (hours > 0) {
      timeText += `${hours}時間 `;
    }
    timeText += `${minutes}分 ${seconds}秒`;

    document.getElementById("time-left").innerText = timeText;
  }
}

// 1秒ごとに更新
setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById("shopping-btn").addEventListener("click", function () {
  let items = [
    "香水",
    "ブランドバッグ",
    "ピピ島用でサングラス買おう",
    "韓国で偽物買った方がまし",
    "チョコレート、こうえいワンワン",
    "ゆうせいは絶対買うな",
  ];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  document.getElementById("shopping-result").innerText = `🛍️ ${randomItem}`;
});

function toggleAccordion(id) {
  let content = document.getElementById(id);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
