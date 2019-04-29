'use strict';

function EndOfStage(game, canvas, numRockets, numCities) {

    this.rocket = new Image();
    this.rocket.src = './sprites/rocketSprite.png';

    this.operImg = new Image();
    this.operImg.src = './sprites/operatorsSprite.png';

    this.numbImg = new Image();
    this.numbImg.src = './sprites/spriteSheet.png';

    this.city = new Image();
    this.city.src = './sprites/citySprite.png';

    this.rocketX = 300;
    this.rocketRowY = 200;
    this.multRocketX = 350;
    this.cantRocketX = 400;
    this.asigRocketX = 470;
    this.rockResX = 500;

    this.cityX = 300;
    this.cityRowY = 250;
    this.multCityX = 350;
    this.cantCityX = 400;
    this.asigCityX = 470
    this.cityResX = 500;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    
    this.spriteDimensions = {
        width: 32,
        height: 32
    };

    this.rockResult = numRockets * 5;
    this.resStr = this.rockResult.toString();
    this.numRocketStr = numRockets.toString();
    this.numRocketsSplit = [];

    this.cityResult = numCities * 100;
    this.cityResStr = this.cityResult.toString();
    this.numCitiesStr = numCities.toString();
    this.points = 0;

    this.addPoints = function() {
        this.points += this.rockResult + this.cityResult;
        game.updateScore(this.points);
        
    };
    
    this.subscribeEndOfStage = function() {
        game.subscribeEndOfStage(this);
    };

    this.unsubscribeEndOfStage = function() {
        game.unsubscribeEndOfStage(this);
    };

    this.draw = () => {
        
        this.ctx.drawImage(this.rocket, 0, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.rocketX, this.rocketRowY, this.spriteDimensions.width, this.spriteDimensions.height);
        
        this.ctx.drawImage(this.operImg, 0, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.multRocketX, this.rocketRowY, this.spriteDimensions.width, this.spriteDimensions.height);
        
        let digitWidth = 0;
        for(let i = 0; i < this.numRocketsSplit.length; i++) {
            let x = (this.numRocketsSplit[i] % 10) * this.spriteDimensions.width;
            
            this.ctx.drawImage(this.numbImg, x, 0, this.spriteDimensions.width, 
                this.spriteDimensions.height, (this.cantRocketX + digitWidth), this.rocketRowY, 
                this.spriteDimensions.width, this.spriteDimensions.height);
            digitWidth += 32;
        }

        this.ctx.drawImage(this.operImg, 32, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.asigRocketX, this.rocketRowY, this.spriteDimensions.width, this.spriteDimensions.height);

        let resWidth = 0;
        for(let i = 0; i < this.resStr.length; i++) {
            let x = (this.resStr[i] % 10) * this.spriteDimensions.width;
            
            this.ctx.drawImage(this.numbImg, x, 0, this.spriteDimensions.width, 
                this.spriteDimensions.height, (this.rockResX + resWidth), this.rocketRowY, 
                this.spriteDimensions.width, this.spriteDimensions.height);
            resWidth += 32;
        }

        this.ctx.drawImage(this.city, 0, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.cityX, this.cityRowY, this.spriteDimensions.width, this.spriteDimensions.height);

        this.ctx.drawImage(this.operImg, 0, 0, 36, this.spriteDimensions.height, 
            this.multCityX, this.cityRowY, this.spriteDimensions.width, this.spriteDimensions.height);

        let cityDigWidth = 0;
        for(let i = 0; i < this.numCitiesStr.length; i++) {
            let x = (this.numCitiesStr[i] % 10) * this.spriteDimensions.width;
            
            this.ctx.drawImage(this.numbImg, x, 0, this.spriteDimensions.width, 
                this.spriteDimensions.height, (this.cantCityX + cityDigWidth), this.cityRowY, 
                this.spriteDimensions.width, this.spriteDimensions.height);
            cityDigWidth += 32;
        }

        this.ctx.drawImage(this.operImg, 32, 0, this.spriteDimensions.width, this.spriteDimensions.height, 
            this.asigCityX, this.cityRowY, this.spriteDimensions.width, this.spriteDimensions.height);

        let cityResWidth = 0;
        for(let i = 0; i < this.cityResStr.length; i++) {
            let x = (this.cityResStr[i] % 10) * this.spriteDimensions.width;
            
            this.ctx.drawImage(this.numbImg, x, 0, this.spriteDimensions.width, 
                this.spriteDimensions.height, (this.cityResX + cityResWidth), this.cityRowY, 
                this.spriteDimensions.width, this.spriteDimensions.height);
            cityResWidth += 32;
        }

    };

    this.splitNumbers = () => {
        for(let i = 0; i < this.numRocketStr.length; i++) {
            this.numRocketsSplit.push(+this.numRocketStr[i]);
        }
    };

    
    this.splitNumbers();
    this.addPoints();
    this.subscribeEndOfStage();
    game.stopAnimation = true

}