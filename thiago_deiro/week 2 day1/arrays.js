
let raibowColors = [];

raibowColors.push('orange');
raibowColors.unshift('red');
raibowColors.push('yellow');
raibowColors.push('green', 'blue', 'indigo', 'violet');

console.log(raibowColors);
console.log(raibowColors[1]);

var lastItem = raibowColors[raibowColors.length-1];
console.log(lastItem);


for(let i=0;i<raibowColors.length; i++){
  console.log(raibowColors[i]);
}


function CountValues(arr, value)
{
  let count = 0;
  for (let i=0; i<arr.length; i++){
    if( arr[i] === value)
      count = i++;
  }
   return count;
}

console.log(CountValues(raibowColors, 'blue'));

var twoColors = [[raibowColors.slice(0,1)],
[raibowColors.slice(2,7)]];
console.log(twoColors);