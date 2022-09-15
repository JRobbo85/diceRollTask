const button = document.getElementById("rollButton")
let score = 0
let randomNumber1 = 0
let displayScore = document.getElementById("score")
const loopTime = 6


const scoreCheck = () => {
    if (score > 19){
        window.confirm("You WIN!");
        score = 0;
        document.getElementById("score").innerHTML = score
        diceHide()
    }  
}

const diceShow = () => {
    document.getElementById("diceImage").style.visibility="visible";
}

const diceHide = () => {
    document.getElementById("diceImage").style.visibility="hidden";
}

// const diceCycle = () => {
//         setTimeout(function() {
//         let rollCycle = Math.floor(Math.random() * 6) + 1;
//         document.querySelector(".diceImage").setAttribute("src", "images/dice" + rollCycle + ".png")
//         }, 200);
        
// }

const diceCycle = () => {
    // let i = 0;
    // while (i <= 6){
        setTimeout(function() {
        let rollCycle = Math.floor(Math.random() * 6) + 1;
        document.getElementById("diceImage").setAttribute("src", "images/dice" + rollCycle + ".png")
        }, 10);
    // i+=1;
    }

const rollTheDice = () => {
    setTimeout(function () {
        randomNumber1 = Math.floor(Math.random() * 6) + 1;
        if (randomNumber1 == 1){  
            
            window.confirm("You Rolled 1. You Lose...");
            score = 0;
            document.getElementById("score").innerHTML = score
            diceHide()
        }
        else {
        document.getElementById("diceImage").setAttribute("src",
        "images/dice" + randomNumber1 + ".png"); 
        console.log(randomNumber1)
        score = Number(score) + Number(randomNumber1)
        console.log(score)
        document.getElementById("score").innerHTML = score
        }        
    }, 100); 
    setTimeout(scoreCheck, 101)
    
}




button.addEventListener("click", () => {
    // let i = 0;
    // while (i <= 6){
    //     setTimeout(diceCycle(), 100);
    //     }
    //     i=0
    rollTheDice()
    diceShow()
})