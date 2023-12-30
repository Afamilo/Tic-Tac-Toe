const displayController = (() => {
    const displayMessage = (message) => {
          document.querySelector('#message').innerHTML = message ;
    }
    return {
        displayMessage,
    }
})();

