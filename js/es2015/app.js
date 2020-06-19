import assignPlayerName from './player.js';
import { printGame, calculateScore, getProblemCount } from './game.js';

console.log('Loading Multimath with ES2015');

// console.log('player',player);

// add click event to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    assignPlayerName(document.getElementById('playerName').value);
    printGame();
});

// add click event to calculate button
document.getElementById('calculate').addEventListener('click', function () {
    calculateScore();
});

// set the dfault no of problems
document.getElementById('problemCount').value = getProblemCount();
