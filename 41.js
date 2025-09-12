//question-1
array1 = [5, 7, 32, 31,8];
array2 = [12.4,-13.55,67.44];
array3 = ["helsinki","lissabon","new york","shangai"];
console.log("the value in index 3 is: "+array3[3]);
console.log("The fourth item in the int array is: "+array1[4]);
console.log(`In the array2 there are ${array2.length} items`);
for(let i =0;i<array1.length;i++){
    console.log(array1[i])

}console.log("double array content from last to first")
for(let i = array2.length-1;i>=0;i--){
    console.log(array2[i])
}
let result = "";
for (let i = 0; i < array3.length; i++) {
    array3[i] = "empty"; // replace with "empty"
    result += array3[i] + " "; // add to result string
}

console.log("New string array: "+result.trim());
//question-2
const numbers = [];

function askNumber() {
  process.stdout.write("Enter a number (0 to stop): ");
  
  process.stdin.once("data", (data) => {
    const num = parseInt(data.toString().trim());
    if (num === 0) {
      console.log("Numbers in reverse order:");
      console.log(numbers.reverse().join(", "));
      process.exit();
    } else {
      numbers.push(num);
      askNumber(); // call again like a loop
    }
  });
}

askNumber();
//question-3
let number = [];
let sum = 0
process.stdout.write("enter numbers:")
process.stdin.on("data",function(inputfromuser){
    input = Number(inputfromuser)
    
    if (input==Number(input)){
        number.push(input)
        sum+=input
    }else{
        number.push(0)
        console.log("the average is "+(sum/number.length))
        process.exit()
    }

})
//question-4
let array = [55, 23, 6456, 324, 21, 234, 72, 21];

process.stdout.write("Enter number: ");
process.stdin.once("data", function (inputfromuser) {
    let input = Number(inputfromuser.toString().trim()); // ✅ TRIM the newline
    let found = false; // ✅ lowercase 'false'

    for (let i = 0; i < array.length; i++) {
        if (array[i] === input) {
            console.log(`${input} was found in index ${i}`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log(`${input} was not found`);
    }

    process.exit();
});
//question-5
let num = []
for (let i = 0;i<=100;i++){
    num.push(Math.random().toFixed(3)*1000)
}
console.log(num)
let max = Math.max(...num)
let min = Math.min(...num)
console.log("largest numer is "+max)
console.log("smallest Number is "+min)




