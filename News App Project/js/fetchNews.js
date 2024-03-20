// require('dotenv').config({ path: './.env' });
// const fetch = require(`node-fetch`);
const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
const sectionNews = [];
const carouselImage = document.querySelector('#carouselImg');
const carouselNewsTitle = document.querySelector('#carouselNewsTitle');
const carouselNewsAuthor = document.querySelector('#carouselNewsAuthor');

async function fetchNewsData() {
    try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const newsArticles = jsonData.articles;

        displayNewsInFirstSection(newsArticles);
        displayNewsInSecondSection(newsArticles);
        displayNewsInThirdSection(newsArticles);
    } catch (error) {
        console.error('Failed to fetch news data:', error);
    }
}

function displayNewsInFirstSection(articles) {
    let topNews = sectionNews[0];
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * articles.length);
        sectionNews.push(articles[i]);
    }
    carouselImage.src = topNews.urlToImage;
    carouselNewsAuthor.textContent = topNews.author ? topNews.author : "Unknown";
    carouselNewsTitle.textContent = topNews.title;
}

function displayNewsInSecondSection(articles) {

}

function displayNewsInThirdSection(articles) {

}

