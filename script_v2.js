let count = 3;
const cd = document.getElementById("countdown");

const timer = setInterval(() => {
  cd.innerText = count;
  count--;
  if (count < 0) {
    clearInterval(timer);
    cd.style.display = "none";
    startFireworks();
    setTimeout(showFriend, 5000);
  }
}, 1000);

function showFriend() {
document.getElementById("letterBtn").onclick = () => {
  // Ẩn ảnh + nút
  document.getElementById("friend").style.display = "none";
  document.getElementById("letterBtn").style.display = "none";

  // Hiện thư
  document.getElementById("envelope").style.display = "block";
};


