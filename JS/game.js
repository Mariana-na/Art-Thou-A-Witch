class Game {
    constructor() {
      this.startScreen = document.getElementById('startScreen')
      this.gameScreen = document.getElementById('gameScreen')
      this.gameEndScreen = document.getElementById('gameOver')
      this.height = 600
      this.width = 500
      this.player = new Player ( this.gameScreen, 210, 515, 80, 120);
      this.obstacles = [];
      this.isGameOver = false
      this.animateId
    }
    start (){
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        this.gameLoop();
    }


    gameLoop() {
        console.log("in the game loop");
    
        if (this.gameIsOver) {
          return;
        }

        this.update();

        if (Math.random() > 0.99) {
          this.obstacles.push(new Obstacles(this.gameScreen));
          }
        window.requestAnimationFrame(() => this.gameLoop());
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
        })
      }
}