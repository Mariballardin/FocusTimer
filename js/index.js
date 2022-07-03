// EcmaScript 2015 - ES6 Modules
// default import
import Controls from "./controls.js"
import Timer from "./timer.js"

import Sound from "./sounds.js"
import Events from "./events.js"

import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  secondsDisplay,
  minutesDisplay
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

// recursividade é quando uma função chama ela mesma

Events({controls, timer, sound})

 