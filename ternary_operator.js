// const result = document.getElementById("show")
// let age = 55;
// console.log(typeof(age));

// // let start_rain = 1


// if (age > 57){
//     result.textContent = "you can drink 2 pag"
// } else if (age > 47){
//     result.textContent = "you can drink 3 pag"
// } else if (age > 35){
//         result.textContent = "you can drink 9 pag"
// } else if (age > 24) {
//     result.textContent = "you can drink until yours stress are release"
// } 
// else if (age > 17){
//     result.textContent = "you can drink unlimited"
// } 
//  else {
//     result.textContent = "you can't drink get out"
// }

// // convert to ternary operator

// let message = age > 57 ? console.log("you can drink 2 pag") : age > 47 ? console.log("you can drink 3 pag") : age > 35 ? console.log("you can drink 9 pag") : age > 24 ? console.log("you can drink until yours stress are release") : age > 17 ? console.log( "you can drink unlimited") : console.log("you can't drink get out");

// console.log(message);



// Convert this following expression to ternery operator

// Task1

let score = 25;
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// ternary
 score >= 90 ? console.log("Excellent") : score >= 50 ? console.log("Pass") : console.log("Fail") 


//  Task 2 
let orderAmount = 2500;

if (orderAmount >= 5000) {
    console.log("20% discount");
} else if (orderAmount >= 2000) {
    console.log("10% discount");
} else {
    console.log("No discount");
}
// ternary
orderAmount >= 5000 ?  console.log("20% discount") : orderAmount >= 2000 ? console.log("10% discount") : console.log("No discount")


// Task 3
let age = 25;

if (age >= 60) {
    console.log("Senior"); 
} else if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// ternary
age >= 60 ? console.log("Senior") : age >= 18 ? console.log("Adult") : console.log("Minor") 
