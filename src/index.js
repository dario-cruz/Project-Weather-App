// Define elements needed for site. 
const getWeatherButton = document.createElement('button')


async function getWeather() {
    const weatherData = await fetch('https://api.weatherapi.com/v1/current.json?key=46584a9caf1f4b8887b153831231204&q=london', {mode : 'cors'})
    console.log(weatherData)
}

// On click run the get weather function.
getWeatherButton.addEventListener('click', getWeather)

// Append the button to the dom for testing.
document.body.append(getWeatherButton)

