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
  
