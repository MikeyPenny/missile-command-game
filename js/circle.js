function Circle(game) {
    this.x = 0;
    this.y = 0;
    this.radius = 1;

    this.growCircle = function() {

    };

    this.subscribe = function() {
        game.subscribe(this);
    };

    this.unsubscribe = function() {
        game.unsubscribe(this);
    };

}