function displayTemperature (response){
    let tempertureElement = document.querySelector("#temperature");
    let cityElement= document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
     let humidityElement = document.querySelector("#humidity");
     let windElement = document.querySelector("#wind");
    tempertureElement.innerHTML= Math.round (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey = "704c1ac4921f1b0774eeea454560dd2f";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);