import {attributeHelper} from '@dariocru/attribute-helper'
import { getWeatherData } from './helpers/getWeatherData'

// Define elements needed for site. 
const getWeatherButton = document.createElement('button')
getWeatherButton.innerText = 'Log the weather!'


// Define an input element so that the user can input there location and get the weather.
const locationInput = document.createElement('input')


// On click run the get weather function.
getWeatherButton.addEventListener('click', getWeatherData)

// Append the button to the dom for testing.
document.body.appendChild(getWeatherButton)

