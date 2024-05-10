let intro=confirm("Shall we play Rock,Paper,Scissors");
if (intro){
    let userChoice=prompt("Please enter Rock,Paper,Scissors");
    if (userChoice){
        const choices=["Rock","Paper","Scissors"];
        let computerChoice=choices[Math.floor(Math.random()*choices.length)]
        let result= 
        computerChoice === userChoice 
        ? "Draw" 
        : computerChoice ===  "Rock" 
        ? userChoice ===  "Paper" 
            ? "You Winz" 
            : "Computer Winz"
        : computerChoice === "Paper"
        ? userChoice === "Scissors"
            ? "You Winz"
            : "Computer Winz"
        : computerChoice === "Scissors"
        ? userChoice === "Rock"
            ? "You Winz"
            : "Computer Winz"
        :"Computer Winz"
        alert(`The computer choice ${computerChoice} \n Player choice ${userChoice} \n ${result}`)
        let playAgain=confirm("Play Again?");
        playAgain ? location.reload() : alert("Goodbye");
    }
    else{
        alert("You didn't enter anything");
    }
}
else{
    alert("Goodbye");
}