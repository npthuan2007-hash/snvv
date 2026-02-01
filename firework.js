function startFireworks() {
  for (let i = 0; i < 20; i++) {
    const f = document.createElement("div");
    f.className = "fire";
    f.style.left = Math.random() * 100 + "%";
    f.style.top = Math.random() * 100 + "%";
    f.style.background =
      `hsl(${Math.random() * 360},100%,50%)`;
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1500);
  }
}
