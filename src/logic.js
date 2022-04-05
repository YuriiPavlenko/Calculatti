import coreCalculation from "./logicCore.js"

const coreCalculations = coreCalculation()
const input = document.getElementById("displayBigText")
const smallInput = document.getElementById("displaySmallText")
let inputNumber = ""
let previousNumber = 0
let emptySmallInput = true

/**
 * This function transfers the entered number to the small output
 * and calls the given function
 * if small output is not empty.
 * @param {function} func - function that will be called
 * @param {string} sign - symbol that will be displayed
 */
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
 * @param {number} result
 * @param {string} symbol - The symbol of the selected mathematical action
 */
const renderResult = (result, symbol) => {
  previousNumber = result
  smallInput.textContent = `${previousNumber} ${symbol}`
  input.textContent = ""
  inputNumber = ""
}
const calculations = {
  /**
   * Adds one digit to input.
   * @param {string} digit - The digit wich was clicked by user.
   */
  addDigitToDisplay: digit => {
    inputNumber === "0"
      ? (inputNumber = `${digit}`)
      : (inputNumber = coreCalculations.addDigit(inputNumber, digit))
    input.textContent = inputNumber
  },
  /**
   * Deletes one digit from the input when the user presses the "DEL" button.
   */
  removeDigitFromDisplay: () => {
    inputNumber = coreCalculations.removeDigit(inputNumber)
    input.textContent = inputNumber
  },
  /**
   * Appends "." to input if it doesn't have any.
   * @example
   * //2 => 2.
   */
  fraction: () => {
    inputNumber === ""
      ? (inputNumber = "0.")
      : (inputNumber = coreCalculations.addFractionSymbol(inputNumber))
    input.textContent = inputNumber
  },
  /**
   * Resets program to initial state.
   */
  reset: () => {
    emptySmallInput = true
    inputNumber = ""
    previousNumber = 0
    smallInput.textContent = ""
    input.textContent = ""
  },
  /**
   * Calculating and displaying addition.
   */
  addition: () => {
    wrapper(() => {
      const additionValue = coreCalculations.coreAddition(
        previousNumber,
        inputNumber
      )
      renderResult(additionValue, "+")
    }, "+")
  },
  /**
   * Calculating and displaying subtraction.
   */
  subtraction: () => {
    wrapper(() => {
      const subtractionValue = coreCalculations.coreSubtraction(
        previousNumber,
        inputNumber
      )
      renderResult(subtractionValue, "-")
    }, "-")
  },
  /**
   * Calculating and displaying multiplication.
   */
  multiplication: () => {
    wrapper(() => {
      let multiplicationValue = coreCalculations.coreMultiplication(
        previousNumber,
        inputNumber
      )
      renderResult(multiplicationValue, "*")
    }, "*")
  },
  /**
   * Calculating and displaying division. Alerts when user divides by 0.
   */
  division: () => {
    wrapper(() => {
      let divisionValue
      try {
        divisionValue = coreCalculations.coreDivision(
          previousNumber,
          inputNumber
        ) //Error
        renderResult(divisionValue, "/")
      } catch (error) {
        console.error(error)
        alert("You can't divide by 0! (debil)")
      }
    }, "/")
  },
  /**
   * Calculating and displaying logarithm using Newton-API.
   */
  logarythm: () => {
    wrapper(async () => {
      let logariythmValue = await coreCalculations.coreLogarytm(
        previousNumber,
        inputNumber
      )
      renderResult(logariythmValue, "log")
    }, "log")
  },
  /**
   * Showes result of calculation.
   */
  result: async () => {
    if (emptySmallInput) return
    if (inputNumber === "") return
    try {
      const result = await coreCalculations.coreResult(
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
  },
}
export default calculations
