let intro=confirm("Shall we play Rock,Paper,Scissors");
if (intro){
    let userChoice=prompt("Please enter Rock,Paper,Scissors");
    if (userChoice){
        userChoice=userChoice.trim().toLowerCase();
        if (userChoice === "rock" ||
            userChoice === "paper" ||
            userChoice === "scissors"
        ){
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
            alert("Enter Invalid Choice");
            let playAgain=confirm("Play Again?");
            playAgain ? location.reload() : alert("Goodbye");
        }}
    else if (userChoice===null){
        alert("Change Your Mind! Let's Meet Next time");
    }
    else{
        alert("Enter Nothing")
        let playAgain=confirm("Play Again?");
        playAgain ? location.reload() : alert("Goodbye");
    }
}
else{
    alert("Goodbye");
}
