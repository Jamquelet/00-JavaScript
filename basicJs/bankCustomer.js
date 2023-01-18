var bank = true;
var account = true;
var balance = true;
var destinationBank = true;
var destinationAccount = true;
var transferValue = 1000000;
var calculateTransferCost = function() {
    if(destinationBank === bank){
        return 0;
    } else { 
        return 100;
    }
}
var transferCost = calculateTransferCost();
var transferTime = [];
for (var i = 1; i <= 24; i++)
{
    transferTime.push(i);
} 
if(account === true && destinationBank === true && balance === true && (transferTime.slice(8,12).includes(i) || transferTime.slice(14,20).includes(i))){
    console.log("send cash"); 
} else {"no send"}



// Pedimos al usuario que ingrese el valor a transferir
var transferValue = prompt("Ingresa el valor a transferir:");

// Pedimos al usuario que ingrese la cuenta de destino
var destinationAccount = prompt("Ingresa el número de cuenta de destino:");

// Verificamos si el usuario tiene suficiente saldo en su cuenta
if (balance < transferValue) {
  console.log("No tienes suficiente saldo para realizar la transferencia.");
  return;
}

// Calculamos el costo de la transferencia
var transferCost = function() {
  if (destinationBank === bank) {
    return 0;
  } else {
    return 100 + transferValue;
  }
}

// Verificamos si es hora de enviar el dinero
var transferTime = [];
for (var i = 1; i <= 24; i++) {
  transferTime.push(i);
} 

if (account === true && destinationBank === true && (transferTime.slice(8,12).includes(i) || transferTime.slice(14,20).includes(i))) {
  console.log("Enviando dinero...");
  // Aquí podrías utilizar una librería de base de datos para almacenar la información de la transferencia
} else {
  console.log("No es posible enviar dinero en este momento.");
}

//

// Definimos las variables
var clientBank = "Bancomer";
var clientAccount = true;
var clientBalance = 2000000;
var destinationBank = "Santander";
var destinationAccount = true;
var transferValue = 1000000;

// Definimos una función para calcular el costo de la transferencia
var calculateTransferCost = function() {
  if (clientBank === destinationBank) {
    // Si el banco del cliente es el mismo que el banco de destino, el costo es cero
    return 0;
  } else {
    // Si el banco del cliente es diferente al banco de destino, el costo es de $100
    return 100;
  }
}

// Calculamos el costo de la transferencia
var transferCost = calculateTransferCost();

// Verificamos si el cliente tiene suficiente saldo para realizar la transferencia
if (clientAccount === true && destinationAccount === true && clientBalance >= transferValue + transferCost) {
  // Verificamos el horario de transferencia
  var currentHour = 9; // Suponemos que son las 9 de la mañana
  if (currentHour >= 9 && currentHour < 12 || currentHour >= 15 && currentHour < 20) {
    // Si estamos dentro del horario de transferencia, realizamos la transferencia
    console.log("Realizando transferencia de $" + transferValue + " a la cuenta " + destinationAccount + " del banco " + destinationBank + " (costo de transferencia: $" + transferCost + ")");
  } else {
    // Si no estamos dentro del horario de transferencia, mostramos un mensaje de error
    console.log("No es posible realizar la transferencia en este momento.");
  }
} else {
  // Si no se cumplen todas las condiciones, mostramos un mensaje de error
  console.log("No se puede realizar la transferencia. Verifica que tengas saldo suficiente y que los datos de la cuenta de destino sean correctos.");
}


//
// Clase Banco
class Banco {
  // Constructor
  constructor(nombre, costoTransaccion) {
    this.nombre = nombre;
    this.costoTransaccion = costoTransaccion;
  }

  // Método para verificar si un cliente es válido
  esClienteValido(cliente) {
    return cliente.verificado;
  }

  // Método para verificar si un banco de destino es válido
  esBancoDestinoValido(bancoDestino) {
    return bancoDestino.verificado;
  }

  // Método para realizar una transferencia
  realizarTransferencia(cliente, bancoDestino, cuentaDestino, monto) {
    // Verificar que el cliente es válido
    if (!this.esClienteValido(cliente)) {
      console.log('El cliente no es válido');
      return;
    }

    // Verificar que el banco de destino es válido
    if (!this.esBancoDestinoValido(bancoDestino)) {
      console.log('El banco de destino no es válido');
      return;
    }

    // Verificar que el cliente tiene suficiente saldo en su cuenta
    if (cliente.cuenta.saldo < monto + this.costoTransaccion) {
      console.log('El cliente no tiene suficiente saldo en su cuenta');
      return;
    }

    // Verificar que se encuentra en un horario válido para realizar la transferencia
    const horaActual = new Date().getHours();
    if (horaActual < 9 || horaActual > 12 && horaActual < 15 || horaActual > 20) {
      console.log('No se pueden realizar transferencias en este momento');
      return;
    }

    // Realizar la transferencia
    cliente.cuenta.saldo -= monto + this.costoTransaccion;
    cuentaDestino.saldo += monto;
    console.log('Transferencia realizada exitosamente');
  }
}

// Clase Cuenta
class Cuenta {
  // Constructor
  constructor(saldo) {
    this.saldo = saldo;
  }
}

// Clase Cliente
class Cliente {
  // Constructor
  constructor(nombre, cuenta, verificado) {
    this.nombre = nombre;
    this.cuenta = cuenta;
    this.verificado = verificado;
  }
}

// Crear bancos
const bancomer = new Banco('Bancomer', 0);
/*En este código se han definido tres clases: Banco, Cuenta y Cliente. Cada una de estas clases representa un concepto diferente en el contexto de un banco.

La clase Banco representa un banco y tiene un nombre y un costo de transacción. También tiene tres métodos:

esClienteValido: Este método recibe como parámetro un objeto de tipo Cliente y verifica si el cliente es válido (es decir, si ha sido verificado). Devuelve true si el cliente es válido y false si no lo es.

esBancoDestinoValido: Este método recibe como parámetro un objeto de tipo Banco y verifica si el banco de destino es válido (es decir, si ha sido verificado). Devuelve true si el banco de destino es válido y false si no lo es.

realizarTransferencia: Este método recibe como parámetros un objeto de tipo Cliente, un objeto de tipo Banco, un objeto de tipo Cuenta y un monto. Verifica si se cumplen todas las condiciones necesarias para realizar la transferencia (cliente válido, banco de destino válido, saldo suficiente en la cuenta del cliente y horario válido) y, en caso de que se cumplan, realiza la transferencia restando el monto y el costo de transacción del saldo de la cuenta del cliente y sumando el monto a la cuenta de destino.

La clase Cuenta representa una cuenta de un cliente y tiene un saldo.

La clase Cliente representa un cliente de un banco y tiene un nombre, una cuenta y una propiedad que indica si ha sido verificado o no.*/