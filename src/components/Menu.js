import { INPUT, onInput, clearInputs } from '../core/input'
import { setState, STATES } from '../core/state'

const menuItems = ['about', 'skills', 'projects', 'contact']

let selectedIndex = 0

export function renderMenu(root) {
  setState(STATES.MENU)
  draw(root)

  onInput(INPUT.DOWN, () => {
    selectedIndex = (selectedIndex + 1) % menuItems.length
    draw(root)
  })

  onInput(INPUT.UP, () => {
    selectedIndex =
      (selectedIndex - 1 + menuItems.length) % menuItems.length
    draw(root)
  })

  onInput(INPUT.CONFIRM, () => {
    location.hash = `#/${menuItems[selectedIndex]}`
  })
}

function draw(root) {
  root.innerHTML = `
    <div class="menu">
      ${menuItems
        .map((item, index) => {
          const pointer = index === selectedIndex ? '>' : '&nbsp;'
          return `<p>${pointer} ${item.toUpperCase()}</p>`
        })
        .join('')}
    </div>
    <div class="navigation">
      <div class="nav-group">
        Navigation
        <svg class="keycap keycap-arrow"><use href="#key-up"></use></svg>
        <svg class="keycap keycap-arrow"><use href="#key-down"></use></svg>
      </div>

      <div class="nav-group">
        Select
        <svg class="keycap keycap-enter"><use href="#key-enter"></use></svg>
      </div>
    </div>
  `
}
