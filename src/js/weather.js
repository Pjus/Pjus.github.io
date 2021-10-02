const API_KEY = '1be3dd6d179f42b2ef5a6e0116ec6991'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((data) => {
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(3)");
        const temp = document.querySelector("#weather span:last-child");
        const weatheType = data.weather[0].main;
        city.innerText = data.name; 
        temp.innerText = data.main.temp + ' ℃';
        const weatherImg = document.createElement("img")
        weatherImg.src = `src/img/${weatheType}.png`
        weather.appendChild(weatherImg);
    });

}

function onGeoErr(){
    alert("Can't find you. No weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);