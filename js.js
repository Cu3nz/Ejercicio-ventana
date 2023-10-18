//? Funcion para que se guarde la cookie una hora
function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 1 * 60 * 60 * 1000); // Añadir 1 hora en milisegundos
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//todo Boton de validar

function validar() {

   let problemaValidacion = false; //? Variable para saber si todos los datos se han validado y no hay ningun error y son correctos
    

    //todo Obteniendo lo que el usuario escribe por los input y guardandolo en una cookie. 

    //? email y edad ya lo tengo 

    var nombreEntrada = document.getElementById("nombreInput").value.trim() //? Almaceno en la variable nombreEntrada lo que escribe el usuario en el input de nombre y una vez que sepa lo que ha introducido quito los espacios de delante y detras

    //? Almaceno en la cookie lo que escribe el usuario. 
    setCookie("nombre" , nombreEntrada , 1); 

    var apellidosEntrada = document.getElementById("apellidosInput").value.trim() //? Almaceno en la variable apellidosEntrada lo que escribe el usuario por el input de apellidosy una vez que sepa lo que ha introducido quito los espacios de delante y detras
    
    setCookie("apellidos" , apellidosEntrada , 1); //? Lo almaceno en una cookie

    var entradaDireccion = document.getElementById("direccionInput").value.trim() //? Almaceno en la variable entradaDireccion lo que introduce el usuario en el input por teclado y una vez que sepa lo que ha introducido quito los espacios de delante y detras

    setCookie("direccion" , entradaDireccion , 1)//? Lo almaceno en una cookie 

  //todo Validando el correo

  //* Guardar en la variable emailInput lo que escribe el usuario en el input

  var emailInput = document.getElementById("email_id").value.trim(); //* el value lo pongo para obtener el valor actual del input
  setCookie("email" , emailInput , 1); //? Almaceno el valor de email en el input

  //* Primero tengo que sacar en que posicion esta el @

  var arroba = emailInput.indexOf("@");

  //*  y sacar la posicion de donde esta el ultimo punto.
  var ultimoPunto = emailInput.lastIndexOf(".");

  if (arroba === -1 && ultimoPunto === -1) { //! si no existe ni el . , ni el @ te muestra el siguiente mensaje de error
    console.log("%cError: el correo no tiene ni la @ , ni el .", "color: red;");
    problemaValidacion = true //? Existe un problema de validacion
  } else if (arroba === -1) { //!si no esta el @ mostramos el error
    console.log("%cError: el correo no tiene un @", "color: red;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (ultimoPunto === -1) { //! si no existe el punto mostramos el error.
    console.log("%cError: el correo no tiene un .", "color: red;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (arroba === emailInput.length - 1) { //! si el arroba esta en la ultima posicion, es porque despues del arroba no hay ninguna cadena
    console.log(
      "%c Error: el @ no puede estar en la ultima posción",
      "color:red;"
    );
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (arroba === 0) {//! si el arroba esta en la posicion 0 es porque delante del arroba no hay una cadena
    console.log(
      "%cError: el @ no puede estar en la primera posición",
      "color: red;"
    );
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (ultimoPunto <= arroba + 1) { //! Si entre el punto y el arroba no hay ningun texto muestro el siguiente mensaje 
    console.log("%cError:  No hay texto entre el @ y el punto", "color: red;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else { //* Si no es porque el correo esta bien 
    console.log("%cEl gmail es valido", "color: grenn;");
  }

  //todo Validando la edad

  var edadInput = document.getElementById("edadInput").value.trim(); //? Recogo lo que introduce el usuario por teclado

  let edadNumero = parseInt(edadInput); //? lo paso a entero

  setCookie("edad" , edadNumero , 1);

  // verificar si numero es un numero (isNan) y es entero (isInteger).
  if (!isNaN(edadNumero) && Number.isInteger(edadNumero)) {
    console.log("%cEl número es entero", "color: green;");
  } else {
    console.log("%cError: El número no es entero o no es un número válido", "color: red;");
    problemaValidacion = true;
  }

   //todo Validando que ningun campo este vacio

 if (nombreEntrada == "" || apellidosEntrada == "" || entradaDireccion == "" || edadInput == "" || emailInput == "" ){
    console.log("%cError: No puede haber ningun campo vacio", "color: red;");
    problemaValidacion = true; //? Hay un problema de validacion
 }

 
 ///todo Si no hay ningun error de validacion muestro un mensaje 

 if (!problemaValidacion){ //? Si no hay problemas de validacion mostramos un mensaje por consola y abrimos una ventana con un texto
    console.log("%cNo hay ningun problema de validacion, se han almacenado las cookies", "color: green;");

    url = "DatosValidos.html";

    window.open(url, "ventana1", "width=550,height=800,left=200,top=100,scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");

 } else { //! Si no es porque ha habido alguno que ha fallado y tengo que abrir una ventana con un texto
    let url = "datosNoValidos.html";

    window.open(url, "ventana1", "width=550,height=800,left=200,top=100,scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");

 }


}


//todo boton de mostrar datos

//todo Recorrer las cookies almacenadas

function mostrarCookies() {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    let [name, value] = cookie.split("=");
    console.log(`Clave: ${name}, Valor: ${value}`);
  }
  //todo Abrir la ventana
  url = "mostrarDAtos.html";
  window.open(url, "ventana1", "width=550,height=800,left=200,top=100,scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");

}


function devolver() {
    //return document.getElementById("nombreInput").value; //? Si solo quiero devolver un valor 
    //todo Devolver todos los valores en la pagina mostrarDatos.html
    return {
        nombre: document.getElementById("nombreInput").value,
        apellidos: document.getElementById("apellidosInput").value,
        direccion: document.getElementById("direccionInput").value,
        edad: document.getElementById("edadInput").value,
        email: document.getElementById("email_id").value
    };
}
