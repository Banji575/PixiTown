import * as PIXI from 'pixi.js'
window.PIXI = PIXI
import './app'
import './Resources'
import { VisualModels } from './visual'
import { World } from './world'

const visualModel = new VisualModels()
const world = new World()