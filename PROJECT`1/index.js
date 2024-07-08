
function showweather(event) {
    event.preventDefault();
    let cityName = document.getElementById('cityName').value;
    const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let lat = data.coord.lat
            let lon = data.coord.lon
            document.getElementById('latlong').innerText = `latitude = ${lat}  and longitude ${lon}`
            document.getElementById('cityNameDisplay').innerText = data.name;
            document.getElementById('degree').innerText = `${data.main.temp} °C`;
            document.getElementById('weatherCondition').innerText = data.weather[0].description.toUpperCase();
            document.getElementById('windSpeed').innerText = `WIND SPEED: ${data.wind.speed} M/S`;
            document.getElementById('weatherImage').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}
