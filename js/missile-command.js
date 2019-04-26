"use strict";

class MissileCommand {
    
    constructor() {
        this.waveEnemyMissiles = 3;
        this.circles = [];
        this.rockets = [];
        this.cities = [];
        this.silos = [];
        this.missiles = [];
        this.rectangles = [new Rectangle()]
        this.ufos = [];
        this.score = 0;
        this.record = 0;
        this.gameObjects = [this.rockets, this.rectangles]
        this.draw = this.draw.bind(this)

        window.addEventListener("load", ()=> {
            debugger
            this.canvas = document.getElementsByTagName("canvas")[0]
            this.ctx = this.canvas.getContext("2d")
            this.draw()

        })
    }

    subscribeCircle(circle) {
        this.circles.push(circle);
        
    }

    unsubscribeCircle() {
        this.circles = [];
    }

    subscribeRocket(rocket) {
        this.rockets.push(rocket);
    }
    
    unSubscribeRocket(rocket) {
        this.rockets.forEach((element, i) => {
            if(element === rocket) {
                this.rockets.splice(i, 1);
            }
        });
    }
    
    subscribeCity(city) {
        this.cities.push(city);
    }
    
    unSubscribeCity(city) {
        this.cities.forEach((element, i) => {
            if(element === city) {
                this.cities.splice(i, 1);
            }
        });
    }

    subscribeSilo(silo) {
        this.silos.push(silo);
    }
    
    unSubscribeSilo(silo) {
        this.silos.forEach((element, i) => {
            if(element === silo) {
                this.silos.splice(i, 1);
            }
        });
    }

    checkRocketBombCollision(x,y) {
        
        for (let i = 0; i < this.circles.length; i++) {
            let a = this.circles[i].x - x;
            let b = this.circles[i].y - y;
            let dist = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
            
            if (dist <=  this.circles[i].radius) {
                console.log(this.circles.length);
                
                return true;
            }
        }
        
        return false;
    }

    distance(origin, target) {

        let a = target.x - origin.x;
        let b = target.y - origin.y;
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
    
        return c;
    }

    checkRocketCityCollision() {

    }

    checkRocketSiloCollision() {

    }

    clearCanvas(ctx) {
        ctx.clearRect(0, 0, 800, 600);
    }

    draw() {
        
        this.clearCanvas(this.ctx);
        for(let i = 0; i < this.gameObjects.length; i++) {
            
                for(let j = 0; j < this.gameObjects[i].length; j++) {
                    this.gameObjects[i][j].draw()
                }
        }
        window.requestAnimationFrame(this.draw.bind(this));
    }

    bringTheRain() {
        
        let interval = setInterval(()=> {
            this.waveEnemyMissiles--;

            let rocket = new Rocket(this);
            
            if(this.waveEnemyMissiles === 0) {
                clearInterval(interval);
            }
        }, 1000);  

    }

    // draw() {
    //     let canvas = document.getElementById('missile_command');
    //     let ctx = canvas.getContext('2d');
        
    //     var drawRectangle = () => {
            
    //         ctx.fillStyle = "rgb(255,240,0)";
    //         ctx.beginPath();
    //         ctx.fillRect(155, 500, 100, 50);
            


    //     };
    // }

    countEnemyMissiles() {
        this.waveEnemyMissiles--;
    }

    cleanStage() {

    }

    buildSilos() {
        let silo1 = new Silo(this);
        silo1.x = 80;
        silo1.subscribeSilo();

        let silo2 = new Silo(this);
        silo2.x = 400;
        silo2.subscribeSilo();

        let silo3 = new Silo(this);
        silo3.x = 720;
        silo3.subscribeSilo();
    }

    // buildCities() {
    //     let canvas = document.getElementById('missile_command');
    //     let city1 = new City(canvas, this);
    //     city1.x = 155;
    //     city1.drawCity();
    //     this.subscribeCity(city1);
    //     let city2 = new City();
    //     city2.x = 275;
    //     this.subscribeCity(city2);
    //     let city3 = new City();
    //     city3.x = 465;
    //     this.subscribeCity(city3);
    //     let city4 = new City();
    //     city4.x = 565;
    //     this.subscribeCity(city4);
    // }

    loadGame()  {
        this.buildSilos();
        // this.buildCities();
        this.bringTheRain();
        // this.testRectangle();
    }
}


class Rectangle {
    constructor() {
        window.addEventListener("load", ()=> {
            this.canvas = document.getElementById('missile_command');
            this.ctx = this.canvas.getContext('2d');
        })
    }    
    draw() {
        debugger
        this.ctx.fillStyle = "rgb(255,240,0)";
        this.ctx.beginPath();
        this.ctx.fillRect(155, 500, 100, 50);          

    }
}