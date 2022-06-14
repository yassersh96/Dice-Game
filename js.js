let scores, roundSocre, activPlayer, gamePlaying;

// rest game, new game butn
rest();
document.querySelector(".btn-new").addEventListener("click",rest);
function rest(){
scores=[0,0];
roundSocre=0;
activPlayer=0;
gamePlaying=true;
//rest values and names 
document.getElementById("name-0").textContent="player 1";
document.getElementById("score-0").textContent="0";
document.getElementById("cu-score-0").textContent="0";
document.getElementById("name-1").textContent="player 2";
document.getElementById("score-1").textContent="0";
document.getElementById("cu-score-1").textContent="0" ;
//remove classes from panels
document.getElementById('wineer-0').innerText="";
document.getElementById('wineer-1').innerText="";
document.querySelector(".player-0").classList.remove("player-active");
document.querySelector(".player-1").classList.remove("player-active");
document.querySelector(".player-0").classList.add("player-active");
// rest image
document.querySelector(".dice").classList.add("display");
};



// roll dice
document.querySelector(".btn-dice").addEventListener("click", function(){
    if(gamePlaying){
        // generat random number between 1 and 6
        let dice= Math.trunc(Math.random()*6)+1;
        // display result 
        document.querySelector(".dice").classList.remove("display")
      document.querySelector(".dice").src=`./image/dice-${dice}.png`;
   // update round score if rolled not equal one
   if(dice != 1){
       roundSocre+=dice;
       document.getElementById(`cu-score-${activPlayer}`).textContent=roundSocre;
   } else{
        // switch to next player
        NextPlayer();
         }
    }
});

// switch to next player
function NextPlayer(){
     activPlayer===0 ? activPlayer=1:activPlayer=0;
    roundSocre=0;
    document.querySelector(".player-0").classList.toggle("player-active");
    document.querySelector(".player-1").classList.toggle("player-active");
    document.getElementById(`cu-score-0`).textContent=roundSocre;
    document.getElementById(`cu-score-1`).textContent=roundSocre;
};

//Hold button
document.querySelector(".btn-hold").addEventListener("click",function (){
    if(gamePlaying){    
    //add current score to total score
    scores[activPlayer]+=roundSocre;
    document.getElementById(`score-${activPlayer}`).textContent=scores[activPlayer];
    
    //check if player won the game 
    if(scores[activPlayer]>=30){
        document.querySelector(".dice").classList.add("display");
        document.getElementById(`wineer-${activPlayer}`).innerHTML="wineer"
        gamePlaying=false;
    } else{
        NextPlayer();
    }
}
});
