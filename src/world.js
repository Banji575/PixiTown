import * as PIXI from 'pixi.js'
import { loader } from './Resources'
import { Building } from './entities/building';
import { Application } from './app';


export class World extends PIXI.Container {
    constructor() {
        super()
        this.app = Application.instance
        Application.instance.stage.on('loaded', ()=>{
            this.populate()
            Application.instance.stage.addChild(this)
        })
    }

    populate() {
        for (let i = 0; i < 25; i++) {
           // const building = this.app.visual[Math.floor(Math.random())]
            const bunny = new Building(this.app.visual.building1);

            bunny.x = (i % 5 + 0.5) * 130;
            bunny.y = Math.floor(i / 5 + 1) * 66;
            this.addChild(bunny);
        }

    }
}