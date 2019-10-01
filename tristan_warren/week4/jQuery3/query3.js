$('document').ready(function() {
    $('li').on('click', function() {
        console.log($('li')[0]);
        console.log($('li').eq(0));
    });

    $('button').on('click', function() {
        $('.square').css('backgroundColor', 'azure');
        $('.square').slideToggle(1000);
    });
});