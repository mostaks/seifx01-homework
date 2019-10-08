console.log(faker.random.word());

let text = document.getElementsByTagName('p')[0];

const colors = ['red', 'green', 'blue', 'purple', 'white', 'black'];

setInterval(function() {
    text.textContent = faker.random.word();
    text.style.display = 'block';
    text.style.top = Math.random() * 90 + '%';
    text.style.marginLeft = Math.random() * 90 + '%';
    text.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    text.style.color = colors[Math.floor(Math.random() * colors.length - 1)];

    // transform: rotate(20 deg);
    // console.log((text.style.marginTop = '330px'));
}, 3000);