# This is a Calculator
It is my practice program on Javascript.
For this project I used **[Newton-API](https://github.com/aunyks/newton-api)** to calculate logarithms.

## How to run this project

To run this website you need to download **Live Server** extention in **VS Code**.

Then you can start the server by rightclicking **index.html** and choosing to run it with **Live Server**.

Then it will appear on **[localhost:5500](http://localhost:5500)**

Working on this project, I learned:
## 1. What is a function and how can I use it, for example:
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

The function also can have and use parameters :
```
const myFunction = (num1,num2) = {
  result = num1 + num2
  return result 
}

console.log(myFunction(3,4)) // 7
```        

## 2. How to do async function to work with API.

  This function sends an HTTP query and returns the result of the calculation from the site.

  In my project I used the **Newton-API**

```
const myFunction = async () => {
const httpResponsse = await fetch(`https://newton.now.sh/api/v2/log/${prevNumber}|${currentString}`)
const jsonObject = await httpResponsse.json()
return jsonObject.result
}
```  
  In the async function you have to use **await** operator to get the result of **Promise** object.
  
  To get data from API you can to use fetch(URL) method.

## 3. Make and use objects.
```
const newObject = {digit : 1 , color: "black"}
console.log(newObject.color) // black
console.log(newObject.digit) // 1
```      
It is an object with two parameters, you can call and use any of them.

## 4. Make and use arrays.
```
const myArray = [1,2,3,4,5]
console.log(myArray[1]) //2
```        
Calculation of array elements starts from 0, in this example 0 element is 1

## 5. Work with array method.
```
const myFirstArray = [1,2,3,4,5]
const mySecondArray = ["red","yellow","blue","green","black"]

const myNewArray = myFirstArray.map((number, index) => {
  return {digit : number, color : mySecondArray[index]}
})
console.log(myNewArray[0]) // logs an object with two parameters {digit : 1, color : "red"}
```         
Method `Array.prototype.map()` makes an array of objects with two parameters
Also, you can use `Array.prototype.forEach()` if you want to do something with every element of the array.

## 6. Work with "try...catch".
 If the code inside try block throws an error we execute the code in catch block instead of crashing the application.
 
 We also can log the error.
```
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

## 7. Export and import.
 We can use required functions or methods from another file by using `import` statement.

 It is useful to separate different parts of application in different files instead of having everything in one large file. 
```
const myFunction = () =>{}

export myFunction
import myFunction from "./yourFile.js"
```

## 8. Use Git.
Push and pull versions, work on another branch, make commits and work with tickets!🎈

To push your code you need to use the next commands:
```
git add . //add file
git commit -m "your text" // make a commit which will be shown on GitHub
git push // pushes your files
git pull // pulls files from GitHub
git checkout // shows all branches you have
git checkout -b nameOfNewBranch // creates a new branch
```      
Never push your files to the master branch or **YOUR PINES WILL WITHER**

## 9. Development tools.
For this project I used VS Code as IDE.
Using a **Live server** extention you can see your website document in real-time without instaling real server.

Using **Live Share** extention you can give file access to somebody and change or write code with other people in real-time (pair programming).

Using **Prettier** extention I don't care about formatting my code - it autoformats each time I save my files. 

## 10. Writing tests and debugging my project
It is an example test that I wrote for testing addition using **Jest**.

`describe()` - With this method you can create a block of tests, in my case it is an addition.

`test()` - A function that compares `expect()` and `toBe()`.

`expect()` - It is result of given function.

`toBe()` - expected value.

```
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
## 11. This documentation was written using **Markdown**.
This markdown language is very comfortable. Using it you can make links into words, make bold type if you will put your word between  "** **" -> **your word**. 

Best of all, you can put your code between backticks `your code` and it will show in a separate design.

## 12. Documentation inside code was written using **JSDoc** standard.
JSDoc is a library for documentation, below I will show an example
```
/**
*Here you can write what this function is doing
*@param {type} num1 - here you can describe variable
*@param {type} num2 - here you can describe variable
*return {type} - if your function returns something you can discribe it here 
*/
const myFunction = (num1,num2) => {}
```

