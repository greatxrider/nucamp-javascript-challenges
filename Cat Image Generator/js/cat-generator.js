const catApi = 'https://api.thecatapi.com/v1/images/search';
const mainDiv = document.getElementById('main-container');

async function generateCatImage() {
    try {
        const response = await fetch(catApi);
        const data = await response.json();
        const catImage = data[0];
        displayCatImage(catImage.url);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

function displayCatImage(image) {
    mainDiv.style.backgroundImage = `url("${image}")`;
}
