export interface IState {
	elements: {
		canvas: HTMLCanvasElement
	}
	dimensions: {
		canvas: {
			width: number
			height: number
		}
	}
	context: CanvasRenderingContext2D,
	positions: {
		player: {
			x: number
			y: number
		}
	}
	game: {
		started: boolean
		paused: boolean
	}
}