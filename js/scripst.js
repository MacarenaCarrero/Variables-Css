const rootStyles = document.documentElement.style;

const buttonRgbElement =document.getElementById("buttonRgb")


const changeColorRgb = () => {
   let newColor =""
    const randomColorR = Math.floor(Math.random()* 256)
    const randomColorG = Math.floor(Math.random()* 256)
    const randomColorB = Math.floor(Math.random()* 256)
    newColor = randomColorR+randomColorG +randomColorB
    rootStyles.setProperty("--bg-color",newColor )
}


buttonRgbElement.addEventListener("click",changeColorRgb)
 