async function getWeatherData(locationString) {
    const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=46584a9caf1f4b8887b153831231204&q=${locationString}`, {mode : 'cors'})
    const weatherData = await apiResponse.json()
    console.log(weatherData)
}


export { getWeatherData }
