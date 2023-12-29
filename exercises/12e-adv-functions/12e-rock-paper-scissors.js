let score = JSON.parse(localStorage.getItem('score')) || 
      {
        wins: 0,
        losses:0,
        ties: 0
      };

    updateScoreElement();
    
    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = "";

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
      }
      return computerMove;
    };

    let isAutoPlaying = false;
    let intervalId;

    //12s
    document.querySelector('.auto-play-button').addEventListener('click', ()=>{autoPlay()});

    function autoPlay(){
      if(!isAutoPlaying){
        intervalId = setInterval(() =>{
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        //12t
        document.querySelector('.auto-play-button').innerHTML = 'Stop Playing';
      }else{
        clearInterval(intervalId);
        isAutoPlaying = false;
        //12t
        document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
      }
    }

    document.querySelector('.js-rock-button').addEventListener('click', () =>{
      playGame('rock')
    });
    document.querySelector('.js-paper-button').addEventListener('click', () =>{
      playGame('paper')
    });
    document.querySelector('.js-scissors-button').addEventListener('click', () =>{
      playGame('scissors')
    });

    
    document.body.addEventListener('keydown', (event)=>{
      if (event.key === 'r'){
        playGame('rock');
      }else if (event.key === 'p'){
        playGame('paper');
      }else if (event.key === 's'){
        playGame('scissors');
        //12u
      }else if(event.key=='a'){
        autoPlay();
        //12w && 12x
      }else if(event.key=='Backspace'){
        resetConfirmation();
      }
    });

    //12v && 12x
    document.querySelector('.reset-score-button').addEventListener('click', ()=>{
      resetConfirmation();
    })

    function resetGame(){
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
    }

    //12x
    function resetConfirmation(){
      document.querySelector('.pop-up').innerHTML = 
      ` <!--12x-->
        <div>
          <p>Are you sure you want to reset the button?</p>
          <button class="reset-yes-button">Yes</button>
          <button class="reset-no-button">No</button>
        </div>`;

      document.querySelector('.reset-yes-button').addEventListener('click', ()=>{
        resetGame();
        hideResetConfirmation();
      })
      document.querySelector('.reset-no-button').addEventListener('click', ()=>{
        hideResetConfirmation();
      })
    }

    function hideResetConfirmation() {
      document.querySelector('.pop-up')
        .innerHTML = '';
    }

    //
    function playGame(playerMove){
      const computerMove = pickComputerMove();
      let result = '';

      if(playerMove === 'scissors'){
        if (computerMove === 'rock'){
          result = 'You Lose';
        } else if (computerMove === 'paper'){
          result = 'You Win';
        }else if (computerMove === 'scissors'){
          result = 'Tie';
        }
      }else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
        result = ' You Win';
        } else if (computerMove === 'paper'){
          result = 'Tie';
        }else if (computerMove === 'scissors'){
          result = 'You Lose';
        }
      }else if (playerMove === 'rock'){
        if (computerMove === 'rock'){
        result = 'Tie';
        } else if (computerMove === 'paper'){
          result = 'You Lose';
        }else if (computerMove === 'scissors'){
          result = 'You Win';
        }
      }

      if(result === 'You Win'){
        score.wins += 1;
      }else if (result === 'You Lose'){
        score.losses +=1;
      }else if (result === 'Tie'){
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `you
    <img src="../../images/${playerMove}-emoji.png"  class="move-icon">
    <img src="../../images/${computerMove}-emoji.png"  class="move-icon">
    computer`;
    };

    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    };