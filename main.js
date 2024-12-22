const textarea = document.getElementById("nameInput");
const output = document.getElementById("output");
const random = document.getElementById("random");
const thongbao = document.getElementById("inform");
let lines = []; // Mảng lưu trữ các dòng từ textarea
let ranindex = -1; // Chỉ số ngẫu nhiên của dòng được chọn

thongbao.style.display = "none";
function action() {
  thongbao.style.display = "block";
  lines = textarea.value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
  const rando = Math.random();
  ranindex = Math.floor(rando * lines.length);
  const raninline = lines[ranindex];
  console.log(
    `randinex=${ranindex} và độ dài chuỗi là ${lines.length} và số random = ${rando}`
  );

  output.innerHTML = `chúc mừng lựa chọn: ${raninline}`;
  //   xoa = () => {
  //     lines.splice(ranindex, 1);
  //     textarea.value = lines.join("\n");
  //     thongbao.style.display = "none";
  //   };
  //   next = () => {
  //     thongbao.style.display = "none";
  //   };

  // Xử lý khi người dùng nhập vào textarea
}
// Hàm xóa dòng được chọn
function xoa() {
  if (ranindex !== -1) {
    lines.splice(ranindex, 1); // Xóa phần tử tại ranindex
    textarea.value = lines.join("\n"); // Cập nhật lại giá trị textarea
    thongbao.style.display = "none"; // Ẩn ô thông báo sau khi xóa
  }
}

// Hàm tiếp tục (ẩn thông báo mà không xóa)
function next() {
  thongbao.style.display = "none"; // Ẩn ô thông báo mà không thay đổi textarea
}
