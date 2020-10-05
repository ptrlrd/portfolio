const game = new Game();
let startGame = document.querySelector('#begin-game')

startGame.addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener('keydown', function(event){
    game.handleKeyDown(event);
});