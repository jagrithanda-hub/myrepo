//question 1
process.stdout.write('enter 2 numbers with space between them: ');
process.stdin.on('data', function(inputfromuser){
    let input=inputfromuser.toString().trim().split(' ');
    num1 = Number(input[0]);
    num2 = Number(input[1]);

    if (num1>num2){
        console.log(num1 + ' is greater than ' + num2);
    }else if(num2>num1){
        console.log(num2 + ' is greater than ' + num1);
    }else{
        console.log("both are equal ")
    }process.exit();    
});
//question-2
process.stdout.write('enter 3 numbers with space between them: ');
process.stdin.on('data', function(inputfromuser){
    let input=inputfromuser.toString().trim().split(' ');
    num1 = Number(input[0]);
    num2 = Number(input[1]);
    num3 = Number(input[2]);

    if ((num1>num2)&&(num1>num3)){
        console.log(num1 + ' is greater than ' + num2,num3);
    }else if((num2>num1)&&(num2>num3)){
        console.log(num2 + ' is greater than ' + num1+"and"+num3);
    }else if ((num3>num1)&&(num3>num2)){
        console.log(num3 + ' is greater than ' + num1+" and "+num2);

    }else{
        console.log("all are same")
    }process.exit();  
});
//question-3
process.stdout.write('enter the number:  ');
process.stdin.on('data', function(inputfromuser){
    let num=Number(inputfromuser);
    if (num %2==0){
        console.log(num + ' is even number');
    }else{
        console.log(num + ' is odd number');            
    }
process.exit();    
});
//question-4
process.stdout.write('are you 18 years old? \nenter yes or no: ');
process.stdin.on('data', function(inputfromuser){
    let input=inputfromuser.toString().trim();
    if (input=='yes'){
        console.log('you can drive');
    }else if(input=='no'){
        console.log('you cannot drive');
    }
    else{
        console.log("invalid input ")
    }process.exit();
});    
//question 5
process.stdout.write('enter 3 numbers with a space:  ');
process.stdin.on('data', function(inputfromuser){
    let input=inputfromuser.toString().trim().split(' ');
    num1 = Number(input[0]);
    num2 = Number(input[1]);
    num3 = Number(input[2]);
    if (num1==num2==num3){
        console.log("You entered three matching numbers");
    }else if ((num1==num2)&&(num1 !=num3)){
        console.log("Third one doesn’t fit")
    }else if ((num1!=num2)&&(num2!=num3)&&(num1!=num3)){
        console.log("All numbers are different")
    }
    if(num1==2||num2==2||num3==2){
        console.log("You entered the magic number 2")
    }
    process.exit();
}); 
//question 6
process.stdout.write('please select whta do you want to do \n1.Print out Hello\n2.print out current date and time\n3.exit\n');
process.stdin.on('data', function(inputfromuser){
    let input=Number(inputfromuser);

    switch(input){
        case 1:
            console.log("Hello");
            break;
        case 2:
            let now = new Date();
            console.log("today's date and current time is",now.toString()); 
            break;
        case 3:
            process.exit();
        default:
            console.log("invalid input");
}process.exit();
})          
