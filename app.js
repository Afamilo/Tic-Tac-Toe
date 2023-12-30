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



