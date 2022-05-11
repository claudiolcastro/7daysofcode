(function register(params) {
  const name = prompt('Qual é o seu nome?')
  const age = prompt('Qual é a sua idade?')
  const language = prompt('Qual linguagem de programação você está estudando?')

  return `Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`
})()