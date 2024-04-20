// funcion quitar
export function rutnum(cadena) {
  // Eliminar el último carácter si es numérico
  if (/[0-9]$/.test(cadena)) {
    cadena = cadena.slice(0, -1);
  }

  // Quitar todos los caracteres no numéricos
  return cadena.replace(/\D/g, "");
}

// funcion obtener digito verificador
function rut_dv(cadena) {
  if (cadena.length === 0) {
    return null; // Retorna null si la cadena está vacía
  }

  return cadena[cadena.length - 1];
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
  for (let i = 0, j = 2; i < nuevo_numero.length; i++, j == 7 ? (j = 2) : j++) {
    suma += parseInt(nuevo_numero.charAt(i)) * j;
  }
  // Calcula el dígito verificador
  let n_dv = 11 - (suma % 11);
  return n_dv == 11 ? 0 : n_dv == 10 ? "K" : n_dv;
}
