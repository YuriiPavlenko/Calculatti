 import {result, umnojenie, addDigitToDisplay, removeDigitFromDisplay, slojenie, otnimanie, delenie, sbros,drobvroteyeebat,logo} from "./logic.js"

const myButtons = [...document.getElementsByClassName("item")]

const myFunctions = [
    sbros,
    logo,
    removeDigitFromDisplay,
    delenie,
    () => addDigitToDisplay(1),
    () => addDigitToDisplay(2),
    () => addDigitToDisplay(3),
    umnojenie,
    () => addDigitToDisplay(4),
    () => addDigitToDisplay(5),
    () => addDigitToDisplay(6),
    slojenie,
    () => addDigitToDisplay(7),
    () => addDigitToDisplay(8),
    () => addDigitToDisplay(9),
    otnimanie,
    () => drobvroteyeebat("."),
    () => addDigitToDisplay(0),
    result,
]

const myNewFunction = myButtons.map((button, index) =>{
return {buton: button, handler: myFunctions[index]}
})

myNewFunction.forEach(({buton, handler}) => {
    buton.addEventListener("click", handler)
})