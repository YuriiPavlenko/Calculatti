import calculations from "./logic.js"

const myButtons = [...document.getElementsByClassName("item")]
/**
 * It is an Array of all functions in order.
 * DON'T CHANGE THE ORDER - YOUR PENIS WILL WITHER.
 */
const myFunctions = [
  calculations.reset,
  calculations.logarythm,
  calculations.removeDigitFromDisplay,
  calculations.division,
  () => calculations.addDigitToDisplay(1),
  () => calculations.addDigitToDisplay(2),
  () => calculations.addDigitToDisplay(3),
  calculations.multiplication,
  () => calculations.addDigitToDisplay(4),
  () => calculations.addDigitToDisplay(5),
  () => calculations.addDigitToDisplay(6),
  calculations.addition,
  () => calculations.addDigitToDisplay(7),
  () => calculations.addDigitToDisplay(8),
  () => calculations.addDigitToDisplay(9),
  calculations.subtraction,
  calculations.fraction,
  () => calculations.addDigitToDisplay(0),
  calculations.result,
]

const myNewFunction = myButtons.map((button, index) => {
  return { buton: button, handler: myFunctions[index] }
})

myNewFunction.forEach(({ buton, handler }) => {
  buton.addEventListener("click", handler)
})
