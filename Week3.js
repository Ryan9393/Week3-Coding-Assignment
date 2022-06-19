// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, 
//find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93, 27];

function subtract(ages){
    let subtracted = ages[ages.length - 1] - ages[0];
    return subtracted;
};

console.log(subtract(ages));

let sum = 0;
for(var number of ages){
        sum += number;
    }
average = sum / ages.length;

console.log(average);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let sumNames = 0;

for(let i = 0; i < names.length; i++){
    sumNames += names[i].length;
}
var averagesNames = sumNames / names.length;
console.log(averagesNames);

console.log(names.join(' '));


// 3.	How do you access the last element of any array?

// array.length - 1


// 4.	How do you access the first element of any array?

// array[0]


// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

let namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = [];

for (var number of namesArray){
    nameLengths.push(number.length);
}
console.log(nameLengths);





// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sumNamesNumber = 0;

for(let i = 0; i < nameLengths.length; i++){
    sumNamesNumber += nameLengths[i];
}
console.log(sumNamesNumber);


// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

let word = "hello";
let n = 3;
function concatenated(word,n){
    if (n > 0 );
    return word.repeat(n);
}
console.log(concatenated(word,n));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
let firstName = 'John'
let lastName = "Smith"
function fullName (firstName,lastName){
    return firstName + " " + lastName;
}
console.log(fullName(firstName,lastName));




// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numberArray = [5,96];

function sumHundred(numberArray){
    let sumHundred = 0;
   for(var value of numberArray){
    sumHundred += value;
   }
   if(sumHundred > 100){
    return true;
   }
}
console.log(sumHundred(numberArray));


// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

let findAverageNumber = [5,1,4,2,4]

function averageNumbers(findAverageNumber){
    let sumFindAverageNumber = 0;
    for(var number of findAverageNumber){
        sumFindAverageNumber += number;
    }
    let averageNumber = sumFindAverageNumber / findAverageNumber.length
    return averageNumber;
}
console.log(averageNumbers(findAverageNumber))

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater 
//than the average of the elements in the second array.

let firstArray = [7,8,9];
let secondArray = [5,2,3];

function firstGreaterSecond (firstArray,secondArray){
    let findFirstArrayAverage = 0;
    for(var number of firstArray){
        findFirstArrayAverage += number;
    }
    let firstArrayAverage = findFirstArrayAverage / firstArray.length;
    let findSecondArrayAverage = 0;
    for(var number of secondArray){
        findSecondArrayAverage += number;
    }
    let secondArrayAverage = findSecondArrayAverage / secondArray.length;
    if(firstArrayAverage > secondArrayAverage){
        return true;
    }
}
console.log(firstGreaterSecond(firstArray,secondArray));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside 
//and if moneyInPocket is greater than 10.50.

let isHotOutside = true;
let moneyInPocket = 11;

function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside === true && moneyInPocket >= 10.50){
        return true;
    }
}
console.log(willBuyDrink(isHotOutside,moneyInPocket));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function question(message) {
    return function(name){
                 return message + name + '?';
        }
}
let askAge = question("How old are you ");
console.log(askAge('Mark'));

// asks someone how old they are in this case mark.