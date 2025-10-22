// 初期値（15分）
let initialMinutes = 15;
let timeA = initialMinutes * 60;
let timeB = initialMinutes * 60;

// HTML要素取得
const playerAEl = document.getElementById("playerA");
const playerBEl = document.getElementById("playerB");

// 秒数を mm:ss に変換
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

// 表示更新
function updateDisplay() {
  playerAEl.textContent = formatTime(timeA);
  playerBEl.textContent = formatTime(timeB);
}

// 初期表示
updateDisplay();

// タイマーID
let timerId = null;
let currentPlayer = null;

// HTML要素取得
const switchBtn = document.getElementById("switchBtn");

// カウントダウン関数
function tick() {
  if(currentPlayer === "A"){
    if(timeA > 0){ timeA--; }
    else { clearInterval(timerId); alert("プレイヤーAの時間切れ！"); }
  } else if(currentPlayer === "B"){
    if(timeB > 0){ timeB--; }
    else { clearInterval(timerId); alert("プレイヤーBの時間切れ！"); }
  }
  updateDisplay();
}

// スタート／切り替えボタン
switchBtn.addEventListener("click", () => {
  currentPlayer = currentPlayer === "A" ? "B" : "A" || "A";
  clearInterval(timerId);
  timerId = setInterval(tick, 1000);
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timeA = initialMinutes*60;
  timeB = initialMinutes*60;
  currentPlayer = null;
  updateDisplay();
});