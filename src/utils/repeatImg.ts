function repeatImg (imgSrc:string, width: number = 90, height: number = 30,offsetX: number = 30, offsetY:number = 0) {
  return new Promise((resolve, reject) => {
    if (!imgSrc) return reject()
    const cw = document.createElement('canvas');
    cw.width = width
    cw.height = height
    const ctx = cw.getContext('2d');
    const img=new Image();
    img.onload= () => {
      for (let i = 0;i * offsetX <= width;i++){
        ctx.drawImage(img, i*offsetX, offsetY);
      }
      resolve(cw.toDataURL())
    };
    img.src=imgSrc;
  })
}

export default repeatImg