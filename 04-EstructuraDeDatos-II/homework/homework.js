// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function LinkedList() {
    this.head = null;
}
LinkedList.prototype.add = function add(valor) {
    var nuevoNodo = new Node(valor);

    if (this.head === null) {
        this.head = nuevoNodo;
    } else {
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = nuevoNodo;
    }
};
LinkedList.prototype.remove = function remove() {

    if (this.head === null) return false;

    if (this.head.next === null) {
        var aux = this.head.value;
        this.head = null;
        return aux;
    }

    var current = this.head;
    while (current.next.next !== null) {
        current = current.next;
    }
    var aux = current.next.value;
    current.next = null;
    return aux;
};
LinkedList.prototype.search = function search(arg) {
    var current = this.head;
    if (typeof arg === 'string') {
        var aux = arg;
        arg = function(value) {
            return value === aux;
        }
    }
    while (current !== null) {
        if (arg(current.value)) return current.value;
        current = current.next;
    }
    return null;
};

function Node(value) {
    this.value = value;
    this.next = null;
}
// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.
function HashTable() {
    this.numBuckets = 35;
    this.memoria = []; // 0-34
    this.hash = function(key) {
        var sum = 0;
        for (var i = 0; i < key.length; i++) {
            sum = sum + key[i].charCodeAt(0);
        }
        return sum % this.numBuckets;
    }
}
HashTable.prototype.set = function set(key, value) {
    if (typeof key !== 'string') {
        throw new TypeError('keys must be strings');
    }
    var posicion = this.hash(key);
    if (this.memoria[posicion] === undefined) {
        this.memoria[posicion] = {};
    }
    this.memoria[posicion][key] = value;
};
HashTable.prototype.get = function get(key) {
    var posicion = this.hash(key);
    return this.memoria[posicion][key];
};
HashTable.prototype.hasKey = function hasKey(key) {
    var posicion = this.hash(key);
    return !!this.memoria[posicion][key];
};
// No modifiquen nada debajo de esta linea
// --------------------------------
module.exports = {
    Node,
    LinkedList,
    HashTable
};