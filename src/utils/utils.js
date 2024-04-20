// funcion quitar
export function rutnum(cadena) {
  // Eliminar el último carácter si es numérico
  if (/[0-9]$/.test(cadena)) {
    cadena = cadena.slice(0, -1);
  }

  // Quitar todos los caracteres no numéricos
  return cadena.replace(/\D/g, '');
}

// Ejemplo de uso:
//let test_1 = "19688212-k";
//let test_2 = "19688212-0";
//let test_func = rutnum(test_1); // usar test 1 o 2

//console.log(test_func);  // Salida: 19688212

// funcion obtener digito verificador
function rut_dv(cadena) {
  if (cadena.length === 0) {
    return null; // Retorna null si la cadena está vacía
  }

  return cadena[cadena.length - 1];
}

/////

// Función para obtener el último dígito de un string o verificar si es 'K'
function getLastDigit(number) {
  // Convierte el número a string para extraer fácilmente el último caracter
  let strNumber = number.toString();
  // Obtiene el último caracter, que es el dígito verificador
  let lastDigit = strNumber.charAt(strNumber.length - 1);
  // Convierte el caracter a entero si es un número, de lo contrario, mantiene 'K'
  lastDigit = isNaN(parseInt(lastDigit)) ? lastDigit.toUpperCase() : parseInt(lastDigit);

  return lastDigit;
}

// Función para validar un RUT con su dígito verificador
function validarRut(numero, dv) {
  // Verifica que el número no sea NaN y que tenga la longitud adecuada
  if (isNaN(numero) || numero.length === 0 || numero.length > 8) {
    return false;
  } else {
    // Compara el DV calculado con el DV proporcionado
    if (getDV(numero) == dv) {
      return true;
    }
  }
  return false;
}

// Función para calcular el dígito verificador de un RUT
function getDV(numero) {
  // Invierte el número y lo prepara para el cálculo del DV
  let nuevo_numero = numero.toString().split("").reverse().join("");
  let suma = 0;
  // Calcula la suma ponderada de los dígitos
  for (let i = 0, j = 2; i < nuevo_numero.length; i++, (j == 7 ? j = 2 : j++)) {
    suma += (parseInt(nuevo_numero.charAt(i)) * j);
  }
  // Calcula el dígito verificador
  let n_dv = 11 - (suma % 11);
  return (n_dv == 11) ? 0 : (n_dv == 10 ? 'K' : n_dv);
}


// RUT de ejemplo
//let rut = '19.949.268-3';

// Separa el número del RUT y el dígito verificador
//let [cleanRut, dv] = rut.split('-');

// Elimina caracteres no numéricos del RUT
//cleanRut = cleanRut.replace(/[^\d]/g, '');

// Obtiene el último dígito (o 'K') del DV
//let lastDigit = getLastDigit(dv);

//console.log("RUT:", cleanRut); // Muestra el RUT limpio
//console.log("DV:", lastDigit); // Muestra el dígito verificador

// Valida el RUT
//let rutValido = validarRut(cleanRut, lastDigit); // Retorna bool
//console.log("RUT_VALIDO: ", rutValido); // Muestra si el RUT es válido o no

