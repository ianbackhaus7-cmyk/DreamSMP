// DreamSMP Website

// Server-IP
const serverIP = "play.dreamsmp.de";

// IP kopieren
function copyIP() {
    navigator.clipboard.writeText(serverIP)
        .then(() => {
            alert("Server-IP wurde kopiert: " + serverIP);
        })
        .catch(() => {
            alert("Kopieren nicht möglich.");
        });
}

// Karten beim Scrollen einblenden
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .feature-box, .shop-card").forEach((el) => {
    observer.observe(el);
});
.card,
.feature-box,
.shop-card{
    opacity:0;
    transform:translateY(40px);
    transition:all .6s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}