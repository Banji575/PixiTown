import * as PIXI from 'pixi.js'
import { Application } from './app'

export class VisualModels{
    constructor(){
        this.app = Application.instance
       this.app.stage.on('loaded', ()=>{
            this.createModels()
        })
    }

    createModels(){
        const resources = this.app.resources
        console.log(this.app)
        this.app.visual = {
            building1:{
                texture:resources['010'].texture
            },
            building2:{
                texture:resources['02'].texture
            },
            building3:{
                texture:resources['03'].texture
            },
        }

    }
}
