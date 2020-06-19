'use strict';

var _player = require('./player.js');

var _player2 = _interopRequireDefault(_player);

var _game = require('./game.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = require('./player.js');
var game = require('./game.js');


console.log('Loading Multimath with Systemjs ComonJS');

// console.log('player',player);

// add click event to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    (0, _player2.default)(document.getElementById('playerName').value);
    (0, _game.printGame)();
});

// add click event to calculate button
document.getElementById('calculate').addEventListener('click', function () {
    (0, _game.calculateScore)();
});

// set the dfault no of problems
document.getElementById('problemCount').value = (0, _game.getProblemCount)();