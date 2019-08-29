

let names = ['aaron', 'bob', 'fred', 'sam', 'alice', '10', 'aaron'];

function ArrayForEach(arr, fn){
  for(let i=0; i<arr.lenght; i++){
    fn(arr[i]);
  }
}

function PrintValues(value){
  console.log(value);
}

names.forEach(PrintValues);
console.log('-----------------');
ArrayForEach(names, PrintValues);

console.log('-----------------');

function ArrayIncludes(arr, value){
  for(let i=0; i<arr.length; i++)
  {
    if(arr[i] === value)
    return true;
  }
  return false;
}

function ArrayIndexOf(arr, value) {
  for(let i=0; i<arr.length; i++)
  {
    if(arr[i] === value)
    return i;
  }
  return -1;
}

function CountValues(arr, value) {
let count = 0;
for(let i=0;i<arr.length; i++) {
  if(arr[i]=== value)
  count += 1;
}
return count;
}

console.log(ArrayIncludes(names, 'sam'));
console.log(ArrayIncludes(names, 'ted'));
console.log(ArrayIncludes(names, '10'));
console.log(ArrayIncludes(names, 10));

console.log(ArrayIndexOf(names, 'sam'));
console.log(ArrayIndexOf(names, 'ted'));
console.log(ArrayIndexOf(names, '10'));
console.log(ArrayIndexOf(names, 10));

console.log(CountValues(names, 'sam'));
console.log(CountValues(names, 'ted'));
console.log(CountValues(names, 'aaron'));

let newNames = names.map(function(value){
  return value.toUpperCase();
});
console.log(newNames);

rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet');
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors[4]);

let twoColors = rainbowColors.slice(1, 4);
console.log(rainbowColors)
console.log(twoColors);
twoColors.splice(0, 2, 'red');
console.log(twoColors);





