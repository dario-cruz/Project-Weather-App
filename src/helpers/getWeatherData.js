// Get weather data with passed string.
async function getWeatherData(locationString) {
    // Call api and get promise.
    const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=46584a9caf1f4b8887b153831231204&q=${locationString}`, {mode : 'cors'})
    // On promise retrieval, process to object.
    const weatherData = await apiResponse.json()
    console.log(weatherData)
    // Return object data. 
    return {
        name : weatherData.location.name,
        region : weatherData.location.region,
        status : weatherData.current.condition.text,
        date : weatherData.location.localtime,
        tempF : weatherData.current.temp_f,
        tempC : weatherData.current.temp_c,
        realFeelF : weatherData.current.feelslike_f,
        realFeelC : weatherData.current.feelslike_C,
        windDir : weatherData.current.wind_dir,
        windMph : weatherData.current.wind_mph,
        windKph : weatherData.current.wind_kph,
        humidity : weatherData.current.humidity,
    }
}

export { getWeatherData }
