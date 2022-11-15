
let readlineSync = require("readline-sync");
let guess=readlineSync.questionInt("enter a number");
var guessing_no=6
    if (guess==guessing_no){
        console.log("YOU ARE WINN!!!!")
        
    }

    else if(guess<guessing_no){
        console.log("YOU CHOOSE VERY LESS NUMBER::")
    }
    else if (guess>guessing_no){
        console.log("YOU CHOOSE VERY BIG NUMBER::")
    }
