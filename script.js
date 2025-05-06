function checkLogin() {
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (login === "user05" && password === "gws2025") {
        error.textContent = "";
        alert(`Вітаємо, ${login}!`);
    } else {
        error.textContent = "Невірний логін або пароль.";
    }
}
