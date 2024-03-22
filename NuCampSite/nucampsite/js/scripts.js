const apiKey = process.env.OPEN_WEATHER_API_KEY;
const city = 'Bellevue';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 500,
    pause: false
})

// when the pause button is clicked, pause the carousel
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');
const weatherIconContainer = document.getElementById('weather-icon');
const weatherTemp = document.getElementById('weather-temp');
const weatherDescription = document.getElementById('weather-description');
const weatherFeelsValue = document.getElementById('feels-like-value');
const weatherHumidityValue = document.getElementById('humidity-value');
const weatherWindSpeed = document.getElementById('wind-speed');
const weatherPressureValue = document.getElementById('pressure-value');
const weatherVisibilityDistance = document.getElementById('visibility-distance');

document.body.addEventListener('load', fetchWeather());

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

async function fetchWeather() {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

function displayWeather(weatherData) {
    const weatherIconCode = weatherData.weather[0].icon;
    const weatherIconUrl = `https://openweathermap.org/img/w/${weatherIconCode}.png`;

    const weatherIconImage = document.createElement('img');
    weatherIconImage.src = weatherIconUrl;
    weatherIconImage.alt = weatherData.weather[0].description;
    weatherIconContainer.appendChild(weatherIconImage);

    weatherTemp.textContent = weatherData.main.temp + '\u00B0C';
    weatherDescription.textContent = weatherData.weather[0].description;

    weatherFeelsValue.textContent = weatherData.main.feels_like;
    weatherHumidityValue.textContent = weatherData.main.humidity;
    weatherWindSpeed.textContent = weatherData.wind.speed;
    weatherPressureValue.textContent = weatherData.wind.pressure;
    weatherVisibilityDistance.textContent = weatherData.visibility;
}

// carouselPause.addEventListener('click', function () {
//     console.log('pausing the carousel');
//     carousel.pause();
// })

// // when the play button is clicked, begin cycling through the images
// const carouselPlay = document.getElementById('carouselPlay');
// carouselPlay.addEventListener('click', function () {
//     console.log('cycle the carousel');
//     carousel.cycle();
// })
