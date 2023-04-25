import { getWeatherData } from "../helpers/getWeatherData"

// Hold weather data from searches.
let weatherObject = {}

const weatherFormEvent = (() => {
    // Form submit behavior.
    const weatherForm = document.querySelector('#weather-form')
    const weatherInput = document.querySelector('#location-input')
    
    weatherForm.addEventListener('submit', (e) => {
        // Stop refresh of the page
        e.preventDefault()

        if (weatherInput.value == '') {
            // Throw invalid message to the user.
            weatherInput.setCustomValidity('Enter a location.')
        } else {
            // Use the users location to get current weather and update variable. 
            weatherObject = getWeatherData(weatherInput.value)
        }

    })
    return weatherObject
})()


export { weatherFormEvent, weatherObject }
