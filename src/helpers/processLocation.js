import { getUserLocation } from "./getLocation";
import { getWeatherData } from "./getWeatherData";

function processLocation() {
    getUserLocation()
        .then(result => {
            console.log(result.latitude, result.longitude)
            getWeatherData(`${result.latitude}`,`${result.longitude}`)
                .then(result => {
                    weatherToDom(result.region, result.date, result.status, result.tempF, result.realFeelF, result.windMph, result.humidity)
                })
        })
}

export {processLocation}