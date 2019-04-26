function Circle(game, x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.growCircle = function() {

    };

    this.subscribe = function() {
        game.subscribeCircle(this);
    };

    this.unsubscribe = function() {
        game.unsubscribeCircle(this);
    };

    this.subscribe();

}