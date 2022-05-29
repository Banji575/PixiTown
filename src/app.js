import * as PIXI from 'pixi.js'

 export class Application {
    constructor() {
        if(Application.instance){
            return Application.instance
        }else{
            Application.instance = this
        }
        this.renderer = new PIXI.Renderer({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x1099bb,
            resolution: 1
        })
        document.body.appendChild(this.renderer.view)
        this.ticker = new PIXI.Ticker()
        this.stage = new PIXI.Container()
        this.ticker.add(this.render.bind(this), PIXI.UPDATE_PRIORITY.LOW)
        this.ticker.start()
    }

    get screen(){
        return this.renderer.screen
    }

    render(){
        this.renderer.render(this.stage)
    }
}

const app = window.app = new Application()
