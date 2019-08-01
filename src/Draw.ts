import State from "./state";
import { imageLoader } from "./utils";

const codyImage = require("../img/cody.png")

export class Draw {
	public state: State
	private obstaclesState: {start?: number, obstacles: any[]} = {
		start: undefined,
		obstacles: []
	}
	constructor() {
		this.state = State.getInstance()
		this.init()
	}
	public async init() {
		const [cody] = await Promise.all([
			imageLoader(codyImage)
		])
		this.draw(cody)
	}
	public draw(cody: any) {
		let start: number = 0
		const step = (timestamp: number) => {
			const state = this.state.getState
			const { width, height } = state.dimensions.canvas
			const { y } = this.state.player
			const { width: playerW, height: playerH } = this.state.playerSize
			if (state.game.started && !state.game.paused) {
				state.context.clearRect(0, 0, width, height);
				state.context.drawImage(cody, 10, y, playerW, playerH)

				this.drawObstacles(timestamp)
			}
			
			if (!start) start = timestamp
			// const progress = timestamp - start
			// if (progress < 500) {
			  window.requestAnimationFrame(step);
		  }
		  
		  window.requestAnimationFrame(step);
	}
	public drawObstacles(timestamp: number) {
		const { start, obstacles } = this.obstaclesState
		if (!start) {
			this.obstaclesState.start = timestamp
		} else {
			// const sinceStart = timestamp - start
			// const numberOfObstacles = Math.round(sinceStart / 6000)
			// if (numberOfObstacles > obstacles.length) {
			if (this.obstaclesState.obstacles.length === 0){
				this.obstaclesState.obstacles.push({
					x: this.state.dimensions.canvas.width,
					opening: Math.random()
				})
			}
		}
		const state = this.state.getState
		const obstaclesWidth = 20
		const { height } = state.dimensions.canvas
		const openingSize = this.state.playerSize.height + 40

		const toDelete: number[] = []
		for (let index = 0; index < obstacles.length; index++) {
			const o = this.obstaclesState.obstacles[index];
			const topEndPosition = Math.round((height - openingSize) * o.opening)
			const bottomEndPosition = height - topEndPosition

			state.context.fillStyle = "#5BA7C7"
			state.context.fillRect(o.x, 0, obstaclesWidth, topEndPosition)

			state.context.fillStyle = "#5BA7C7"
			state.context.fillRect(o.x, height - bottomEndPosition + openingSize, obstaclesWidth, bottomEndPosition)
			if (o.x + obstaclesWidth <= 0) {
				toDelete.push(index)
				this.obstaclesState.obstacles.push({
					x: this.state.dimensions.canvas.width,
					opening: Math.random()
				})
			} else {
				o.x = o.x - 4
			}
		}
		toDelete.forEach((item: number) => {
			this.obstaclesState.obstacles.splice(item, 1)
		})
	}
}