

let readlineSync = require("readline-sync");
const a=readlineSync.questionInt("enter a number");
while(a<=20)
    if (a%3==0 && a%7==0){
        console.log("navgurukul")
    }
    else if(a%3==0){
        console.log("nav")
    }
    else if(a%7==0){
        console.log("gurukul")
    }







