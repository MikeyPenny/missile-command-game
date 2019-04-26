const missileCommand = new MissileCommand();

function clearCanvas(ctx) {
    ctx.clearRect(0, 0, 800, 600);
}


function shootTo(e) {
    let canvas = document.getElementById('missile_command');
    let ctx = canvas.getContext('2d');

    let startX = 400;
    let startY = 500;
    let endX = e.pageX;
    let endY = e.pageY;
    let amount = 0;
    let stepSize = 8;
    let dis = distance({x: startX, y: startY}, {x: endX, y: endY});
    let steps = dis / stepSize;
    let speed = 1/steps;
    let stepCounter = 0;

    function drawLine() {

        amount += speed;
        stepCounter++;

        if (amount > 1) {
            amount = 1;
            // new Circle(game)
            new Circle(missileCommand, endX, endY, ctx, canvas)
            clearCanvas(ctx);
        } else {
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.moveTo(startX, startY);            
            ctx.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
            ctx.stroke();
            
            window.requestAnimationFrame(drawLine);
        }

    }

    window.requestAnimationFrame(drawLine);

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