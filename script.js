function verificarPalindromo() {
    var palabra = document.getElementById("palabraInput").value.toLowerCase();
    var resultado = document.getElementById("resultado");
  
    if (palabra === "") {
      resultado.textContent = "Ingrese una palabra";
      return;
    }
  
    var reversa = palabra.split("").reverse().join("");
  
    if (palabra === reversa) {
      resultado.textContent = "¡Es un palíndromo!";
    } else {
      resultado.textContent = "No es un palíndromo";
    }
  }
  
  function calcularEdad(){
    const nombre = document.getElementById('nombre')
    const fechaNac = document.getElementById('fechaNac')
    const resultado1 = document.getElementById('resultado1')

    const name = nombre.value
    const cumple = new Date(fechaNac.value)
    const hoy = new Date();
    const edad = hoy.getFullYear() - cumple.getFullYear()
  
    resultado1.textContent = name + ' tienes ' + edad + ' años ' 
  }

  function reemplazarVocal() {
    resultado2 = document.getElementById('resultado2')
    const nombreInput = document.getElementById('nombre1')
    const caracterInput = document.getElementById('caracter')

    const nombreCompleto = nombreInput.value
    const char = caracterInput.value
    const nuevoNombre = nombreCompleto.replace(/[aáeéiíoóuú]/gi, char)

    resultado2.textContent = nuevoNombre;

  }

  function esPrimo(numero){
    contador = 0
    for(let i=1; i<=100; i++){
      if(numero%i==0){
        contador++
      }
    }
    return contador<=2
  }
  
  function MostrarPrimos(){
    const divPrimos = document.getElementById('primos')
    divPrimos.textContent = ''
    for(let i = 1; i<=100; i++){
      if(esPrimo(i)){
        const circle = document.createElement('div')
        circle.classList.add('circle')
        circle.textContent = i;
        divPrimos.appendChild(circle)
      }
      else{
        const circle = document.createElement('div')
        circle.textContent = i;
        divPrimos.appendChild(circle)
      }
    }
  }
console.log(esPrimo(4))

