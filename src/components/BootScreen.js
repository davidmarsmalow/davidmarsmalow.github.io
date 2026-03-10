import { setState, STATES } from '../core/state'
import { playSfx } from '../utils/audio'

export function renderBoot(root) {
  root.innerHTML = `
    <div class="boot">
      <div class="boot-lines">
        <p id="line1"></p>
        <p id="line2"></p>
        <p id="line3"></p>
        <p id="line4" class="success"></p>
      </div>

      <button id="boot-btn" class="boot-button">
        PRESS
        <svg class="keycap keycap-enter">
          <use href="#key-enter"></use>
        </svg>
      </button>
    </div>
  `

  const start = () => {
    playSfx('select')

    setState(STATES.MENU)
    location.hash = '#/menu'
    document.removeEventListener('keydown', handleKey)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      start()
    }
  }

  function typeLine(element, text, speed = 30) {
    return new Promise(resolve => {
      let i = 0
      element.textContent = ''

      function typing() {
        if (i < text.length) {
          element.textContent += text[i]
          i++
          setTimeout(typing, speed)
        } else {
          resolve()
        }
      }

      typing()
    })
  }

  async function runBoot() {
    location.hash = ''

    await typeLine(document.getElementById('line1'), 'Initializing system...')
    await typeLine(document.getElementById('line2'), 'Loading profile data...')
    await typeLine(document.getElementById('line3'), 'Preparing experience...')
    await typeLine(document.getElementById('line4'), 'System Ready.')

    document.getElementById('boot-btn').classList.add('show')
  }

  runBoot()

  document.addEventListener('keydown', handleKey)
  document.getElementById('boot-btn').addEventListener('click', start)
}