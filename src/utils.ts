export const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
	return v.toString(16)
})

export const imageLoader = (imgPath: string) => {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => {
            resolve(image)
        }
        image.onerror = (e) => {
            reject(e)
        }
        image.src = imgPath
    })
}