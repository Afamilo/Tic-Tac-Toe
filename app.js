const displayController = (() => {
    const displayMessage = (message) => {
          document.querySelector('#message').innerHTML = message ;
    }
    return {
        displayMessage,
    }
})();

const Gameboard =(() =>{
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const render = () => {
        let gameboardHtml = '';
        gameboard.forEach((square, index) => {
        gameboardHtml += `<div class='square' id='square-${index}'>${square}</div>`
        })
        document.querySelector('.gameboard').innerHTML = gameboardHtml;
        
        
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', game.handleclick)
            console.log('hi')
        })
    }
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }
    const getGameboard = () => gameboard;

return {
    render,
    update,
    getGameboard
}

   
})();

const createPlayer = (name, mark) => {
    return {
        name, 
        mark
    }
}

const game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O'),
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    const handleclick = (event) => {
        if(gameOver){
            return;
        }
        let index = parseInt(event.target.id.split('-')[1]);
        if(Gameboard.getGameboard()[index] !=='')
            return;
        Gameboard.update(index, players[currentPlayerIndex].mark)

        if(checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)) {
            gameOver = true;
            displayController.displayMessage(`${players[currentPlayerIndex].name} won!`)   
        }else if(checkForTie(Gameboard.getGameboard())){
            gameOver = true;
            displayController.displayMessage(`it's a tie!`)
        }
        currentPlayerIndex = currentPlayerIndex === 0 ? 1: 0;
    }
    const restart = () => {
        for  (let i = 0; i < 9; i++) {
            Gameboard.update(i, '');
        }
        Gameboard.render();
        gameOver = false;
        document.querySelector('#message').innerHTML = '';
    }
    return {
        start,
        restart,
        handleclick
    }
})();



