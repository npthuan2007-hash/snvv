document.addEventListener("DOMContentLoaded", () => {
  let count = 3;
  const cd = document.getElementById("countdown");

  const timer = setInterval(() => {
    cd.innerText = count;
    count--;

    if (count < 0) {
      clearInterval(timer);
      cd.style.display = "none";
      startFireworks();

      setTimeout(() => {
        document.getElementById("friend").style.display = "block";
        document.getElementById("letterBtn").style.display = "block";
      }, 2000);
    }
  }, 1000);

  document.getElementById("letterBtn").onclick = () => {
    document.getElementById("friend").style.display = "none";
    document.getElementById("letterBtn").style.display = "none";
    document.getElementById("envelope").style.display = "block";
  };
});
