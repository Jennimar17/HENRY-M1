
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cual es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
al investigar se complica un poco entender, pero verlo en accion me caen las fichas, cuando directamente le asigno un valor a una variable no declarada, me la convierte en una variable de alcance global, si no le declaro por mas que la meta dentro de una funcion o la declare posteriormente con var, siempre será el valor asignado. y las declaradas con var no tienen tal alcance, es mas "local" o por decirlo mas tecnico se limita al contexto de ejecucion donde ha sido declarada. si la declaré dentro de una funcion, solo tendrá el alcance dentro de la funcion

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);//10 aca vale 10 la "x" y no 1 por que la declare con var asignandole dicho valor, si saco "var x = 10" me va a dar 1 por que fue el valor dado directamente a la "x", sin importar que esté fuera de la funcion
  console.log(a);//8 aca vale 8 por que por mas que le haya asignado valor de 5 (con un var) tendra el valor de 8 el cual se le asigno (por fuera de la funcion) directamente en la linea 30 "c(8,9,10);"
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8 aca vale lo mismo que "a" (8) por que se le asigno a "b" el valor de "a"
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9 aca vale 9 por que  se le asigno dicho valor (por fuera de la funcion) directamente en la linea 30 "c(8,9,10);"
}
c(8,9,10);
console.log(b);//10 aca vale 10 por que mantiene el valor asignado desde un comienzo declarandolo con var
console.log(x);//1 aca vale 1 por que mantiene el valor asignado directamente (global)
```

```javascript
console.log(bar);//undefined
console.log(baz);//error!
foo();// Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//franco
   }
})();
console.log(instructor);//tony
```


```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//the flash
    console.log(pm);//reverse flash
}
console.log(instructor);//the flash
console.log(pm);//franco
```
### Coerción de Datos

¿Qué crees que van dar estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2//2
"4px" - 2//NaN
7 / 0//matematicamente no es posible dividir por cero cualquier entero (js wtf)
{}[0]//0
parseInt("09")//9
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//23 por que me concatena 33-10 y js convierte ese 33 de string a numero y lo resta con el siguiente
3>2>1//false
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output que vemos en consola luego de ejecutar este código? Explicar porque es así:

```javascript
function test() {
    console.log(a);//undefined por que no defini a "a"
    console.log(foo());//2 por que le indique que la funcion foo me retorne 2

    var a = 1;

    function foo() {
        return 2;
    }
}

test();//undefined
```

Y el de este:

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//undefined
```


### This

¿Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//aurelio de rosa

var test = obj.prop.getFullname;

console.log(test());//juan perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden del ouput? ¿Por qué?

```javascript
function printing() {
   console.log(1);//primero
   setTimeout(function() { console.log(2); }, 1000);//cuarto
   setTimeout(function() { console.log(3); }, 0);//tercero
   console.log(4);//segundo
}

printing();
```
