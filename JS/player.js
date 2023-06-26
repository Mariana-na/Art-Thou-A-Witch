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

        if (this.left < 10){
            this.left = 10;
        }

        if(this.top < 10){
            this.top = 10;
        }

        //Right side;
        if(this.left > this.gameScreen.offsetWidth - this.width - 10){
            this.left = this.gameScreen.offsetWidth - this.width -10;
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

    /*FIGURE OUT HOW TO HANDLE COLLISIONS AND GAME LOSS*/
}