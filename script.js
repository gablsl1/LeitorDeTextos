const textarea = document.getElementById('texto')
const falar = document.getElementById('botao-falar')
const pausar = document.getElementById('botao-pausar')
const cancelar = document.getElementById('botao-cancelar')

falar.addEventListener('click', () => {
  const texto = textarea.value
  const speaks = new SpeechSynthesisUtterance(texto)
  speaks.lang = 'pt-BR'
  
  window.speechSynthesis.speak(speaks)
})

pausar.addEventListener('click', () => {
  const synth = window.speechSynthesis
  synth.pause()
})
