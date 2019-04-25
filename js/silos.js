function Silo(game) {
    this.x = 0;
    this.y = 500;
    this.base = 50;
    this.height = 50;
    this.alliedMissiles = 10;

    this.subscribeSilo = function() {
        game.subscribeSilo(this);
    }

    this.unSubscribeSilo = function() {
        game.unSubscribeSilo(this);
    }


}