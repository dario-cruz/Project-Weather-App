import { getWeatherData } from "../helpers/getWeatherData"
import { weatherToDom } from "../helpers/weatherToDom"
import { getForecastData } from "../helpers/getWeatherData"
// Hold weather data from searches.
let weatherObject = {}

const weatherFormEvent = (() => {
    // Form submit behavior.
    const weatherForm = document.querySelector('#weather-form')
    const weatherInput = document.querySelector('#location-input')
    
    weatherForm.addEventListener('submit', (e) => {
        // Stop refresh of the page
        e.preventDefault()
        getWeatherData(weatherInput.value)
            .then(result => {
                weatherToDom(result.region, result.date, result.status, result.tempF, result.realFeelF, result.windMph, result.humidity)
            })
    })
})()


export { weatherFormEvent, weatherObject }
