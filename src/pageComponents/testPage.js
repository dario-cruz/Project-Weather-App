import attributeHelper from "@dariocru/attribute-helper";

// Header of page
const headerDiv = document.createElement('div')
attributeHelper(headerDiv, {
    'class':'header-div'
})
const headerHeading = document.createElement('h1')
headerHeading.innerText = 'Weather Test Page'
attributeHelper(headerHeading, {
    'class':'heading'
})
headerDiv.append(headerHeading)

// 