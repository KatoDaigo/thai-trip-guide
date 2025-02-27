// ハンバーガーメニューの開閉
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

// 注意事項をクリックで開閉
function toggleWarning() {
  let content = document.getElementById("warning-content");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    content.style.animation = "fadeIn 0.5s ease-in-out";
  } else {
    content.style.animation = "fadeOut 0.5s ease-in-out";
    setTimeout(() => {
      content.style.display = "none";
    }, 500);
  }
}

// タイ語の発音を再生
function playThaiAudio() {
  document.getElementById("thai-audio").play();
}

// アニメーションの設定
const style = document.createElement("style");
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-10px); }
  }
`;
document.head.appendChild(style);
