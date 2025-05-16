"use strict";

const flights = [
    {
        "id": 1,
        "from": "Москва (SVO)",
        "to": "Лондон (LHR)",
        "departure": "2025-05-20 10:30",
        "arrival": "2025-05-20 12:30",
        "duration": "4h",
        "class": "Пассажирский",
        "description": "Прямой рейс Москва–Лондон с отличным сервисом на борту и бесплатным питанием.",
        "image": "https://images.unsplash.com/photo-1583330357508-1864f8e57785",
        "price": 23000
    },
    {
        "id": 2,
        "from": "Санкт-Петербург (LED)",
        "to": "Берлин (BER)",
        "departure": "2025-05-21 08:00",
        "arrival": "2025-05-21 09:45",
        "duration": "2h 45m",
        "class": "Пассажирский",
        "description": "Утренний рейс в Берлин — идеальный выбор для бизнес-поездки или экскурсии.",
        "image": "https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1",
        "price": 18500
    },
    {
        "id": 3,
        "from": "Казань (KZN)",
        "to": "Анталья (AY )",
        "departure": "2025-06-05 04:15",
        "arrival": "2025-06-05 08:30",
        "duration": "4h 15m",
        "class": "Пассажирский",
        "description": "Прямой чартерный рейс на турецкое побережье. Отличный выбор для летнего отпуска.",
        "image": "https://images.unsplash.com/photo-1500835556837-99ac94a94552",
        "price": 27000
    },
    {
        "id": 4,
        "from": "Москва (DME)",
        "to": "Пекин (PEK)",
        "departure": "2025-05-23 22:00",
        "arrival": "2025-05-24 10:30",
        "duration": "7h 30m",
        "class": "Грузовой",
        "description": "Ночной грузовой рейс для доставки промышленных товаров и техники.",
        "image": "https://plus.unsplash.com/premium_photo-1679830513869-cd3648acb1db",
        "price": 54000
    },
    {
        "id": 5,
        "from": "Новосибирск (OVB)",
        "to": "Бангкок (BKK)",
        "departure": "2025-05-25 13:00",
        "arrival": "2025-05-25 20:00",
        "duration": "7h",
        "class": "Пассажирский",
        "description": "Рейс в сердце Таиланда с комфортными креслами и развлечениями на борту.",
        "image": "https://images.unsplash.com/photo-1504150558240-0b4fd8946624",
        "price": 38000
    },
    {
        "id": 6,
        "from": "Екатеринбург (SVX)",
        "to": "Дубай (DXB)",
        "departure": "2025-05-29 15:45",
        "arrival": "2025-05-29 20:10",
        "duration": "5h 25m",
        "class": "Пассажирский",
        "description": "Популярный маршрут в ОАЭ — отличный выбор для отпуска и шопинга.",
        "image": "https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037",
        "price": 32000
    },
    {
        "id": 7,
        "from": "Москва (VKO)",
        "to": "Калининград (KGD)",
        "departure": "2025-05-22 06:30",
        "arrival": "2025-05-22 08:00",
        "duration": "1h 30m",
        "class": "Пассажирский",
        "description": "Быстрый и удобный перелёт на запад России. Идеально для выходных.",
        "image": "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
        "price": 9500
    },
    {
        "id": 8,
        "from": "Сочи (AER)",
        "to": "Москва (SVO)",
        "departure": "2025-05-24 14:00",
        "arrival": "2025-05-24 16:20",
        "duration": "2h 20m",
        "class": "Пассажирский",
        "description": "Обратный рейс с курорта на Черном море.",
        "image": "https://plus.unsplash.com/premium_photo-1679830513873-5f9163fcc04a",
        "price": 12000
    },
    {
        "id": 9,
        "from": "Москва (SVO)",
        "to": "Нью-Йорк (JFK)",
        "departure": "2025-06-01 09:00",
        "arrival": "2025-06-01 14:30",
        "duration": "10h 30m",
        "class": "Пассажирский",
        "description": "Трансатлантический рейс в Нью-Йорк с удобным временем вылета.",
        "image": "https://images.unsplash.com/photo-1473625247510-8ceb1760943f",
        "price": 58000
    },
    {
        "id": 10,
        "from": "Краснодар (KRR)",
        "to": "Ереван (EVN)",
        "departure": "2025-06-10 05:50",
        "arrival": "2025-06-10 07:30",
        "duration": "2h 40m",
        "class": "Пассажирский",
        "description": "Рейс на Кавказ с живописными видами гор по пути.",
        "image": "https://plus.unsplash.com/premium_photo-1683140766566-3ecdcf5a02e0",
        "price": 16000
    },
    {
        "id": 11,
        "from": "Москва (DME)",
        "to": "Минск (MSQ)",
        "departure": "2025-06-03 11:00",
        "arrival": "2025-06-03 12:30",
        "duration": "1h 30m",
        "class": "Пассажирский",
        "description": "Быстрый международный перелёт в столицу Беларуси.",
        "image": "https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1",
        "price": 10500
    },
    {
        "id": 12,
        "from": "Омск (OMS)",
        "to": "Ташкент ( AS)",
        "departure": "2025-06-08 03:45",
        "arrival": "2025-06-08 07:15",
        "duration": "3h 30m",
        "class": "Пассажирский",
        "description": "Утренний рейс в Узбекистан, идеален для деловых поездок.",
        "image": "https://images.unsplash.com/photo-1500835556837-99ac94a94552s",
        "price": 17500
    },
    {
        "id": 13,
        "from": "Владивосток (VVO)",
        "to": "Токио (NR )",
        "departure": "2025-06-12 08:00",
        "arrival": "2025-06-12 11:00",
        "duration": "2h",
        "class": "Пассажирский",
        "description": "Рейс в Японию с минимальной продолжительностью полета.",
        "image": "https://images.unsplash.com/photo-1583330357508-1864f8e57785",
        "price": 39000
    },
    {
        "id": 14,
        "from": "Москва (SVO)",
        "to": "Мурманск (MMK)",
        "departure": "2025-05-30 20:00",
        "arrival": "2025-05-30 23:00",
        "duration": "3h",
        "class": "Пассажирский",
        "description": "Вечерний рейс на север России. Подходит для командировок и туризма.",
        "image": "https://images.unsplash.com/photo-1504150558240-0b4fd8946624",
        "price": 14000
    },
    {
        "id": 15,
        "from": "Москва (VKO)",
        "to": "Симферополь (SIP)",
        "departure": "2025-06-15 07:00",
        "arrival": "2025-06-15 09:20",
        "duration": "2h 20m",
        "class": "Пассажирский",
        "description": "Удобный рейс на Крымское побережье.",
        "image": "https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037",
        "price": 11000
    },
    {
        "id": 16,
        "from": "Москва (SVO)",
        "to": "Сургут (SGC)",
        "departure": "2025-05-27 06:15",
        "arrival": "2025-05-27 10:00",
        "duration": "3h 45m",
        "class": "Пассажирский",
        "description": "Рейс в нефтяной регион России, часто используемый для командировок.",
        "image": "https://plus.unsplash.com/premium_photo-1679830513873-5f9163fcc04a",
        "price": 15500
    },
    {
        "id": 17,
        "from": "Москва (DME)",
        "to": "Париж (CDG)",
        "departure": "2025-06-05 09:45",
        "arrival": "2025-06-05 12:10",
        "duration": "4h 25m",
        "class": "Пассажирский",
        "description": "Рейс в столицу Франции для романтического путешествия.",
        "image": "https://images.unsplash.com/photo-1500835556837-99ac94a94552",
        "price": 27000
    },
    {
        "id": 18,
        "from": "Уфа (UFA)",
        "to": "Нур-Султан (NQZ)",
        "departure": "2025-05-28 12:00",
        "arrival": "2025-05-28 15:00",
        "duration": "3h",
        "class": "Пассажирский",
        "description": "Дневной рейс в столицу Казахстана с хорошими стыковками.",
        "image": "https://plus.unsplash.com/premium_photo-1679830513869-cd3648acb1db",
        "price": 16500
    },
    {
        "id": 19,
        "from": "Москва (SVO)",
        "to": "Кишинёв (KIV)",
        "departure": "2025-06-07 16:30",
        "arrival": "2025-06-07 18:40",
        "duration": "2h 10m",
        "class": "Пассажирский",
        "description": "Прямой рейс в Молдавию. Удобный вылет в вечернее время.",
        "image": "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
        "price": 13000
    },
    {
        "id": 20,
        "from": "Москва (VKO)",
        "to": "Нарьян-Мар (NNM)",
        "departure": "2025-06-11 07:10",
        "arrival": "2025-06-11 10:40",
        "duration": "3h 30m",
        "class": "Гибридный (Пассажирский + Почтовый)",
        "description": "Уникальный рейс на Крайний Север с возможностью перевозки корреспонденции.",
        "image": "https://images.unsplash.com/photo-1583330357508-1864f8e57785",
        "price": 19000
    }
];


