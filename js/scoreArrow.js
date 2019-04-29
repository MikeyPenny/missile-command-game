"use strict"
function Arrow(game, canvas) {
    
    this.arrow = new Image();
    this.arrow.src = './sprites/arrowSprite.png'
    this.ctx = canvas.getContext('2d');
    this.spriteDimensions = {
        width: 32,
        height: 32
    };
    this.x = 0;
    this.y = 0;
    this.arrowPoint = 300;

    this.subscribeArrow = function() {
        game.subscribeArrow(this);
    };

    this.unsubscribeArrow = function() {
        game.unsubscribeScore(this);
    };

    this.draw = () => {


        this.ctx.drawImage(this.arrow, this.x, this.y, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.arrowPoint, 1, this.spriteDimensions.width, this.spriteDimensions.height);
        
    };


    this.subscribeArrow();

}