const puffTheDragon = 
    {
    title: 'Puff the Magic Dragon',
    duration: '30',
    tags: ['Puff', 'Jackie', 'Living Sneezes']
    };

    const expected = 'Puff the Magic Dragon lasths for 30 minutes. Tags: Puff, Jackie, Living Sneezes.';
    const actual = displayString(puffTheDragon);

    function displayString(movie) {
        return `${movie.title} lasts for ${movie.duration} minutes. Tags: ${movie.tags.join(', ')}.`;
    }

    console.log(displayString(puffTheDragon));
    console.assert(actual === expected, `Expected '${expected}', Got: '${actual}'`);


