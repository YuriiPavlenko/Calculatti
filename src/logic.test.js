import coreCalculation from "./logicCore.js"

const coreCalculations = coreCalculation()

describe("Addition tests", () => {
  test("2+2 = 4????", () => {
    expect(coreCalculations.coreAddition(2, "2")).toBe(4)
  })
  test("the sum doesn't change the place of the components ", () => {
    expect(coreCalculations.coreAddition(1, "5")).toBe(
      coreCalculations.coreAddition(5, "1")
    )
  })
  test("What the fuck are you going to do with zero? ", () => {
    expect(coreCalculations.coreAddition(0, "2")).toBe(2)
  })
})
describe("Subtraction tests", () => {
  test("2-2 = 0?", () => {
    expect(coreCalculations.coreSubtraction(2, "2")).toBe(0)
  })
  test("what will be if i would ebashit s 0????/??/??/", () => {
    expect(coreCalculations.coreSubtraction(2, "0")).toBe(2)
  })
  test("what will be if i would ebashit 0", () => {
    expect(coreCalculations.coreSubtraction(1, "3")).toBe(-2)
  })
  test("what will be if i would ebashit 0", () => {
    expect(coreCalculations.coreSubtraction(36, "2")).toBe(34)
  })
})
describe("Multiplication tests", () => {
  test("HOW DOES IT WORK MAZAFAKA???", () => {
    expect(coreCalculations.coreMultiplication(2, "2")).toBe(4)
  })
  test("what will be if i would use 0", () => {
    expect(coreCalculations.coreMultiplication(2, "0")).toBe(0)
  })
  test("what will be if i would use 0", () => {
    expect(coreCalculations.coreMultiplication(0, "2")).toBe(0)
  })
})
describe("Division tests", () => {
  test("division", () => {
    expect(coreCalculations.coreDivision(21, "3")).toBe(7)
  })
  test("close to", () => {
    expect(coreCalculations.coreDivision(3, "21")).toBeCloseTo(0.14)
  })
  test("division", () => {
    expect(coreCalculations.coreDivision(0, "21")).toBe(0)
  })
  test("division", () => {
    expect(coreCalculations.coreDivision(0, "3")).toBe(0)
  })
  test("division", () => {
    expect(coreCalculations.coreDivision(2, "2.5")).toBe(0.8)
  })
})
describe("fraction tests", () => {
  test("fraction", () => {
    expect(coreCalculations.addFractionSymbol("2")).toBe("2.")
  })
})
describe("addAndRemoveInputCheck", () => {
  test("addDigit", () => {
    expect(coreCalculations.addDigit("2", "2")).toBe("22")
  })
  test("removeDigit", () => {
    expect(coreCalculations.removeDigit("223")).toBe("22")
  })
})
