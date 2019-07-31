import State from "./state";
import { Draw } from "./Draw";

class Init {
	public state: State
	public draw: Draw
	constructor() {
		this.state = State.getInstance()
		this.draw = new Draw()
		this.init()
	}
	public init() {
		this.setCanvasSize()
		this.addClickListeners()
	}
	public setCanvasSize() {
		const { height, width } = this.state.getState.dimensions.canvas
		const ctx = this.state.getState.context
		ctx.canvas.height = height
		ctx.canvas.width = width
	}
	public addClickListeners() {
		const { startButton } = this.state.elements
		startButton.addEventListener("click", () => {
			this.state.startGame()
		})
	}
}

new Init()