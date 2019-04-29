"use strict"
function Ground(game) {
    
    this.x = 0;
    this.y = 450;
    this.width = 800;
    this.height = 100;
    this.img = new Image();
    this.img.src = './sprites/groundAndSiloSprite.png';
    this.canvas = document.getElementById('missile_command');
    this.ctx = this.canvas.getContext('2d');
    this.spriteDimensions = {
        width: 32,
        height: 32
    };
    // img.src = '';
    
    this.subscribeGround = function() {
        game.subscribeGround(this);
    };

    this.unsubscribeGround = function() {
        game.unsubscribeGround(this);
    };

    this.draw = () => {
        this.ctx.drawImage(this.img, 0, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.x, this.y, 800, 150);
    };


    this.subscribeGround();

}