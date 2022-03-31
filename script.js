const input = document.getElementById("displayBigText")
const smallInput = document.getElementById("displaySmallText")
let inputNumber = ""
let previousNumber = 0
let firstTime = true 

const addDigitToDisplay = (digit) => {
    inputNumber = `${inputNumber}${digit}`
    input.textContent = inputNumber
}

const removeDigitFromDisplay = () => {
    inputNumber = inputNumber.substring(0,inputNumber.length - 1)
    input.textContent = inputNumber
}

const mySuperPuperNewBeautifulFunction = (result,hui) => {
    previousNumber = result
    smallInput.textContent = `${previousNumber} ${hui}`
    input.textContent = ""
    inputNumber = ""
}

const slojenie = () => {
    let res = inputNumber? parseFloat(inputNumber) + previousNumber: previousNumber
    mySuperPuperNewBeautifulFunction(res, "+");
}

const delenie = () => {
    let res = ""
    if(firstTime){
        res = inputNumber
        firstTime = false
    }
    else{
        if (parseFloat(inputNumber) !== 0){
            res = inputNumber?  previousNumber / parseFloat(inputNumber): previousNumber
        }   
        else{
            alert("You can't divide by 0!")
            return;
        } 
    }
    mySuperPuperNewBeautifulFunction(res, "/");
}

const umnojenie = () => {
    let res = ""
    if(firstTime){
        res = inputNumber
        firstTime = false
    }
    else{
        res = inputNumber? parseFloat(inputNumber) * previousNumber: previousNumber
    }
    mySuperPuperNewBeautifulFunction(res, "*");
}

const otnimanie = () => {
    let res = inputNumber? parseFloat(inputNumber) - previousNumber: previousNumber
    mySuperPuperNewBeautifulFunction(res, "-");
}

const sbros = () => {
    firstTime = true
    inputNumber = ""
    previousNumber = 0
    smallInput.textContent = ""
    input.textContent = ""
}

const result = () => {
    const lastznachok = smallInput.textContent[smallInput.textContent.length - 1];
    let result;
    if(lastznachok !== undefined){
        if (lastznachok === "+"){
            result = inputNumber? parseFloat(inputNumber) + previousNumber: previousNumber
        }
        if(lastznachok ==="-"){
            result = inputNumber? parseFloat(inputNumber) - previousNumber: previousNumber
        }
        if(lastznachok ==="*"){
            result = inputNumber? parseFloat(inputNumber) * previousNumber: previousNumber
        }
        if(lastznachok ==="/"){
            if (parseFloat(inputNumber) !== 0){
                result = inputNumber?  previousNumber / parseFloat(inputNumber): previousNumber
            }   
            else{
                alert("You can't divide by 0!")
                return;
            } 
        }
        smallInput.textContent = ""
        input.textContent = result
        inputNumber = result
        previousNumber = 0
        firstTime = true
    }
    console.log(result)
}

const drobvroteyeebat = (dot) => {
    let huinya =  inputNumber.split("")
    let jopa = huinya.some((govno) => govno === ".")
    if(jopa === false){
        inputNumber = `${inputNumber}${dot}`
        input.textContent = inputNumber 
    }
}

const logo = () => {

}
//HUESOS RAZRAB
const myButtons = [...document.getElementsByClassName("item")]

const myFunctions = [
    sbros,
    logo,
    removeDigitFromDisplay,
    delenie,
    () => addDigitToDisplay(1),
    () => addDigitToDisplay(2),
    () => addDigitToDisplay(3),
    umnojenie,
    () => addDigitToDisplay(4),
    () => addDigitToDisplay(5),
    () => addDigitToDisplay(6),
    slojenie,
    () => addDigitToDisplay(7),
    () => addDigitToDisplay(8),
    () => addDigitToDisplay(9),
    otnimanie,
    () => drobvroteyeebat("."),
    () => addDigitToDisplay(0),
    result,
]

const myNewFunction = myButtons.map((button, index) =>{
return {buton: button, handler: myFunctions[index]}
})

myNewFunction.forEach(({buton, handler}) => {
    buton.addEventListener("click", handler)
})