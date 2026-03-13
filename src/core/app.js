import { renderBoot } from '../components/Bootscreen'
import { renderMenu } from '../components/Menu'
import { renderRoute } from './router'

export function initApp() {
  const root = document.getElementById('app')

  renderBoot(root)

  window.addEventListener('hashchange', () => {
    const route = location.hash.replace('#/', '')

    if (route === 'menu') {
      renderMenu(root)
    } else {
      renderRoute(root)
    }
  })
}
