//простые математические действия и оператор console.log
const a = 10 + 10;
    console.log(a);
const b = 10 - 10;
    console.log(b);
const c = 10 / 10;
    console.log(c);
const d = 10 * 10;
    console.log(d);
let e = 12.1*13.4;
    console.log(e)
//простые математические действия и оператор console.log


//работа с массивами
const myArray = [
    ['Guy', 18],
    ['Bycicle', 2006]
];

    console.log (myArray[1]);

let GuyAge = myArray[0][1];

    console.log (GuyAge);

myArray.push(["Education", 10, "class"])

    console.log(myArray);

myArray.shift();
myArray.unshift(["Man", 38])

myArray.pop();
myArray.push(["Education", "University degree"])

    console.log(myArray);
//работа с массивами


//Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1){
  return "Hole-in-one!";
}
else if(strokes <= par - 2){
  return "Eagle";
}
else if(strokes == par - 1){
  return "Birdie";
}
else if(strokes == par){
  return "Par";
}
else if(strokes == par + 1){
  return "Bogey";
}
else if(strokes == par + 2){
  return "Double Bogey"
}
else{
  return "Go Home!";
}
  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(3,3));
//Golf Code