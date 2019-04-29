class Shot {
    constructor(game, e) {
        this.canvas = document.getElementById('missile_command');
        this.ctx = this.canvas.getContext('2d');
        this.startX = this.setShotStartPoint(e.pageX);
        this.startY = 490;
        this.endX = e.pageX;
        this.endY = e.pageY;
        this.amount = 0;
        this.stepSize = 10;
        this.dis = distance({x: this.startX, y: this.startY}, {x: this.endX, y: this.endY});
        this.steps = this.dis / this.stepSize;
        this.speed = 1/this.steps;
        this.stepCounter = 0;
        this.game = game;
        this.cposX;
        
        
        this.subscribe(this);
    }

    subscribe() {
        this.game.subscribeShot(this);
    }

    unsubscribe() {
        this.game.unsubScribeShot(this);
    }

    draw() {
        this.amount += this.speed;
        this.stepCounter++;

        if (this.amount > 1) {
            this.amount = 1;
            new Circle(this.game, this.endX, this.endY, this.ctx, this.canvas);
            this.unsubscribe(this);
        } else {
            this.ctx.strokeStyle = "blue";
            this.ctx.beginPath();
            this.ctx.moveTo(this.startX, this.startY);            
            this.ctx.lineTo(this.startX + (this.endX - this.startX) * this.amount, this.startY + (this.endY - this.startY) * this.amount);
            this.ctx.stroke();
        }
    }

    setShotStartPoint(x) {
        let pX = 0;
        
        if (x < 250) {
            pX = 55;   
        } else if (x >= 250 && x <= 550) {
            pX = 420;
        } else {
            pX = 745;
        }
        
        return pX;

    }

}