//VARIABLES -------------------------------------------------------
//var is a global variable so it's better to not have to use it.

const name = "John Doe"
const age = 30
const isActive = true
const rating = 4.5
const x1 = null;
const y = undefined;
let z;
const s = "technology, computers, it, code";

console.log(typeof name, typeof age, typeof isActive, typeof rating, typeof x1, typeof y, typeof z);
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

