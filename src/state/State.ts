import { IState } from "./IState";
import { Elements } from "../Elements";
import { emptyState } from "./emptyState";

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
			...emptyState(
				this.elements.canvas,
				this.elements.canvas.getContext("2d") as CanvasRenderingContext2D
			)
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
	// PLAYER
	public get player() {
		return this.state.positions.player
	}
	public get playerSize() {
		return this.state.dimensions.player
	}
	public movePlayer(obj: {x?: number, y?: number}) {
		this.state = {...this.state, positions: {...this.state.positions, player: {
			...this.state.positions.player,
			...obj
		}}}
	}
}

export default State