//1
const a = 'ala';
const b = 'makota';
const c = `${a}${b}`;
console.log(c);
//2
const multiply = (x=1,y=1) => x*y;
console.log(multiply(2,3));
console.log(multiply(3));
//3
const average = (...args) => {
	let sum =0;
	for (let i=0; i<args.length;i++) {
		sum += args[i];
	}
	return sum/args.length;
}
console.log(average(1,2,3,4));
//4
const sd = [1,2,3,4,5];
console.log(average(...sd));
//5
const table = [1,4,'iwona', false, 'nowak']; 
const [,,firstName,,lastName] = table;
console.log(firstName,lastName); 