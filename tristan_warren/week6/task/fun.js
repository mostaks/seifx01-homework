$(document).ready(function() {
    let count = 0;
    $('button').click(function() {
        count += 1;
        $('span').text(count);
    });
});