const prompt = require('prompt-sync')();

let Userinput = prompt("how many sides the dice should have?");
let random = Math.ceil(Math.random()*Userinput);

console.log (random);