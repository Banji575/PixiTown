import * as PIXI from 'pixi.js'
import { loader } from './Resources'
import { Building } from './entities/building';
import { Application } from './app';


export class World extends PIXI.Container {
    constructor() {
        super()
        console.log(this)
        Application.instance.stage.on('loaded', ()=>{
            this.populate()
            Application.instance.stage.addChild(this)
        })
    }

    populate() {

        for (let i = 0; i < 25; i++) {
            const bunny = new Building();

            bunny.x = (i % 5 + 0.5) * 99;
            bunny.y = Math.floor(i / 5 + 1) * 42.5;
            this.addChild(bunny);
        }

    }
}