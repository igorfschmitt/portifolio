let player1= [];

let player2 = [];

let turn = 0;

function verifyTurn(id){
    
    const playerTurn = document.getElementById("turn");

    if(turn%2==0){
        turn++;
        player1.push(id);
        playerTurn.innerText="Vez do jogador: O";
        return "X";
    } else{
        turn++;
        player2.push(id);
        playerTurn.innerText="Vez do jogador: X";
        return "O";
    } 
};

function reset(){
    const mainSquare = document.getElementById("mainSquare");
    mainSquare.innerHTML="";

    const playerTurn = document.getElementById("turn");
    playerTurn.innerHTML="";
}

function verifyWin(){
    
    if(player1.includes("sq1") && player1.includes("sq2") && player1.includes("sq3")){
        player1Winner()
        reset()
    } else if(player1.includes("sq4") && player1.includes("sq5") && player1.includes("sq6")){
        player1Winner()
        reset()
    } else if(player1.includes("sq7") && player1.includes("sq8") && player1.includes("sq9")){
        player1Winner()
        reset()
    } else if(player1.includes("sq1") && player1.includes("sq5") && player1.includes("sq9")){
        player1Winner()
        reset()
    } else if(player1.includes("sq3") && player1.includes("sq5") && player1.includes("sq7")){
        player1Winner()
        reset()
    } else if(player1.includes("sq1") && player1.includes("sq4") && player1.includes("sq7")){
        player1Winner()
        reset()
    } else if(player1.includes("sq2") && player1.includes("sq5") && player1.includes("sq8")){
        player1Winner()
        reset()
    } else if(player1.includes("sq3") && player1.includes("sq6") && player1.includes("sq9")){
        player1Winner()
        reset()
    } 
    
    else if(player2.includes("sq1") && player2.includes("sq2") && player2.includes("sq3")){
        player2Winner();
        reset()
    } else if(player2.includes("sq4") && player2.includes("sq5") && player2.includes("sq6")){
        player2Winner();
        reset()
    } else if(player2.includes("sq7") && player2.includes("sq8") && player2.includes("sq9")){
        player2Winner();
        reset()
    } else if(player2.includes("sq1") && player2.includes("sq5") && player2.includes("sq9")){
        player2Winner();
        reset()
    } else if(player2.includes("sq3") && player2.includes("sq5") && player2.includes("sq7")){
        player2Winner();
        reset()
    } else if(player2.includes("sq1") && player2.includes("sq4") && player2.includes("sq7")){
        player2Winner();
        reset()
    } else if(player2.includes("sq2") && player2.includes("sq5") && player2.includes("sq8")){
        player2Winner();
        reset()
    } else if(player2.includes("sq3") && player2.includes("sq6") && player2.includes("sq9")){
        player2Winner();
        reset()
    } else{
        return "tie";
    }
    
}

function player1Winner(){
    const win = document.getElementById("win");
    win.innerText="Jogador X venceu";
}

function player2Winner(){
    const win = document.getElementById("win");
    win.innerText="Jogador O venceu";
}

function tie(){

    if(verifyWin() == "tie" && turn === 9){
        reset();
        const win = document.getElementById("win");
        win.innerText="Empate";
    }
}

const sq1 = document.getElementById("sq1");
sq1.addEventListener("click", function clickSq1(){sq1.innerText = verifyTurn(sq1.id); verifyWin(); tie();}, {once:true});

const sq2 = document.getElementById("sq2");
sq2.addEventListener("click", function(){sq2.innerText = verifyTurn(sq2.id); verifyWin(); tie();}, {once:true});

const sq3 = document.getElementById("sq3");
sq3.addEventListener("click", function(){sq3.innerText = verifyTurn(sq3.id); verifyWin(); tie();}, {once:true});

const sq4 = document.getElementById("sq4");
sq4.addEventListener("click", function(){sq4.innerText = verifyTurn(sq4.id); verifyWin(); tie();}, {once:true});

const sq5 = document.getElementById("sq5");
sq5.addEventListener("click", function(){sq5.innerText = verifyTurn(sq5.id); verifyWin(); tie();}, {once:true});

const sq6 = document.getElementById("sq6");
sq6.addEventListener("click", function(){sq6.innerText = verifyTurn(sq6.id); verifyWin(); tie();}, {once:true});

const sq7 = document.getElementById("sq7");
sq7.addEventListener("click", function(){sq7.innerText = verifyTurn(sq7.id); verifyWin(); tie();}, {once:true});

const sq8 = document.getElementById("sq8");
sq8.addEventListener("click", function(){sq8.innerText = verifyTurn(sq8.id); verifyWin(); tie();}, {once:true});

const sq9 = document.getElementById("sq9");
sq9.addEventListener("click", function(){sq9.innerText = verifyTurn(sq9.id); verifyWin(); tie();}, {once:true});

const resetGame = document.getElementById("reset");
resetGame.addEventListener("click", function(){window.location.reload()});