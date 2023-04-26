import './index.css'
import { weatherFormEvent } from './pageComponents/events'
import { getUserLocation, userLoc } from './helpers/getLocation'
import { processLocation } from './helpers/processLocation'

// getUserLocation()
processLocation()

// Define all elements needed. 
// Text elements. 
const locationText = document.querySelector('p.location')
const dateText = document.querySelector('p.date')
const statusText= document.querySelector('p.weather-status')
const tempText = document.querySelector('h1.tempurature')
const realFealText = document.querySelector('p.real-feal')
const windHumText = document.querySelector('p.wind-humidity')


// On page load get the users location and populate the text elements.
