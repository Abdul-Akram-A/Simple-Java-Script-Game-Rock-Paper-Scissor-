let intro=confirm("Shall we play Rock,Paper,Scissors");
if (intro){
    let userChoice=prompt("Please enter Rock,Paper,Scissors").trim().toLowerCase();
    if (userChoice){
        const choices=["rock","paper","scissors"];
        let computerChoice=choices[Math.floor(Math.random()*choices.length)]
        let result= 
        computerChoice === userChoice 
        ? "Draw" 
        : computerChoice ===  "rock" 
        ? userChoice ===  "paper" 
            ? "You Winz" 
            : "Computer Winz"
        : computerChoice === "paper"
        ? userChoice === "scissors"
            ? "You Winz"
            : "Computer Winz"
        : computerChoice === "scissors"
        ? userChoice === "rock"
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
