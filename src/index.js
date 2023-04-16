import { getWeatherData } from './helpers/getWeatherData'
import attributeHelper from '@dariocru/attribute-helper'

// Define elements needed for site. 
const getWeatherButton = document.createElement('button')
getWeatherButton.innerText = 'Log the weather!'
attributeHelper(getWeatherButton, {
    'type':'submit',
})

// Define an input element so that the user can input there location and get the weather.
const locationInput = document.createElement('input')
attributeHelper(locationInput, {
    'id':'location-input',
    'placeholder':'Enter a location.',
})

// Form element for inputs and button
const weatherForm = document.createElement('form')
attributeHelper(weatherForm, {
    'action':'',
    'id':'weather-form',
})
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let locationInfo = locationInput.value
    getWeatherData(locationInfo)
})


// Append the button to the dom for testing.
weatherForm.append(locationInput, getWeatherButton)
document.body.appendChild(weatherForm)

