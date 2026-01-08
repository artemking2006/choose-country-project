let form = document.getElementById("countryForm");

form.addEventListener("submit", function (event) {
   
    event.preventDefault();

    let phrase = document.getElementById("phraseInput").value;
    // Pobieramy wybrany kraj
    let selectedCountry = document.querySelector('input[name="country"]:checked');

    if (selectedCountry == null) {
        alert("Please choose a country.");
        return;
    }
    
    let country = selectedCountry.value;
    window.location.href = "country.html?phrase=" + encodeURIComponent(phrase) + "&country=" + country;
});