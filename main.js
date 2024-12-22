const textarea = document.getElementById("nameInput");
const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const thongbao = document.getElementById("inform");
const overlay = document.getElementById("overlay");
const votay = document.getElementById("votay");
let lines = [];
let ranindex = -1;
let interval;
let duration = 80;
let isProcessing = false;

function action() {
  if (isProcessing) {
    alert("Bạn cần nhấn 'Đóng' trước khi thực hiện hành động mới!");
    return;
  }

  lines = textarea.value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  if (lines.length === 0) {
    output.value = "Không có dữ liệu!";
    return;
  }

  isProcessing = true;
  let totalTime = 0;
  duration = 80;

  interval = setInterval(() => {
    ranindex = Math.floor(Math.random() * lines.length);
    const raninline = lines[ranindex];
    output.value = raninline;

    totalTime += duration;

    if (totalTime >= 10000) {
      clearInterval(interval);
      output2.innerHTML = `Lựa chọn: ${raninline}`;
      overlay.style.display = "block";
      thongbao.style.display = "block";
      votay.play();
    }

    duration += 50;
  }, duration);
}

function xoa() {
  if (ranindex !== -1) {
    lines.splice(ranindex, 1);
    textarea.value = lines.join("\n");
    overlay.style.display = "none";
    thongbao.style.display = "none";
    votay.pause();
    votay.currentTime = 0;
    isProcessing = false;
  }
}

function next() {
  overlay.style.display = "none";
  thongbao.style.display = "none";
  votay.pause();
  votay.currentTime = 0;
  isProcessing = false;
}
