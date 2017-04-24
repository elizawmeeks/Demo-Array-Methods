console.log("hihi");

var colors = ["Red", "Blue", "Green", "Orange", "Teal"];

// colors.forEach(function (item, index){
// 	var newColorString = `I like this color: ${item}`;
// 	console.log(newColorString);
// });

for (var i = 0; i < colors.length; i++){
	var newColorString = `I like this color: ${colors[i]}`;
	console.log(newColorString);
}

// Map changes the array and puts it into a new array, saving the original array in its original condition.

var reversedColors = colors.map(function(color){
	return color.split("").reverse().join("");
})

console.log("reversedColors", reversedColors);

// Filter keeps original array intact, but filter through and only give us the elements that match our parameters.

var fourLetters = colors.filter(function(color){
	return color.length === 4;
})

console.log("fourLetters", fourLetters);

// Reduce automatically has two values being passed. The first number is the previous, and then previous becomes the result of the added numbers.

var numbers = [51, 40, 4, 98, 3];

var sum = numbers.reduce (function(prev, curr){
	console.log(prev, curr);
	return prev + curr;
});

console.log("sum", sum);

var integers = [13, 25, 4, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

/* 	Sort numbers in descending order
	Remove any greather than 19
	multiply each remaining number by 1.5 then subtract 1
	Output (console) the sum of all resulting numbers.
*/

var chainingResult = integers
.sort(function(a,b){
	return a-b})
.reverse()
.filter(function(num){
	return num <= 19;})
.map(function(num){
	return num * 1.5 - 1})
.reduce(function(prev, curr){
	return prev + curr;});

console.log("chainingResult", chainingResult);