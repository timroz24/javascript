/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, activePlayer, roundScores;

scores = [0,0];
activePlayer = 0;
roundScores = 0;



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';




document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-0').textContent = 0;






document.querySelector('.btn-roll').addEventListener('click', function(){
    
    // Do something here
    // 1. We need a random number.
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'
    
    
    // 3. Update the round score IF the rolled number was not 1 else its zero
    
    if (dice !== 1)
        {
            // Dice is greater that one
            roundScores +=dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScores;
            
        }
    else{
        // Dice is equal to 1
        roundScores = 0;
       
        document.querySelector('#current-'+ activePlayer).textContent = roundScores;
        document.querySelector('#score-'+ activePlayer).textContent = roundScores;
        scores[activePlayer] = 0 ;
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
        document.querySelector('.dice').style.display = 'none';
        
       
        }
   
        
    
    
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activePlayer] += roundScores;
    /*
    var sum = scores.reduce(add,0);
    function add(a,b)
    {
        return a+b;
    }
    */
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    document.getElementById('current-'+activePlayer).textContent = 0;
    roundScores = 0;
   
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
    
});

document.querySelector('.btn-new').addEventListener('click', function(){
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    
});


function nextPlayer()
{
    
}






















