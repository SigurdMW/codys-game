import State from "./state"
import { imageLoader } from "./utils"

const tileSrc = require("../img/tiles.png")

export class Background {
	private state: State
	constructor() {
		this.state = State.getInstance()
		this.init()
	}
	public async init() {
		const { backgroundCanvas: canvas } = this.state.elements
		const { height, width } = this.state.dimensions.canvas
		canvas.height = height
		canvas.width = width
		const img = await imageLoader(tileSrc) as any
		const context = canvas.getContext("2d") as CanvasRenderingContext2D
		// solid background color
		context.fillStyle = "#B0E0F8"
		context.fillRect(0, 0, width, height)

		// draw ocean
		const numCols = this.state.dimensions.columns
		const columnSize = width / numCols
		let xPos = 0
		new Array(numCols).fill(0).map(() => { 
			context.drawImage(img, 255, 200, 15, 15, xPos, height - columnSize, columnSize, columnSize)
			xPos += columnSize
		})
	}
}