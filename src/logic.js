import {
  removeDigitCheck,
  coreAddition,
  coreDivision,
  coreLogarytm,
  coreMultiplication,
  coreSubtraction,
  digitCheck,
  fractionCheck,
  resultCheck,
} from "./logicCheck.js"
const input = document.getElementById("displayBigText")
const smallInput = document.getElementById("displaySmallText")
let inputNumber = ""
let previousNumber = 0
let firstTime = true

/**
 * Adds one digit to input number.
 * @param {string} digit - The digit wich was clicked by user.
 */
const addDigitToDisplay = digit => {
  inputNumber = digitCheck(inputNumber, digit)
  input.textContent = inputNumber
}
/**
 * Deletes one digit from the input number when the user presses the "DEL" button.
 */
const removeDigitFromDisplay = () => {
  inputNumber = removeDigitCheck(inputNumber)
  input.textContent = inputNumber
}
/**
 * Shows the results of calculations on the display.
 */
const displayArithmeticCalculation = (result, symbol) => {
  previousNumber = result
  smallInput.textContent = `${previousNumber} ${symbol}`
  input.textContent = ""
  inputNumber = ""
}
/**
 * Calculating addition when user clicked button "+"
 */
const addition = () => {
  const additionValue = coreAddition(inputNumber, previousNumber)
  displayArithmeticCalculation(additionValue, "+")
}
/**
 * Calculating division when user clicked button "/"
 */
const division = () => {
  let [divisionValue, status] = coreDivision(
    inputNumber,
    previousNumber,
    firstTime
  )
  if (divisionValue === "You can't divide by 0!") {
    alert(divisionValue)
  } else {
    firstTime = status
    displayArithmeticCalculation(divisionValue, "/")
  }
}
/**
 * Calculating multiplication when user clicked button "*"
 */
const multiplication = () => {
  let [multiplicationValue, status] = coreMultiplication(
    inputNumber,
    previousNumber,
    firstTime
  )
  firstTime = status
  displayArithmeticCalculation(multiplicationValue, "*")
}
/**
 * Calculating subtraction when user clicked button "-"
 */
const subtraction = () => {
  const subtractionValue = coreSubtraction(inputNumber, previousNumber)
  displayArithmeticCalculation(subtractionValue, "-")
}
/**
 * Cleans all user's input,history of calculatoin and display when user clicks "AC"
 */
const cleansing = () => {
  firstTime = true
  inputNumber = ""
  previousNumber = 0
  smallInput.textContent = ""
  input.textContent = ""
}
/**
 * Showes result of calculation when user clicked button "="
 */
const result = async () => {
  const resultTest = resultCheck(
    inputNumber,
    previousNumber,
    smallInput.textContent,
    firstTime
  )
  if (resultTest === "You can't divide by 0!") {
    alert("You can't divide by 0!")
  } else {
    smallInput.textContent = ""
    input.textContent = resultTest
    inputNumber = resultTest
    previousNumber = 0
    firstTime = true
  }
}
/**
 * Can make fraction when user clicked button "."
 * @param {string} dot - Addes "." to users display.
 */
const fraction = () => {
  inputNumber = fractionCheck(inputNumber)
  input.textContent = inputNumber
}
/**
 * Calculating logarithm when user clicked button "Log"
 */
const logarythm = async () => {
  let [logariythmValue, status] = coreLogarytm(
    inputNumber,
    previousNumber,
    firstTime
  )
  firstTime = status
  displayArithmeticCalculation(logariythmValue, "log")
}

export {
  result,
  multiplication,
  addDigitToDisplay,
  removeDigitFromDisplay,
  addition,
  subtraction,
  division,
  cleansing,
  fraction,
  logarythm,
}
