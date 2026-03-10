export async function loadIcons() {
  const res = await fetch('/icons/keycaps.svg')
  const svg = await res.text()

  document
    .getElementById('svg-sprite')
    .innerHTML = svg
}