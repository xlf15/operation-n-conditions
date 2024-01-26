//in this section we will see the condition statment


// question for the if conditional statment 

//question 1

let age1 = 16;
if(age1>=18){
    console.log("yes you are allow to drive ");
}
else{
    console.log("no you can drive");
}

//question 2 

let mode1 = " dark ";
let color1;
if (mode1 === " dark ") {
    color1 = "black"
}
console.log(color1);

//this is if else statement 

// question 1

let age = 19;
if(age>=18){
    console.log("yes you are allow to drive ");
}
else{
    console.log("no you can drive");
}


// question 2 

let mode = " light ";
let color;
if (mode === " dark ") {
    color = "black"
} 
else {
    color = "white"
}

console.log(color);

// odd or even number finder 

let number = 7 ;
let numberu2 = number % 2 ;
if (numberu2 === 0 ) {     // == is for equal to and === equal to with same type 
    console.log(number,"yes its even");
} 
else {
    console.log(number ,"yes its odd ")
}

//else if statment 

let agea = 59 ;

if (agea >= 60) {
    console.log("person is senior");
}
else if (agea <= 18) {
    console.log("person is younger");
}
else{
    console.log("person is in mid age");
}

// color condition 

let modes = 'blue';
let colors;
if (modes ==="dark") {
    colors= "black";
}
else if (modes === "light") {
    colors ="white";
}
else if (modes === "blue") {
    colors = "blue";
}
else if (modes === "red") {
    colors = "red";
}
console.log(colors,"is screen color");
