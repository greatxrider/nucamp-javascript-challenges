// require('dotenv').config({ path: './.env' });
// const fetch = require(`node-fetch`);
// const apiKey = process.env.NEWS_API_KEY;
// const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=au,us`;

let subscriptionKey = process.env.NEWS_API_KEY;
let url = `https://api.bing.microsoft.com/v7.0/news/search?q=World&originalImg=true`;

const sectionNews = [];

// document.querySelector('body').addEventListener('DOMContentLoaded', fetchNewsData());

async function fetchNewsData() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
            },
        });
        const jsonData = await response.json();
        const newsArticles = jsonData.value;
        console.log(newsArticles);
        displayNewsInFirstSection(newsArticles);
        displayNewsInSecondSection(newsArticles);
        displayNewsInThirdSection(newsArticles);
    } catch (error) {
        console.error('Failed to fetch news data:', error);
    }
}
fetchNewsData();
function displayNewsInFirstSection(articles) {
    const carouselDivsItems = document.querySelector('#carouselDivsItems');
    const blogPostHeading = document.querySelector('#blogPostHeading');
    const blogPostParagraph = document.querySelector('#blogPostParagraph');
    const news1Paragraph = document.querySelector('#news1Paragraph');
    const news1Img = document.querySelector('#news1Img');
    const news1Heading = document.querySelector('#news1Heading')
    const news2Heading = document.querySelector('#news2Heading');
    const news2Author = document.querySelector('#news2Author');
    const news2Date = document.querySelector('#news2Date');
    const article2Heading = document.querySelector('#article2Heading');

    (() => {
        let topNewsArray = articles.splice(0, 5);
        for (let i = 0; i < topNewsArray.length; i++) {
            let topNews = topNewsArray[i];
            // Carousel Item Div
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item active';
            // Image Element
            const imgEl = document.createElement('img');
            imgEl.src = topNews.image.contentUrl;
            imgEl.className = 'd-block'
            imgEl.alt = '1';
            imgEl.id = 'carouselImg';
            // Carousel Caption
            const carouselCaption = document.createElement('div');
            carouselCaption.className = 'carousel-caption d-block w-100';
            // Heading
            const heading5 = document.createElement('h5');
            heading5.id = 'carouselNewsTitle';
            heading5.textContent = topNews.name;
            // Author Div
            const authorDiv = document.createElement('div');
            authorDiv.className = 'd-flex gap-3';
            // Author name
            const authorName = document.createElement('p');
            authorName.id = 'carouselNewsAuthor';
            // authorName.textContent = topNews.creator[0] ? topNews.creator[0] : "Unknown";
            // Published Date
            const authorWhen = document.createElement('p');
            const date = new Date(topNews.datePublished);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            authorWhen.textContent = formattedDate;
            //Append Children
            authorDiv.appendChild(authorName);
            authorDiv.appendChild(authorWhen);
            carouselCaption.appendChild(heading5);
            carouselCaption.appendChild(authorDiv);
            carouselItem.appendChild(imgEl);
            carouselItem.appendChild(carouselCaption);
            carouselDivsItems.append(carouselItem);
        }
    })();

    (() => {
        let topNews = articles.splice(0, 1)[0];
        blogPostHeading.textContent = topNews.name;
        blogPostParagraph.textContent = topNews.description;
    })();

    (() => {
        let topNews = articles.splice(0, 1)[0];
        news1Heading.textContent = topNews.name;
        news1Paragraph.textContent = topNews.description;
        news1Img.src = topNews.image.contentUrl;
    })();

    (() => {
        let topNews = articles.splice(0, 1)[0];
        news2Heading.textContent = topNews.name;
        news2Author.textContent = topNews.provider[0].name ? topNews.provider[0].name : "Unknown";
        const date = new Date(topNews.datePublished);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        news2Date.textContent = formattedDate;
    })();

    (() => {
        let topNews = articles.splice(0, 1)[0];
        article2Heading.textContent = topNews.name;
    })();
}

