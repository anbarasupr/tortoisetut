
console.log('Creating a scoreboard...');
var results = [] // an array to store result of every game

function addResult(newResult) {
    results.push(newResult);
}

function updateScoreboard() {
    var output = '<h2>Scoreboard</h2>';
    // loop over all the results and create the html for the scoreboard
    output += '<table class="table table-hover table-condensed" style="width:90%">';
    output += '<tr>';
    output += '<th>No</th>';
    output += '<th>Player Name</th>';
    output += '<th>Factor</th>';
    output += '<th>Number of Problems</th>';
    output += '<th>Score</th>';
    output += '</tr>';
    for (var index = 0; index < results.length; index++) {
        var result = results[index];
        output += '<tr>';
        output += '<td>' + (index + 1) + '</td>';
        output += '<td>' + result.name + '</td>';
        output += '<td>' + result.factor + '</td>';
        output += '<td>' + result.problems + '</td>';
        output += '<td>' + result.score + '</td>';
        output += '</tr>';
    }
    output += '</table>';
    var scoreElement = document.getElementById('scores');
    scoreElement.innerHTML = output;
}

// expose public members
exports.updateScoreboard=updateScoreboard;
exports.addResult=addResult;
