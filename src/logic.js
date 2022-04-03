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
let emptySmallInput = true

const wrapper = (func, sign) => {
  if (inputNumber === "") {
    smallInput.textContent = `${previousNumber} ${sign}`
    return
  }
  if (emptySmallInput) {
    previousNumber = parseFloat(inputNumber)
    inputNumber = ""
    emptySmallInput = false
    smallInput.textContent = `${previousNumber} ${sign}`
    input.textContent = ""
    return
  }
  func()
}
/**
 * Shows the results of calculations on the display.
 */
const renderResult = (result, symbol) => {
  previousNumber = result
  smallInput.textContent = `${previousNumber} ${symbol}`
  input.textContent = ""
  inputNumber = ""
}
/**
 * Adds one digit to input number.
 * @param {string} digit - The digit wich was clicked by user.
 */
const addDigitToDisplay = digit => {
  inputNumber === "0"
    ? (inputNumber = `${digit}`)
    : (inputNumber = digitCheck(inputNumber, digit))
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
 * Can make fraction when user clicked button "."
 * @param {string} dot - Addes "." to users display.
 */
const fraction = () => {
  inputNumber === ""
    ? (inputNumber = "0.")
    : (inputNumber = fractionCheck(inputNumber))
  input.textContent = inputNumber
}
/**
 * Cleans all user's input,history of calculatoin and display when user clicks "AC"
 */
const cleansing = () => {
  emptySmallInput = true
  inputNumber = ""
  previousNumber = 0
  smallInput.textContent = ""
  input.textContent = ""
}
/**
 * Calculating addition when user clicked button "+"
 */
const addition = () => {
  wrapper(() => {
    const additionValue = coreAddition(previousNumber, inputNumber)
    renderResult(additionValue, "+")
  }, "+")
}
/**
 * Calculating subtraction when user clicked button "-"
 */
const subtraction = () => {
  wrapper(() => {
    const subtractionValue = coreSubtraction(previousNumber, inputNumber)
    renderResult(subtractionValue, "-")
  }, "-")
}
/**
 * Calculating multiplication when user clicked button "*"
 */
const multiplication = () => {
  wrapper(() => {
    let multiplicationValue = coreMultiplication(previousNumber, inputNumber)
    renderResult(multiplicationValue, "*")
  }, "*")
}
/**
 * Calculating division when user clicked button "/"
 */
const division = () => {
  wrapper(() => {
    let divisionValue
    try {
      divisionValue = coreDivision(previousNumber, inputNumber) //Error
      renderResult(divisionValue, "/")
    } catch (error) {
      console.error(error)
      alert("You can't divide by 0! (debil)")
    }
  }, "/")
}
/**
 * Calculating logarithm when user clicked button "Log"
 */
const logarythm = () => {
  wrapper(async () => {
    let logariythmValue = await coreLogarytm(previousNumber, inputNumber)
    renderResult(logariythmValue, "log")
  }, "log")
}
/**
 * Showes result of calculation when user clicked button "="
 */
const result = async () => {
  if (emptySmallInput) return
  if (inputNumber === "") return
  try {
    const result = await resultCheck(
      previousNumber,
      inputNumber,
      smallInput.textContent
    )
    smallInput.textContent = ""
    input.textContent = result
    inputNumber = result
    previousNumber = 0
    emptySmallInput = true
  } catch (error) {
    console.log(error)
    alert("You can't divide by 0!")
  }
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
