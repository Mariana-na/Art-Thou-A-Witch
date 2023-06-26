window.addEventListener("load", ()=> {
    const startBtn = document.getElementById("startBtn");
    const restartBtn = document.getElementById("reStartBtn");
    let game;

    function startGame (){
        console.log("start game");
        game = new Game();
        game.start();
    }

    startBtn.addEventListener("click", function (){
        startGame();
    });
});
