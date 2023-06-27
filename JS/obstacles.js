class Obstacles {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        this.left = 30;
        this.top = -150;
        this.width = 450;
        this.height = 150;
        this.gapWidth = 75;
        this.gapPosition = Math.floor(Math.random() * (this.width - this.gapWidth)/70) *70;


        this.element = document.createElement("img");
        this.element.src = "./styles/images/less_SI.png";

        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;


        this.elementGap = document.createElement("span");
        this.elementGap.style.position = "absolute";
        this.elementGap.style.backgroundColor = "white";

        this.elementGap.style.width = `100px`;
        this.elementGap.style.height = `${this.height}px`;
        this.elementGap.style.top = `${this.top}px`;
        this.elementGap.style.left = `${this.left}px`;

    
        this.gameScreen.appendChild(this.element);
        this.gameScreen.appendChild(this.elementGap);
    }
    move (){
        this.top += 3;

        this.updatePosition()
    }

    updatePosition (){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.elementGap.style.left = `${this.left + this.gapPosition}px`;
        this.elementGap.style.top = `${this.top}px`;
    }
}