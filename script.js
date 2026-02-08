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
  document.getElementById("friend").style.display = "block";
  document.getElementById("letterBtn").style.display = "block";
}

document.getElementById("letterBtn").onclick = () => {
  document.getElementById("envelope").style.display = "block";
};