function parseDuration(duration) {
    const hours = parseInt(duration.match(/(\d+)h/)?.[1] || 0);
    const minutes = parseInt(duration.match(/(\d+)m/)?.[1] || 0);
    return hours * 60 + minutes;
};

function findCheapestFlightByType(flights, type) {
    const filtered = flights.filter(flight => flight.class === type);
    return filtered.reduce((cheapest, current) =>
        current.price < cheapest.price ? current : cheapest
    );
};

function findFastestFlightByType(flights, type) {
    const filtered = flights.filter(flight => flight.class === type);
    return filtered.reduce((fastest, current) =>
        parseDuration(current.duration) < parseDuration(fastest.duration) ? current : fastest
    );
};

function createFlightCard(data, type) {
    return `
        <div class="app__popular__cards-container__card">
            ${type ? `<div class="app__popular__cards-container__card-special-sign">${type}</div>` : ""}
            <span class="app__popular__cards-container__card-route">${data.from} — ${data.to}</span>
            <span class="app__popular__cards-container__card-type">${data.class}</span>
            <span class="app__popular__cards-container__card-cost">${data.price} ₽</span>
            <a class="app__popular__cards-container__card-details" href="flight.html?id=${data.id}">Подробнее</a>
        </div>
    `
};

export {flights, findCheapestFlightByType, findFastestFlightByType, createFlightCard}