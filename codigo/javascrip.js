class Calculator {
    constructor(previusOperandTextElement, currentOperandTextElement) {
        this.previusOperandTextElement = previusOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previusOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString
    }

    chooseOperation(operation) {

    }

    cumpute() {

    }

    uptadeDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}



const numberButtons = document.querySelectorAll('data-number')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allClear]')
const previusOperandTextElement = document.querySelector('[data-previus-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previusOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.uptadeDisplay()
    })
})