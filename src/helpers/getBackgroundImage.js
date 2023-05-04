// Search for image based on term provided.
async function getImages(searchTerm) {
    const imageData = await imageSearch(searchTerm)
    const imageList =  [
        imageData.photos[0].src.large,
        imageData.photos[1].src.large,
        imageData.photos[2].src.large,
        imageData.photos[3].src.large,
        imageData.photos[4].src.large,
        imageData.photos[5].src.large,
        imageData.photos[6].src.large,
        imageData.photos[7].src.large,
        imageData.photos[8].src.large,
        imageData.photos[9].src.large,
        imageData.photos[10].src.large,
        imageData.photos[11].src.large,
        imageData.photos[12].src.large,
        imageData.photos[13].src.large,
        imageData.photos[14].src.large,
    ]

    let randomIndex = Math.floor(Math.random() * imageList.length)
    let randomImage = imageList[randomIndex]
    updateBackground(randomImage)
}

async function imageSearch(searchTerm) {
    // Fetch images from pexels api.
    const apiResponse = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: 'VhTnt4oP6hpy8kAUcQUkFSUNm4yiIqyZ2qNbY3Gzo8EwgU872H4PbcMX'
        }
    }, {mode : 'cors'})
    const imageData = await apiResponse.json()
    // Return the data.
    return imageData
}

function updateBackground(imgString) {
    const backgroundElement = document.querySelector('.background-image')
    // Update css prop for element.
    backgroundElement.style.backgroundImage = `url('${imgString}')`
    backgroundElement.style.backdropFilter = 'blur(5px)'
}

// Logic to steer image api in the right direction.
function weatherStatus(searchTerm) {
    switch (searchTerm) {
        case 'Partly Cloudy':
            getImages('clouds')
            break
        case 'Sunny':
            getImages('sunrise')
            break
        case 'Light Rain':
            getImages('rain')
            break
        case 'rain':
            getImages('rain')
            break
        case 'mist':
            getImages('fog')
            break
        case 'thunderstorm':
            getImages('thunder')
    }
}

export {getImages, updateBackground}
