let Age = +prompt("Enter Your Age")
if (Age => 12 && Age <=35){
    alert("DOnt Move Dont Move");
}

else {
    alert("YOu Are not Eligible ");
}

let username = prompt("Enter Your username ") 
let password = prompt("Enter Your  password") 

if (username === "israr"|| password === "khan"){
    alert("succesfully login")
}

else {
    alert("not working")
}
``
let night = prompt("Enter the time")
    if (!(night >=7 && night<=18)){
        alert("this the night time")
    }

else {
    alert("this is the daytime")
}

let evenOdd= +prompt("Enter the number and find even/odd")
if (evenOdd %2===0){
    alert("Its is even number")
}
else {
    alert("it is odd number")
}

let weekend = prompt("enter the day")
if (weekend == "sunday" || weekend == "saturday"){
    alert("its weeekend")
}
else{
    alert("its working day")
}