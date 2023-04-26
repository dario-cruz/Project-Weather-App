import { getWeatherData } from "../helpers/getWeatherData"
import { weatherToDom } from "../helpers/weatherToDom"

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

        // if (weatherInput.value == '') {
        //     // Throw invalid message to the user.
        //     weatherInput.setCustomValidity('Enter a location.')
        // } else {
        //     // Use the users location to get current weather and update variable. 
        //     weatherObject = getWeatherData(weatherInput.value)
        // }

    })
})()


export { weatherFormEvent, weatherObject }
