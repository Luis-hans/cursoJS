
function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('ano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'menino.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'garoto.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'homem_adulto.png')
      } else {
        img.setAttribute('src', 'homem_idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'menina.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'garoto.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher_adulta.png')
      } else {
        img.setAttribute('src', 'mulher_idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}