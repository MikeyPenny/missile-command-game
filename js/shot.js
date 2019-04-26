const missileCommand = new MissileCommand();

function clearCanvas(ctx) {
    ctx.clearRect(0, 0, 800, 600);
}


function shootTo(e) {


    new Shot(missileCommand, e)




}

function distance(origin, target) {

    let a = target.x - origin.x;
    let b = target.y - origin.y;
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));

    return c;
}



window.onload = function() {
    
    missileCommand.loadGame();

    let canvas = document.getElementById('missile_command');
    canvas.addEventListener("click", shootTo);
    
}

class Shot {
    constructor(game, e) {
        this.startX = 400;
        this.startY = 500;
        this.endX = e.pageX;
        this.endY = e.pageY;
        this.amount = 0;
        this.stepSize = 8;
        this.dis = distance({x: this.startX, y: this.startY}, {x: this.endX, y: this.endY});
        this.steps = this.dis / this.stepSize;
        this.speed = 1/this.steps;
        this.stepCounter = 0;
        this.game = game
    
        this.canvas = document.getElementById('missile_command');
        this.ctx = this.canvas.getContext('2d');
     
        this.subscribe(this)
    }
    subscribe() {
        this.game.subscribeShot(this)
    }

    unsubscribe() {
        this.game.unsubScribeShot(this)
    }
    draw() {
        this.amount += this.speed;
        this.stepCounter++;

        if (this.amount > 1) {
            this.amount = 1;
            new Circle(this.game, this.endX, this.endY, this.ctx, this.canvas)
            this.unsubscribe(this)
        } else {
            this.ctx.strokeStyle = "blue";
            this.ctx.beginPath();
            this.ctx.moveTo(this.startX, this.startY);            
            this.ctx.lineTo(this.startX + (this.endX - this.startX) * this.amount, this.startY + (this.endY - this.startY) * this.amount);
            this.ctx.stroke();
        }
    }
}