export async function loadIcons() {
  const res = await fetch('/src/assets/icons/keycaps.svg')
  const svg = await res.text()

  document
    .getElementById('svg-sprite')
    .innerHTML = svg
}