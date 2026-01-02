// Pobieramy formularz po id
let form = document.getElementById("countryForm");
// Nasłuchujemy zdarzenie wysłania formularza
form.addEventListener("submit", function (event) {
    // Zatrzymujemy domyślne wysyłanie formularza
    event.preventDefault();
    // Pobieramy tekst wpisany przez użytkownika
    let phrase = document.getElementById("phraseInput").value;
    // Pobieramy wybrany kraj
    let selectedCountry = document.querySelector('input[name="country"]:checked');
    // Sprawdzamy, czy użytkownik wybrał kraj
    if (selectedCountry == null) {
        alert("Please choose a country.");
        return;
    }

    // Pobieramy wartość wybranego kraju
    let country = selectedCountry.value;
    // Przechodzimy do drugiej strony z parametrami w URL
    window.location.href = "country.html?phrase=" + encodeURIComponent(phrase) + "&country=" + country;
});