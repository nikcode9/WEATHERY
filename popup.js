document.addEventListener('DOMContentLoaded', function () {
 
    const lat = 28.6139; // Latitude for New Delhi
    const lon = 77.2090; // Longitude for New Delhi
    getWeather(lat, lon);
  });
  
  function getWeather(lat, lon) {
    const apiKey = '77565c3622a728305f9fa447e584db9b';  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `${data.main.temp} °C`;
        document.getElementById('conditions').innerText = data.weather[0].description;
      })
      ;
  }
  
