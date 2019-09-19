let clickCount = 0
$(document).ready(() => {
    $("#click-counter").click( () => {
        clickCount++
        $("#click-span").text(clickCount);
    });
    
});