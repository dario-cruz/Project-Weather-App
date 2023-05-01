// Search for image based on term provided.

async function getImages(searchTerm) {
    const imageData = await imageSearch(searchTerm)
    const imageList =  [
        imageData.photos[0].src.original,
        imageData.photos[1].src.original,
        imageData.photos[2].src.original,
        imageData.photos[3].src.original,
        imageData.photos[4].src.original,
        imageData.photos[5].src.original,
        imageData.photos[6].src.original,
        imageData.photos[7].src.original,
        imageData.photos[8].src.original,
        imageData.photos[9].src.original,
        imageData.photos[10].src.original,
        imageData.photos[11].src.original,
        imageData.photos[12].src.original,
        imageData.photos[13].src.original,
        imageData.photos[14].src.original,
    ]

    let randomIndex = Math.floor(Math.random() * imageList.length)
    let randomImage = imageList[randomIndex]
    updateBackground(randomImage)
}

async function imageSearch(searchTerm) {
    const apiResponse = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: 'VhTnt4oP6hpy8kAUcQUkFSUNm4yiIqyZ2qNbY3Gzo8EwgU872H4PbcMX'
        }
    }, {mode : 'cors'})
    const imageData = await apiResponse.json()
    
    return imageData
}

function updateBackground(imgString) {
    // Update css prop for element.
    document.body.style.backgroundImage = `url('${imgString}')`
}

function weatherStatus(searchTerm) {
    switch (searchTerm) {
        case 'Partly Cloudy':
            getImages('clouds')
            break
        case 'Sunny':
            getImages('Sunshine')
            break
        
        

    }
}



export {getImages, updateBackground}
