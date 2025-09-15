//question-1
console.log("enter a string to check if its palindrome or not: ");
process.stdin.on("data",function(inputfromuser){
    let string=inputfromuser.toString().trim();
    let reverse = ""
    for(let i=string.length-1;i>=0;i--){
        reverse+=string[i];
        

    };
    if(string.toLowerCase()==reverse.toLowerCase()){
            console.log("true");
    }else{
            console.log("false");
    };
    
    process.exit();
});
//question-2
console.log("enter the number : ");
process.stdin.on("data",function(inputfromuser){
    let num = Number(inputfromuser);
    let result=1
    for (let i =1;i<=num;i++){
            result*=i
            
        
    }console.log(result);
    process.exit();
    
});
//question-3
console.log("enter the number : ");
process.stdin.on("data",function(inputfromuser){
    let num = inputfromuser.toString().trim()
    let result= ""
    for(let i=num.length-1;i>=0;i--){
        result+=num[i];
    }console.log(result);
    process.exit()
});
// question-4
let arr=[1,2,3,4,5,6,7,8,9,1000,56789];
console.log(Math.max(...arr));
console.log(Math.min(...arr));
//quetsion-5

process.stdout.write("Enter a string : ");
process.stdin.on("data",function(inputfromuser){
    let num = inputfromuser.toString().trim();
    count=0;
    for(let i=0;i<=num.length-1;i++){
        if(num.toLowerCase()[i]=="a"||num.toLowerCase()[i]=="o"||num.toLowerCase()[i]=="i"||num.toLowerCase()[i]=="o"||num.toLowerCase()[i]=="u")
            count+=1;
        };
        console.log("NUmebr of vowels = "+count)
        process.exit();
    });        
