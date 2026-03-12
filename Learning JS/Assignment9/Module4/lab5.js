const fetch = require('node-fetch'); // for Node.js CommonJS

let getWeather = async function(location, info = 'all') {
    const url = "http://localhost:3000/weather";
    const maxWindSpeed = 15;
    const minTemp = -20;

    let cities = Array.isArray(location) ? location : [location];

    const showWindInfo = (wind) => {
        console.log(`WIND: ${wind.speed} m/s, ${wind.deg} deg`);
        if (wind.speed > maxWindSpeed) {
            console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
        }
    };

    const showInfo = (weather, type) => {
        if(type === 'wind') return showWindInfo(weather.wind);
        let value = weather[type];
        console.log(`${type.toUpperCase()}: ${value} ${type === 'temp' ? 'C' : '%'}`);
        if (type === 'temp' && Number(value) < minTemp) {
            console.log(`WARNING! Temperature below ${minTemp} degrees`);
        }
    };

    try {
        for (let city of cities) {
            let query = info && info !== 'all' ? `?city=${encodeURIComponent(city)}&info=${encodeURIComponent(info)}` : `?city=${encodeURIComponent(city)}`;
            let response = await fetch(`${url}${query}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            let data = await response.json();

            console.log('');
            console.log(`CITY: ${data.city}`);
            if (data.weather) {
                for (let key in data.weather) {
                    showInfo(data.weather, key);
                }
            } else {
                console.log('weather unknown');
            }
        }
    } catch (e) {
        console.log(`Error fetching weather: ${e.message}`);
    }
};

// ===== Test Examples =====
getWeather('Berlin', 'wind');
getWeather(['Oslo', 'Yakutsk'], 'all');