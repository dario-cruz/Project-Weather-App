// Get user location for checking local weather on startup.

async function getUserLocation() {
    // Create object to store location data.
    let userLoc = {}
    // Check if the browser supports geolocation
    if ("geolocation" in navigator) {
        // Get the user's location
        navigator.geolocation.getCurrentPosition(function(position) {
            // The user's location was successfully retrieved
            userLoc = {
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
        }
        // Log the object to check data.
        console.log(userLoc)
        }, function(error) {
        // An error occurred while retrieving the user's location
        console.log("Error getting location:", error);
        });
    } else {
        // Geolocation is not supported by the browser
        console.log("Geolocation is not supported by this browser.");
    }
    return userLoc
}



export { getUserLocation, }