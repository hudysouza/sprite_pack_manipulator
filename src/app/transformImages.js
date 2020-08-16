const { createCanvas, loadImage } = require('canvas')

function createEmptyImage(file) {
  return new Promise((resolve, reject) => {
    const imgUrl = window.URL.createObjectURL(file)
    const image = new Image()

    image.onload = () => {
      console.log(image.width)
      const canvas = createCanvas(1024, 1024)
      const ctx = canvas.getContext('2d')

      // Draw cat with lime helmet
      loadImage(imgUrl)
        .then(image => {
          // ctx.drawImage(
          //   image,
          //   canvas.width / 2 - image.width / 2,
          //   canvas.height / 2 - image.height / 2
          // )
          ctx.drawImage(image, 0, 0)
          ctx.drawImage(image, image.width, 0)
          ctx.drawImage(image, 0, image.height)
          ctx.drawImage(image, image.width, image.height)

          const newImg = canvas.toDataURL()

          resolve(newImg)
        })
        .catch(reject)
    }

    image.src = imgUrl
  })
}

export { createEmptyImage }
