import { IState } from "./IState";
import { Elements } from "../Elements";

export class State {
	private static instance: State
	static getInstance() {
        if (!State.instance) {
            State.instance = new State();
        }
        return State.instance;
	}
	private state: IState
	public elements: Elements
	constructor() {
		this.elements = new Elements()
		this.state = {
			elements: {
				canvas: this.elements.canvas
			},
			dimensions: {
				columns: 20,
				canvas: {
					height: 300,
					width: 600
				}
			},
			context: this.elements.canvas.getContext("2d") as CanvasRenderingContext2D,
			positions: {
				player: {
					x: 0,
					y: 0
				}
			},
			game: {
				started: false,
				paused: false
			}
		}
	}
	public get getState() {
		return this.state
	}
	public get dimensions() {
		return this.state.dimensions
	}
	// START / STOP
	public get gameStarted() {
		return this.state.game.started
	}
	public startGame() {
		this.state = {...this.state, game: {started: true, paused: false}}
	}
	public stopGame() {
		this.state = {...this.state, game: {started: false, paused: false}}
	}
	// PAUSE / UNPAUSE
	public get gamePaused() {
		return this.state.game.paused
	}
	public pauseGame() {
		this.state = {...this.state, game: {...this.state.game, paused: true}}
	}
	public unpauseGame() {
		this.state = {...this.state, game: {...this.state.game, paused: false}}
	}
}

export default State