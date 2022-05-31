import * as PIXI from 'pixi.js'
import { loader } from '../Resources'

export class Building extends PIXI.Container {
    constructor(visualModel) {
        super()
        this.sprite = new PIXI.Sprite(visualModel.texture)
        this.addChild(this.sprite)
        this.sprite.pivot.set(44.5, 32);
        // return this.sprite
    }
}