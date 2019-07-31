import State from "./state";

export class Draw {
	public state: State
	constructor() {
		this.state = State.getInstance()
		this.init()
	}
	public init() {
		this.draw()
	}
	public drawSquare(w: number, h: number, color: string, x: number, y: number){
		const { context } = this.state.getState
		context.fillStyle = color
		context.fillRect(x, y, w, h)
	}
	public draw() {
		let start: number = 0
		let y = 0
		let x = 0
		const step = (timestamp: number) => {
			const state = this.state.getState
			const { width, height } = state.dimensions.canvas
			state.context.clearRect(0, 0, width, height);
			this.drawSquare(30, 30, "red", x, y)
			y++
			x++
			
			if (!start) start = timestamp
			const progress = timestamp - start
			if (progress < 500) {
			  window.requestAnimationFrame(step);
			}
		  }
		  
		  window.requestAnimationFrame(step);
	}
}