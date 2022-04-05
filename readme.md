# This is a Calculator
It is my practice program on Javascript.
For this project i used **[Newton-API](https://github.com/aunyks/newton-api)** to calculate logarithms.

Working on this project, i learnd:
## 1. What is a function and how can i us it, for example:
```
const number1 = 3
const number2 = 4
let result = ""

const myFunction = () => {
  result = number1 + number2
  return result
}

console.log(myFunction()) // 7
``` 

Function also can have and use parameters :
```
const myFunction = (num1,num2) = {
  result = num1 + num2
  return result 
}

console.log(myFunction(3,4)) // 7
```        

2. How to do async function for working with API:

  This function send HTTP query and return resuls of calculation from site
  In my project i used the **Newton-API**

```
const myFunction = async () => {
const httpResponsse = await fetch(`https://newton.now.sh/api/v2/log/${prevNumber}|${currentString}`)
const jsonObject = await httpResponsse.json()
return jsonObject.result
}
```  
  In async function you have to use **await** operator for waiting end of **Promise** object,
  also you have to use fetch() method

3. Make and use objects:
```
const newObject = {digit : 1 , color: "black"}
console.log(newObject.color) // black
console.log(newObject.digit) // 1
//it is an object with two parameters, you can call and use any of them.
```      

4. Make and use arrays:
```
const myArray = [1,2,3,4,5]
console.log(myArray[1]) //2
// calculation of array elements starts from 0, in this exsample 0 element is 1
```        

5. Work with array method:
```
const myFirstArray = [1,2,3,4,5]
const mySecondArray = ["red","yellow","blue","green","black"]

const myNewArray = myFirstArray.map((number, index) => {
  return {digit : number, color : mySecondArray[index]}
})
//method .map makes an array of objects with two parameters
//also you can use .forEach() if you want to do some with every element of new array
console.log(myNewArray[0]) // logs an object with two parameters {digit : 1, color : "red"}
```         
6. Work with "try...catch", this construction i used to make an error when user want to divide by 0.
```
// this construction trying to do something, and if it catchs an error it will show it 
try {
  divisionValue = coreCalculations.coreDivision(
  Number2,
  Number1
  )
  renderResult(divisionValue, "/")
} catch (error) {
  console.error(error)
  alert("You can't divide by 0!")
}
```        

7. Export and import required functions or methods from another file, it can be most conveniently then have logic function it same file with app.
```
const myFunction = () =>{}

export myFunction
//then you can import function to another file
import myFunction from "./yourFile.js"
```        
8. Use Git, push and pull versions, work on enother branch, make commits and work with tikets.
For push you code you need to use next comands:
```
git add . //add file
git commit -m "your text" // make a commit wich will be shown on GitHub
git push // pushes your files
git pull // pulls files from GitHub
git checkout // shows all branches you have
git checkout -b nameOfNewBranch // creates a new branch
//newer push your files to master brach! 
```      

9. What is prettier, live server and live share.

10. Writing tests and debugging my project:
```
//in my program i have function - "coreAddition", this function make an addition of numbers
  describe("Addition tests", () => {
  test("2+2 = 4", () => {
    expect(coreAddition("2", 2)).toBe(4)
  })
  test("the sum doesn't change the place of the components ", () => {
    expect(coreAddition("1", 5)).toBe(coreAddition(5, 1))
  })
  test("What will you do with zero? ", () => {
    expect(coreAddition("0", 2)).toBe(2)
  })
})
```
11. This documentation was written using **JSDoc** standart.
This standart is very comfortable. Using it you can make links into words, make bold type if you will put your word between  "** **" **yourWord**. Best of all, you can put your code between backticks `yourcode` and it will show in separate disign. 

