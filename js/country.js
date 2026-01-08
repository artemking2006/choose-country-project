const params = new URLSearchParams(window.location.search);
const phrase = params.get("phrase");
const country = params.get("country");


const phraseText = document.getElementById("phraseText");
const countryText = document.getElementById("countryText");
const countryImage = document.getElementById("countryImage");


phraseText.textContent = "Phrase: " + phrase;
countryText.innerHTML = `Country: ${country}
<img src="img/flags/${country}.png" alt="${country} flag" class="inline-flag">`;


const images = {
    poland: ["poland1.jpg", "poland2.jpg", "poland3.jpg"],
    usa: ["usa1.jpg", "usa2.jpg", "usa3.jpg"],
    egypt: ["egypt1.jpg", "egypt2.jpg", "egypt3.jpg"],
    japan: ["japan1.jpg", "japan2.jpg", "japan3.jpg"]
};


const backgrounds = {
    poland: "#f1f5f9",
    usa: "#0f172a",
    egypt: "#fef3c7",
    japan: "#fde68a",
};

document.body.style.backgroundColor = backgrounds[country];

const randomIndex = Math.floor(Math.random() * images[country].length);
countryImage.src = "img/" + images[country][randomIndex];

const compass = document.querySelector(".compass");

if (compass && phrase) {
    const rotationDegrees = phrase.length * 10;
    compass.style.transform = `rotate(${rotationDegrees}deg)`;
}
