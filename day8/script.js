function showSadness() {
  const sadnessMessages = [
    "😢 もう帰りたくないよ…",
    "😭 楽しすぎて時間が足りない！",
    "🌴 ここに住みたい…永住したい…",
    "✨ 思い出がいっぱいで胸がいっぱい…",
  ];
  let randomIndex = Math.floor(Math.random() * sadnessMessages.length);
  document.getElementById("sad-result").innerText =
    sadnessMessages[randomIndex];
}
function toggleMenu() {
  let menu = document.querySelector(".side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}
