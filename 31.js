// //question-1
// let (i = 0);
// process.stdout.write("Numbers from 0 to 20 are as follows:\n")
// while(i<=20){
    
//     process.stdout.write(i+" ")
//     i++
    
// }
// //question-2
// let (i=0);
// process.stdout.write("Numbers from 0 to 20 are as follows:\n")
// do{
    
//     process.stdout.write(i+" ")
//     i++
    
// }while(i<=20)
// //question-3
// process.stdout.write("pls enter a string\n")
// process.stdin.on("data",function(inputfromuser){
//     let input = inputfromuser.toString().trim()
//     let i =0
    
//     let length = input.length
//     while(i<=length-1){
        
//         console.log((i+1)+". chracter is "+input.charAt(i))
//         i++
//     }process.exit()

// })
// //question-4
// process.stdout.write("enter the number whose multiplication table you want: ")
// process.stdin.on("data",function(inputfromuser){
//     let input = inputfromuser.toString().trim()
//     let i=1;
//     console.log("multiplication table for",input,"is\n")
//     console.log("*********************")
//     while(i<=10){
//         console.log("*   "+i + " * "+input+" = ",i*input,"       *")
//         i++
//     }console.log("*********************")
//     process.exit()
// })
// //question-5
// let i = 10;
// while(i>=0){
//     console.log(i)
//     i--;
// }
//question-6
process.stdout.write("enter the string to check whether its palindrome or not: ")
process.stdin.on("data",function(inputfromuser){
    input=inputfromuser.toString().trim()
    let j = input.length-1
    i = 0
    while(i<j){
        if (input[i]!=input[j]){
            console.log("not a palindrome")
        
        i++
        j--
        }else{
            console.log("it is a palindrome")
            i++
            j--
        }process.exit()
        


    }
})