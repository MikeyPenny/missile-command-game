"use strict"
function City(game) {
    
    this.x = 0;
    this.y = 500;
    this.width = 60;
    this.height = 50;
    this.img = new Image();
    this.img.src = './sprites/citySprite.png';
    this.canvas = document.getElementById('missile_command');
    this.ctx = this.canvas.getContext('2d');
    this.spriteDimensions = {
        width: 36,
        height: 32
    };
    
    this.subscribeCity = function() {
        game.subscribeCity(this);
    };

    this.unsubscribeCity = function() {
        game.unsubscribeCity(this);
    };

    this.draw = () => {
        this.ctx.drawImage(this.img, 0, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.x, this.y, 70, 45);
    };


    this.subscribeCity();

}

// function pickSprite(numberSprite, destX, destY) {
//     let spriteSheet = "./sprites/spriteSheet3.png"
//     let spriteDimensions = {
//         width: 16,
//         height: 16
//     }

//     var spriteSheetObj = new Image();
//     spriteSheetObj.src = spriteSheet;
//     let x = (numberSprite % 4) * spriteDimensions.width
//     let y = Math.floor(numberSprite / 4) * spriteDimensions.height

//     return [spriteSheetObj, x, y,spriteDimensions.width, spriteDimensions.height, destX, destY, spriteDimensions.width *4, spriteDimensions.height*4]
// }
// window.addEventListener("load", function() {
//     let canvas = document.getElementsByTagName("canvas")[0]
//     let ctx = canvas.getContext('2d');
//     let argumentArray = pickSprite(0,0,0)
//     argumentArray[0].onload = function(){
//         ctx.drawImage(...argumentArray)
//     }
// })
// let sprite = new Sprite(this.img, this.x, this.y, this.width, this.height);
// sprite.draw();