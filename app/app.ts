function startGame() {
    // Some comments goes here
    const messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to multimatch! Starting new game...';
    logPlayerName(getPlayerName('playername'));
    printPlayerAndScore(100, getPlayerName('playername'));
    printPlayerAndScore(1000, getPlayerName('playername'));
}

function logPlayerName(playerName:string = 'Multimatch player'): void {
    console.log(`Game started by ${playerName}`);
}

function getPlayerName(elementId: string ): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById(elementId);
    if(inputElement.value === '' ) {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function printPlayerAndScore(score: number, playerName?: string): void {
    let logger : (value: string) => void;

    if(score <= 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }
    const divElement: HTMLElement | null = document.getElementById('scoreboard');
    divElement!.innerText = `${playerName} : ${score}`;
    logger(`${playerName} : ${score}`);
}

const logMessage = (message: string) : void => console.log(message);

const logError = (err: string): void => console.error(err);

document.getElementById('startGame')!.addEventListener('click', startGame);
