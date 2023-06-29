class Game {
    constructor() {
      this.startScreen = document.getElementById('startScreen')
      this.gameScreen = document.getElementById('gameScreen')
      this.gameEndScreen = document.getElementById('gameOver')
      this.height = 600
      this.width = 450
      this.player = new Player ( this.gameScreen, 185, 515, 80, 120);
      this.obstacles = [];
      this.isGameOver = false;
      this.animateId
      this.obstacleTimer = null;
      this.timer = null;
      this.timePassed = 0;
      this.obstacleInterval = 3000;
      this.score = 0;
      this.scoreElement = document.getElementById("obstaclesPassed");
      this.scoreElementGO = document.getElementById("obstaclesPassedGO");
    }
    start (){
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        this.timer = setInterval (() => {
          this.timePassed += 1;

          if(this.timePassed % 10 === 0) {
            this.obstacleInterval -= 250;
            clearInterval(this.obstacleTimer);
            this.obstacleTimer = setInterval (() => {
              this.obstacles.push(new Obstacles (this.gameScreen));
            }, this.obstacleInterval);
          }
        }, 1000);

        
        this.obstacleTimer = setInterval(() => {
            this.obstacles.push(new Obstacles(this.gameScreen));
          }, this.obstacleInterval);


        this.gameLoop();
    }

    getScore(){
      return this.score;
    }
    updateScoreDisplay() {
      this.scoreElement.textContent = `${this.score}`;
      this.scoreElementGO.textContent = `${this.score}`;
    }


    gameLoop() {
        console.log("in the game loop");
    
        if (this.isGameOver) {
          console.log("GameOver");
          clearInterval(this.obstacleTimer);
        } else {
          window.requestAnimationFrame(() => this.gameLoop());
        }



        this.update();

      }

    

      update() {
        console.log("in the update");
        this.player.move();

        this.obstacles.forEach((obstacle, i) =>{
          obstacle.move()
          if(obstacle.top > 700){
            this.obstacles.splice(i, 1);
          }
          console.log(i);

          if(this.player.didCollideGap(obstacle)){
            this.score += 1;
            console.log("Score", this.score);
          }

          this.updateScoreDisplay(); 
          
          if (this.player.didCollide(obstacle)) {
            console.log("GameOver");
            this.gameScreen.style.display = "none";
            this.gameEndScreen.style.display = "block";
          }
        });
 
      
      }
}