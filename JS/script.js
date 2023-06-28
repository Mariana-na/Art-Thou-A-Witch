window.addEventListener("load", ()=> {
    const startBtn = document.getElementById("startBtn");
    const restartBtn = document.getElementById("reStartBtn");
    let game;

    function startGame (){
        console.log("start game");
        game = new Game();
        clearInterval(game.timer);
        game.timePassed = 0;
        game.start();
    }

    startBtn.addEventListener("click", function (){
        startGame();
    });


    document.addEventListener("keydown", event => {
        const key = event.key;
        const possibleKeyStrokes = ["ArrowLeft", "ArrowRight"];

        if(possibleKeyStrokes.includes(key)){
            event.preventDefault();
            switch (key) {
                case "ArrowLeft":
                    game.player.directionX = -5;
                    break
                case "ArrowRight":
                    game.player.directionX = 5;    
            }
            console.log(game.player.directionX);
        }

    })


    document.addEventListener('keyup', event => {
        const key = event.key
        const possibleKeystrokes = ['ArrowLeft','ArrowRight']
  
        if (possibleKeystrokes.includes(key)) {
          switch (key) {
            case 'ArrowLeft':
            case 'ArrowRight':
              game.player.directionX = 0
              break
          }
        }
    });


    restartBtn.addEventListener("click", function (){
        game.gameEndScreen.style.display = "none"; // Hide game over screen
        game.gameScreen.style.display = "block"; // Show game screen
        
        game.gameScreen.removeChild(game.player.element);
        game.obstacles.forEach(obstacle => {
            game.gameScreen.removeChild(obstacle.element);
          });
        game.obstacles = [];

        game.isGameOver = false;
        game.timePassed = 0;
        game.obstacleInterval = 3000;

        clearInterval(game.timer);
        clearInterval(game.obstacleTimer);



        startGame();
    });

});
