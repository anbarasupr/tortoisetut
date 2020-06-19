'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProblemCount = exports.setProblemCount = exports.calculateScore = exports.printGame = undefined;

var _player = require('./player.js');

var _scoreboard = require('./scoreboard.js');

var scoreboard = _interopRequireWildcard(_scoreboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var factorElement = document.getElementById('factor');
var problemPerGame = 3; // set default value

function printGame() {
    (0, _player.logPlayer)();
    // determine the number of problems to show
    setProblemCount(document.getElementById('problemCount').value);

    // create the html for the current game
    var gameForm = '';
    for (var i = 1; i <= problemPerGame; i++) {
        gameForm += '<div class="form-group">';
        gameForm += '<label for="answer' + i + '" class="col-sm-5 control-label">';
        gameForm += factorElement.value + ' x ' + i + ' = </label>';
        gameForm += '<div class="col-sm-2">';
        gameForm += '<input type="text" class="form-control" id="answer' + i + '"/>';
        gameForm += '</div>';
        gameForm += '</div>';
    }

    // add game to the page
    var gameElement = document.getElementById('game');
    gameElement.innerHTML = gameForm;

    //enable calculate score button
    document.getElementById('calculate').removeAttribute('disabled');
}

function calculateScore() {
    var problemsInGame = getProblemCount();
    var score = 0;
    // loop through the text boxes and calculate the number that are correct
    for (i = 1; i <= problemsInGame; i++) {
        var answer = document.getElementById('answer' + i).value;
        if (factorElement.value && i * factorElement.value == answer) {
            score++;
        }
    }

    //create a new result object to pass to the scoreboard
    var result = {
        name: (0, _player.getName)(),
        score: score,
        problems: problemsInGame,
        factor: factorElement.value
    };
    console.log('Current User score', result);

    //add the result and update the scoreboard
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    // disable the calculate score button
    document.getElementById('calculate').setAttribute('disabled', 'true');
}

function setProblemCount(newProblemmCount) {
    problemPerGame = newProblemmCount;
}

function getProblemCount() {
    return problemPerGame;
}

// public members to expose outside
exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;