function displayNewsInSecondSection(articles) {
    let newArrayList = articles.splice(0, articles.length - 5);
    for (let i = 0; i < newArrayList.length; i++) {
        let otherNewsList = newArrayList[i];
        const otherNews = document.querySelector('#otherNews-row');
        // Create Elements
        const otherNewsDiv = document.createElement('div');
        const otherNewsImgDiv = document.createElement('div');
        const otherNewsHDiv = document.createElement('div')
        const otherNewsH = document.createElement('h5');
        const otherNewsAuthorDiv = document.createElement('div');
        const otherNewsAp = document.createElement('p');
        const otherNewsApD = document.createElement('p');

        otherNewsDiv.className = 'col-lg-6';
        otherNewsDiv.id = 'otherNews';

        otherNewsImgDiv.className = 'd-flex flex-column justify-content-end p-3';
        otherNewsImgDiv.id = 'news1-img';
        otherNewsImgDiv.style.backgroundImage = `url(${otherNewsList.image.contentUrl})`

        otherNewsHDiv.className = 'd-flex flex-wrap align-content-start';
        otherNewsHDiv.id = 'otherNewsHeadingDiv';
        otherNewsH.textContent = otherNewsList.name;

        otherNewsAuthorDiv.className = 'd-flex gap-3';
        otherNewsAuthorDiv.id = 'author';

        // otherNewsAp.textContent = otherNewsList.creator[0] ? otherNewsList.creator[0] : "Unknown";
        const date = new Date(otherNewsList.datePublished);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        otherNewsApD.textContent = formattedDate;
        // Append Children
        otherNewsHDiv.appendChild(otherNewsH);
        otherNewsAuthorDiv.appendChild(otherNewsAp);
        otherNewsAuthorDiv.appendChild(otherNewsApD);
        otherNewsImgDiv.appendChild(otherNewsHDiv);
        otherNewsImgDiv.appendChild(otherNewsAuthorDiv);
        otherNewsDiv.appendChild(otherNewsImgDiv);
        otherNews.appendChild(otherNewsDiv);
    }
}

function displayNewsInThirdSection(articles) {
    for (let i = 0; i < articles.length; i++) {
        let trendingNewsList = articles[i];
        const trendingNewsUl = document.querySelector('#trendingNewsUl');

        const trendNewsLiDiv = document.createElement('li');
        const trendNewsAnchorDiv = document.createElement('a');
        const trendImgDiv = document.createElement('img');
        const trendNewsContentDiv = document.createElement('div');
        const trendNewsTitle = document.createElement('h6');
        const trendNewsDesc = document.createElement('p');
        const trendNewsAuthDiv = document.createElement('div');
        const trendNewsAuth = document.createElement('small');
        const trendNewsPd = document.createElement('small');

        trendNewsAnchorDiv.className = 'd-flex flex-sm-column flex-xl-row align-items-center py-4 gap-3 link-body-emphasis text-decoration-none border-top';
        trendNewsAnchorDiv.href = '#';
        trendImgDiv.className = 'bd-placeholder-img trendingimages';
        trendImgDiv.ariaHidden = 'true';
        trendImgDiv.setAttribute("preserveAspectRatio", "xMidYMid slice");
        trendImgDiv.setAttribute('focusable', 'true');
        trendNewsContentDiv.className = 'd-flex flex-column gap-2';
        trendNewsContentDiv.id = 'trendingNewsContent';
        trendNewsTitle.className = 'mb-0';
        trendNewsAuthDiv.className = 'd-flex justify-content-between';
        trendNewsAuth.className = 'text-body-secondary';
        trendNewsAuth.id = 'trendingAuthor';
        trendNewsPd.id = 'date';


        trendImgDiv.src = trendingNewsList.image.contentUrl;
        trendNewsTitle.textContent = trendingNewsList.name;
        trendNewsDesc.textContent = trendingNewsList.description;
        trendNewsAuth.textContent = trendingNewsList.provider[0].name ? trendingNewsList.provider[0].name : "Unknown";

        trendNewsAuthDiv.appendChild(trendNewsAuth);
        trendNewsAuthDiv.appendChild(trendNewsPd);
        trendNewsContentDiv.appendChild(trendNewsTitle);
        trendNewsContentDiv.appendChild(trendNewsDesc);
        trendNewsContentDiv.appendChild(trendNewsAuthDiv);
        trendNewsAnchorDiv.appendChild(trendImgDiv);
        trendNewsAnchorDiv.appendChild(trendNewsContentDiv);
        trendNewsLiDiv.appendChild(trendNewsAnchorDiv);
        trendingNewsUl.appendChild(trendNewsLiDiv);
    }
}
