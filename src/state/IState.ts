export interface IState {
	elements: {
		canvas: HTMLCanvasElement
	}
	dimensions: {
		columns: number
		canvas: {
			width: number
			height: number
		},
		player: {
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