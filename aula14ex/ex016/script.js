function contar() {
  let nInicio = document.querySelector('input#nComeco')
  let nFim = document.querySelector('input#nFim')
  let nPasso = document.querySelector('input#nPasso')
  let res = document.querySelector('div#res')

  if (nInicio.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO], Faltam dados!')
  } else {
    res.innerHTML = `Contando: <br>`
    var i = Number(nInicio.value)
    var f = Number(nFim.value)
    var p = Number(nPasso.value)
    if (p <= 0) {
      window.alert('Passo inválido! Considerando passo 1')
      p = 1
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
