
// 1. to print in js
//console.log("hello");
//alert("me");
// document.write("This is Gunask")

// 2. Javascript console API 
//console.log("Hello World");
//console.warn("hihihih");
//console.error("error");


//3. js variable
//What are variable? :- Container to store data value
//   var number1 = 34;
//   var number2 = 56;
//   console.log(number1 + number2);

//4. Datatype in js

//number
//   var number1 = 34;
//   var number2 = 56;

// String
// var str1 = "This is string";
// var str2 = "This is also a string";
//  console.log(str1+" "+str2);


//Objects
//   var marks ={

//             Gunask : 34,
//             siva : 24,
//             sk : 90.88
//         }
//     console.log(marks);

// if statement
//  if(age>18)
//  {
//      console.log('Yor young now');

//  }
//if - else statement

//  if(age>18)
//  {
//      console.log('Yor young now');

//  }
//  else{
//      console.log("no still ur minor now");

//  }



// var age = 45;


//    // if-else ladder
//    if(age > 32){
//             console.log("Your not a kid ");
//      }
//     else if(age > 26){
//         console.log("Your not a small kid ");

//     }
//     else if(age > 22){
//         console.log("Your not a too small kid ");

//     }
//     else if(age > 18){
//         console.log("18 Your not a small kid ");

//     }
//     else{

//             console.log("Your a kid ");

//     }
//     console.log('End of ladder');

// for loop
//  var arr= [1,2,3,4,5]
// console.log(arr);
// for(var i=0; i < arr.length; i++){

//     console.log(arr[i]);

// }
// arr.forEach(function(element){

// console.log(element);
// })

//while loop
// let j = 0;
// // const a =0;
// var arr= [1,2,3,4,5]
// while(j<arr.length){
//   console.log(arr[j]);
//   j++;
// }


//do while loop
// do {

//     console.log(arr[j]);
//      j++;
// }while(j<arr.length)

//break
// var arr= [1,2,3,4,5]
// for(var i=0; i < arr.length; i++){
//      if(i==2){
//         break
//      }
//      console.log(arr[i]);
// }

//continue
// var arr= [1,2,3,4,5]
// for(var i=0; i < arr.length; i++){
//      if(i==2){
//        continue
//      }
//      console.log(arr[i]);
// }

// Array method
// let arr = ['fan','camera',23,25,null,true];
// console.log(arr.length);
// arr.pop();
// arr.push("Gunask")
// arr.shift()
// arr.unshift("Gunask")
//  const newLen =  arr.unshift("Gunask")
//  console.log(newLen);
//  arr.sort()
// console.log(arr);


// String method in js
// let str1= "I am am Gunasekar" 
//console.log(str1.length);
// console.log(str1.indexOf('am'));
// console.log(str1.lastIndexOf('am'));
// console.log(str1.slice(0,5));
// console.log(str1.replace('am','is'));
// console.log(str1.replace('Gunasekar','Gunask'));
// console.log(str1);

// Date
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getDay());


// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);
let elem1 = document.getElementsByClassName('container')
// console.log(elem1);
// elem1[0].style.background = "yellow";
elem1[0].classList.add('bg-primary')
elem1[0].classList.add('text-success')
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elem1[0].innerHTML);
// console.log(elem1[0].innerText);
// tn = document.getElementsByTagName('button')
// console.log(tn);
// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerTexT = "This is this para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerTexT = "This is this bold";
// tn[0].replaceChild(createdElement2, createdElement);


// selecting usin Query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

//Events in js
// function clicked() {
//     console.log('The button was clicked');
// }
// window.onload = function () {
//     console.log('The document was loaded');
// }
// firstContainer.addEventListener('click',function(){

// console.log('click huva hai');
// })
// firstContainer.addEventListener('mouseover',function(){

//     console.log('mouse on container');
//     })
// firstContainer.addEventListener('mouseout',function(){

//      console.log('mouseout  of container');
//         })
//  firstContainer.addEventListener('mouseup',function(){
//             console.log('mouse up when clicked on container');
//                })
       
//      firstContainer.addEventListener('mousedown',function(){
//                 console.log('mouse down when clicked on container');
//                    })

// firstContainer.addEventListener('click', function(){
// document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
// console.log("clicked on Container");


// })


//settimeout and setinterval
// logkaro = () => {
//     console.log('I am your log');
//     }

// setTimeout(logkaro,5000);

///use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/settimeout

// clr = setInterval(logkaro, 5000) 

//Arrow function
// function sum(a,b){

//     return a+b;
// }
// sum = (a,b)=>{
//     return a+b;
// }
// javascript local storage

// localStorage.setItem('name','Gunask')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()

// JSON
//json support dounble quotes
// obj = {name :"harry", length: 1}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse('{"name" :"harry", "length": 1}')
// console.log(parsed);


//Templates literals - Backticks
a = 34;
console.log("this is my ${a}");
 