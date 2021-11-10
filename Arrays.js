/* 1. Create an array called softwareEngineeringStudents and add 10 students
from your class in the array. Then, print the softwareEngineeringStudents to
the console using console.log.
/*
* Programming Quiz: Software Engineering Students
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `softwareEngineeringStudents`
* - The variable `softwareEngineeringStudents` should be an array
containing the values of 10 students from your class
* - Your code should print `softwareEngineeringStudents` to the console
*
*/



let softwareEngineeringStudents = ['Stephanie', 'Kelechi', 'Emmanuel', 'Olu', 'Samuel', 'Blossom', 'Kingsley', 'Manuel', 'Romeo', 'Oreos'];
console.log(softwareEngineeringStudents);










/*
* Programming Quiz: Building the Crew
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `crew`
* - The variable `crew` should be an array containing the Serenity\'s
crew
* - Your code should print `crew` to the console as an array. Do not
iterate over the elements.
*
*/
let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";
// your code goes here




const crew =  [
 captain = "Mal",
 second = "Zoe",
 pilot = "Wash",
 companion = "Inara",
 mercenary = "Jayne",
 mechanic = "Kaylee",


];
console.log(crew);







/*
* Programming Quiz: The Price is Right
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `prices`
* - The variable `prices` should be an array having different values
for the 1st, 3rd, and 7th elements
* - Your code should print `prices` to the console as an array. Do not
iterate over the elements.
*/
//const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
// your code goes here




const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0]= 5.99;
prices[2]= 99.53;
prices[6]= 7.10;

console.log(prices);







/*
* Programming Quiz: Colors of the Rainbow
*
* Use only the splice() method to modify the rainbow variable:
* - remove "Blackberry"
* - add "Yellow" and "Green"
* - add "Purple"
*/



const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2,1,'Yellow', 'Green',);
rainbow.splice(5,0, 'Purple');
console.log(rainbow);







/*
* QUIZ REQUIREMENTS
* - Your code should have a function `hasEnoughPlayers()`
* - Your function `hasEnoughPlayers()` should accept one parameter
* - Your function `hasEnoughPlayers()` should return the expected
output - a Boolean value - true or false
* - Return true if the array size is atleast 7, otherwise false.
*/

const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet",
"George Weasley", "Fred Weasley", "Harry Potter"];
team.forEach(function hasEnoughPlayers(array) {
    

    
    if (team.length >= 7) {
        return true;
    }
    else{
        return false;
    }
})


/*
* Programming Quiz: Joining the Crew
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `crew`
* - Your `crew` array should contain the Serenity\'s original crew and
the three new crew members
* - Your code should use the `push()` method to add new members to the
`crew` array
* - Print the array on the console at the end
*/



crew.push(doctor = "Simon");
crew.push(sister = "River");
crew.push(shephard = "Book");

console.log(crew);





/*
* Programming Quiz: Another Type of Loop
* QUIZ REQUIREMENTS
* Use the existing `test` variable and write a `forEach` loop
* that adds 100 to each number that is divisible by 3.
*
* Things to note:
* - Inside the loop, you must use an `if` statement to verify code is
divisible by 3
* - Inside the loop, you can updade an element ONLY by using the
arrayName[index]
* - Outside the loop, you can use `console.log` to verify the `test`
variable
*/


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
    ];
 test.forEach(function solution(num, index, array) {
     if (num % 3 === 0 ) {
         array[index]= num += 100
     }
})
console.log(test);




/*
* Programming Quiz: I Got Bills
*
* Use the .map() method to take the bills array below and create a
second array
* of numbers called totals. The totals array should contains each
amount from the
* bills array but with a 15% tip added. Log the totals array to the
console.
*
* For example, the first two entries in the totals array would be:
*
* [57.76, 21.99, ... ]
** Things to note:
* - each entry in the totals array must be a number
* - each number must have an accuracy of two decimal points
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `bills` and `totals`
* - Your `bills` array should call the `map()` method and store the
return of `map()` in the `totals` array
* - Your `totals` array should be an array of numbers
* - Your code should print the `totals` array to the console
* - The output must be as described above.
*/
const bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
    ];

        
    const totals = bills.map(function solution(interest) {
    
        return Number((interest + interest * 0.15).toFixed(2));
});
    console.log(totals);






/*
* Programming Quiz: Nested Numbers (6-10)
* QUIZ REQUIREMENTS
* - The `numbers` variable is an array of arrays.
* - Use a nested `for` loop to cycle through `numbers`.
* - Convert each even number to the string "even"
* - Convert each odd number to the string "odd"
*/
// your code goes here





const numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
    ];

    for (let row = 0; row < numbers.length; row++) {
        for (let column = 0; column < numbers[row].length; column++) {
            if (numbers[row][column] % 2 === 0) {
               console.log("Even");
             
            }
            else {
                console.log("Odd");
            }
            
        }
        
    }










  