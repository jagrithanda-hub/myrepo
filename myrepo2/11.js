//question-1
let number = 3;
process.stdout.write("guess a number between 1-10: ");
process.stdin.on("data", function(inputfromuser){
    let userinput = inputfromuser.toString().trim();
    if (userinput==number){
        console.log("you win!!!")
    }else{
        console.log("wrong number I won :(")
    }
    process.exit() 
});
//quetion-2 is ;
process.stdout.write("write the number you want to convert into km:  ");
process.stdin.on("data", function(inputfromuser){
    let userinput = inputfromuser.toString().trim();
    let km = userinput*1.60934;
    process.stdout.write(userinput+" miles is equal to "+km+" km");
    console.log(util.format('%d miles is equal to %d km', miles, km));
    process.exit()  
})
//question-3
process.stdout.write("write the number in metres:   ");
process.stdin.on("data", function(inputfromuser){
    let userinput = inputfromuser.toString().trim();
    let feet = (userinput*3.28084).toFixed(3);
    let km = (userinput/1000).toFixed(3);
    let miles = (userinput*0.000621371).toFixed(3);
    let yards = (userinput*1.09361).toFixed(3);
    let inches = (userinput*39.3701).toFixed(3);
    let lightyears = (userinput/9.461e+15).toFixed(3);
    console.log(`${userinput} metres is equal to:
    ${feet} feet
    ${km} km
    ${miles} miles
    ${yards} yards
    ${inches} inches
    ${lightyears} lightyears`);
    process.exit()
})
//question-4
let secretNumber = 12;
process.stdout.write("enter any number: ");
process.stdin.on("data", function(inputfromuser){
    let userinput = Number(inputfromuser);
    console.log(userinput,"+",secretNumber,"=",userinput + secretNumber)
    console.log(userinput,"-",secretNumber,"=",userinput - secretNumber)
    console.log(userinput,"*",secretNumber,"=",userinput * secretNumber)
    console.log(userinput,"/",secretNumber,"=",userinput / secretNumber)
    console.log(userinput,"%",secretNumber,"=",userinput % secretNumber)
    console.log(userinput,"++","=",++userinput )
    console.log(userinput,"--","=",--userinput)
    process.exit()
});

//question - 5
process.stdout.write("how many people are coming for the party: ");
process.stdin.on("data", function(inputfromuser){
    let userinput = Number(inputfromuser);
    if (userinput<=0){
        console.log("invalid answer");

    }else{
        let pieceperhead = (42/userinput).toFixed(2);
        console.log("each person will get "+pieceperhead+" pieces of cake");
    }process.exit()
});
question-6
process.stdout.write("enter the number whose multiplication you want: ");
process.stdin.on("data", function(inputfromuser){
    let userinput = Number(inputfromuser);
    for(let i=1; i<11; i++){
        let result = userinput*i;
        console.log(userinput+" * "+i+" = "+result);
        
    }process.exit();     
});    
