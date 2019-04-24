function Rocket() {
    this.x = 0;
    this.y = 0;
    this.targetX = 0;
    this.targetY = 0;
    
    this.subscribe = function() {
        game.subscribe(this);
    };

    this.unsubscribe = function() {
        game.unsubscribe(this);
    };

    this.dropDown = function() {
        
    };

}