// Using jQuery:
// - Add a couple of your favourite films (with a link to their IMdB page) to the list
// - Change the color of the first film title
// - Increase the font size of all film titles
films = [
    'The Terminator - https://www.imdb.com/title/tt0088247/',
    'Aliens - https://www.imdb.com/title/tt0090605/',
    'The Running Man - https://www.imdb.com/title/tt0093894/',
    'Drive - https://www.imdb.com/title/tt0780504/'
];

const unList = $('ul');

for (let film = 0; film < films.length; film++) {
    unList.append($('<li>' + films[film] + '</li>'));
}

const list = $('li');

list[0].style.color = 'red';
list[1].style.color = 'green';
list[2].style.color = 'yellow';

list.eq(0).css('color', 'yellow');
list.eq(1).css('color', 'green');
list.eq(2).css('color', 'blue');

list.css('font-size', '40px');