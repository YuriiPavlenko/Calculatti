/**
 * Adds one digit to input number.
 * @param {string} digit - The digit wich was clicked by user.
 * @returns {}
 */
const coreAddition = (prevNumber, currentString) =>
  prevNumber + parseFloat(currentString)

const coreSubtraction = (prevNumber, currentString) =>
  prevNumber - parseFloat(currentString)

const coreMultiplication = (prevNumber, currentString) =>
  prevNumber * parseFloat(currentString)

const coreDivision = (prevNumber, currentString) => {
  if (parseFloat(currentString) !== 0)
    return prevNumber / parseFloat(currentString)
  throw new Error("Divided by 0")
}

const coreLogarytm = async (prevNumber, currentString) => {
  const httpResponsse = await fetch(
    `https://newton.now.sh/api/v2/log/${prevNumber}|${currentString}`
  )
  const jsonObject = await httpResponsse.json()
  return jsonObject.result
}

const fractionCheck = currentString =>
  currentString.includes(".") ? currentString : `${currentString}.`

const digitCheck = (currentString, digit) => `${currentString}${digit}`

const removeDigitCheck = currentString =>
  currentString.substring(0, currentString.length - 1)

const resultCheck = async (prevNumber, currentString, smallDisplayText) => {
  const lastSymbol = smallDisplayText[smallDisplayText.length - 1]
  if (lastSymbol === "+") return coreAddition(prevNumber, currentString)
  if (lastSymbol === "-") return coreSubtraction(prevNumber, currentString)
  if (lastSymbol === "*") return coreMultiplication(prevNumber, currentString)
  if (lastSymbol === "/") return coreDivision(prevNumber, currentString)
  if (lastSymbol === "g") return await coreLogarytm(prevNumber, currentString)
}

export {
  resultCheck,
  removeDigitCheck,
  digitCheck,
  coreAddition,
  coreDivision,
  coreSubtraction,
  coreMultiplication,
  coreLogarytm,
  fractionCheck,
}
