function startFireworks() {
  for (let i = 0; i < 30; i++) {
    const f = document.createElement("div");
    f.style.position = "fixed";
    f.style.left = Math.random()*100 + "%";
    f.style.top = Math.random()*100 + "%";
    f.style.width = "6px";
    f.style.height = "6px";
    f.style.background = `hsl(${Math.random()*360},100%,50%)`;
    f.style.borderRadius = "50%";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),2000);
  }
}
