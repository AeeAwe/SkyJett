"use strict";

import { createFlightCard, findCheapestFlightByType, findFastestFlightByType, flights } from "./flights.js";

if (localStorage.getItem("auth")){
    if (location.pathname == "/auth.html"){
        location.href = "./";
    };
}else{
    if (location.pathname == "/profile.html"){
        location.href = "./auth.html";
    };
};

window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    // body.insertAdjacentHTML("afterbegin", `
    //     <div onclick="localStorage.removeItem('auth'); location.reload();" style="padding: 5px 10px; margin: 10px; 
    //         background-color: #333; 
    //         color: white; font-weight: 700; cursor: pointer;
    //         text-decoration: none; display: inline-block;">
    //         Выйти из аккаунта
    //     </div>`
    // );

    if (localStorage.getItem("auth")){
        document.querySelector(".app__header-profile").children[0].href = "profile.html";
    }else{
        document.querySelector(".app__header-profile").children[0].href = "auth.html";
    }
    
    const checkLocate = () => {
        const loc = location.pathname.replace("/", "").replace(".html", "");
        const links = document.querySelectorAll("nav ul li");
        if (loc){
            links.forEach(e => {
                const href = e.children[0].getAttribute("href").replace("/", "").replace(".html", "");
                if (href == loc){
                    e.classList.add("active-link")
                };
            });
        };
    };
    checkLocate();

    if (location.pathname == "/"){
        const popularCardsContainer = document.querySelector(".app__popular__cards-container");
        if (flights){
            const [cheapestPass, cheapestCarg, fastestPass, fastestCarg] = 
                [findCheapestFlightByType(flights, "Пассажирский"),
                findCheapestFlightByType(flights, "Грузовой"),
                findFastestFlightByType(flights, "Пассажирский"),
                findFastestFlightByType(flights, "Грузовой")];
            let found = false;
            [[cheapestPass, "Самый дешёвый"], [cheapestCarg, "Самый дешёвый"], [fastestPass, "Самый быстрый"], [fastestCarg, "Самый быстрый"]].forEach(e => {
                if (e[0]){
                    popularCardsContainer.insertAdjacentHTML("beforeend", createFlightCard(e[0], e[1]));
                    found = true;
                };
            });
            if (!found){
                popularCardsContainer.insertAdjacentHTML("beforeend", `<p style="text-align:center">Пока ничего нет</p>`)
            };
        };
    };

    if (location.pathname.includes("/catalog.html")){
        const cardsContainer = document.querySelector(".catalog__main__cards");
        if (flights){
            flights.forEach(e => {
                cardsContainer.insertAdjacentHTML("beforeend", createFlightCard(e, null));
            });
        }else{
            cardsContainer.insertAdjacentHTML("beforeend", `<p style="text-align:center">Пока ничего нет</p>`)
        }
    };

    if (location.pathname.includes("/flight.html")){
        const params = new URLSearchParams(window.location.search);
        const flightId = Number(params.get("id"));
        const flight = flights ? flights.find(f => f.id === flightId) : null;
        const main = document.querySelector(".flight__main");
        if (flight){
            main.insertAdjacentHTML("afterbegin", `
                <img class="flight-image" src="${flight.image}" alt="Изображение рейса ${flight.from} — ${flight.to}">
                <h2 class="flight-title">${flight.from} → ${flight.to}</h2>
                <p class="flight-description">${flight.description}</p>
                <div class="flight-info">
                    <div class="flight-time">
                    <strong>Вылет:</strong> ${flight.departure}<br>
                    <strong>Прибытие:</strong> ${flight.arrival}
                    </div>
                    
                    <div class="flight-details">
                    <strong>В пути:</strong> ${flight.duration}<br>
                    <strong>Класс:</strong> ${flight.class}
                    </div>
                    
                    <div class="flight-price">
                    <span>Цена:</span> <strong>${flight.price} ₽</strong>
                    </div>
                </div>
                <button class="flight-booking-button">Забронировать</button>
            `);
        };
    };

    if (location.pathname.includes("/profile.html")){
        const section = document.querySelector(".profile-section");
        const info = section.querySelector(".profile-info");
        if (localStorage.getItem("auth")){
            const users = JSON.parse(localStorage.getItem("users"));
            const auth = JSON.parse(localStorage.getItem("auth"));
            const authedUser = users.find(e => e.email == auth.email);
            const values = [authedUser.name, authedUser.phone, authedUser.email]
            Array.from(info.children).forEach((e, i) => {
                e.append(values[i]);
            })
        };
        const exit = section.querySelector(".logout");
        exit.addEventListener("click", () => {
            localStorage.removeItem('auth');
            location.reload();
        })
    };
});
