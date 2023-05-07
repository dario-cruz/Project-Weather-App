import { getUserLocation } from "./getLocation";
import { getWeatherData } from "./getWeatherData";
import { weatherToDom, astroToDom } from "./weatherToDom";

async function processLocation() {
    // Get the users current location.
    const locCoords = await getUserLocation()

    // Check the weather at the location.
    const locWeather = await getWeatherData(`${locCoords.latitude},${locCoords.longitude}`)
    
    weatherToDom(locWeather.region, locWeather.date, locWeather.status, locWeather.tempF, locWeather.realFeelF, locWeather.windMph, locWeather.humidity)
    astroToDom(locWeather.moonphase, locWeather.moonrise, locWeather.moonset, locWeather.sunrise, locWeather.sunset)
}

export {processLocation}