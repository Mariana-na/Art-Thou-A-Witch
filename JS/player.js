class Player {
    constructor (gameScreen, left, top, width, height) {
        this.gameScreen = gameScreen
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement('img')
        this.element.src = "./styles/images/gamePlayWitchcut.png";

        this.element.style.position = 'absolute'

        this.element.style.width = `${width}px`
        this.element.style.height = `${height}px`
        this.element.style.top = `${top}px`
        this.element.style.left = `${left}px`

        this.gameScreen.appendChild(this.element);
    }

    move(){
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 0){
            this.left = 0;
        }

        if(this.top < 10){
            this.top = 10;
        }

        //Right side;
        if(this.left > this.gameScreen.offsetWidth - this.width - 0){
            this.left = this.gameScreen.offsetWidth - this.width -0;
        }

        //Bottom side;
        if(this.top > this.gameScreen.offsetHeight - this.height - 10){
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }

        this.updatePosition ();
    }

    updatePosition (){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }


    didCollide (obstacle){
        const playerRect = this.element.getBoundingClientRect();
        const gapRect = obstacle.gapElement.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        //collision w/Obstacle
        if(playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top            
            ) { 
                //collision w/gap
             if (playerRect.left < gapRect.right &&
                playerRect.right > gapRect.left &&
                playerRect.top < gapRect.bottom &&
                playerRect.bottom > gapRect.top 
                ){ console.log("Safe")
                    return false;
                 
            } else { console.log("Witch Trial"); return true;
            }
        }
        return false;        
    } 

    didCollideGap(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const gapRect = obstacle.gapElement.getBoundingClientRect();
    
        return (
          playerRect.left < gapRect.right &&
          playerRect.right > gapRect.left &&
          playerRect.top < gapRect.bottom &&
          playerRect.bottom > gapRect.top
        );
      }

}

