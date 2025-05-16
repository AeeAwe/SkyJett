"use strict";

if (localStorage.getItem("auth")){
    if (location.pathname == "/auth.html"){
        location.href = "./";
    }
}else{
    if (location.pathname == "/profile.html"){
        location.href = "./auth.html";
    };
};

window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".auth__container");
    const sign_up = document.querySelector(".auth__form__sign-up");
    const sign_in = document.querySelector(".auth__form__sign-in");
    sign_up.addEventListener("submit", e => {
        e.preventDefault();
        const name = sign_up.name.value;
        const email = sign_up.email.value;
        const phone = sign_up.tel.value;
        const password = sign_up.password.value;
        if (name && email && phone && password){
            const users = JSON.parse(localStorage.getItem("users"));
            if (users){
                users.forEach(e => {
                    if (e.email == email || e.phone == phone){
                        if (container.lastElementChild.tagName != "P"){
                            container.insertAdjacentHTML("beforeend", `
                                <p style="color:red;font-weight:700">Такая почта или номер уже использованы</p>
                            `);
                        }
                        return
                    }
                });
                users.append({name: name, email: email, phone: phone, password: password});
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("auth", JSON.stringify({name: name, email: email}));
                location.href = "./";
            }else{
                localStorage.setItem("users", JSON.stringify([{name: name, email: email, phone: phone, password: password}]));
                localStorage.setItem("auth", JSON.stringify({name: name, email: email}));
                location.href = "./";
            }
        };
    });
    sign_in.addEventListener("submit", e => {
        e.preventDefault();
        const email = sign_in.email.value;
        const password = sign_in.password.value;
        if (email && password){
            const users = JSON.parse(localStorage.getItem("users"));
            let found = false;
            if (users){
                users.forEach(e => {
                    if (e.email == email && e.password == password){
                        localStorage.setItem("auth", JSON.stringify({name: e.name, email: email}));
                        location.href = "./";
                        found = true;
                    }
                });
                if (!found){
                    if (container.lastElementChild.tagName !== "P"){
                        container.insertAdjacentHTML("beforeend", `
                            <p style="color:red;font-weight:700">Нет такого пользователя</p>
                            `);
                        }
                    }
                }else{
                    if (container.lastElementChild.tagName !== "P"){
                        container.insertAdjacentHTML("beforeend", `
                            <p style="color:red;font-weight:700">Нет такого пользователя</p>
                    `);
                }
            }
        }
    });
    const pass_input = document.querySelectorAll(".auth__form__input[name='password']");
    const switch_inp = document.querySelectorAll(".auth__form__input-box__switch");
    switch_inp[0].addEventListener("click", e => {
        if (pass_input[0].type == "password"){
            pass_input[0].type = "text";
            switch_inp[0].children[0].src = "icons/eye-open.svg";
            switch_inp[0].children[0].alt = "раскрыт";
        }else {
            pass_input[0].type = "password";
            switch_inp[0].children[0].src = "icons/eye-close.svg";
            switch_inp[0].children[0].alt = "скрыт";
        };
    });
    switch_inp[1].addEventListener("click", e => {
        if (pass_input[1].type == "password"){
            pass_input[1].type = "text";
            switch_inp[1].children[0].src = "icons/eye-open.svg";
            switch_inp[1].children[0].alt = "раскрыт";
        }else {
            pass_input[1].type = "password";
            switch_inp[1].children[0].src = "icons/eye-close.svg";
            switch_inp[1].children[0].alt = "скрыт";
        };
    });
    const auth__switch_box = document.querySelector(".auth__switch-box");
    auth__switch_box.addEventListener("click", e => {
        const target = e.target;
        if (target.classList.contains("sign-up")){
            if (target.classList.contains("active-link")){
                null;
            }else{
                target.classList.add("active-link");
                target.nextElementSibling.classList.remove("active-link");
                sign_in.style.display = "none";
                sign_up.style.display = "flex";
                if (container.lastElementChild.tagName == "P"){
                    container.lastElementChild.remove();
                }
            }
        }else if (target.classList.contains("sign-in")){
            if (target.classList.contains("active-link")){
                null;
            }else{
                target.classList.add("active-link");
                target.previousElementSibling.classList.remove("active-link");
                sign_in.style.display = "flex";
                sign_up.style.display = "none";
                if (container.lastElementChild.tagName == "P"){
                    container.lastElementChild.remove();
                }
            }
        };
    });
    const mask = event => {
        const {target, keyCode, type} = event;
        const pos = target.selectionStart;
        if (pos < 3) event.preventDefault();
        const matrix = '+7 (___) ___-__-__';
        let i = 0;
        const def = matrix.replace(/\D/g, '');
        const val = target.value.replace(/\D/g, '');
        let newValue = matrix.replace(/[_\d]/g, a => (i < val.length ? val[i++] || def[i] : a));
        i = newValue.indexOf('_');
        if (i !== -1){
            i < 5 && (i = 3);
            newValue = newValue.slice(0, i);
        };
        let reg = matrix.substring(0, target.value.length).replace(/_+/g, a => `\\d{1,${a.length}}`).replace(/[+()]/g, '\\$&');
        reg = new RegExp(`^${reg}$`);
        if (!reg.test(target.value) || target.value.length < 5 || keyCode > 47 && keyCode < 58){
            target.value = newValue;
        };
        if (type === 'blur' && target.value.length < 5) target.value = '';
    };
    const phone_input = document.querySelector(".auth__form__input[name='tel']");
    phone_input.addEventListener('input', mask);
    phone_input.addEventListener('focus', mask);
    phone_input.addEventListener('blur', mask);
    phone_input.addEventListener('keydown', mask);
});