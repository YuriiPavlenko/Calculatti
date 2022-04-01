import {result, multiplication, addDigitToDisplay, removeDigitFromDisplay, addition, subtraction,  division, cleansing,drobvroteyeebat,logarythm} from "./logic"

const myButtons = [...document.getElementsByClassName("item")]
/**
 * It is an Array of all functions in order. DON'T CHANGE THE ORDER - YOUR PENIS WILL WITHER
 */
const myFunctions = [
    cleansing,
    logarythm,
    removeDigitFromDisplay,
    division,
    () => addDigitToDisplay(1),
    () => addDigitToDisplay(2),
    () => addDigitToDisplay(3),
    multiplication,
    () => addDigitToDisplay(4),
    () => addDigitToDisplay(5),
    () => addDigitToDisplay(6),
    addition,
    () => addDigitToDisplay(7),
    () => addDigitToDisplay(8),
    () => addDigitToDisplay(9),
    subtraction,
    () => drobvroteyeebat("."),
    () => addDigitToDisplay(0),
    result,
]
/**
 * Assign a function by index for every button 
 */
const myNewFunction = myButtons.map((button, index) =>{
return {buton: button, handler: myFunctions[index]}
})
/**
 * Assing a EventListener by click for every button
 */
myNewFunction.forEach(({buton, handler}) => {
    buton.addEventListener("click", handler)
})