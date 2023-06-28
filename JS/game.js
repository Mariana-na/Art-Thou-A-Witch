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
    
        if (this.isGameOver) {
          console.log("GameOver");
        } else {
          window.requestAnimationFrame(() => this.gameLoop());
        }

        this.update();

        if (Math.random() > 0.99 && this.obstacles.length < 1) {
          this.obstacles.push(new Obstacles(this.gameScreen));
          }
      }
    

      update() {
        console.log("in the update");
        this.player.move();

        let isCollision = false; 

        this.obstacles.forEach((obstacle, i) =>{
          obstacle.move()
          if(obstacle.top > 700){
            this.obstacles.splice(i, 1);

          }
          console.log(i);
          

          if (this.player.didCollide(obstacle)) {
            console.log("GameOver");
            this.gameScreen.style.display = "none";
            this.gameEndScreen.style.display = "block";
          }
        });
    

 
      
      }
}