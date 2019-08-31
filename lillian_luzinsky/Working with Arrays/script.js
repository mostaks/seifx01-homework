
let rainbowColors = [];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green", "blue", "indigo", "violet");

console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors[rainbowColors.length-3]);

console.log('------------');


// I know this is not the correct way to add rainbowColors values into twoColors
let twoColors = [];
for (let index = 0; index < rainbowColors.length; index++) {
    twoColors.push(rainbowColors[index]);
}
twoColors.push(rainbowColors[0], rainbowColors[1], rainbowColors[2], rainbowColors[3], rainbowColors[4], rainbowColors[5], rainbowColors[6]);
console.log(twoColors);

console.log('----------');

twoColors.splice(3, 0, rainbowColors[2]);
twoColors.splice(4, 0, rainbowColors[3]);

console.log(twoColors);

console.log('----------');

twoColors.splice(2, 1);
twoColors.splice(4, 1);

console.log(twoColors);

console.log('---------');

