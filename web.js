// function formalGreeting(){console.log("How are you?");}
// function casualGreeting(){console.log("What's up?");}
// function higherOrderGreeting(type,greetFormal, greetCasual){
//     if(type==='formal'){
//         greetFormal();
//     }
//     else if(type==='casual'){
//         greetCasual();
//     }
// }
// higherOrderGreeting('casual', formalGreeting, casualGreeting);

// high order function are function that operate on other functions either by taking them as an argument or by returning them

// Array.prototype.map
// Array.prototype.filter
// Array.prototype.reduce

const arr1=[1,2,3]
const arr2=arr1.map(item=>item*2);
console.log(arr2);