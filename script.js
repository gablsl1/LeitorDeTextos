const textarea = document.getElementById('texto')
const falar = document.getElementById('botao-falar')
const pausar = document.getElementById('botao-pausar')
const despausar = document.getElementById('botao-despausar')
const synth = window.speechSynthesis

falar.addEventListener('click', () => {
  const texto = textarea.value
  const speaks = new SpeechSynthesisUtterance(texto)
  speaks.lang = 'pt-BR'
  
  window.speechSynthesis.speak(speaks)
})

pausar.addEventListener('click', () => {
  synth.pause()
})

despausar.addEventListener('click', () => {
  synth.resume()
})
