var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelect('div#res')
var valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Numero(num.value))
  } else {
    window.alert('Valor inválido ou já encontrado na lista.')
  }
}
