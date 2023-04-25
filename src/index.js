import './index.css'
import { getUserLocation, userLoc } from './helpers/getLocation'

// Define all elements needed. 
// Text elements. 
const locationText = document.querySelector('p.location')
const dateText = document.querySelector('p.date')
const statusText= document.querySelector('p.weather-status')
const tempText = document.querySelector('h1.tempurature')
const realFealText = document.querySelector('p.real-feal')
const windHumTest = document.querySelector('p.wind-humidity')



// On page load get the users location and populate the text elements.
let currentLocation = getUserLocation()

console.log(currentLocation)