define(['./player', './scoreboard'], function (player, scoreboard) {

    var factorElement = document.getElementById('factor');
    var problemPerGame = 3; // set default value

    function printGame() {
        player.logPlayer();
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
            if (factorElement.value && (i * factorElement.value == answer)) {
                score++;
            }
        }

        //create a new result object to pass to the scoreboard
        var result = {
            name: player.getName(),
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

    // return public members to expose outside
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
});