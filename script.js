function calcular() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var total = n1 + n2;
    document.getElementById('resultado').innerHTML = `O Resultado da soma é: ${total} `;
  }