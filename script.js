// ===============================
// DreamSMP Script
// ===============================

// Server-IP
const serverIP = "play.dreamsmp.de";

// IP kopieren
function copyIP() {
    navigator.clipboard.writeText(serverIP);

    alert("Server-IP kopiert: " + serverIP);
}

// Spieleranzahl (Platzhalter)
const onlineElement = document.getElementById("onlinePlayers");

if (onlineElement) {
    onlineElement.innerHTML = "0 / 500";
}

// Animation beim Scrollen
const cards = document.querySelectorAll(".card, .feature-box, .shop-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

});
DreamSMP/
│── index.html
│── style.css
│── script.js
│── premium.html
│── vip.html
│── checkout.html
│
└── assets/
    ├── hero.jpg
    ├── crown.png
    ├── vip.png