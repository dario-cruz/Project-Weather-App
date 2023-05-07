// Get user location for checking local weather on startup.
async function getUserLocation() {
  return new Promise((resolve, reject) => {
      let longitude = '';
      let latitude = '';
      // Check if the browser supports geolocation
      if ("geolocation" in navigator) {
        // Get the user's location
        navigator.geolocation.getCurrentPosition(function(position) {
          // The user's location was successfully retrieved
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          
          // Process the raw string to a rounded number.
          latitude = parseInt(latitude);
          latitude = Math.floor(latitude);
  
          longitude = parseInt(longitude);
          longitude = Math.floor(longitude);
          
          const location = {
            latitude: latitude,
            longitude: longitude
          };
          resolve(location);
        }, function(error) {
          // An error occurred while retrieving the user's location
          console.log("Error getting location:", error);
          reject(error);
        });
      } else {
        // Geolocation is not supported by the browser
        console.log("Geolocation is not supported by this browser.");
        reject("Geolocation is not supported by this browser.");
      }
  });
}

export {getUserLocation}