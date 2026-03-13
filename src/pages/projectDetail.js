import { INPUT, onInput, clearInputs } from "../core/input"
import { PROJECTS } from '../data/projects'

export function renderProjectDetail(root, id) {

  clearInputs()

  const project = PROJECTS.find(p => p.id === id)

  root.innerHTML = `
    <div class="project-detail">

      <div class="project-header">
        <h1>${project.name}</h1>
        <p class="tagline">${project.tagline}</p>
      </div>

      <div class="project-info">
        <div>
          <h3>PROJECT INFO</h3>
          <p><span>PERIOD</span> : ${project.period}</p>
          <p><span>STATUS</span> : ${project.status}</p>
        </div>
        <div class="project-tags">
          ${project.stack.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        
      </div>

      <div class="project-overview">
        <h3>OVERVIEW</h3>
        <p>${project.overview}</p>
      </div>

      <div class="project-features">
        <h3>KEY CONTRIBUTIONS</h3>
        <ul>
          ${project.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="navigation">
      <div class="nav-group">
        Back
        <svg class="keycap keycap-esc"><use href="#key-esc"></use></svg>
      </div>
    </div>
  `;

  onInput(INPUT.BACK, () => {
    location.hash = "#/projects"
  })
}