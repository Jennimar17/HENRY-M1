// resolve estos ejercicios usando recursión
// Binary Seach Tree
// 'tiene metodos llamados insert, contains, depthFirstForEach, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
BinarySearchTree.prototype.insert = function(value) {
    var newEl = new BinarySearchTree(value);
    if (value < this.value) {
        if (!this.left) {
            this.left = newEl;
        } else {
            this.left.insert(value);
        }
    } else {
        if (!this.right) {
            this.right = newEl;
        } else {
            this.right.insert(value)
        }
    }
}
BinarySearchTree.prototype.contains = function(value) {
    //encontramos el valor 
    if (value === this.value) {
        return true;
    }
    if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }
}
BinarySearchTree.prototype.depthFirstForEach = function(fn, order) {
    //in-order
    if (order === "in-order" || !order) {
        !!this.left && this.left.depthFirstForEach(fn, order);
        fn(this.value);
        !!this.right && this.right.depthFirstForEach(fn, order);
    }
    //post-order
    if (order === "post-order") {
        !!this.left && this.left.depthFirstForEach(fn, order);
        !!this.right && this.right.depthFirstForEach(fn, order);
        fn(this.value);
    }
    //pre-order
    if (order === "pre-order") {
        fn(this.value);
        !!this.left && this.left.depthFirstForEach(fn, order);
        !!this.right && this.right.depthFirstForEach(fn, order);
    }
}
BinarySearchTree.prototype.breadthFirstForEach = function(fn, array) {
    if (!array) {
        array = [];
    }
    this.left && array.push(this.left);
    this.right && array.push(this.right);
    fn(this.value);
    array.length && array.shift().breadthFirstForEach(fn, array);
}
BinarySearchTree.prototype.size = function() {
        if (!this.left && !this.right) return 1;
        if (!this.left && this.right) return 1 + this.right.size();
        if (this.left && !this.right) return 1 + this.left.size();
        return 1 + this.right.size() + this.left.size();
    }
    // No modifiquen nada debajo de esta linea
    // ----------------------------
module.exports = {
    BinarySearchTree
};