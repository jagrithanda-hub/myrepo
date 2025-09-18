// // // //question-1
// // // console.log("enter a string to check if its palindrome or not: ");
// // // process.stdin.on("data",function(inputfromuser){
// // //     let string=inputfromuser.toString().trim();
// // //     let reverse = ""
// // //     for(let i=string.length-1;i>=0;i--){
// // //         reverse+=string[i];
        

// // //     };
// // //     if(string.toLowerCase()==reverse.toLowerCase()){
// // //             console.log("true");
// // //     }else{
// // //             console.log("false");
// // //     };
    
// // //     process.exit();
// // // });
// // // //question-2
// // // console.log("enter the number : ");
// // // process.stdin.on("data",function(inputfromuser){
// // //     let num = Number(inputfromuser);
// // //     let result=1
// // //     for (let i =1;i<=num;i++){
// // //             result*=i
            
        
// // //     }console.log(result);
// // //     process.exit();
    
// // // });
// // // //question-3
// // // console.log("enter the number : ");
// // // process.stdin.on("data",function(inputfromuser){
// // //     let num = inputfromuser.toString().trim()
// // //     let result= ""
// // //     for(let i=num.length-1;i>=0;i--){
// // //         result+=num[i];
// // //     }console.log(result);
// // //     process.exit()
// // // });
// // // // question-4
// // // let arr=[1,2,3,4,5,6,7,8,9,1000,56789];
// // // console.log(Math.max(...arr));
// // // console.log(Math.min(...arr));
// // // //quetsion-5

// // // process.stdout.write("Enter a string : ");
// // // process.stdin.on("data",function(inputfromuser){
// // //     let num = inputfromuser.toString().trim();
// // //     count=0;
// // //     for(let i=0;i<=num.length-1;i++){
// // //         if(num.toLowerCase()[i]=="a"||num.toLowerCase()[i]=="o"||num.toLowerCase()[i]=="i"||num.toLowerCase()[i]=="o"||num.toLowerCase()[i]=="u")
// // //             count+=1;
// // //         };
// // //         console.log("NUmebr of vowels = "+count)
// // //         process.exit();
// // //     });     
// // // question-6
// // // function Fibonaccisequence(num){
// // //     let a =1,b=2
// // //     let arr =[]
// // //     for(let i=0;i<num;i++){
// // //         arr.push(a);
// // //         [a,b]=[b,a+b];
// // //     };
// // //     console.log(`[${arr}]`)
// // // };
// // // Fibonaccisequence(10

// // // )
// // // queston-7
// // // function duplicate(arr){
// // //     for (let i=0;i<=arr.length;i++){
// // //         for(let j= i+1;j<=arr.length;j++){
// // //             if(arr[i]===arr[j]){
// // //                 arr.splice(j,1);
// // //                 j--;
// // //             }
// // //         }
// // //     };
// // //     console.log(arr);

// // // };
// // // duplicate([1,2,3,4,5,5,6,7,7,7,7,7,7,7,9])
// // // //or
// // // function duplicate(arr){
// // //     console.log(Math.max(...arr))
// // //     return [...new Set(arr)];
    
// // // };
// // // console.log(`[${duplicate([1,2,3,4,5,5,6,7,7,7,7,7,7,7,9])}]`)
// // // //question-8
// // // function anagram(str1,str2){
// // //     let a = str1.split('').sort().join('');
// // //     let b = str2.split('').sort().join('');
// // //     if(a===b){
// // //         console.log("True")
// // //     }else{
// // //         console.log("False")
// // //     }
// // // };
// // // anagram("listen","silent")    
// // // //question-9
// // // function newarr(arr){
// // //     let result=[];
// // //     for (let i of arr){
// // //         if(Array.isArray(i)){
// // //             result.push(...i);
// // //         }else{
// // //             result.push(i);
// // //         }
// // //     };
// // //     console.log(result)
// // // };
// // // newarr([1,[2,3,4],[5,6],7]);
// // // //question-10
// // // function sumofarr(arr){
// // //     console.log(`without nested arr is  = `, arr);
// // //     let result = [];
// // //     for(let i of arr){
// // //         if(Array.isArray(i)){
// // //             result.push(...i);
// // //         }else{
// // //             result.push(i);
// // //         }
// // //     };
// // //     console.log(`without nested arr = [${result}]`);
    
// // //     let sum=0;
// // //     for(let i=0;i<=result.length;i++){
// // //         sum =sum + i ;
        
// // //     };console.log(`Sum of this nested array is ${sum}`);
    
// // // };
// // // sumofarr([1,[2,3,4],[5,6,6,7],7]);
// // //question-11
// // function arr(arr1,arr2){
// //     let finalarr = arr1.concat(arr2);
// //     let median = 0;
// //     if ((finalarr.length%2)==0){
// //         let a = finalarr.length/2;
// //         median = (finalarr.indexAt(a)+finalarr.indexAt(a+1))/2;
// //     }
        
// //     console.log(finalarr);
// // };
// // arr([1,2],[3,4]);//create a function to calculate the median
// let operators = ["+","-","*","/"];
// let counter = 3;
// process.stdout.write("enter your level 1 or 2 ");
// process.stdin.once("data",function(inputfromuser){
//     var input = Number(inputfromuser.toString().trim());

        
//         if(input==1){        
//             let a  = (Math.random()*10).toFixed(0);
//             let b = (Math.random()*10).toFixed(0);
//             let c  = operators[Math.random() * operators.length | 0];
//             let d  = `${a} ${c} ${b}`;
//             let result;
            
//             if(c === "+"){
//                 result = a + b;
//             }else if (c === "-"){
//                 result =  a - b;
//             }else if (c === "*"){
//                 result  = a * b;

//             }else if (c === "/"){
//                 result = a/b;
//             }else {
//                 console.log("go to hell");
//             };
//             console.log(d);
            

//             process.stdout.write(" ");
//             process.stdin.on("data",function(inputuser){
//                 let operation = Number(inputuser.toString().trim());
//                 if(operation === Number(result)){
//                     console.log("correct Answer");
//                 }else{
//                     console.log("incorrect answer");
//                 }
//                 process.exit();    
//             });

        
//         }else if(input === 2){
//             let a  = (Math.random()*100).toFixed(0);
//             let b = (Math.random()*100).toFixed(0);
//             let c  = operators[Math.random() * operators.length | 0];
//             let d  = `${a} ${c} ${b}`;
//             let result;
            
//             if(c === "+"){
//                 result = a + b;
//             }else if (c === "-"){
//                 result =  a - b;
//             }else if (c === "*"){
//                 result  = a * b;

//             }else if (c === "/"){
//                 result = a/b;
//             }else {
//                 console.log("go to hell");
//             };
//             console.log(d);

//             process.stdout.write(" ");
//             process.stdin.on("data",function(inputofuser){
//                 let operation = Number(inputofuser.toString().trim());
//                 if(operation === Number(result)){
//                     console.log("correct Answer");
//                 }else{
//                     console.log("incorrect answer");
//                 }
//                 process.exit();    
//             });


//         }else {
//             console.log(input)
//             console.log("invalid input");
//         };
        
//     }  

// );