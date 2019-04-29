class Circle{

    constructor(game, x, y, ctx, canvas){
        this.endX = x;
        this.endY = y;
        this.radius = 1;
        this.hue = 0
        this.growCircle = function() {
        }
        this.game = game
        this.startAngle = 0;
        this.endAngle = Math.PI*2;

        this.canvas = canvas
        this.ctx = ctx


        this.subscribe();
    };

    subscribe() {
        this.game.subscribeCircle(this);
    };

    unsubscribe() {
        this.game.unsubscribeCircle(this);
    };

    draw () {
        this.hue = this.shiftHue(this.hue);
        let color = "hsl("+this.hue+",100%,50%)";
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(this.endX, this.endY, this.radius, this.startAngle, this.endAngle, true);
        this.ctx.fill();
        this.radius += 1;
        
        if(this.radius >= 70) {
            this.unsubscribe();
        }
    }

    shiftHue(hue) {
        return (hue+15)%360;
    }
}