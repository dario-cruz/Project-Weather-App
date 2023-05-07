import './index.css'
import { processLocation } from './helpers/processLocation'
import { liveTimeUpdate } from './helpers/updateTimeAndDate'
import { getLocationEvent } from './pageComponents/events'
import { getImages, imageSearch } from './helpers/getBackgroundImage'
import { weatherFormEvent } from './pageComponents/events'

// Get the users location on startup.
processLocation()
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
