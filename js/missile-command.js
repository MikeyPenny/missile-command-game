"use strict";

class MissileCommand {
    
    constructor() {
        this.waveEnemyMissiles = 30;
        this.circles = [];
        this.rockets = [];
        this.cities = [];
        this.silos = [];
        this.missiles = [];
        this.ufos = [];
        this.score = 0;
        this.record = 0;
        
    }

    subscribeCircle(circle) {
        this.circles.push(circle);
        
    }

    unsubscribeCircle(circle) {
        /*this.circles.forEach((element, i) => {
            if(element === circle ) {
                this.circles.splice(i, 1);
            }
        });*/ 
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

    // testicle() {
    //     let bomb = new Circle(missileCommand, 400, 300, 20);
    //     bomb.subscribe();
    // }

    checkRocketCityCollision() {

    }

    checkRocketSiloCollision() {

    }

    bringTheRain() {
        
        

        let interval = setInterval(()=> {
            this.waveEnemyMissiles--;

            let rocket = new Rocket(this);
            rocket.bringTheRain();  
            
            if(this.waveEnemyMissiles === 0) {
                clearInterval(interval);
            }
            
            console.log(this.circles.length);
            

        }, 1000);  

    }

    

    

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

    buildCities() {
        let city1 = new City();
        city1.x = 155;
        this.subscribeCity(city1);
        let city2 = new City();
        city2.x = 275;
        this.subscribeCity(city2);
        let city3 = new City();
        city3.x = 465;
        this.subscribeCity(city3);
        let city4 = new City();
        city4.x = 565;
        this.subscribeCity(city4);
    }

    loadGame()  {
        this.buildSilos();
        this.buildCities();
        
        this.bringTheRain();
        
        
    }
    
}


