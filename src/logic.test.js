import coreCalculation from "./logicCore.js"

describe("Addition tests", () => {
  test("2+2 = 4????", () => {
    expect(coreAddition("2", 2)).toBe(4)
  })
  test("the sum doesn't change the place of the components ", () => {
    expect(coreAddition("1", 5)).toBe(coreAddition(5, 1))
  })
  test("What the fuck are you going to do with zero? ", () => {
    expect(coreAddition("0", 2)).toBe(2)
  })
})
describe("Subtraction tests", () => {
  test("2-2 = 0?", () => {
    expect(coreSubtraction("2", 2)).toBe(0)
  })
  test("what will be if i would ebashit s 0????/??/??/", () => {
    expect(coreSubtraction("2", 0)).toBe(2)
  })
  test("what will be if i would ebashit 0", () => {
    expect(coreSubtraction("1", 3)).toBe(-2)
  })
  test("what will be if i would ebashit 0", () => {
    expect(coreSubtraction("36", 2)).toBe(34)
  })
})
describe("Multiplication tests", () => {
  test("HOW DOES IT WORK MAZAFAKA???", () => {
    expect(coreMultiplication("2", 2, false)).toStrictEqual([4, false])
  })
  test("what will be if i would use 0", () => {
    expect(coreMultiplication("2", 0, true)).toStrictEqual([2, false])
  })
  test("what will be if i would use 0", () => {
    expect(coreMultiplication("2", 0, false)).toStrictEqual([0, false])
  })
  test("what will be if i would use 0", () => {
    expect(coreMultiplication("0", 2, true)).toStrictEqual([0, false])
  })
  test("what will be if i would use 0", () => {
    expect(coreMultiplication("0", 2, false)).toStrictEqual([0, false])
  })
})
describe("Division tests", () => {
  test("division", () => {
    expect(coreDivision("21", 3, true)).toStrictEqual([21, false])
  })
  test("division", () => {
    expect(coreDivision("3", 21, false)).toStrictEqual([7, false])
  })
  test("division", () => {
    expect(coreDivision("0", 21, false)).toStrictEqual([
      "You can't divide by 0!",
      false,
    ])
  })
  test("division", () => {
    expect(coreDivision("3", 0, false)).toStrictEqual([0, false])
  })
  test("division", () => {
    expect(coreDivision("0", 3, true)).toStrictEqual([0, false])
  })
  test("division", () => {
    expect(coreDivision("2", 2.5, false)).toStrictEqual([1.25, false])
  })
})
describe("fraction tests", () => {
  test("fraction", () => {
    expect(fractionCheck("2")).toBe("2.")
  })
})
describe("addAndRemoveInputCheck", () => {
  test("addDigit", () => {
    expect(digitCheck("2", "2")).toBe("22")
  })
  test("removeDigit", () => {
    expect(removeDigitCheck("223")).toBe("22")
  })
})
describe("resultchecking", () => {
  test("result+", () => {
    expect(resultCheck("2", 4, "2 +")).toBe(6)
  })
  test("result-", () => {
    expect(resultCheck("7", 2, "2 -")).toBe(5)
  })
  test("result*", () => {
    expect(resultCheck("8", 2, "2 *", true)).toBe(8)
  })
  test("result*", () => {
    expect(resultCheck("8", 2, "2 *", false)).toBe(16)
  })
  test("result/", () => {
    expect(resultCheck("21", 3, "2 /", true)).toBe(21)
  })
  test("result/", () => {
    expect(resultCheck("7", 21, "2 /", false)).toBe(3)
  })
  test("result/", () => {
    expect(resultCheck("21", 0, "2 /", false)).toBe(0)
  })
  test("result/", () => {
    expect(resultCheck("0", 21, "2 /", true)).toBe(0)
  })
  test("result-", () => {
    expect(resultCheck("36", 2, "2 -")).toBe(34)
  })
})
