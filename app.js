const playerForm = document.querySelector('.player-info');

const Player = (name, mark) => {
    const playerPos = [];
    const victoryPos = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
    const isWinner = () => {
        let found = null;
        function isArrayAPartOfArrayB(arrayA, arrayB) {
            return arrayA.every(element => arrayB.includes(element));
        }

        for (let i=0;i<victoryPos.length;i++) {
            if (isArrayAPartOfArrayB(victoryPos[i], playerPos)) {
                found = true;
                break;
            }
            else
                found = false;
        }
        return found;
    };
    return {name, mark, playerPos, isWinner};
}

// const player1 = Player("jeff", "X");
// const player2 = Player("dylan", "O");

const gameBoard = (function() {
    let PLAYER_KEY = 0;
    const players = [];
    /*temporary declaration*/
    players[0] = Player("jeff", "X");
    players[1] = Player("dylan", "O");
    // let currentPlayer = players[PLAYER_KEY];
    
    const _playerSwitch = (PLAYER_KEY) => {
        return (1 - PLAYER_KEY);
    }
    const _gridItems = document.querySelectorAll('.grid-box'); //gridItems is an Array
    const _gameInit = function() {
        // player declaration wos here..
        console.log("Started game!");
        console.log(`first player is ${players[0].name}, mark: ${players[0].mark}`);
        console.log(`second player is ${players[1].name}, mark: ${players[1].mark}`);

        _gridItems.forEach(element => {
            element.addEventListener('click', () => {
                _gameControl(element);
            });
        });
    }

    const _gameControl = (element) => {
        let currentPlayer = players[PLAYER_KEY];
        const _currentMark = currentPlayer.mark;
        element.textContent = `${_currentMark}`;
        element.removeEventListener('click', );
        console.log(`id of clicked element is ${element.id}`); //works
        console.log("typeof element.id is ",typeof +element.id); //works
        currentPlayer.playerPos.push(+element.id); //doesn't work -- why??
        console.log(currentPlayer.playerPos);
        if(currentPlayer.isWinner()) {
            _closeGame(currentPlayer);
        }
        else {
            PLAYER_KEY = _playerSwitch(PLAYER_KEY);
            console.log(`PLAYER_KEY is now ${PLAYER_KEY}`);
        }
    }

    const _closeGame = (currentPlayer) => {
        alert(`${currentPlayer} won the game!`);
    }
    _gameInit();
    return { players } //do we even have to make ANYTHING as public?
})();







// player1.playerPos.push(1);
// console.log(player1.playerPos);
// console.log(player1.isWinner());
// player1.playerPos.push(4);
// console.log(player1.playerPos);
// player1.playerPos.push(6);
// console.log(player1.playerPos);
// console.log(player1.isWinner());
// player1.playerPos.push(7);
// console.log(player1.playerPos);
// console.log(player1.isWinner());


