function gerar() {
  var numero = document.querySelector('input#numero')
  var tabuda = document.querySelector('select#tabuada')
  if (numero.value.length == 0) {
    window.alert('Por favor digite um número')
  } else {
    var n = Number(numero.value)
    let c = 0
    tabuda.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} X ${c} = ${n*c}`
      item.value = `tabuada${c}`
      tabuda.appendChild(item)
      c++
    }
  }
  
  
}