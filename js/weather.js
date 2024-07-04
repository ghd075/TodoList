const API_KEY ='95a68da00e5ad7c86fd2b7cd777f62cb'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((res)=> res.json())
        .then((data)=>{
        const location = document.querySelector('#location');
        const temperature = document.querySelector('#temperature');
        const weather = document.querySelector('#condition');
        const icon = document.querySelector('#icon');
        location.innerText = `위치 : ${data.name}`;
        temperature.innerText = `온도 : ${data.main.temp}°C`;
        weather.innerText = `날씨: ${data.weather[0].main}`;
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].main}" class="weather_icon">`;
    })
}
function onGeoError(){
    alert('Geolocation error');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

