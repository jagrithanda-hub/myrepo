let game= [
  ['*', '.', '.', '.', '*'],
  ['.', '.', '*', '.', '.'],
  ['.', '*', '.', '.', '*'],
  ['.', '.', '*', '.', '.'],
  ['.', '*', '.', '*', '.']
];
console.table(game)
let shipleft = 0;
let sink = 0;
let shots = 0;
for (let i=0;i<game.length;i++){
    for (let j=0;j<game[i].length;j++){
        if (game[i][j]=="*"){
            shipleft++;
        }
    }
}
console.log("Welcome to Battleship! 5x5 board.\n");
console.log("Enter coordinates like: row col (e.g. 2 3)");
process.stdin.on("data",function(inputfromuser){
    let input = inputfromuser.toString().trim().split(" ");
    let x = input[0];
    let y = input[1];

    shots++;

    if(game[x][y]==="*"){
        console.log("You hit a ship!\n");
        game[x][y]==".";
        shipleft--;
    }else if(isNaN(x) || isNaN(y) || x < 0 || x >= 5 || y < 0 || y >= 5){
        console.log("invalid input");
    }else{
        console.log("miss\n");
    }
    if(shipleft==0){
        console.log("All ships sunk! You needed " + shots + " shots.\n");
        process.exit();

    }else{
        console.log("Enter x and y coordinates separated by space: ");
    }
});