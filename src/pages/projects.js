import { INPUT, onInput, clearInputs } from "../core/input"
import { PROJECTS } from "../data/projects"

let selectedIndex = 0
const columns = 3

export function renderProjects(root) {

  clearInputs()

  root.innerHTML = `
    <div class="projects-screen">
      <h1>SELECT PROJECT</h1>

      <div class="projects-wrapper">
        <div class="projects-grid">
          ${PROJECTS.map((project, i) => `
            <div class="project-card ${i === selectedIndex ? "active" : ""}" data-index="${i}">
              <div class="project-preview">
                <div class="project-status status-${project.status.toLowerCase().replace(" ", "-")}">
                  ${project.status}
                </div>
                <div class="project-icon">${project.icon || '🖥'}</div>
              </div>
              <div class="project-info">
                <div class="project-name">${project.name}</div>
                <div class="project-tags">
                  ${project.stack.map(tech => `<span class="tag">${tech}</span>`).join("")}
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="scroll-indicator">
          <div class="scroll-thumb"></div>
        </div>
      </div>

    </div>
    <div class="navigation">
      <div class="nav-group">
        Navigation
        <svg class="keycap keycap-arrow"><use href="#key-up"></use></svg>
        <svg class="keycap keycap-arrow"><use href="#key-down"></use></svg>
        <svg class="keycap keycap-arrow"><use href="#key-left"></use></svg>
        <svg class="keycap keycap-arrow"><use href="#key-right"></use></svg>
      </div>

      <div class="nav-group">
        Select
        <svg class="keycap keycap-enter"><use href="#key-enter"></use></svg>
      </div>

      <div class="nav-group">
        Back
        <svg class="keycap keycap-esc"><use href="#key-esc"></use></svg>
      </div>
    </div>
  `

  const grid = root.querySelector(".projects-grid")
  const thumb = root.querySelector(".scroll-thumb")
  const track = thumb.parentElement

  function updateScrollbar() {
    const isScrollable = grid.scrollHeight > grid.clientHeight;
    track.style.display = isScrollable ? "block" : "none";
    
    if (!isScrollable) return;

    const visibleRatio =
      grid.clientHeight / grid.scrollHeight

    const thumbHeight =
      track.clientHeight * visibleRatio

    thumb.style.height = thumbHeight + "px"

    const scrollRatio =
      grid.scrollTop /
      (grid.scrollHeight - grid.clientHeight)

    const trackHeight =
      track.clientHeight - thumbHeight

    thumb.style.top = scrollRatio * trackHeight + "px"
  }

  grid.addEventListener("scroll", updateScrollbar)

  updateScrollbar()

  attachControls(root)
}

function attachControls(root) {

  onInput(INPUT.RIGHT, () => {
    if (selectedIndex + 1 < PROJECTS.length) {
      selectedIndex++
    }

    updateSelection(root)
  })

  onInput(INPUT.LEFT, () => {
    if (selectedIndex > 0) {
      selectedIndex--
    }

    updateSelection(root)
  })

  onInput(INPUT.DOWN, () => {
    if (selectedIndex + columns < PROJECTS.length) {
      selectedIndex += columns
    } else {
      selectedIndex = PROJECTS.length - 1
    }

    updateSelection(root)
  })

  onInput(INPUT.UP, () => {
    if (selectedIndex - columns >= 0) {
      selectedIndex -= columns
    }

    updateSelection(root)
  })

  onInput(INPUT.CONFIRM, openProject)

  onInput(INPUT.BACK, () => {
    location.hash = "#/menu"
  })
}

function updateSelection(root) {
  const cards = root.querySelectorAll(".project-card")

  cards.forEach(card => card.classList.remove("active"))

  const activeCard = cards[selectedIndex]
  activeCard.classList.add("active")

  activeCard.scrollIntoView({
    block: "nearest",
    behavior: "smooth"
  })
}

function openProject() {
  const project = PROJECTS[selectedIndex]
  location.hash = "#/projects/" + project.id
}