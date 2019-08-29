//factory function 
/*
const createCat = function (name, age, breed, favouriteFood) {
    if (favouriteFood == undefined) {
        favouriteFood = 'tuna';
    }
    if (breed == undefined) {
        breed = 'siamese';
    }
    return {
        name: name,
        age: age,
        breed: breed,
        favouriteFood: favouriteFood,
        meow: function () {
            console.log('meow!!');
        },
        eats: function(food) {
            console.log(`${name} eats ${food}`);
        }
    }
}

let yoda = createCat('yoda', 1);
let indi = createCat('indi', 1, 'british short hair');

yoda.eats('fish');
console.log(`but its favourite food is: ${yoda.favouriteFood}`);
indi.eats('pasta');
console.log(`but its favourite food is: ${indi.favouriteFood}`);
*/
//constructors -- this is more recommended!

const Person = function (name, surname) {
    this.name = name;
    this.surname = surname;    
    this.fullName = function() {
        console.log(`${this.name}, ${this.surname}`);
    }
}

const mary = new Person('mary', 'smith');
mary.name = 'sandy';

mary.fullName();

// CAT WITH NEW OPERATOR

const Cat = function(name, age, breed, favouriteFood) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.favouriteFood = favouriteFood;
    this.mewo = function () {
        console.log('meow!!');
    },
    this.eats = function(food) {
        console.log(`${name} eats ${food}`);
    }
}

const yoda = new Cat('yoda', 1);
const indi = new Cat('indi', 1, 'british short hair');

yoda.eats('fish');
console.log(`but its favourite food is: ${yoda.favouriteFood}`);
indi.eats('pasta');
console.log(`but its favourite food is: ${indi.favouriteFood}`);

console.log(yoda instanceof String);
console.log(yoda instanceof Cat);
console.log(yoda instanceof Person);