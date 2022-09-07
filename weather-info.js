const API_key = '7981364f06b0f7a9bcb30f332f525271';


const loadTemperature = async () => {
    let city = document.getElementById('cityname').value;
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemparature(data);


}

const displayTemparature = (climateThings) => {
    // console.log(climateThings);

    let cityName = document.getElementById('cityValue');
    cityName.innerText = (climateThings.name);



    let tempThings = document.getElementById('temperature');
    tempThings.innerText = climateThings.main.temp;


    let HappeningValue = document.getElementById('happenedToday');
    HappeningValue.innerText = (climateThings.weather[0].main);

    const Url = `http://openweathermap.org/img/wn/${climateThings.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', Url);



}


document.getElementById('SeeThings').addEventListener("click", function () {
    // console.log('ki khbr');
    loadTemperature();

});

