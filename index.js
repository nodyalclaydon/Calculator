class Calculator {
    constructor(previousDisplay, currentDisplay) {
        this.previousDisplay = previousDisplay
        this.currentDisplay = currentDisplay
        this.clear()
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.currentOperand !== "") {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+":
                computation = prev + current
                break
            case "-":
                computation = prev - current
                break
            case "×":
                computation = prev * current
                break
            case "÷":
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1]
        const floatNumber = parseFloat(number)
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ""
        } else {
            integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentDisplay.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousDisplay.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousDisplay.innerText = ""
        }
    }

    squareRoot() {
        const current = parseFloat(this.currentOperand)
        this.currentOperand = Math.sqrt(current)
        this.operation = undefined
        this.previousOperand = ""
    }

    plusMinus() {
        const current = parseFloat(this.currentOperand)
        this.currentOperand = 0 - current
    }

    percent() {
        const current = parseFloat(this.currentOperand)
        this.currentOperand = current / 100
    }

    handleMrc(mrc) {
        let compute = ""
        const current = this.currentOperand

        if (mrc === "MRC" && mrcNumber === "") {
            mrcNumber = current
            this.currentOperand = ""
        } else if (mrc === "M-") {
            compute = current - mrcNumber
        } else if (mrc === "M+") {
            compute = parseFloat(current) + parseFloat(mrcNumber)
        } else if (mrc === "MRC" && mrcNumber != "") {
            mrcNumber = ""
        }
        this.currentOperand = compute
    }
}

let mrcNumber = ""
const numberBtns = document.querySelectorAll('[data-number]')
const operationBtns = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-clear]')
const sqrtBtn = document.querySelector('[data-squareroot]')
const plusMinusBtn = document.querySelector('[data-plusminus]')
const percentBtn = document.querySelector('[data-percent]')
const mrcBtns = document.querySelectorAll('[data-mrc]')
const currentDisplay = document.querySelector('[data-currentDisplay]')
const previousDisplay = document.querySelector('[data-previousDisplay]')

const calculator = new Calculator(previousDisplay, currentDisplay)

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearBtn.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

sqrtBtn.addEventListener("click", button => {
    calculator.squareRoot()
    calculator.updateDisplay()
})

plusMinusBtn.addEventListener("click", button => {
    calculator.plusMinus()
    calculator.updateDisplay()
})

percentBtn.addEventListener("click", button => {
    calculator.percent()
    calculator.updateDisplay()
})

mrcBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.handleMrc(button.innerText)
        calculator.updateDisplay()
    })
})