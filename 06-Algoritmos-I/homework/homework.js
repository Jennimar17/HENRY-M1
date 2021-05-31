// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    var factor = 2;
    end = 1;
    var factors = [1];

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

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    while (true) {
        let contador = 0;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] < array[i]) {
                let aux1 = array[i + 1];
                let aux2 = array[i];
                array[i] = aux1;
                array[i + 1] = aux2;
                contador = contador + 1;
            }
        }
        if (contador == 0) {
            break;
        }
    }
    return (array);
}


function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let temp = array[i];

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;

}





function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (var i = 0; i < array.length; i++) {
        // Choosing the first element in our unsorted subarray
        let current = array[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};