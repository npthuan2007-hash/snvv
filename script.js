function checkInput() {
    const input = document.getElementById("user-input").value;
    if (input === "090207") {
        document.getElementById("input-container").style.display = "none";
        startCountdown();
    } else {
        alert("Số không đúng, vui lòng thử lại!");
    }
}

function startCountdown() {
    const countdownDiv = document.getElementById("countdown");
    countdownDiv.style.display = "block";
    let count = 3;

    const interval = setInterval(() => {
        countdownDiv.innerHTML = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            showFireworks();
        }
    }, 1000);
}

function showFireworks() {
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");
    canvas.style.display = "block";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Pháo hoa
    const fireworks = [];
    
    function Firework(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 5;
        this.speed = Math.random() * 3 + 2;
        this.angle = Math.random() * 2 * Math.PI;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.exploded = false;
    }

    Firework.prototype.update = function() {
        if (!this.exploded) {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
            if (this.size < 0) {
                this.exploded = true;
            }
        } else {
            this.size -= 0.1;
        }
    };

    Firework.prototype.draw = function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };

    function createFireworks() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        fireworks.push(new Firework(x, y));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < fireworks.length; i++) {
            fireworks[i].update();
            fireworks[i].draw();
            if (fireworks[i].exploded && fireworks[i].size <= 0) {
                fireworks.splice(i, 1);
                i--;
            }
        }
        if (fireworks.length) {
            requestAnimationFrame(animate);
        } else {
            showLetter();
        }
    }

    for (let i = 0; i < 100; i++) {
        createFireworks();
    }

    animate();
}

function showLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block";
    letter.onclick = () => {
        const letterContent = document.getElementById("letter-content");
        letterContent.style.display = "block";
        letterContent.innerHTML = "Chúc NS có 1 ngày sinh nhật thật là vui vẻ và hạnh phúc. Chúc bà có 1 tuổi mới thành công đặc biệt là tui mong bà sẽ đạt GPA giỏi trở lên ở kì này. Tuổi mới nhớ ăn nhiều vô, tui thấy ốm nhom ốm nhách à. Tuổi mới cũng như năm mới thì nhớ ngủ sớm đi đã ăn ít còn ngủ trễ nữa, tưởng vậy là hayyy. Và điều cuối cùng nên nhớ là có gì buồn bã, phật lòng, không vui, oan ức, bức xúc thì cứ nói tui tui sẽ nghe và được thì an ủi. Yên tâm là năm nay tui không thanh lọc bà đâu kkk. Cuối cùng là tui có 1 món quà muốn tặng cho bà nó cũng gắn liền với lời chúc của tui luôn nhưng mà bà về quê sớm quá chưa có kịp tặng có gì đi sinh nhật tính quốc tui sẽ đưa luôn, hehe với lại cái dự án mà tui muốn nói với bà là cái này nè hehe."; // Thay bằng nội dung thư bạn muốn
    };
}
