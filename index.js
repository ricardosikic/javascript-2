// En este ejemplo lo que se hace es reemplazar la coma existente en el precio establecido por un punto.

// en este ejemplo se utilizaron:
// -> metodo substr = que toma como argumento la posicion inicial del caracter y el numero de caracteres a tomar hacia la derecha

// -> metodo replace = para hacer el cambio de esos caracteres

let price = '200,300';

change_price = (value) => {
  let find_index = value.indexOf(',');
  let subs_char = value.substr(find_index, 1);
  let repl_char = value.replace(subs_char, '.');
  console.log('el valor es: ', repl_char);
}

change_price(price);




