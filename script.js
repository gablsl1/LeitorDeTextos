const textarea = document.getElementById('texto')
const button = document.getElementById('botao')

button.addEventListener('click', () => {
  const texto = textarea.value
  const speaks = new SpeechSynthesisUtterance(texto)
  speaks.lang = 'pt-BR'
  
  window.speechSynthesis.speak(speaks)
})