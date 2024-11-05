const rootStyles = document.documentElement.style;
const buttonRgbElement =document.getElementById("buttonRgb")
const buttonHexaElement =document.getElementById("buttonHexa")
const hexaValues = '0123456789ABCDEF';
const boxredElement = document.getElementById("box-red")
const tituloElement = document.getElementById("titulo")

const changeColorRgb = () => {
   
    const randomColorR = Math.floor(Math.random()* 256)
    const randomColorG = Math.floor(Math.random()* 256)
    const randomColorB = Math.floor(Math.random()* 256)
    
    rootStyles.setProperty("--bg-color",`rgb(${randomColorR},${randomColorG},${randomColorB})` )
}

const changeColorHexa = () =>{
let hexaColor = ""
for( let i= 0; i < 6; i++){
    const randomNumber = Math.floor(Math.random()*hexaValues.length)
    const randomCharacter = hexaValues.charAt(randomNumber)
    hexaColor = hexaColor + randomCharacter
}

rootStyles.setProperty("--bg-color",`#${hexaColor}`)

}

const changeBoxSize = () =>{
    const totalScroll =document.body.scrollHeight
    const userScroll = window.scrollY
    const finalWidth = (userScroll *100) / totalScroll

    rootStyles.setProperty("--box-width", finalWidth + "%")
    tituloElement.textContent = `Te has desplazado ${userScroll}px`
}

const changeBoxPosition =event =>{
    rootStyles.setProperty("--position-x", event.x +"px")
    rootStyles.setProperty("--position-y", event.y +"px")
}

buttonRgbElement.addEventListener("click",changeColorRgb)
buttonHexaElement.addEventListener("click",changeColorHexa)
document.addEventListener("scroll", changeBoxSize)
document.addEventListener("mousemove", changeBoxPosition)