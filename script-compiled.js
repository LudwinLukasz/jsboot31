'use strict';

//1
var a = 'ala';
var b = 'makota';
var c = '' + a + b;
console.log(c);
//2
var multiply = function multiply() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return x * y;
};
console.log(multiply(2, 3));
console.log(multiply(3));
//3
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	for (var i = 0; i < args.length; i++) {
		sum += args[i];
	}
	return sum / args.length;
};
console.log(average(1, 2, 3, 4));
//4
var sd = [1, 2, 3, 4, 5];
console.log(average.apply(undefined, sd));
//5
var table = [1, 4, 'iwona', false, 'nowak'];
var firstName = table[2],
    lastName = table[4];

console.log(firstName, lastName);
