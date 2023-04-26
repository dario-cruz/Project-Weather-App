// Text elements to be updated. 
const locationText = document.querySelector('p.location')
const dateText = document.querySelector('p.date')
const statusText= document.querySelector('p.weather-status')
const tempText = document.querySelector('h1.temperature')
const realFeelText = document.querySelector('p.real-feel')
const windHumText = document.querySelector('p.wind-humidity')

// Update all of the dom elements that make up the app.
function weatherToDom(location, date, status, temp, realFeel, wind, humidity) {
    // Update all dom elements with weatherData.
    locationText.innerText = `${location}`
    dateText.innerText = `${date}`
    statusText.innerText = `${status}`
    tempText.innerText = `${temp}`
    realFeelText.innerText = `${realFeel}`
    windHumText.innerText = `${wind}, ${humidity}`
}

export {weatherToDom}