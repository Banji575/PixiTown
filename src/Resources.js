import * as PIXI from 'pixi.js'
import { World } from './world'

export const loader = new PIXI.Loader()

loader.add('00', './assets/buildingTiles_000.png')
    .add('01', './assets/buildingTiles_001.png')
    .add('02', './assets/buildingTiles_002.png')
    .add('03', './assets/buildingTiles_003.png')

loader.load(() => {
    const container = app.stage
    container.emit('loaded')
    
})