import * as PIXI from 'pixi.js'
import { World } from './world'
import { Application } from './app'

export const loader = new PIXI.Loader()

loader.add('00', './assets/buildingTiles_000.png')
    .add('01', './assets/buildingTiles_001.png')
    .add('02', './assets/buildingTiles_002.png')
    .add('03', './assets/buildingTiles_003.png')
    .add('010', './assets/buildingTiles_010.png')

loader.load(() => {
    console.log('loaded emit')
    Application.instance.resources = loader.resources
    const container = app.stage
    container.emit('loaded')
    
})