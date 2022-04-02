/**
 * Adds one digit to input number.
 * @param {string} digit - The digit wich was clicked by user.
 * @returns {}
 */
const coreAddition = (a, b) => (a ? parseFloat(a) + b : b)
//ToDo:left hear
const coreSubtraction = (a, b) => (a ? b - parseFloat(a) : b)

const coreMultiplication = (a, b, status) => {
  let res = ""
  if (status) {
    res = parseFloat(a)
    status = false
  } else {
    res = parseFloat(a) * b
  }
  return [res, status]
}
const coreDivision = (a, b, status) => {
  let res = ""
  if (status) {
    res = parseFloat(a)
    status = false
  } else {
    if (a !== "0") {
      res = parseFloat(b) / a
    } else {
      const text = "You can't divide by 0!"
      return [text, status]
    }
  }
  return [res, status]
}
const coreLogarytm = async (a, b, status) => {
  let res
  if (status) {
    res = a
    status = false
  } else {
    if (a) {
      const httpResponsse = await fetch(
        `https://newton.now.sh/api/v2/log/${a}|${b}`
      )
      const jsonObject = await httpResponsse.json()
      res = jsonObject.result
    } else {
      res = b
    }
  }
  return [res, status]
}
const fractionCheck = a => {
  const dotCheck = a.includes(".")
  if (dotCheck === false) {
    a = `${a}.`
  }
  return a
}
const digitCheck = (a, digit) => `${a}${digit}`

const removeDigitCheck = a => a.substring(0, a.length - 1)

const resultCheck = (a, b, smallDisplayText, status) => {
  const lastSymbol = smallDisplayText[smallDisplayText.length - 1]
  let result
  if (lastSymbol !== undefined) {
    if (lastSymbol === "g") [result, status] = coreLogarytm(a, b, status)
    if (lastSymbol === "+") result = coreAddition(a, b)
    if (lastSymbol === "-") result = coreSubtraction(a, b)
    if (lastSymbol === "*") [result, status] = coreMultiplication(a, b, status)
    if (lastSymbol === "/") [result, status] = coreDivision(a, b, status)
  }
  return result
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
