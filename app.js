const button = document.getElementById("rollButton")
let score = 0
let randomNumber1 = 0
let displayScore = document.getElementById("score")

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

const diceCycle = () => {
        let rollCycle = Math.floor(Math.random() * 6) + 1;
        document.getElementById("diceImage").setAttribute("src", "images/dice" + rollCycle + ".png")        
}

const preRoll = () => {
    let counter = 0;
    
    setInterval(function(){
        
        if (counter < 10){
        counter += 1;
        diceCycle()    
        console.log(counter)}
        else if (counter = 10){
        clearInterval()
        
    }
    }, 50)
    setTimeout(rollTheDice, 550)
}

const rollTheDice = () => {
    setTimeout(function () {
        randomNumber1 = Math.floor(Math.random() * 6) + 1;
        if (randomNumber1 == 1){  
            document.getElementById("diceImage").setAttribute("src", "images/dice1.png"); 
            setTimeout(function () {
                window.confirm("You Rolled 1. You Lose...");
                score = 0;
                document.getElementById("score").innerHTML = score
                diceHide()
                ,10
            })
            
        }
        else {
        document.getElementById("diceImage").setAttribute("src",
        "images/dice" + randomNumber1 + ".png"); 
        console.log(randomNumber1)
        score = Number(score) + Number(randomNumber1)
        console.log(score)
        document.getElementById("score").innerHTML = score
        }        
    }, 200); 
    setTimeout(scoreCheck, 201)
    
}


button.addEventListener("click", () => {
    preRoll()
    diceShow()
})