import { getImages } from "../helpers/getBackgroundImage"
import { getWeatherData } from "../helpers/getWeatherData"
import { weatherToDom, astroToDom} from "../helpers/weatherToDom"
import { processLocation } from "../helpers/processLocation"

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
                // Update Weather elements
                weatherToDom(result.region, result.date, result.status, result.tempF, result.realFeelF, result.windMph, result.humidity)
                // Update Astro elements
                astroToDom(result.moonphase, result.moonrise, result.moonset, result.sunrise, result.sunset)
                getImages(result.status)
            })
    })
})()

const getLocationEvent = (() => {
    const geoLocationDiv = document.querySelector('div.geo-location')

    geoLocationDiv.addEventListener('click', (e) => {
        e.preventDefault()
        processLocation()
    })
})()

export { weatherFormEvent, weatherObject, getLocationEvent }
