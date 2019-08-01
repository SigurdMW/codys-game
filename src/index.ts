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
		this.addEventListeners()
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
	public isWithinBounds(width: number, height: number, x: number, y: number) {
		return x >= 0 && x <= width && y >= 0 && y <= height
	}
	public addEventListeners() {
		document.addEventListener("keydown", (e: KeyboardEvent) => {
			const { width, height } = this.state.dimensions.canvas
			const { x, y } = this.state.player
			const { height: playerH } = this.state.playerSize
			if (e.keyCode === 38) { // up arrow
				e.preventDefault()
				this.state.movePlayer({
					y: this.isWithinBounds(width, height, x, y - 5) ? y - 5 : y
				})
			}
			if (e.keyCode === 40) { // down arrow
				e.preventDefault()
				const c = y + playerH
				this.state.movePlayer({
					y: this.isWithinBounds(width, height, x, c + 5) ? y + 5 : y
				})
			}
		})
	}
}

new Init()
new Background()