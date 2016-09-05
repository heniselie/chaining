console.log("******This is Descending Order***************");

var integers = [13, 25, 6, 3, 11, 2, 18, 
7, 21, 1, 29, 20, 12, 8];

var descending = integers.sort(function(a, b){
	return b-a
});

console.log(descending);


console.log("******This is Remove any integers greater than 19.***************");

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 
				21, 1, 29, 20, 12, 8];
var greaterthan19 = integers.filter(function(x) {
    return x > 19 ;
});
    console.log(greaterthan19);   


console.log("******Multiply each remaining number by 1.5 and then subtract 1.***************");


var result = greaterthan19.map(function(input){
	return (input * 1.5) - 1});
console.log(result);

console.log("******Then output (either in the DOM or the console) the sum of all the resulting numbers.***************");

var sum = result.reduce(function(a, b) { return (a + b); }, 0);
console.log(sum);