function showFortune() {
  const fortunes = [
    "🕶️ リーダーの機嫌を損ねると…1日中パシらされる運勢！😱",
    "👍 リーダーの指示通りに動けば、最高の1日になる運勢！",
    "💰 大野くんに値切り交渉を頼むと、お得な買い物ができるかも！",
    "🤣 大野くんのテンションが高すぎて、現地人と意気投合する運勢！",
    "⌛ 翔理くんがまた遅刻…君は巻き込まれる運命かも！",
    "✨ 翔理くんがめずらしく早起き！今日は奇跡が起きるかも！？",
    "😴 啓斗くんの寝坊につき合わされて、集合時間ギリギリの運勢！",
    "😆 啓斗くんが珍しく朝から元気！何かいいことがあるかも！",
    "💸 白木くんがお金を使いすぎて、君の財布が狙われる運勢！",
    "😂 白木くんのツッコミが冴えわたる！笑いの絶えない1日に！",
  ];

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  document.getElementById("fortune-result").innerText = fortunes[randomIndex];
}

// ハンバーガーメニューの開閉
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

// ミッション開閉アニメーション
function toggleMission(missionId) {
  let list = document.getElementById(missionId);
  list.classList.toggle("open");
}

// ミッション詳細開閉
document.querySelectorAll(".mission-list li").forEach((item) => {
  item.addEventListener("click", function () {
    let detail = this.querySelector(".mission-detail");
    detail.style.display = detail.style.display === "block" ? "none" : "block";
  });
});
