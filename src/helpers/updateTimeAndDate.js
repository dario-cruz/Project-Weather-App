function updateTime() {
    // Create a string that gets the current time.
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    // Create a string that gets the current date.
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateString = `${day}-${month}-${year}`;

    // Return a complete string with time and date.
    const finalString = `${dateString} ${timeString}`
    console.log(finalString)
    return finalString
}  


// Create function for live updating of time.
function liveTimeUpdate() {
    // Target element to update time.
    const dateElement = document.querySelector('p.date')
    // Run updateTime func and return string will be the innerText.
    dateElement.innerHTML = updateTime()
    // Call updateTime() every second to update the time and date
    // setInterval(updateTime, 1000)
}

export {updateTime, liveTimeUpdate}