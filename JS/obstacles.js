class Obstacles {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        this.left = 0;
        this.top = -130;
        this.width = 450;
        this.height = 125;
        this.imagewidth = 75;
        this.gapwidth = 40;


        this.element = document.createElement("div");
        this.element.style.position = "absolute";

        this.Imgelement1 = document.createElement("img");
        this.Imgelement2 = document.createElement("img");
        this.Imgelement3 = document.createElement("img");
        this.Imgelement4 = document.createElement("img");
        this.Imgelement5 = document.createElement("img");
        this.gapElement = document.createElement("div");

        this.Imgelement1.src = "./styles/images/SI_I.png";
       // this.Imgelement1.style.height = `${this.heightEl1}px`;
        this.Imgelement1.style.width = `${this.imagewidth}px`;

        this.Imgelement2.src = "./styles/images/SI_III.png";
        //this.Imgelement2.style.height = `${this.heightEl2}px`;
        this.Imgelement2.style.width = `${this.imagewidth}px`;

        this.Imgelement3.src = "./styles/images/SI_I.png";
        //this.Imgelement3.style.height = `${this.heightEl3}px`;
        this.Imgelement3.style.width = `${this.imagewidth}px`;

        this.Imgelement4.src = "./styles/images/SI_II.png";
        //this.Imgelement4.style.height = `${this.heightEl4}px`;
        this.Imgelement4.style.width = `${this.imagewidth}px`;

        this.Imgelement5.src = "./styles/images/SI_I.png";
       // this.Imgelement5.style.height = `${this.heightEl5}px`;
        this.Imgelement5.style.width = `${this.imagewidth}px`;

        this.gapElement.style.backgroundColor = "transparent";
        //this.gapElement.style.height = `${this.heightEl6}px`;
        this.gapElement.style.width = `${this.gapwidth}px`;
        this.gapElement.style.display = "block";


        this.element.style.display = "grid";
        this.element.style.gridTemplateColumns = "repeat(6, 75px)";
        this.element.style.gridTemplateRows = "125px";
        this.element.style.gap = "0px";


        const swapIndex = Math.floor(Math.random() * 5) + 1;

        this.gapElement.style.gridColumnStart = swapIndex;
        this[`Imgelement${swapIndex}`].style.gridColumnStart = 6;

        this.element.style.gridAutoFlow = "column"

        


        this.element.appendChild(this.Imgelement1);
        this.element.appendChild(this.Imgelement2);
        this.element.appendChild(this.Imgelement3);
        this.element.appendChild(this.Imgelement4);
        this.element.appendChild(this.Imgelement5);
        this.element.appendChild(this.gapElement);

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;


    
        this.gameScreen.appendChild(this.element);
    }
    move (){
        this.top += 3;

        this.updatePosition()
    }

    updatePosition (){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

    }

}