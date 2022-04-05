/**
 * Parsing and calculating addition
 * @param {number} prevNumber
 * @param {string} currentString
 * @returns {number}
 */
const coreAddition = (prevNumber, currentString) =>
  prevNumber + parseFloat(currentString)
/**
 * Parsing and calculating subtraction
 * @param {number} prevNumber
 * @param {string} currentString
 * @returns {number}
 */
const coreSubtraction = (prevNumber, currentString) =>
  prevNumber - parseFloat(currentString)
/**
 * Parsing and calculating multiplication
 * @param {number} prevNumber
 * @param {string} currentString
 * @returns {number}
 */
const coreMultiplication = (prevNumber, currentString) =>
  prevNumber * parseFloat(currentString)
/**
 * Parsing and calculating division
 * @param {number} prevNumber
 * @param {string} currentString
 * @returns {number}
 */
const coreDivision = (prevNumber, currentString) => {
  if (parseFloat(currentString) !== 0)
    return prevNumber / parseFloat(currentString)
  throw new Error("Divided by 0")
}
/**
 * Parsing and calculating logarytm asyncronously using Newton-API
 * @param {number} prevNumber
 * @param {string} currentString
 * @returns {number}
 */
const coreLogarytm = async (prevNumber, currentString) => {
  const httpResponsse = await fetch(
    `https://newton.now.sh/api/v2/log/${prevNumber}|${currentString}`
  )
  const jsonObject = await httpResponsse.json()
  return jsonObject.result
}

const coreCalculations = () => {
  return {
    coreAddition,
    coreSubtraction,
    coreMultiplication,
    coreDivision,
    coreLogarytm,
    /**
     * Add fraction symbol("."), if its not present.
     * @param {string} currentString
     * @returns {string}
     */
    addFractionSymbol: currentString =>
      currentString.includes(".") ? currentString : `${currentString}.`,
    /**
     * Add didgit.
     * @param {string} currentString
     * @param {string} digit
     * @returns {string}
     */
    addDigit: (currentString, digit) => `${currentString}${digit}`,
    /**
     * Remove last digit.
     * @param {string} currentString
     * @returns {string}
     */
    removeDigit: currentString =>
      currentString.substring(0, currentString.length - 1),
    /**
     * Calculate result based on given text.
     * @param {number} prevNumber
     * @param {string} currentString
     * @param {string} smallDisplayText - number with the symbol of the selected action.
     * @returns {number}
     */
    coreResult: async (prevNumber, currentString, smallDisplayText) => {
      const lastSymbol = smallDisplayText[smallDisplayText.length - 1]
      if (lastSymbol === "+") return coreAddition(prevNumber, currentString)
      if (lastSymbol === "-") return coreSubtraction(prevNumber, currentString)
      if (lastSymbol === "*")
        return coreMultiplication(prevNumber, currentString)
      if (lastSymbol === "/") return coreDivision(prevNumber, currentString)
      if (lastSymbol === "g")
        return await coreLogarytm(prevNumber, currentString)
    },
  }
}
export default coreCalculations
