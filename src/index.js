import './index.css'
import { processLocation } from './helpers/processLocation'
import { liveTimeUpdate } from './helpers/updateTimeAndDate'
// Import all event funcs that are IFEE's
import { getLocationEvent, weatherFormEvent, resetInput } from './pageComponents/events'

// Get the users location on startup.
processLocation()
// Update the time
liveTimeUpdate()
// Constantly update time to give "live" effect.
setInterval(liveTimeUpdate, 1000)


// Define all elements needed. 
// Text elements. 
const locationText = document.querySelector('p.location')
const dateText = document.querySelector('p.date')
const statusText= document.querySelector('p.weather-status')
const tempText = document.querySelector('h1.tempurature')
const realFealText = document.querySelector('p.real-feal')
const windHumText = document.querySelector('p.wind-humidity')


// On page load get the users location and populate the text elements.
