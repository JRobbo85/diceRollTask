const p1roll = document.getElementById("rollButton")
const p2roll = document.getElementById("rollButton2")
const p1hold = document.getElementById("hold1")
const p2hold = document.getElementById("hold2")

let player1score = 0
let player2score = 0
let randomNumber1 = 0
let randomNumber2 = 0
let totalscore1 = 0
let totalscore2 = 0

const scoreCheck1 = () => {
    
    if (totalscore1 > 29){
        window.confirm("You Win!!!")
        totalscore1 = 0;
        totalscore2 = 0;
        document.getElementById("heldScore1").innerHTML = totalscore1
        document.getElementById("heldScore2").innerHTML = totalscore2

        p1Go()
    }

}

const scoreCheck2 = () => {
    
    if (totalscore2 > 29){
        window.confirm("You Win!!!")
        totalscore1 = 0
        totalscore2 = 0
        document.getElementById("heldScore1").innerHTML = totalscore1
        document.getElementById("heldScore2").innerHTML = totalscore2
        p1Go()
    }
}




const diceShow = () => {
    document.getElementById("diceImage").style.visibility="visible";
}

const diceShow2 = () => {
    document.getElementById("diceImage2").style.visibility="visible";
}

const diceHide = () => {
    document.getElementById("diceImage").style.visibility="hidden";
}

const diceHide2 = () => {
    document.getElementById("diceImage2").style.visibility="hidden";
}

const holdHide1 = () => {
    document.getElementById("hold1").style.visibility="hidden";
}

const holdHide2 = () => {
    document.getElementById("hold2").style.visibility="hidden";
}

const holdShow1 = () => {
    document.getElementById("hold1").style.visibility="visible";
}

const holdShow2 = () => {
    document.getElementById("hold2").style.visibility="visible";
}

const diceCycle = () => {
    let rollCycle = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceImage").setAttribute("src", "images/dice" + rollCycle + ".png")        
}

const diceCycle2 = () => {
    let rollCycle = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceImage2").setAttribute("src", "images/dice" + rollCycle + ".png")        
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

const preRoll2 = () => {
    let counter = 0;
    
    setInterval(function(){
        
        if (counter < 10){
        counter += 1;
        diceCycle2()    
        console.log(counter)}
        else if (counter = 10){
        clearInterval()
        
    }
    }, 50)
    setTimeout(rollTheDice2, 550)
}

const rollTheDice = () => {
    
    setTimeout(function () {
        randomNumber1 = Math.floor(Math.random() * 6) + 1;
        if (randomNumber1 == 1){  
            document.getElementById("diceImage").setAttribute("src", "images/dice1.png"); 
            setTimeout(function () {
                window.confirm("You Rolled 1. Change Player");
                player1score = 0;
                document.getElementById("score").innerHTML = player1score
                p2Go()
                diceHide()
            ,10})
            
        }
        else {
        document.getElementById("diceImage").setAttribute("src",
        "images/dice" + randomNumber1 + ".png"); 
        console.log(randomNumber1)
        player1score = Number(player1score) + Number(randomNumber1)
        console.log(player1score)
        document.getElementById("score").innerHTML = player1score
        }        
    }, 200); 
    
    
}

const rollTheDice2 = () => {
    
    setTimeout(function () {
        randomNumber2 = Math.floor(Math.random() * 6) + 1;
        if (randomNumber2 == 1){  
            document.getElementById("diceImage2").setAttribute("src", "images/dice1.png"); 
            setTimeout(function () {
                window.confirm("You Rolled 1. Change Player");
                player2score = 0;
                document.getElementById("score2").innerHTML = player2score
                diceHide()
                p1Go()
                ,10
            })
            
        }
        else {
        document.getElementById("diceImage2").setAttribute("src",
        "images/dice" + randomNumber2 + ".png"); 
        console.log(randomNumber2)
        player2score = Number(player2score) + Number(randomNumber2)
        
        console.log(player2score)
        console.log(totalscore2)
        document.getElementById("score2").innerHTML = player2score
        }        
    }, 200); 
    
    
}


const p1Go = () => {
    document.getElementById("hold2").style.visibility="hidden";
    document.getElementById("rollButton2").style.visibility="hidden";
    document.getElementById("hold1").style.visibility="visible";
    document.getElementById("rollButton").style.visibility="visible";
    document.getElementById("diceImage2").style.visibility="hidden";
}

const p2Go = () => {
    document.getElementById("hold1").style.visibility="hidden";
    document.getElementById("rollButton").style.visibility="hidden";
    document.getElementById("hold2").style.visibility="visible";
    document.getElementById("rollButton2").style.visibility="visible";
    document.getElementById("diceImage").style.visibility="hidden";
}




p1roll.addEventListener("click", () => {   
    preRoll()
    diceShow()
    p1Go()
})

p1hold.addEventListener("click", () => {
    totalscore1  = Number(player1score) + Number(totalscore1)
    document.getElementById("heldScore1").innerHTML = totalscore1
    scoreCheck1(totalscore1)
    setTimeout(p2Go(), 10)
    player1score = 0;
    document.getElementById("score").innerHTML = player1score
    
})

p2roll.addEventListener("click", () => {
    preRoll2()
    diceShow2()
})

p2hold.addEventListener("click", () => {
    totalscore2  = Number(player2score) + Number(totalscore2)

    document.getElementById("heldScore2").innerHTML = totalscore2    
    scoreCheck2(totalscore2)
    player2score = 0;
    document.getElementById("score2").innerHTML = player2score
    setTimeout(p1Go(), 10)
})