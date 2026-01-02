// Pobieramy parametry z adresu URL
const params = new URLSearchParams(window.location.search);

// Odczytujemy przekazane dane
const phrase = params.get("phrase");
const country = params.get("country");

// Elementy HTML
const phraseText = document.getElementById("phraseText");
const countryText = document.getElementById("countryText");
const countryImage = document.getElementById("countryImage");

// Wyświetlamy tekst
phraseText.textContent = "Phrase: " + phrase;
countryText.innerHTML = `Country: ${country}
<img src="img/flags/${country}.png" alt="${country} flag" class="inline-flag">`;

// Obrazy przypisane do krajów
const images = {
    poland: ["poland1.jpg", "poland2.jpg", "poland3.jpg"],
    usa: ["usa1.jpg", "usa2.jpg", "usa3.jpg"],
    egypt: ["egypt1.jpg", "egypt2.jpg", "egypt3.jpg"],
    japan: ["japan1.jpg", "japan2.jpg", "japan3.jpg"]
};

// Kolory tła dla krajów (HEX)
const backgrounds = {
    poland: "#f1f5f9",
    usa: "#0f172a",
    egypt: "#fef3c7",
    japan: "#fde68a",
};

// Ustawiamy kolor tła strony
document.body.style.backgroundColor = backgrounds[country];

// Losujemy obraz
const randomIndex = Math.floor(Math.random() * images[country].length);
countryImage.src = "img/" + images[country][randomIndex];

// Obrót kompasu zależny od długości tekstu
const compass = document.querySelector(".compass");

if (compass && phrase) {
    const rotationDegrees = phrase.length * 10;
    compass.style.transform = `rotate(${rotationDegrees}deg)`;
}
