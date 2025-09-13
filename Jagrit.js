// const { StrictMode } = require("react");

// /*let score = prompt("Enter your score:");
// if (score >= 90 && score <= 100) {
//     console.log("he got an A");
// }
// else if (score >= 80 && score < 90){
//     console.log("he got an B");
// }else if (score >= 70 && score < 80){
//   console.log("he got an C");
// }else if (score >= 60 && score < 70){ 
//   console.log("he got an D");
// }else if (score >= 50 && score < 60){
//   console.log("he got an E");
// }else if (score >= 0 && score < 50){
//   console.log("he is fail");
// }else{
//   console.log("invalid score");
// }
// let sum = 0;
// let n = prompt("enter a number:");
// for (let i = 0; i <= n; i++) {
//     sum = sum *i;
// }
// console.log(sum)
// for (let i = 1; i >= 1; i++) {
//     console.log(i);
// }  

// let i = 1;    
// while(i>=1){
//     console.log(i);
//     i++;
// }
// let i = 1;
// do{
//   console.log(i)
//   i++
// }while(i<=5)
// let str = "jagrit";
// size=0
// for (let i of str){
//     console.log(i);
//     size++
// }
// console.log(size);
// let student = {
//     name: "jagrit",
//     age: 20,
//     isLoggedIn: true, 
    
// }
// for (let i in student){
//     console.log(student[i]);
// }
// for (let i = 0; i <= 100; i++) {
//   if (i%2==0){
//     console.log("this number is even",i)
//   }
//   }
// let num = 0
// while(num<100){
//   if (num%2==0){
//     console.log("this number is even",num)
//   }
//   num++
// }  
// let number = 5;
// let enter = prompt("enter number between 0-10: ");
// let count = 0;
// while(number!=enter) {
//   enter = prompt("wrong number try again:(")
//   count++
// } 
// console.log("right number you win!!!, you took ",count,"tries");
// let str = "Jagrit  Sharma";
// console.log(str[4]);
// let userinput = prompt("enter your name: ");
// let str = `username = "${userinput}" , username should be "@${userinput}${userinput.length}"`;
// console.log(str);
// let marks = [99,66,45,76,34,56];
// for (let i in marks){
//   console.log(marks[i]);
// }
// let chr = 0;
// while(chr<marks.length){
//   console.log(marks[chr]);
//   chr++
// }
// for(let h=0;h<marks.length;h++){
//   console.log(marks[h]);
// }
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks){
//   sum +=val;
// }
// let avg = sum/marks.length;
// console.log("average of marks is",avg);*/ 
// // let items = [250,645,300,900,50];
// // items.splice(2,1);
// // console.log(items);



// // for(let i=0;i<items.length;i++){
// //   items[i]=items[i]-items[i]*0.1;
//  let array = [55, 23, 6456, 324, 21, 234, 72, 21];

// process.stdout.write("Enter number: ");
// process.stdin.once("data", function (inputfromuser) {
//     let input = Number(inputfromuser.toString().trim()); // ✅ TRIM the newline
//     let found = false; // ✅ lowercase 'false'

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === input) {
//             console.log(`${input} was found in index ${i}`);
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         console.log(`${input} was not found`);
//     }

//     process.exit();
// });
// let num = [];
// process.stdout.write("enter the number")
// process.stdin.on("data",function(inputfromuser){
//   let input = Number(inputfromuser)
//   if(input===Number(input)){
//     num.push(input)
    
//   }else{
//     console.log(Math.max(...num))
//     console.log(Math.min(...num))
//     process.exit()
//   }


// });
// //this is an example
// function sum(num1,num2){
//     adition = num1+num2;
//     console.log(adition);
// }
// sum(10,10)

// let funcname = (n1,n2)=>{
//     return n1*n2
    
// }
// let a = funcname(2,3)
// console.log(a)
// const arrowfunc = (n1,n2)=>{
//     return (n1*n2)
// }
// let a = arrowfunc(2,3)
// console.log(a)
// const vowelcount =(string) =>{
//     let count=0;
//     for(let i=0;i<=string.length;i++){
        
//         if(string.toLowerCase()[i]==="a" || string.toLowerCase()[i]==="e" || string.toLowerCase()[i]==="i" || string.toLowerCase()[i]==="o" || string.toLowerCase()[i]==="u"){
//             count=count+1
//         }
//     }console.log(count)
// }
// vowelcount("Aaple")