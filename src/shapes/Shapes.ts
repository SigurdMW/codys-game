export class Shapes {
	public static drawRectangle = (ctx: CanvasRenderingContext2D) => (w: number, h: number, color: string, x: number, y: number) => {
		ctx.fillStyle = color
		ctx.fillRect(x, y, w, h)
	}
}