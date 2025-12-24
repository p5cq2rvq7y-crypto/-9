function simplePhoneMask(element) {
    element.addEventListener("input", function () {
        let digits = this.value.replace(/\D/g, "");

        if (digits.startsWith("8")) {
            digits = "7" + digits.slice(1);
        }

        if (!digits.startsWith("7")) {
            digits = "7" + digits;
        }

        digits = digits.substring(0, 11);

        let result = "+7 (";

        if (digits.length > 1) result += digits.substring(1, 4);
        if (digits.length >= 4) result += ") " + digits.substring(4, 7);
        else result += "";

        if (digits.length >= 7) result += "-" + digits.substring(7, 9);
        if (digits.length >= 9) result += "-" + digits.substring(9, 11);

        this.value = result;
    });
}

simplePhoneMask(document.getElementById("cakePhone"));



document.getElementById("cakeBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const name = cakeName.value.trim();
    const weight = cakeWeight.value.trim();
    const phone = cakePhone.value.trim();
    const date = cakeDate.value;
    const time = cakeTime.value;
    const comment = cakeComment.value.trim();
    const fill = cakeFill.value;

    let valid = true;

    if (!/^[А-Яа-яA-Za-zЁё]{2,15}$/.test(name)) {
        cakeNameError.textContent = "Введите имя (2–15 букв)";
        valid = false;
    } else cakeNameError.textContent = "";

    if (!/^\d+(\.\d{1,2})?$/.test(weight)) {
        cakeWeightError.textContent = "Пример: 1.5";
        valid = false;
    } else cakeWeightError.textContent = "";

    if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
        cakePhoneError.textContent = "Формат: +7 (999) 999-99-99";
        valid = false;
    } else cakePhoneError.textContent = "";

    if (fill === "") {
        cakeFillError.textContent = "Выберите начинку";
        valid = false;
    } else cakeFillError.textContent = "";

    if (valid) {
        output.style.display = "block";
        output.innerHTML =
            `Ваш заказ оформлен!<br>
             Имя: ${name}<br>
             Вес: ${weight} кг<br>
             Телефон: ${phone}<br>
             Дата доставки: ${date || "не указана"}<br>
             Время доставки: ${time || "не указано"}<br>
             Начинка: ${fill}<br>
             Комментарий: ${comment || "—"}`;
    }
});




const palette = ["#ff7f50", "#6b4bff", "#2ecc71", "#3498db", "#ffcc33"];
let index = 0;

document.getElementById("changeButtonColor").addEventListener("click", function () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.style.background = palette[index]);
    index = (index + 1) % palette.length;
});



document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    this.textContent = document.body.classList.contains("dark")
        ? "Светлая тема"
        : "Тёмная тема";
});



simplePhoneMask(document.getElementById("callbackPhone"));


document.getElementById("callbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const form = event.target;
    const name = form.elements['cbName'].value;
    const phone = form.elements['cbPhone'].value;
    const email = form.elements['cbMail'].value;

    const out = document.getElementById("callbackOutput");
    
    out.style.display = "block";
    out.innerHTML = 
        `<b>Заявка на звонок принята!</b><br>
         Имя: ${name}<br>
         Телефон: ${phone}<br>
         E-mail: ${email || "не указан"}`;
});