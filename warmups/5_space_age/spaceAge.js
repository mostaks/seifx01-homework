const orbitalData = {
	Earth: 1,
	Mercury: 0.2408467,
	Venus: 0.61519726,
	Mars: 1.8808158,
	Jupiter: 11.862615,
	Saturn: 29.447498,
	Uranus: 84.016846,
	Neptune: 164.79132
};

const ageOnAllPlanets = function (input) {
	for (let key in orbitalData) {
		let value = orbitalData[key];
		console.log(key, value);
		let earthYears = (input / 31557600);
		let age = (earthYears / value).toFixed(2);
		console.log(`Your age on ${key} is ${age}`);
	}
};

const ageOnPlanet = function (input, planet = "Earth") {
	let key = planet;
	let value = orbitalData[key];
	let earthYears = (input / 31557600);
	let age = (earthYears / value).toFixed(2);
	console.log(`Your age on ${key} is ${age}`);
}

console.log(ageOnAllPlanets(1000000000));
console.log(ageOnPlanet(1000000000, "Mercury"));
console.log(ageOnPlanet(1000000000));

const spaceAge = {
	orbitalData: {
		Earth: 1,
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132
	},

	ageOnAllPlanets: function (input) {
		for (let key in orbitalData) {
			let value = this.orbitalData[key];
			console.log(key, value);
			let earthYears = (input / 31557600)
			let age = (earthYears / value).toFixed(2)
			console.log(`Your age on ${key} is ${age}`);
		}
	},
	
	ageOnPlanet: function (input, planet = "Earth") {
		let key = planet;
		let value = this.orbitalData[key]
		let earthYears = (input / 31557600)
		let age = (earthYears / value).toFixed(2)
		console.log(`Your age on ${key} is ${age}`);
	}
}

console.log(spaceAge.ageOnAllPlanets(1000000000));
console.log(spaceAge.ageOnPlanet(1000000000, "Mercury"));
console.log(spaceAge.ageOnPlanet(1000000000));