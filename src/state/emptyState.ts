import { IState } from "./IState";

export const emptyState = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): IState => ({
	elements: {
		canvas: canvas
	},
	context: context,
	dimensions: {
		columns: 20,
		canvas: {
			height: 300,
			width: 600
		},
		player: {
			width: 100,
			height: 60
		}
	},
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
})
