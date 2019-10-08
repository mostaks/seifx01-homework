// const elements = $('p'); //returns array

// console.log(elements.length);

// elements.addClass('red-text');

// // list.html('');

const films = $('a');

console.log(films[0].text);
for (f = 0; f < films.length; f++) {
    console.log('---------------');
    console.log(films[f].href);
    console.log(films[f].style.color);
}

// console.log(films);