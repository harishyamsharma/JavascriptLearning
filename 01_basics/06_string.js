const name = "Hari"
const myValue = 1

// console.log(name + myValue + "2");

const gameName = new String ("Hari-Shyam Sharma")
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('H'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "  Hari Shyam  "
console.log(newStringOne);
console.log(newStringOne.trim());     // Study trim MDN Javascript "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


const url = "https://hrswebtech.com/hari%20shyam"

console.log(url.replace('%20', '-' ));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));