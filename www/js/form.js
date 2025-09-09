document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    let form = document.getElementById("main-form")

    let pwd = form.pwd.value;  // ищем данные по заданному name
    let repass = form.repass.value;

    let fail = "";

    if (pwd !== repass) {
        fail = "Пароли должны совпадать";
    }

    if (fail) {
        event.preventDefault();
        document.getElementById("error").textContent = fail;
        return false;
    } else {
        alert("Все данные успешно заполнены");
        return true;
    }
}