// ハンバーガーメニューの開閉
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

// アコーディオンの開閉
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-btn");
  accordions.forEach((btn) => {
    btn.addEventListener("click", () => {
      let panel = btn.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});

// 📍 アコーディオンの開閉
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.classList.toggle("active");
  });
});

// 🌇 アイコンサイアムの背景を夕暮れに切り替える
// 🌇 アイコンサイアムの背景を夕暮れに、スクロールを戻すと昼に
window.addEventListener("scroll", function () {
  const iconsiamSection = document.getElementById("iconsiam");
  const body = document.body;

  // アイコンサイアムの位置が見えたら背景を切り替える
  const rect = iconsiamSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.5) {
    body.style.transition = "background 1.5s ease-in-out";
    body.style.background =
      "url('../img/second/home2.png') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  } else {
    // スクロールを戻したら昼のhome.pngに戻す
    body.style.transition = "background 1.5s ease-in-out";
    body.style.background =
      "url('../img/second/home.png') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  }
});

// 🎥 ナイトクルージングの動画をスクロールで自動再生

function spinRoulette() {
  const bugs = [
    "🦗 コオロギの唐揚げ！サクサク！",
    "🦟 蚊の揚げ物…食べれるの？",
    "🐛 幼虫のフライ！トロトロ食感！",
    "🦂 サソリの丸焼き！意外と美味しいらしい…",
    "🕷️ タランチュラの唐揚げ！勇者のみ挑戦！",
    "🍗 セーフ！普通のフライドチキン！",
  ];

  const randomIndex = Math.floor(Math.random() * bugs.length);
  document.getElementById("roulette-result").innerText = bugs[randomIndex];
}
