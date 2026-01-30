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
            showNightSky();
        }
    }, 1000);
}

function showNightSky() {
    const nightSky = document.getElementById("night-sky");
    nightSky.style.display = "block";

    // Hiển thị hình ảnh pháo hoa
    const fireworks = document.getElementById("fireworks");
    fireworks.style.display = "block";
    
    // Thêm âm thanh pháo hoa (cần có tệp âm thanh)
    const audio = new Audio('https://tiengdong.com/tieng-ban-phao-hoa?utm_source=copylink&utm_medium=share_button&utm_campaign=shared_from_tiengdong.com&utm_content=vi-18h32-30-01-2026');
    audio.play();

    // Hiệu ứng mờ dần
    setTimeout(() => {
        nightSky.style.opacity = 0;
        setTimeout(() => {
            showLetter();
        }, 1000);
    }, 3000);
}

function showLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block";
    letter.onclick = () => {
        const letterContent = document.getElementById("letter-content");
        letterContent.style.display = "block";
        letterContent.innerHTML = "Chúc NS có 1 ngày sinh nhật thật là vui vẻ và hạnh phúc. Chúc bà có 1 tuổi mới thành công đặc biệt là tui mong bà sẽ đạt GPA giỏi trở lên ở kì này. Tuổi mới nhớ ăn nhiều vô, tui thấy ốm nhom ốm nhách à. Tuổi mới cũng như năm mới thì nhớ ngủ sớm đi đã ăn ít còn ngủ trễ nữa, tưởng vậy là hayyy. Và điều cuối cùng nên nhớ là có gì buồn bã, phật lòng, không vui, oan ức, bức xúc thì cứ nói tui tui sẽ nghe và được thì an ủi. Yên tâm là năm nay tui không thanh lọc bà đâu kkk. Cuối cùng là tui có 1 món quà muốn tặng cho bà nó cũng gắn liền với lời chúc của tui luôn nhưng mà bà về quê sớm quá chưa có kịp tặng có gì đi sinh nhật tính quốc tui sẽ đưa luôn, hehe với lại cái dự án mà tui muốn nói với bà là cái này nè hehe.";
    };
}