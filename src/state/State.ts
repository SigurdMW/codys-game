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
	public startGame() {
		this.state = {...this.state, game: {started: true, paused: false}}
	}
	public stopGame() {
		this.state = {...this.state, game: {started: true, paused: false}}
	}
}

export default State