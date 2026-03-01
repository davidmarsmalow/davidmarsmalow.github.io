const sounds = {
  move: new Audio('/sounds/move.mp3'),
  select: new Audio('/sounds/select.mp3'),
}

Object.values(sounds).forEach(sound => {
  sound.volume = 0.4
})

export function playSfx(name) {
  if (!sounds[name]) return
  sounds[name].currentTime = 0
  sounds[name].play()
}