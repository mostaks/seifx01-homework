let movieList = [
    {
    title: 'The Little Mermaid',
    duration: '1h45min',
    tags: 'animation, comedy'
    },
    {
    title: 'Moana',
    duration: '1h55min',
    tags: 'animation, comedy'
    },
    ];

     //  create  fun find by title
     // create function to print it out

     function findByTitle (movie) {
        for (let index = 0; index < movieList.length; index++) {
        if (movieList[index].title === movie) {
            printOut(movie);
        } 
            console.log(`Not in  list`);
    }
}

    function printOut (movie) {
                console.log(`${movie} lasts for ${movieList[index].duration}. Tags:${movieList[index].tags} `);
    }

/*
var index=0;
function printOut (movie) {
    while (movieList[index].title === movie) {
        console.log(`${movie} lasts for ${movieList[index].duration}. Tags:${movieList[index].tags} `);
        } 
        console.log(`Not in  list`);
    }

    */

    findByTitle('The Little Mermaid');
    findByTitle('The Lion King');


