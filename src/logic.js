const input = document.getElementById("displayBigText");
const smallInput = document.getElementById("displaySmallText");
let inputNumber = "";
let previousNumber = 0;
let firstTime = true;

const addDigitToDisplay = (digit) => {
  inputNumber = `${inputNumber}${digit}`;
  input.textContent = inputNumber;
};

const removeDigitFromDisplay = () => {
  inputNumber = inputNumber.substring(0, inputNumber.length - 1);
  input.textContent = inputNumber;
};

const mySuperPuperNewBeautifulFunction = (result, hui) => {
  previousNumber = result;
  smallInput.textContent = `${previousNumber} ${hui}`;
  input.textContent = "";
  inputNumber = "";
};

const slojenie = () => {
  let res = inputNumber
    ? parseFloat(inputNumber) + previousNumber
    : previousNumber;
  mySuperPuperNewBeautifulFunction(res, "+");
};

const delenie = () => {
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
  mySuperPuperNewBeautifulFunction(res, "/");
};

const umnojenie = () => {
  let res = "";
  if (firstTime) {
    res = inputNumber;
    firstTime = false;
  } else {
    res = inputNumber
      ? parseFloat(inputNumber) * previousNumber
      : previousNumber;
  }
  mySuperPuperNewBeautifulFunction(res, "*");
};

const otnimanie = () => {
  let res = inputNumber
    ? parseFloat(inputNumber) - previousNumber
    : previousNumber;
  mySuperPuperNewBeautifulFunction(res, "-");
};

const sbros = () => {
  firstTime = true;
  inputNumber = "";
  previousNumber = 0;
  smallInput.textContent = "";
  input.textContent = "";
};

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

const drobvroteyeebat = (dot, inN = inputNumber) => {
  let huinya = inN.split("");
  let jopa = huinya.some((govno) => govno === ".");
  if (jopa === false) {
    inN = `${inN}${dot}`;
    input.textContent = inN;
  }
  return inN;
};

const logo = async () => {
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
  mySuperPuperNewBeautifulFunction(res, "log");
};

export {
  result,
  umnojenie,
  addDigitToDisplay,
  removeDigitFromDisplay,
  slojenie,
  otnimanie,
  delenie,
  sbros,
  drobvroteyeebat,
  logo,
};
