function City(game) {
    
    this.x = 0;
    this.y = 500;
    this.base = 60;
    this.height = 50;
    this.area = this.base*this.area;
    
    this.subscribeCity = function() {
        game.subscribeCity(this);
    };

    this.unsubscribeCity = function() {
        game.unsubscribeCity(this);
    };


}