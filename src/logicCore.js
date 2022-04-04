const coreCalculations = () => {
  return {
    /**
     * Parsing and calculating addition
     * @param {number} prevNumber
     * @param {string} currentString
     * @returns {number}
     */
    coreAddition: (prevNumber, currentString) =>
      prevNumber + parseFloat(currentString),
    /**
     * Parsing and calculating subtraction
     * @param {number} prevNumber
     * @param {string} currentString
     * @returns {number}
     */
    coreSubtraction: (prevNumber, currentString) =>
      prevNumber - parseFloat(currentString),
    /**
     * Parsing and calculating multiplication
     * @param {number} prevNumber
     * @param {string} currentString
     * @returns {number}
     */
    coreMultiplication: (prevNumber, currentString) =>
      prevNumber * parseFloat(currentString),
    /**
     * Parsing and calculating division
     * @param {number} prevNumber
     * @param {string} currentString
     * @returns {number}
     */
    coreDivision: (prevNumber, currentString) => {
      if (parseFloat(currentString) !== 0)
        return prevNumber / parseFloat(currentString)
      throw new Error("Divided by 0")
    },
    /**
     * Parsing and calculating logarytm asyncronously using Newton-API
     * @param {number} prevNumber
     * @param {string} currentString
     * @returns {number}
     */
    coreLogarytm: async (prevNumber, currentString) => {
      const httpResponsse = await fetch(
        `https://newton.now.sh/api/v2/log/${prevNumber}|${currentString}`
      )
      const jsonObject = await httpResponsse.json()
      return jsonObject.result
    },
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
      if (lastSymbol === "+")
        return this.coreAddition(prevNumber, currentString)
      if (lastSymbol === "-")
        return this.coreSubtraction(prevNumber, currentString)
      if (lastSymbol === "*")
        return this.coreMultiplication(prevNumber, currentString)
      if (lastSymbol === "/")
        return this.coreDivision(prevNumber, currentString)
      if (lastSymbol === "g")
        return await this.coreLogarytm(prevNumber, currentString)
    },
  }
}
export default coreCalculations
