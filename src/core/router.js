import { renderAbout } from '../pages/about'
// import { renderSkills } from '../pages/skills'
import { renderProjects } from '../pages/projects'
// import { renderContact } from '../pages/contact'

const routes = {
  about: renderAbout,
//   skills: renderSkills,
  projects: renderProjects,
//   contact: renderContact,
}

export function renderRoute(root) {
  const route = location.hash.replace('#/', '')
  const page = routes[route]

  if (page) {
    root.innerHTML = ''
    page(root)
  }
}
