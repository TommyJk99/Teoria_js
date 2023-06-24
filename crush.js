//VARIABLES -------------------------------------------------------
//var is a global variable so it's better to not have to use it.

const name = "John Doe"
const age = 30
const isActive = true
const rating = 4.5
const x1 = null;
const y1 = undefined;
let z;
const s = "technology, computers, it, code";

console.log(typeof name, typeof age, typeof isActive, typeof rating, typeof x1, typeof y1, typeof z);
console.log("My name is " + name + " and I am " + age + " years old.");
//un altro modo per farlo è usare le template strings ma dove trovo sto schifo di barrette{}
console.log(`My name is ${name} and I am ${age} years old.`);
const ciao = `My name is ${name} and I am ${age} years old.`

console.log(ciao.substring(0,5)); //estrae 5 caratteri partendo da 0
console.log(ciao.toLocaleUpperCase()); //all letters are upper case

console.log(ciao.toUpperCase().substring(0,5)); //all letters are upper case and I have only five letters

console.log(ciao.split(' ')); //this is the way to split a string
console.log(s.split(', ')); //the separatore is a comma and space

//ARRAY -------------------------------------------------------
const fruits = ["apple", "banana", "orange",];
console.log(fruits);

//axcess a vector
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//add another element

fruits[3] = "cherry";

console.log(fruits[3]);

//add another element with push

fruits.push("culo");

console.log(fruits);

//create and postition an element in front of array

fruits.unshift("kiwi");

console.log(fruits);

//index number

console.log(fruits.indexOf("kiwi"));

//OBJECT LITERAL----------------------------------------------

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "dancing", "coding"],
    address:{
        street: "123 Main Street",
        city: "New York",
        state: "NY",
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.city);

const {firstName, lastName, address:{city}} = person;
//facendo così sto tirando fuori il nome e il cognome dall'oggetto persona
console.log(firstName, city);

person.email= "john.doe@gmail";
console.log(person);

//-------------------------------------------------------------------
//A VECTOR OF OBJECT
const todos = [
  {
    id: 1,
    text: "Buy milk",
    isCompleted: true
  },

  {
    id: 2,
    text: "Meeting the boss",
    isCompleted: true
  },

  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false
  },
];

console.log(todos[1].isCompleted);

//JSON is a data structure that allows you to store data in a JSON file.
//https://www.freeformatter.com/json-formatter.html converte il vettore in codice json
//if I want to store data in a JSON file, I need to convert it to a string

const json = JSON.stringify(todos); //if i execute this, the string will be converted to JSON without the website converter
console.log(json);
//in this way we can send data to the server

//lOOPS -----------------------------------------------
//for loop
for(let i = 0; i <5; i++){
    console.log(`this is the loop number ${i}`);
}
//while loop
let i = 0;
while(i < 5){
    console.log(`this is the while loop number ${i}`);
    i++;
}

//LOOP TROUGH ARRAYS -----------------------------------
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].isCompleted, todos[i].text);
}
//there are other better ways to loop through arrays like this one:

for(let todo of todos){
    console.log(todo.isCompleted, todo.text);
}

//FOR EACH, MAP, FILTER -----------------------------------
//for each show me the elements of the array that are currently selected
todos.forEach(function(todo) {
    console.log(todo.isCompleted, todo.text);
})
//map put the elements of the array into a new array called todoTexts
const todoTexts = todos.map(function(todo) {
    return todo.text;
})
console.log(todoTexts);
console.log(todoTexts.toString()); //this is the way to convert the array to a string
//now we wanto to return only the completed todo of the array
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) { //we used the map function to return only the completed todos texts
    return todo.text;
    })

console.log(todoCompleted);

//CONDITIONALS -----------------------------------

const x = 10;
const y = 10;
//different betwen == and ===
if(x == 10){
    console.log("x is equal to 10");
}

if(x === '10'){
    console.log("x isequal to 10");
} else {
    console.log("x is not equal to 10");
}

if (x>10 && y<10){
    console.log("x is greater than 10 and y is less than 10");
} 

if (x>10 || y<=10){
    console.log("x is greater than 10 or y is less than 10");
} 

const color = x>10 ? "red" : "blue"; //this tells me that if x is greater than 10 then color is red else color is blue
console.log(color);

//SWITCHES -----------------------------------

switch(color){
    case "red": 
      console.log("color is red");
      break;
    case "blue":
      console.log("color is blue");
      break;
    default: 
      console.log("color is not red or blue");
    break
}

//FUNCTIONS --------------------------------

function addNums(num1, num2){ 
    console.log(num1 + num2);
}
/*function addNums(num1 = 2, num2 = 2){ 
    console.log(num1 + num2);
}

addNums(); --> doing this avoid the NaN and it returns 4
addNums(4,5); --> this is still 9
*/
function addNums(num1, num2){ 
    console.log(num1 + num2);
}

addNums(56,6) //i recall the function  above

//another way to do this is with the arrow function

const addNums2 = (num1, num2) => num1 + num2;
console.log(addNums2(56,2))

//the arrow function are useful for example with the for each, map and filter

todos.forEach((todo) => console.log(todo));
/*this was the old one
todos.forEach(function(todo) {
    console.log(todo.isCompleted, todo.text);
})*/

//instantiate an object with the constructor function AND prototype

function Person1(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
  }
}

const john = new Person1("John", "Doe", 30);
const carlos = new Person1("Carlos", "Rodriguez", 29);

console.log(john);
console.log(carlos.lastName);

const date = new Date(); //the "new" is used to create a new object
console.log(date.getMonth());

console.log(john.getName())//in questo modo uso la funzione dentro la funzione
/*doing this is not the best way to do this, i don't want every function to be executed so 
we can use the prototypes*/
/* instead of this:
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
  }
} WE CAN DO THIS!!!!!!!!!!!:
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }

  console.log(Person.prototype.getFullName())  così evito di avere le funzioni all'interno dell'oggetto
*/ 

//CLASSES, a prettier way to do all the stuff above-----------------------------------
//instead of using the object and the prototype, we can use the classes

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      }
    getName(){
            return `${this.firstName} ${this.lastName}`;
      }
    }
const maria = new Person("Maria", "Perez", 29);
console.log(maria.getName());

