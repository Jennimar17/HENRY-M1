// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    var len = array.length;

    if (len <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < len; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));


}

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    var len = array.length;

    if (len <= 1) {
        return array;
    }

    var middle = Math.floor(len / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    right = mergeSort(right);
    left = mergeSort(left);

    var arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left, right);

}

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [2, 2, 3, 3, 5] Ya que 2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    var factor = 2;
    end = 1;
    var factors = [];

    if (num == end) {
        return [end];
    }

    while (num > end) {
        if (num % factor == 0) {
            factors.push(factor);
            num /= factor;
        } else {
            factor++;
        }
    }
    return factors;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};