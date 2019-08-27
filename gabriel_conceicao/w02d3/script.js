var year;

function isLeapYear () {
    let givenYear = window.prompt(`Insert here a year: ${year}`);
    if (givenYear%4 === 0 && (givenYear%100 != 0 || givenYear%400 === 0)) {
    console.log(`${givenYear} is a Leap Year`);
} else {
    console.log(`${givenYear} is NOT a Leap Year`);
}
};

isLeapYear();