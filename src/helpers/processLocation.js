import { getUserLocation } from "./getLocation";
import { getWeatherData } from "./getWeatherData";
import { weatherToDom } from "./weatherToDom";

async function processLocation() {
    // Get the users current location.
    const locCoords = await getUserLocation()
    console.log(locCoords.latitude);
    console.log(locCoords.longitude);

    // Check the weather at the location.
    const locWeather = await getWeatherData(`${locCoords.latitude},${locCoords.longitude}`)
    
    weatherToDom(locWeather.region, locWeather.date, locWeather.status, locWeather.tempF, locWeather.realFeelF, locWeather.windMph, locWeather.humidity)
}

export {processLocation}