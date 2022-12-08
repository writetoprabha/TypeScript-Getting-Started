function startGame() {
    // Some comments goes here
    const messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to multimatch! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);