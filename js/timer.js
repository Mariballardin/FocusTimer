import Sounds from "./sounds.js"


export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  sound
  
}) { 

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

function updateDisplay(newMinutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
 
}


function reset () {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown(){   // Aqui eu adiciono a função que eu quero que seja executada e o período de tempo que eu quero que anteceda a execução da função.
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes,0)

    if(isFinished){
     resetControls() 
     updateDisplay()
     Sounds().timeEnd()
      return
    }

    if(seconds <= 0) {
      seconds = 60
      --minutes  
    }

    updateDisplay(minutes, String(seconds - 1))
   
  countdown()
  }, 1000)
 }


 function updateMinutes(newMinutes){
  minutes = newMinutes
 }


 function hold(){
  clearTimeout(timerTimeOut)

 }
    return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}
// função factory = uma função que retorna um objeto

/* que é a mesma coisa do que fazer: 
let output = {
  countdown: countdown
}

return output
*/

