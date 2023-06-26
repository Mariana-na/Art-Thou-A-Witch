class Obstacles {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        this.left = 30;
        this.top = 0;
        this.width = 450;
        this.height = 150;

        this.element = document.createElement("img");
        this.element.src = "./styles/images/SIObstaclescut.png";
        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

    
        this.gameScreen.appendChild(this.element);
    }
}