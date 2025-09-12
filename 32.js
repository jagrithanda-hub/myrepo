//question-1
/*console.log("*".repeat((10*4)+2))
for (let i=1;i<=10;i++){
    let row = "*"
    for (let j=1;j<=10;j++){
        
        row+=` ${j} * ${i} = ${i*j} \n`
        
    }row+="*"
    console.log("multiplication table for "+i)
    console.log(row)
}console.log("*".repeat((10*4)+2))*/
//question-2
/*process.stdout.write("please enter the size of the triangle:")
process.stdin.on("data",function(inputfromuser){
    let input = Number(inputfromuser)
    
    for (let i=1;i<=input;i++){
        console.log("*".repeat(i))
        


    }process.exit()
    
})*/
//question-3
/*process.stdout.write("please enter the string")
process.stdin.on("data",function(inputfromuser){
    let input = inputfromuser.toString().trim()
    let reverse = ""
    for (i=input.length - 1;i>=0;i--){
        reverse+=input[i]
        
    }console.log("the word in backward is +"reverse)
    process.exit()
})*/
//question-4
process.stdout.write("please enter the string:  ")
process.stdin.on("data",function(inputfromuser){
    let input = inputfromuser.toString().trim()
    let mixedcase=""
    for(i=0;i<=input.length-1;i++){
        if (i%2==0){
            mixedcase+=input[i].toUpperCase();
        }else{
            mixedcase += input[i].toLowerCase();
        }
    }
    console.log("the word in mixed case is "+mixedcase)
    process.exit()

})