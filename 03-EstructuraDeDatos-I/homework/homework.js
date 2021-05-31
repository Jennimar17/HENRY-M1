// resolve estos ejercicios usando recursión

function nFactorial(n) {
    // devolvé el factorial de n (n!)
    // ej:
    // el factorial de 3 es 6 (3 * 2 * 1)
    if (n == 0) {
        return 1;
    }
    return n * nFactorial(n - 1);
}

function nFibonacci(n) {
    // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
    // Retorna el enésimo numero de la serie
    // nFibonacci(0) // 0  // el elemento 0 es cero
    // nFibonacci(1) // 1 // el elemento 1 es 1
    // nFibonacci(6) // 1 // el elemento 6 es 8
    if (n > 1) {
        return nFibonacci(n - 1) + nFibonacci(n - 2);
    } else if (n === 1) {
        return 1;
    } else if (n === 0) {
        return 0;
    }
}




// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.


function Queue() {
    this.elements = [];
}

Queue.prototype.enqueue = function(arg) {
    this.elements.push(arg);
}

Queue.prototype.dequeue = function() {
    return this.elements.shift();
}

Queue.prototype.size = function() {
    return this.elements.length;
}

/* function Queue() { //constructor almacena
    this.entradaAntigua = 1;
    this.entradaNueva = 1;
    this.almacenar = {};
}

Queue.prototype.size = function() { // tamaño de la cola
    return this.entradaNueva - this.entradaAntigua;
};

Queue.prototype.enqueue = function(info) { // ingreso de la informacion
    this.almacenar[this.entradaNueva] = info;
    this.entradaNueva++;
};

Queue.prototype.dequeue = function() {
    var entradaAntigua = this.entradaAntigua,
        entradaNueva = this.entradaNueva,
        eliminar;

    if (entradaAntigua !== entradaNueva) {
        eliminar = this.almacenar[entradaAntigua];
        delete this.almacenar[entradaAntigua];
        this.entradaAntigua++;

        return eliminar;
    }
}; */






// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Queue,
    nFactorial,
    nFibonacci
};