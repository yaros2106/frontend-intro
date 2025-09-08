let count = 1;

function onClickButton(element) {
    element.innerHTML = "вы нажали столько раз на кнопку: " + count;
    count += 1;
    element.style.cssText = "border-radius: 5px; border: 0; font-size: 20px"
    element.style.background = "red";
}


function charsCount(input) {
    let count_num = input.value.length;
    if (count_num > 10) {
        document.getElementById("input_p").style.color = "red";
    }
    document.getElementById("input_p").textContent = "Количество символов: " + count_num;
}


function checkPwd(event) {
    event.preventDefault(); // убирает перезагрузку страницы после отправки формы
    const pwd = document.getElementById("pwd").value;
    if (pwd === "1234") {
        document.getElementById("hidden_p").textContent = "пароль верный";
    }
    else {
        document.getElementById("hidden_p").textContent = "пароль неверный";
    }
}

function hideImg(btn) {
    let img = document.getElementById("hide_img")
    let state_img = window.getComputedStyle(img).display
    if (state_img === "block") {
        document.getElementById("hide_img").style.display = "none"
        btn.textContent = "Show"
    }
    else {
        document.getElementById("hide_img").style.display = "block"
        btn.textContent = "Hide"
    }
}