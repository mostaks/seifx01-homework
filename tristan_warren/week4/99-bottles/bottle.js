function sing(bottles) {
	for (let b = bottles; b >= 0; b--) {
		if (b === 0) {
			console.log('No more bottles of beer on the wall, no more bottles of beer.');
			console.log('Go to the store and buy some more,' + bottles + ' bottles of beer on the wall.');
		} else if (b === 2) {
			console.log(b + ' bottles of beer on the wall, ' + b + ' bottles of beer.');
			console.log('Take one down, pass it around, 1 bottle of beer on the wall...');
		} else if (b === 1) {
			console.log(b + ' bottle of beer on the wall, ' + b + ' bottle of beer.');
			console.log('Take it down, pass it around, no more bottles of beer on the wall');
		} else {
			console.log(b + ' bottles of beer on the wall, ' + b + ' bottles of beer.');
			console.log('Take one down, pass it around, ' + (b - 1) + ' bottles of beer on the wall...');
		}
	}
}

sing(20);
