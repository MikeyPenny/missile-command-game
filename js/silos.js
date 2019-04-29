function Silo(game) {

    this.x = 0;
    this.y = 480;
    this.width = 50;
    this.height = 50;
    this.alliedMissiles = 10;
    this.img = new Image();
    this.img.src = './sprites/groundAndSiloSprite.png';

    this.rocket = new Image();
    this.rocket.src = './sprites/rocketSprite.png';
    this.rockets = [];
    
    // {x: 405, y : 490},    
    //     {x: 405, y : 490},    
    //     {x: 405, y : 490},    
    //     {x: 405, y : 490},    
    //     {x: 405, y : 490},    
    //     {x: 405, y : 490},    
    //     {x: 405, y : 490} 

    this.canvas = document.getElementById('missile_command');
    this.ctx = this.canvas.getContext('2d');
    this.spriteDimensions = {
        width: 32,
        height: 32
    };

    this.subscribeSilo = function() {
        game.subscribeSilo(this);
    }

    this.unSubscribeSilo = function() {
        game.unSubscribeSilo(this);
    }

    this.draw = () => {
        this.ctx.drawImage(this.img, 33, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.x, this.y, 100, 100);

        for (let i = 0; i < this.rockets.length; i++) {
            this.ctx.drawImage(this.rocket, 0, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
                this.rockets[i].x, this.rockets[i].y, this.spriteDimensions.width, this.spriteDimensions.height);
        }
        
    }

    this.subscribeSilo();

}