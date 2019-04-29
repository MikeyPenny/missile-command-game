"use strict"
function Score(game, canvas, points) {
    
    this.points = points;
    this.pointsStr = this.points.toString();
    this.scoreSplit = [];
    this.img = new Image();
    this.img.src = './sprites/spriteSheet.png';
    this.ctx = canvas.getContext('2d');
    this.spriteDimensions = {
        width: 32,
        height: 32
    };

    this.splitReverseNumbers = () => {
        for(let i = 0; i < this.pointsStr.length; i++) {
            this.scoreSplit.push(+this.pointsStr[i]);
        }
        
        this.scoreSplit = this.scoreSplit.reverse();
        
    };

    this.subscribeScore = function() {
        game.subscribeScore(this);
    };

    this.unsubscribeScore = function() {
        game.unsubscribeScore(this);
    };

    // this.unsubscribeScore();

    this.draw = () => {


        
        let x = 0;
        let y = 0;
        let startScore = 300;

        for(let i = 0; i < this.scoreSplit.length; i++) {
            x = (this.scoreSplit[i] % 10) * this.spriteDimensions.width;
            this.ctx.drawImage(this.img, x, y, this.spriteDimensions.width, 
                this.spriteDimensions.height, (startScore - this.spriteDimensions.width), 1, 
                this.spriteDimensions.width, this.spriteDimensions.height);
            startScore -=32; 
        }

        
    };

    
    
    this.splitReverseNumbers();

    this.subscribeScore();

}