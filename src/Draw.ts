import State from "./state";
import { Shapes } from "./shapes"
import { imageLoader } from "./utils";

const codyImage = require("../img/cody.png")
const rocketImage = require("../img/rocket.png")

export class Draw {
	public state: State
	constructor() {
		this.state = State.getInstance()
		this.init()
	}
	public async init() {
		const [cody, rocket] = await Promise.all([
			imageLoader(codyImage),
			imageLoader(rocketImage)
		])
		this.draw(cody, rocket)
	}
	public draw(cody: any, rocket: any) {
		let start: number = 0
		let y = 0
		let x = 0
		const step = (timestamp: number) => {
			const state = this.state.getState
			const { width, height } = state.dimensions.canvas
			// state.context.drawImage(rocket, 400, 10, 1200, 900, 0, 120, 300, 200)
			state.context.drawImage(cody, 0, 100, 100, 60)
			if (state.game.started && !state.game.paused) {
				state.context.clearRect(0, 0, width, height);
				Shapes.drawRectangle(state.context)(30, 30, "red", x, y)
				y++
				x++
			}
			
			if (!start) start = timestamp
			// const progress = timestamp - start
			// if (progress < 500) {
			  window.requestAnimationFrame(step);
		  }
		  
		  window.requestAnimationFrame(step);
	}
}

// interface IShape {
// 	type: "rectangle" | "circle" | "triangle"
// 	size: {
// 		height: number
// 		width: number
// 	}
// 	position: {
// 		x: number
// 		y: number
// 	}
// 	style: {
// 		fill?: string
// 		picture?: any
// 	}
// 	movement: "none" | "left"
// }

// interface IDrawMap {
// 	shapes: IShape[]
// }