const input = document.getElementById("displayBigText");
const smallInput = document.getElementById("displaySmallText");
let inputNumber = "";
let previousNumber = 0;
let firstTime = true;

/**
 * Adds one digit to input number.
 * @param {string} digit - The digit wich was clicked by user.
 */
const addDigitToDisplay = (digit) => {
  inputNumber = `${inputNumber}${digit}`;
  input.textContent = inputNumber;
};
/**
 * Removes one digit to input number when user clicks button "DEL".
 */

const removeDigitFromDisplay = () => {
  inputNumber = inputNumber.substring(0, inputNumber.length - 1);
  input.textContent = inputNumber;
};
/**
 * Showes results of calculation prosesses on display.
 */
const displayArithmeticCalculation = (result, symbol) => {
  previousNumber = result;
  smallInput.textContent = `${previousNumber} ${symbol}`;
  input.textContent = "";
  inputNumber = "";
};
/**
 * Calculating addition when user clicked button "+"
 */
const addition = () => {
  let res = inputNumber
    ? parseFloat(inputNumber) + previousNumber
    : previousNumber;
  displayArithmeticCalculation(res, "+");
};
/**
 * Calculating division when user clicked button "/"
 */
const division = () => {
  let res = "";
  if (firstTime) {
    res = inputNumber;
    firstTime = false;
  } else {
    if (parseFloat(inputNumber) !== 0) {
      res = inputNumber
        ? previousNumber / parseFloat(inputNumber)
        : previousNumber;
    } else {
      alert("You can't divide by 0!");
      return;
    }
  }
  displayArithmeticCalculation(res, "/");
};
/**
 * Calculating multiplication when user clicked button "*"
 */
const multiplication = () => {
  let res = "";
  if (firstTime) {
    res = inputNumber;
    firstTime = false;
  } else {
    res = inputNumber
      ? parseFloat(inputNumber) * previousNumber
      : previousNumber;
  }
  displayArithmeticCalculation(res, "*");
};
/**
 * Calculating subtraction when user clicked button "-"
 */
const subtraction = () => {
  let res = inputNumber
    ? parseFloat(inputNumber) - previousNumber
    : previousNumber;
  displayArithmeticCalculation(res, "-");
};
/**
 * Cleans all user's input,history of calculatoin and display when user clicks "AC"
 */
const cleansing = () => {
  firstTime = true;
  inputNumber = "";
  previousNumber = 0;
  smallInput.textContent = "";
  input.textContent = "";
};
/**
 * Showes result of calculation when user clicked button "="
 */
const result = async () => {
  const lastznachok = smallInput.textContent[smallInput.textContent.length - 1];
  let result;
  if (lastznachok !== undefined) {
    if (lastznachok === "g") {
      if (inputNumber) {
        const httpResponsse = await fetch(
          `https://newton.now.sh/api/v2/log/${previousNumber}|${inputNumber}`
        );
        const jsonObject = await httpResponsse.json();
        result = jsonObject.result;
      } else {
        result = previousNumber;
      }
    }
    if (lastznachok === "+") {
      result = inputNumber
        ? parseFloat(inputNumber) + previousNumber
        : previousNumber;
    }
    if (lastznachok === "-") {
      result = inputNumber
        ? parseFloat(inputNumber) - previousNumber
        : previousNumber;
    }
    if (lastznachok === "*") {
      result = inputNumber
        ? parseFloat(inputNumber) * previousNumber
        : previousNumber;
    }
    if (lastznachok === "/") {
      if (parseFloat(inputNumber) !== 0) {
        result = inputNumber
          ? previousNumber / parseFloat(inputNumber)
          : previousNumber;
      } else {
        alert("You can't divide by 0!");
        return;
      }
    }
    smallInput.textContent = "";
    input.textContent = result;
    inputNumber = result;
    previousNumber = 0;
    firstTime = true;
  }
  console.log(result);
};
/**
 * Can make fraction when user clicked button "."
 * @param {string} dot - Addes "." to users display.
 */
const drobvroteyeebat = (dot) => {
  let huinya = inputNumber.split("");
  let jopa = huinya.some((govno) => govno === ".");
  if (jopa === false) {
    inputNumber = `${inputNumber}${dot}`;
    input.textContent = inputNumber;
  }
};
/**
 * Calculating logarithm when user clicked button "Log"
 */
const logarythm = async () => {
  let res;
  if (firstTime) {
    res = inputNumber;
    firstTime = false;
  } else {
    if (inputNumber) {
      const httpResponsse = await fetch(
        `https://newton.now.sh/api/v2/log/${previousNumber}|${inputNumber}`
      );
      const jsonObject = await httpResponsse.json();
      res = jsonObject.result;
    } else {
      res = previousNumber;
    }
  }
  displayArithmeticCalculation(res, "log");
};

export {
  result,
  multiplication,
  addDigitToDisplay,
  removeDigitFromDisplay,
  addition,
  subtraction,
  division,
  cleansing,
  drobvroteyeebat,
  logarythm,
};
