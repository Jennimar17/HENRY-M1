// MATRIZ

class Matriz {

  constructor(alto, ancho ) {
    this = [];
    for (var i=0; i<alto; i++) {
      this[i] = [];
      for (var j=0; j<ancho; j++) {
        this[i][j] = undefined;
      }
    }
  }

  buscar(val) {
    for (var i=0; i<this.length; i++) {
      for (var j=0; j<this[i].length; j++) {
        if (this[i][j] == val) return [i,j];
      }
    }
  }

  sumar(mat) {
    var newMatriz = [];
    for (var i=0; i<this.length; i++) {
      newMatriz[i]=[];
      for (var j=0 ; j<this[i].length; j++) {
        newMatriz[i][j] = this[i][j]+mat[i][j];
      }
    }
    return newMatriz;
  }

  restar(mat) {
    var newMatriz = [];
    for(var i=0; i<this.length; i++) {
      newMatriz[i] = [];
      for (var j=0; j<this[i].length; j++ ) {
        newMatriz[i][j] = this[i][j]-mat[i][j];
      }
    }
    return newMatriz;
  }

  multiplicar(mat) {
    var newMatriz = [];
    var suma = 0;
    for( var i=0; i<this.length; i++) {
      newMatriz[i]=[];
      for (var j=0; j<this[i].length; j++) {
        for (var k=0; k<array.length; k++) {
          suma += this[k][j] * mat[j][k];
        }
        newMatriz[i][j] = suma;
      }
    }
    return newMatriz;
  }

  print() {
    var mat = this;
    for( var i = 0; i < mat.length ; i++ ){
      linea = '['
      for (var j = 0; j < mat[i].length; j++) {
          linea += mat[i][j]+','
      }
      console.log(linea+']')
    }
  }
}
