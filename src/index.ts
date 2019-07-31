import { Background } from './Background';
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
		const { startButton, pauseButton } = this.state.elements
		startButton.addEventListener("click", () => {
			this.state.gameStarted ? this.state.stopGame() : this.state.startGame()
		})
		pauseButton.addEventListener("click", () => {
			this.state.gamePaused ? this.state.pauseGame() : this.state.unpauseGame()
		})
	}
}

new Init()
new Background()