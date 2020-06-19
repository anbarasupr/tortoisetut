define(['./player', './game'], function (player, game) {
    console.log('Loading Multimath with Requirejs AMD');

    // console.log('player',player);

    // add click event to the start game button
    document.getElementById('startGame').addEventListener('click', function () {
        player.setName(document.getElementById('playerName').value);
        game.printGame();
    });

    // add click event to calculate button
    document.getElementById('calculate').addEventListener('click', function () {
        game.calculateScore();
    });

    // set the dfault no of problems
    document.getElementById('problemCount').value = game.getProblemCount();
});