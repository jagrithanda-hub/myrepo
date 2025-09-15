// // function grade(points) {
// //     process.stdout.write("pls enter your marks from 0-60: ");
// //     process.stdin.on("data",function(inputfromuser){
// //         let input = inputfromuser.toString().trim();
// //         if ((input>=0)&&(input<=10)){
// //             conosle.log("Fail");
// //         }else if((input>=11)&&(input<=20)){
// //             console.log("1");
// //         }else if ((input>21)&&(input<=30)){
// //             console.log("2");
// //         }else if ((input>31)&&(input<=40)){
// //             console.log("3");
// //         }else if ((input>41)&&(input<=50)){
// //             console.log("4");
// //         }else{
// //             cosnole.log("5");
// //         }process.exit();
        
// //     });
// //     // Your code goes here

// // }
// // console.log(grade(45))

// // 
// // for(let i = 0;i<=9;i++){
// //     let row = "";
// //     for (let j =0;j<=9;j++){
// //         row+=`(${i}.${j})`;
// //     }console.log(row.trim());
 
// // }
// // for (let i = 0; i < 10; i++) {
// //     let row = '';
// //     for (let j = 0; j < 10; j++) {
// //         row += `(${i}.${j}) `;
// //     }
// //     console.log(row.trim());
// // }
// // let factorial = 40

// // let fact=1
// // for(i=factorial;i>=1;i--){
// //     fact=i*fact
// // }
// // console.log(fact)
// let number = 1221
// let str = number.toString().trim()
// let reverse= ''
// for (let i=str.length-1;i>=0;i--){
//     reverse+=str[i]
    
// }if(number ==reverse){
//     console.log("it is a palindome")
// }else{
//     console.log("not a palindrome")
// // }
// // for (let i=1;i<=100;i++){
// //     if (i%5!=0){
// //         console.log(i)
// //     }
// // }
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n + i - 1; j++) {
//     row += j <= n - i ? " " : "*";
//   }
//   console.log(row);
// }
// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n + i - 1; j++) {
//     row += j <= n - i ? " " : "*";
//   }
//   console.log(row);
// }
// for (let i=10;i<36;i++)[
//     process.stdout.write(i.toString(36)+" ")
// ]
for(let i =0;i <10;i++){
    console.log("\n")
    for(let j=0;j<10;j++){
        row +=`(${i}.${j})`;
        
    }console.log(row.trim())
}