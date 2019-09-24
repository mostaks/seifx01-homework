$(document).ready(function(){

  const words = $("#words").text().split(/[ ,."';\n\-]+/);

  const $body = $("body");

  const random = function(max){
    return Math.floor(Math.random() * max);
  }

  const putWord = function(){

    const randomIndex = random(words.length);

    const text = words[randomIndex];

    const $div = $("<div class='word'>").html(text);

    $div.css({
			position: 'absolute',
      top: random(window.innerHeight) + "px",
      left: random(window.innerWidth) + "px",
      fontSize: (40 + random(100)) + "px",
      color: "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")",
      transform: `rotate(${random(360)}deg)`
    });

    $div.appendTo($body);

    $div.fadeIn(2000).fadeOut(10000, function(){
      $(this).remove();
    });

	};
	
  setInterval(putWord, 100);
});