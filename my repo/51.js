//question-1
function printLetters(){
    for(let i=10;i<36;i++){
        process.stdout.write(i.toString(36));
    }
}
function printNumbers(){
    for(let i=0;i<10;i++){
        process.stdout.write(i.toString(36))
    }
}
printLetters()
process.stdout.write("\n")
printNumbers()
process.stdout.write("\n")
printLetters()
process.stdout.write("\n")
//question-2
function call(val){
    process.stdout.write(val)
}
for(let i =1;i<=10;i++){
    call("Lorem Ipsum dolor sit amet, consectetur adipiscing elit.\n")
}
//question-3
let sum = function (firstnum,secondnum){
    return firstnum+secondnum
}
let answer = sum(4,1)
console.log(answer)
answer = sum(4,7)
console.log(answer)
answer = sum(3,4)
console.log(answer)
//question-4
let circumference = function(radius){
    return 2*Math.PI*radius
}
let result = circumference(7)
console.log(result)
result = circumference(8)
console.log(result)
result = circumference(5)
console.log(result)
//question-5
console.log("please enter a string: ")
process.stdin.on("data",function(inputfromuser){
    let text = inputfromuser.toString();
    function replaceSmileys(text){
    let newstring = text.replace(":)","*smiling*");
    newstring = newstring.replace(":(","*sad*");
    newstring = newstring.replace("<3","*love*"); 
    console.log(newstring);
};
function replaceSmileysWithReplacer(text, replacer){
    let regexp = /(:\)|:\(|;\)|<3)/g;

    let replaced = text.replace(regexp,replacer)
    console.log(replaced);
    return replaced;
   
};

replaceSmileys(text);
replaceSmileysWithReplacer(text,"[smiley]");
process.exit()
})

