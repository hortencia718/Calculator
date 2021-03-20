class Calculator {
   constructor(previousOperandTextElement, currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement= currentOperandTextElement
      this.clear()
   }
// this will clear once every operation is completed
   clear(){
this.currentOperand = ""
this.previousOperand= ""
this.operation = undefined

   }
   delete(){

   }
   appendNumber(number){

   }
// takes in the the operation the user selects
   chooseOperation(operation){

   }


   compute(){

   }

   updateDisplay(){

   }

}





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousButtonTextElement = document.querySelector('[data-previous-operand]')
const currentButtonTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement,
currentOperandTextElement)

numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
   })
})



// let expression = '';

// // press get num plus that expression by its id give me the valu wh
// // which gets me that expression 
// function press(num){
// expression += num;
// document.getElementById("entry").value = expression;
// }

// function equal(){
//    document.getElementById("entry").value = eval(expression); 
//    expression = '';
// }

// function erase(){
//     expression = '';
//     document.getElementById("entry").value = expression;

//     }

