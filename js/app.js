// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x >= 505) {
        this.x = 0;
    } else {
        this.x = this.x + Math.floor(this.speed * dt);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.speed = 5;
}

Player.prototype.update = function () {

}

Player.prototype.render = function (dt) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (moveTo) {
    if (moveTo === "left") {
        this.x = this.x - 100;
        this.checkBound();
    } else if (moveTo === "right") {
        this.x = this.x + 100;
        this.checkBound();
    } else if (moveTo === "up") {
        this.y = this.y - 83;
        this.checkBound();
    } else if (moveTo === "down") {
        this.y = this.y + 83;
        this.checkBound();
    }
}
Player.prototype.checkBound = function () {
    if (this.x < 0 || this.x > 404 || this.y < 0 || this.y > 404) {
        this.x = 403;
        this.y = 383;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies;
var player = new Player(403, 383);
(function populateEnemies(){
    allEnemies = [];
    let ys = [51, 134, 217];
    // Math.floor(Math.random() * 16777215)
    for(let i = 0; i < 5; i++){
        allEnemies.push(new Enemy(0, ys[Math.floor(Math.random() * 3)], Math.floor(Math.random() * 51) + 50));
    }

    console.log(allEnemies);
})();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
