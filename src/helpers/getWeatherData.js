// Get weather data with passed string.
async function getWeatherData(locationString) {
    // Call api and get promise.
    const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=46584a9caf1f4b8887b153831231204&q=${locationString}`, {mode : 'cors'})
    // On promise retrieval, process to object.
    const weatherData = await apiResponse.json()
    console.log(weatherData)
    // Return object data. 
    return weatherData
}


export { getWeatherData }
