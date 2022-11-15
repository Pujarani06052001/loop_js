var i=1
var sum=0
while(i<=10){
	let readlineSync = require("readline-sync");
    const a=readlineSync.questionInt("enter a number");
	sum=a+sum
	i++
}
{
    console.log(sum)
}
