async function haeSaa() {
    const kaupunki = document.getElementById("city").value.trim();
    const apiKey = "";
    if (!kaupunki) {
        alert("Syötä kaupungin nimi englanniksi!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${kaupunki}&appid=${apiKey}&units=metric&lang=fi`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Kaupunkia ei löytynyt");

        const data = await response.json();
        

        document.getElementById("temp").innerText = `${data.main.temp}°C`;
        document.getElementById("weather").innerText = `${data.weather[0].description}`;
        document.getElementById("forecast").innerText = `Tuuli: ${data.wind.speed} m/s`;

        document.getElementById("temp").style.display = "block";
        document.getElementById("weather").style.display = "block";
        document.getElementById("forecast").style.display = "block";

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
        document.getElementById("weather-icon").alt = data.weather[0].description;
        document.getElementById("weather-icon").style.display = "block";

    } catch (error) {
        document.getElementById("temp").innerText = "";
        document.getElementById("weather").innerText = "";
        document.getElementById("forecast").innerText = "";
        document.getElementById("weather-icon").src = "";
        alert(error.message);
    }
}
//viesti tulevaisuuteen