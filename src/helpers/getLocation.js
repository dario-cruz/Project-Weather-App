// Get user location for checking local weather on startup.

async function getUserLocation() {
    let longitude = ''
    let latitude = ''
    // Create object to store location data.
    // Check if the browser supports geolocation
    if ("geolocation" in navigator) {
        // Get the user's location
        navigator.geolocation.getCurrentPosition(function(position) {
            // The user's location was successfully retrieved
            latitude = position.coords.latitude,
            longitude = position.coords.longitude
            
            // Process the raw strong to a rounded number.
            latitude = parseInt(latitude)
            latitude = Math.floor(latitude)

            longitude = parseInt(longitude)
            longitude = Math.floor(longitude)

            // Log the object to check data.
            console.log(latitude, longitude)
        }, function(error) {
        // An error occurred while retrieving the user's location
        console.log("Error getting location:", error);
        })
    } else {
        // Geolocation is not supported by the browser
        console.log("Geolocation is not supported by this browser.");
    }
    return {
        latitude : latitude,
        longitude : longitude,
    }
}




export {getUserLocation}