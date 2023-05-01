// Search for image based on term provided.
async function imageSearch(searchTerm) {
    let imageList = []
    
    fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: 'VhTnt4oP6hpy8kAUcQUkFSUNm4yiIqyZ2qNbY3Gzo8EwgU872H4PbcMX'
        }
    }, {mode : 'cors'})
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            data.photos.forEach(element => {
                imageList.push(element.src.original)
            })
        })
        
    return imageList
}


export {imageSearch}
