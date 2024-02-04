const header = document.querySelector("header");

window.addEventListener("scroll", function() {
   header.classList.toggle("sticky", window.scrollY > 60)
});
   
//console.log('HELLO WORLD');

/**
 let selectedColor =['red','yellow'];
selectedColor=['green'];
console.log(selectedColor);

//ARRAY
//PROPERTIES OF ARRAY
let selectedColor =['red','yellow'];
selectedColor=['green'];
console.log(selectedColor.indexOf(2)); //first occurrence of a value in an array.
console.log(selectedColor.length);     //the length of the array.
console.log(selectedColor.pop);        //Removes the last element from an array and returns it. 

//FUNCTION 
 function Greet(name,lastName){
    console.log('Hello'+ name +' '+ lastName);
 }
Greet('prasad', 'Shinde');
Greet('pawan','Gajmal');

//TYPES OF FUNCTION
function square(number){
   return number*number
}
let number= square(2);     
console.log(number);    
//or
console.log(square(2));
**/