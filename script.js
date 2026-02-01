console.log("JS ĐÃ CHẠY"); // 👈 DÒNG TEST

let count = 3;
const cd = document.getElementById("countdown");

const timer = setInterval(() => {
  cd.innerText = count;
  count--;

  if (count < 0) {
    clearInterval(timer);
    cd.style.display = "none";

    // kiểm tra có pháo hoa không
    if (typeof startFireworks === "function") {
      startFireworks();
    }

    setTimeout(showFriend, 5000);
  }
}, 1000);

function showFriend() {
  const img = document.getElementById("friend");
  const btn = document.getElementById("letterBtn");

  img.style.display = "block";
  btn.style.display = "block";
}

document.getElementById("letterBtn").onclick = () => {
  document.getElementById("friend").style.display = "none";
  document.getElementById("letterBtn").style.display = "none";
  document.getElementById("envelope").style.display = "block";
};
