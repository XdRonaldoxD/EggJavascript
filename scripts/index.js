const select=document.getElementById("mensaje");
select.innerHTML="CONEXION ENTRE HTML CSS Y JS";
// const nombre=prompt("Podrias indicarme tu nombre por favor?");
// console.log("Tu nombre "+ nombre);

// TIPO DATO---------
const numero=100;
console.log(numero)
console.log(typeof numero)
const cadena="Cadena Texto";
console.log(cadena)
console.log(typeof cadena)
console.log("La longitud de la variable cadena es: "+cadena.length)
const booleando=true;
console.log(booleando)
console.log(typeof booleando)

// -------------------

// CREAR UNA CALCULADORA
const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
const suma =numero1 +numero2;
const mensajeSuma = "El resultado de la suma es "+suma;
alert(mensajeSuma);

const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;
const promedioResult = "El promedio de la suma, con la multiplicación y la resta es de  "+resultadoMenosDiez;
alert(promedioResult);
//------------------------

//CADENA MAYUSCULA - MINUSCULA
const caden="HELLO WORLD";
const cadenaMin=caden.toLowerCase();
const cadenaMay=caden.toUpperCase();
console.log(cadenaMin);
console.log(cadenaMay);
//