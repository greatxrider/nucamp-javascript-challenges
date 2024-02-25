//Challenge 1
function getArea(width, length) {
    return width * length;
}

const area = getArea(4, 5);
document.querySelector('#challenge1').textContent = area;

//Challenge 2
function getPerimeter(width, length) {
    return (width * 2) + (length * 2);
}

const perimeter = getPerimeter(4, 5);
document.querySelector('#challenge2').textContent = perimeter;

//Challenge 3
function getOuncesFromPounds(pounds) {
    return pounds * 16;
}

const ounces = getOuncesFromPounds(4);
document.querySelector('#challenge3').textContent = ounces;

//Challenge 4 
function getInchesFromFeet(ft) {
    return ft * 12;
}

const inches = getInchesFromFeet(6);
document.querySelector('#challenge4').textContent = inches;

//Challenge 5
function getGramsFromOunces(ounces) {
    return ounces * 28.3495;
}

const grams = getGramsFromOunces(5);

document.querySelector('#challenge5').textContent = grams;

//BONUS
function getVolume(length, width, height) {
    return length * width * height;
}

const volume = getVolume(4, 4, 8);

document.querySelector('#challenge-bonus').textContent = volume;
