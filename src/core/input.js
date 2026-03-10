import { playSfx } from '../utils/audio'

const listeners = {}

export const INPUT = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  CONFIRM: 'confirm',
  BACK: 'back'
}

export function onInput(action, callback) {
  listeners[action] = callback
}

export function clearInputs() {
  Object.keys(listeners).forEach(key => delete listeners[key])
}

function mapKey(key) {
  switch (key) {
    case "ArrowUp":
    case "w":
      return INPUT.UP

    case "ArrowDown":
    case "s":
      return INPUT.DOWN

    case "ArrowLeft":
    case "a":
      return INPUT.LEFT

    case "ArrowRight":
    case "d":
      return INPUT.RIGHT

    case "Enter":
      return INPUT.CONFIRM

    case "Escape":
      return INPUT.BACK
  }
}

document.addEventListener("keydown", (e) => {
  const action = mapKey(e.key)

  if (!action) return

  const handler = listeners[action]

  if (handler) {
    if (
      action === INPUT.UP ||
      action === INPUT.DOWN ||
      action === INPUT.LEFT ||
      action === INPUT.RIGHT
    ) {
      playSfx('move')
    }

    if (action === INPUT.CONFIRM) {
      playSfx('select')
    }
    
    handler(e)
  }
})