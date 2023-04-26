import { getUserLocation } from "./getLocation";
import { getWeatherData, userLoc } from "./getWeatherData";
function processLocation() {
    getUserLocation()
        .then(result => {
            getWeatherData(`${userLoc.latitude}`,`${userLoc.longitude}`)
        })
}

export {processLocation}