var p=require("readline-sync");
const n=p.question("enter number: ");
var r=n
var a=1
var c=0
while (a<=n){
	if(n%a==0)
			c=c+1
	a=a+1
}		
if(c==2){
	console.log("this is praime num",r)
}
else{
	console.log("not a prime no: ",r)
}
