let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

const increment = () => {
  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = 'green'
  }
  if (currentNumber < 10) {
    currentNumber++
    currentNumberWrapper.innerText = currentNumber
  }
}

const incrementButton = document.querySelectorAll('button')[1]
incrementButton.addEventListener('click', increment)

const decrement = () => {
  if (currentNumber <= 0) {
    currentNumberWrapper.style.color = 'red'
  }
  if (currentNumber > -10) {
    currentNumber--
    currentNumberWrapper.innerText = currentNumber
  }
}

const decrementButton = document.querySelectorAll('button')[0]
decrementButton.addEventListener('click', decrement)
