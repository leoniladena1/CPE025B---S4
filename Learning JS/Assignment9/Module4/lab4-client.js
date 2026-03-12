// lab4-client.js
const fetch = require('node-fetch'); // make sure node-fetch is installed

function getWeather(cities, info = 'all') {
    // Normalize to array
    if (!Array.isArray(cities)) cities = [cities];

    cities.forEach(city => {
        let url = `http://localhost:3000/weather?city=${encodeURIComponent(city)}`;
        if (info !== 'all') url += `&info=${encodeURIComponent(info)}`;

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log(`CITY: ${data.city}`);
                const weather = data.weather || {};

                // WIND
                if (info === 'all' || info === 'wind') {
                    if (weather.wind) {
                        console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
                        if (weather.wind.speed > 15) console.log('WARNING! Wind speed over 15 m/s');
                    }
                }

                // CLOUDS
                if (info === 'all' || info === 'clouds') {
                    if ('clouds' in weather) console.log(`CLOUDS: ${weather.clouds} %`);
                }

                // TEMP
                if (info === 'all' || info === 'temp') {
                    if ('temp' in weather) {
                        console.log(`TEMP: ${weather.temp} C`);
                        if (weather.temp < -20) console.log('WARNING! Temperature below -20 degrees');
                    }
                }

                // PRECIPITATION
                if (info === 'all' || info === 'precipitation') {
                    if ('precipitation' in weather) console.log(`PRECIPITATION: ${weather.precipitation} %`);
                }

                console.log(''); // extra blank line for readability
            })
            .catch(err => {
                console.log(`Error fetching weather for ${city}: ${err.message}`);
            });
    });
}

// ===== Example usage =====

// Single city, specific info
getWeather('Berlin', 'wind');

// Multiple cities, all info
getWeather(['Oslo', 'Yakutsk'], 'all');