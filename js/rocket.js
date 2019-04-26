"use strict";

function Rocket(game) {
    this.x = Math.floor(Math.random()*800);
    this.y = 1;
    this.targetX = Math.floor(Math.random()*800);
    this.targetY = 550;
    this.canvas = document.getElementById('missile_command');
    this.ctx = this.canvas.getContext('2d');
    this.amount = 0;
    this.stepSize = 1.5;
    this.stepCounter = 0;
    this.dis = 0;
    this.steps;
    this.speed;
    this.collided = false

    this.subscribe = () => {
        game.subscribeRocket(this);
    };

    this.unsubscribe = () => {
        game.unSubscribeRocket(this);
        
    };

    this.bringTheRain = () => {

        this.dis = this.distance({x: this.x, y: this.y}, {x: this.targetX, y: this.targetY});
        this.steps = this.dis / this.stepSize;
        this.speed = 1/this.steps;
        
        
        var drawBomb = () => {

            this.amount += this.speed;
            this.stepCounter++;

            if (this.amount >= 1 || this.collided) {
                this.amount = 1;
                this.clearCanvas(this.ctx);
            } else {
                this.ctx.strokeStyle = "red";
                this.ctx.beginPath();
                this.ctx.moveTo(this.x, this.y);            
                this.ctx.lineTo(this.x + (this.targetX - this.x) * this.amount, this.y + (this.targetY - this.y) * this.amount);
                this.ctx.stroke();

                this.subscribe();
                
                this.collided = game.checkRocketBombCollision((this.x + (this.targetX - this.x) * this.amount), (this.y + (this.targetY - this.y) * this.amount));

                window.requestAnimationFrame(drawBomb);
            }

        }

        window.requestAnimationFrame(drawBomb);
    };

    this.distance = (origin, target) => {

        let a = target.x - origin.x;
        let b = target.y - origin.y;
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
    
        return c;
    };

    this.clearCanvas = (ctx) => {
        ctx.clearRect(0, 0, 800, 600);
    }

}