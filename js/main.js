let cinemaFeatures = ["IMAX 3D Laser", "Dolby Sound", "VIP Lounges", "4DX Motion Seats"];

let movies = [
    { title: "Interstellar", price: 2500, genre: "Sci-Fi / Drama", rating: "8.7", img: "img/interstellar.jpg" },
    { title: "Inception", price: 2500, genre: "Action / Sci-Fi", rating: "8.8", img: "img/Inception.jpg" },
    { title: "The Dark Knight", price: 3000, genre: "Action / Crime", rating: "9.0", img: "img/TheDarkKnight.jpg" },
    { title: "Dune: Part Two", price: 3000, genre: "Sci-Fi / Adventure", rating: "8.5", img: "img/dune.jpg" },
    { title: "Oppenheimer", price: 2200, genre: "Biography / Drama", rating: "8.9", img: "img/oppenheimer.jpg" },
    { title: "Chronos Rift", price: 2800, genre: "Sci-Fi / Action", rating: "7.9", img: "img/chronosRift.jpg" }
];

let scheduleData = [
    { time: "12:00 PM", title: "Interstellar", hall: "Hall 1 (IMAX)", price: "2500 KZT" },
    { time: "03:30 PM", title: "Inception", hall: "Hall 2", price: "2500 KZT" },
    { time: "07:00 PM", title: "The Dark Knight", hall: "Hall 1 (IMAX)", price: "3000 KZT" }
];

function showFeatures() {
    let list = document.getElementById("features-list");
    if (list === null) return;

    list.innerHTML = "";

    for (let i = 0; i < cinemaFeatures.length; i++) {
        let li = document.createElement("li");
        li.innerText = cinemaFeatures[i];
        list.appendChild(li);
    }
}

function showMovies() {
    let container = document.getElementById("movies-container");
    if (container === null) return;

    container.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        let div = document.createElement("div");
        div.className = "col movie-card-container";

        div.innerHTML =
            "<div class='cards movie-card'>" +
            "<div class='poster-box'>" +
            "<span class='rating-tag'>★ " + movies[i].rating + "</span>" +
            "<img src='" + movies[i].img + "' alt='" + movies[i].title + "' class='cards-img'>" +
            "</div>" +
            "<div class='card-info'>" +
            "<h3>" + movies[i].title + "</h3>" +
            "<p>Genre: " + movies[i].genre + "</p>" +
            "<p>" + movies[i].price + " KZT</p>" +
            "<button class='button-cards btn btn-danger book-btn'>Book Ticket</button>" +
            "</div>" +
            "</div>";

        container.appendChild(div);
    }
}

function showTrending() {
    let container = document.getElementById("trending-container");
    if (container === null) return;

    container.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        let movie = movies[i];
        if (!movie) continue;

        let div = document.createElement("div");
        div.className = "col movie-card-container";

        div.innerHTML =
            "<div class='cards movie-card'>" +
            "<div class='poster-box'>" +
            "<span class='rating-tag'>★ " + movie.rating + "</span>" +
            "<img src='" + movie.img + "' alt='" + movie.title + "' class='cards-img'>" +
            "</div>" +
            "<div class='card-info'>" +
            "<h3>" + movie.title + "</h3>" +
            "<p>Genre: " + movie.genre + "</p>" +
            "<button class='button-cards btn btn-danger book-btn'>Book Ticket</button>" +
            "</div>" +
            "</div>";

        container.appendChild(div);
    }
}

function showSchedule() {
    let tbody = document.getElementById("schedule-table-body");
    if (tbody === null) return;

    tbody.innerHTML = "";

    for (let i = 0; i < scheduleData.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML =
            "<td>" + scheduleData[i].time + "</td>" +
            "<td>" + scheduleData[i].title + "</td>" +
            "<td>" + scheduleData[i].hall + "</td>" +
            "<td>" + scheduleData[i].price + "</td>";
        tbody.appendChild(tr);
    }
}

function calculateTotal(price, ticketsAmount) {
    return price * ticketsAmount;
}

function toggleTheme() {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
}

document.addEventListener("DOMContentLoaded", function() {
    showFeatures();
    showMovies();
    showTrending();
    showSchedule();

    let themeBtn = document.getElementById("theme-btn");
    if (themeBtn !== null) {
        themeBtn.addEventListener("click", toggleTheme);
    }

    let form = document.getElementById("contact-form");
    if (form !== null) {
        form.addEventListener("submit", function(event) {
            let emailInput = document.getElementById("email").value;
            let errorText = document.getElementById("error-message");

            if (emailInput.length < 5 || emailInput.indexOf("@") === -1) {
                event.preventDefault();
                errorText.innerText = "Please enter a valid email address.";
                errorText.style.color = "red";
            } else {
                alert("Form submitted successfully!");
            }
        });
    }
});

$(document).ready(function() {
    $("#nav-logo").hide().fadeIn(1500);

    $(document).on("mouseenter", ".movie-card", function() {
        $(this).css("border", "2px solid red");
    });

    $(document).on("mouseleave", ".movie-card", function() {
        $(this).css("border", "none");
    });

    $(document).on("click", ".book-btn", function() {
        let movieTitle = $(this).closest(".card-info").find("h3").text();
        let tickets = prompt("How many tickets for " + movieTitle + "?");

        if (tickets > 0) {
            let totalPrice = calculateTotal(2500, tickets);
            alert("Total for " + tickets + " tickets: " + totalPrice + " KZT");
            $(this).closest(".movie-card-container").slideUp(500);
        }
    });
});