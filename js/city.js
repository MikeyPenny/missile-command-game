"user strict"
function City(canvas, game) {
    
    this.x = 0;
    this.y = 500;
    this.width = 60;
    this.height = 50;
    this.img = new Image();
    // img.src = '';
    
    this.subscribeCity = function() {
        game.subscribeCity(this);
    };

    this.unsubscribeCity = function() {
        game.unsubscribeCity(this);
    };

    this.drawCity = () => {
        let sprite = new Sprite(this.img, this.x, this.y, this.width, this.height);
        sprite.draw();
    };


}

function pickSprite(numberSprite, destX, destY) {
    let spriteSheet = "./sprites/spriteSheet3.png"
    let spriteDimensions = {
        width: 16,
        height: 16
    }

    var spriteSheetObj = new Image();
    spriteSheetObj.src = spriteSheet;
    let x = (numberSprite % 4) * spriteDimensions.width
    let y = Math.floor(numberSprite / 4) * spriteDimensions.height

    return [spriteSheetObj, x, y,spriteDimensions.width, spriteDimensions.height, destX, destY, spriteDimensions.width *4, spriteDimensions.height*4]
}
// window.addEventListener("load", function() {
//     let canvas = document.getElementsByTagName("canvas")[0]
//     let ctx = canvas.getContext('2d');
//     let argumentArray = pickSprite(0,0,0)
//     argumentArray[0].onload = function(){
//         ctx.drawImage(...argumentArray)
//     }
// })
