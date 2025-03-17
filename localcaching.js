function fetchWeather() {
    const cachedData = JSON.parse(localStorage.getItem('weatherData'));
    const lastFetchTime = localStorage.getItem('lastFetchTime');
    const now = Date.now();
    
    if (cachedData && lastFetchTime && (now - lastFetchTime < 10 * 60 * 1000)) { // 10 minutes
        updateUI(cachedData); // Use cached data
        return;
    }

    fetchWeatherFromAPI(); // Fetch fresh data
}

function fetchWeatherFromAPI() {
    fetch('https://api.weather.com/xyz')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('weatherData', JSON.stringify(data));
            localStorage.setItem('lastFetchTime', Date.now());
            updateUI(data);
        })
        .catch(error => console.error('Error fetching weather:', error));
}
