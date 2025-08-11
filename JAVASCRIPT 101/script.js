// console.log("page successfully loaded")




// STORING DATA WITH VARIABLES
// STRING
// var website=("https://google.com");
// var teacherName=("Bright Ndoma Obaji");

// console.log (teacherName);

// console.log (website)

// VARIABLES let and const

// var militaryRank= "General";
// console.log(militaryRank)


//  TOPIC Let and const type
// let apples = 2;
// const height = "7'0\"";
//  teacherName= "Bri";
// console.log(teacherName)
// var teacherName = "Bright";

// if (teacherName == "Bright") {
//     let apples =5;
//     var height = "9'1\"";
//     console.log("i have", apples, "apples")
// }
// console.log ("i am", height);




// const height= "6.0\"";


// const name = "bright ndoma";
// let profession = "Programmer";




// const name = "Success";
// if (name == "Bright") {
//     console.log("Welcome Mr Bright");   
// } else if (name == "PETER OBI") {
//     console.log("Welcome Mr Peter");
// } else{
//     console.log ("Welcome guest")
// }



// TOPIC: Javascript Objects

// const Lion = {
//     "Name": "lION",
//     "Action": "Roar",
//     "Habitat": "Savannah",
//     "Dectator" : "Bright",
//     "  Owner" :  "Obaji",
// }


// Topic Methods of pulling Strings 

// const course = "Javascript 101";

// course.search("coding")



// Demystifying Data Types
// const boolean =true;
// const number = 100;
// const string = "Hello MR BRIGHT";
// const array = [1,3,4,6,7]
// const object = {
//     "name": "Bright", "age": 30, "profession": "programmer", "hobby" :"coding",
//     "vallage": "Ikom LGA", "staet": "Cross River State"
// }
// const nullValue= null;
// const underdefineValue = underfined;
// const symbolValue = Symbol ("unique")


// TOPIC: CASTING DATA TYPES

// String to Number
// const strNumber = "123";
// const num = Number(strNumber); // 123

// // Number to String
// const numValue = 456;
// const str = String(numValue); // "456"

// // Boolean to String
// const boolValue = true;
// const boolStr = String(boolValue); // "true"

// // String to Boolean
// const strBool = "false";
// const boolFromStr = Boolean(strBool); // true (non-empty string is true)

// // Number to Boolean
// const zero = 0;
// const one = 1;
// const boolZero = Boolean(zero); // false
// const boolOne = Boolean(one); // true

// // Parsing integers and floats
// const floatStr = "3.14159";
// const intStr = "42";
// const parsedFloat = parseFloat(floatStr); // 3.14159
// const parsedInt = parseInt(intStr); // 42

// console.log(num, str, boolStr, boolFromStr, boolZero, boolOne, parsedFloat, parsedInt);



// String Concatenation

// const name = "Bright"; age =n30;
// `my name is $ {name}. and my age is ${age}`

// Javascript Numbers
// lst = ["one", 2, 3, 4, "five", [], {}]
// lst.push("new items in here")

// // To pop things out of an array into a variable
// const newItem = lst.pop()

// Selecting Multiple Nodes
// const elems = document.querySelectorAll("li");
// console.log(elems)




// DO NOT REAPET YOURSELF(DRY)



// function addNumbers() {
//     return "an answer";  


// }
// const total = addNumbers();


// function addNumbers(num1, num2){
//     const total = num1 + num2
//     return total; 
// }
// const addedTotal= addNumbers ("1","9");


// function multiply(a, b=1){
//     if (a ===undefined){
//         return"Pease give a number";
//     }
//     return a*b;
// }
// console.log(multiply(5,8));

//TOPIC  REST OPERATOR

// function addNumbers(greetingName,...numbers){
//     let total =0;
//     for(index in numbers) {
//         total = total + numbers[index];

//     }
//     return `${greetingName}; the total is ${total}`;

// }
// const newTotal = addNumbers("Bright", 1, 4, 7, 213);
// console.log(newTotal);


// OBJECTS WITH FUNCTION
const person ={
"name": "Bright",
"age": 29,
"height": "5",
"speak" : function(want ="cookies") {
    console.log(`Roar, i want ${want}`);
},
talk() {
    console.log(`"i am talking"`)
}
}
person.speak("Pizza")



