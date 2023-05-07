// Weather elements to be updated. 
const locationText = document.querySelector('p.location')
const dateText = document.querySelector('p.date')
const statusText= document.querySelector('p.weather-status')
const tempText = document.querySelector('h1.temperature')
const realFeelText = document.querySelector('p.real-feel')
const windHumText = document.querySelector('p.wind-humidity')

// Astro elements to be updated.
const moonPhaseText = document.querySelector('p.moonphase-text')
const moonRiseText = document.querySelector('p.moonrise-text')
const moonSetText = document.querySelector('p.moonset-text')
const sunRiseText = document.querySelector('p.sunrise-text')
const sunSetText = document.querySelector('p.sunset-text')

// Update all of the dom elements that make up the app.
function weatherToDom(location, date, status, temp, realFeel, wind, humidity) {
    // Update all dom elements with weatherData.
    locationText.innerText = `${location}`
    // dateText.innerText = `${date}`
    statusText.innerText = `${status}`
    tempText.innerHTML = `${temp}&#176;`
    realFeelText.innerHTML = `Right now it feels like ${realFeel}&#176;`
    windHumText.innerText = `Wind Speed: ${wind}MPH Humidity: ${humidity}`
}

// Update dom elements related to astrological data.
function astroToDom(moonPhase, moonRise, moonSet, sunRise, sunSet) {
    // Update innerText/HTML
    moonPhaseText.innerHTML = `${moonPhase}`
    moonRiseText.innerHTML = `${moonRise}`
    moonSetText.innerHTML = `${moonSet}`
    sunRiseText.innerHTML = `${sunRise}`
    sunSetText.innerHTML = `${sunSet}`
}

export {weatherToDom, astroToDom}