import { renderAbout } from '../pages/about'
import { renderProjects } from '../pages/projects'
import { renderProjectDetail } from "../pages/projectDetail"

const routes = {
  about: renderAbout,
  projects: renderProjects,
}

export function renderRoute(root) {
  const hash = location.hash.replace('#/', '')
  const segments = hash.split('/')

  const mainRoute = segments[0]
  const param = segments[1]

  if (mainRoute === 'projects' && param) {
    root.innerHTML = ''
    renderProjectDetail(root, param)
    return
  }

  const page = routes[mainRoute]

  if (page) {
    root.innerHTML = ''
    page(root)
  }
}
