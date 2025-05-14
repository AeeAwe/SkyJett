"use strict";

if (localStorage.getItem("auth")){
    if (location.pathname.endsWith("/auth.html")){
        location.pathname = "SkyJett/";
    }
}else{
    if (!location.pathname.endsWith("/auth.html")){
        location.pathname = "SkyJett/auth.html";
    }
}

const flights = [
    { id: 1, from: "Москва", to: "Сочи", time: "10:00" },
    { id: 2, from: "Санкт-Петербург", to: "Казань", time: "14:00" },
    { id: 3, from: "Екатеринбург", to: "Новосибирск", time: "18:00" },
];

window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    if (location.pathname.endsWith("/auth.html")){
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
                    location.pathname = "SkyJett/";
                }else{
                    localStorage.setItem("users", JSON.stringify([{name: name, email: email, phone: phone, password: password}]));
                    localStorage.setItem("auth", JSON.stringify({name: name, email: email}));
                    location.pathname = "SkyJett/";
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
                            location.pathname = "SkyJett/";
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
            const trg = e.target;
            if (trg.classList.contains("sign-up")){
                if (trg.classList.contains("active-link")){
                    null;
                }else{
                    trg.classList.add("active-link");
                    trg.nextElementSibling.classList.remove("active-link");
                    sign_in.style.display = "none";
                    sign_up.style.display = "flex";
                    if (container.lastElementChild.tagName == "P"){
                        container.lastElementChild.remove();
                    }
                }
            }else if (trg.classList.contains("sign-in")){
                if (trg.classList.contains("active-link")){
                    null;
                }else{
                    trg.classList.add("active-link");
                    trg.previousElementSibling.classList.remove("active-link");
                    sign_in.style.display = "flex";
                    sign_up.style.display = "none";
                    if (container.lastElementChild.tagName == "P"){
                        container.lastElementChild.remove();
                    }
                }
            };
        });
    }else{
        body.insertAdjacentHTML("afterbegin", `
            <div onclick="localStorage.removeItem('auth'); location.reload();" style="padding: 5px 10px; margin: 10px; 
                background-color: #333; 
                color: white; font-weight: 700; cursor: pointer;
                text-decoration: none; display: inline-block;">
                Выйти из аккаунта
            </div>`
        );
    }
    
    const checkLocate = () => {
        const loc = location.pathname.replace("SkyJett/", "").replace(".html", "");
        const links = document.querySelectorAll("nav ul li");
        if (loc){
            links.forEach(e => {
                const href = e.children[0].getAttribute("href").replace("/", "").replace(".html", "");
                if (href == loc){
                    e.classList.add("active-link")
                }
            })
        }
    };
    checkLocate();

    if (location.pathname.includes("/flight.html")){
        const params = new URLSearchParams(window.location.search);
        const flightId = Number(params.get("id"));
        const flight = flights.find(f => f.id === flightId);

        if (true){
            const main = document.querySelector(".flight__main");
            main.append("ТУТ БУДЕТ РЕЙС")
            // main.insertAdjacentHTML("afterbegin", `
            //     <div class="flight__main__left">
            //         span.direction
            //     </div>
            //     <div class="flight__main__right">

            //     </div>
            // `);
        }
    }
    
    const getFlight = async(e) => {
        
    };
});
