// /* eslint-disable no-undef */
const {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore
} = require('../homework');

describe('counter', () => {
 it('should return a function', () => {
   expect(typeof counter()).toBe('function');
 });
 it('should return 1 when the returned function is invoked', () => {
   expect(counter()()).toBe(1);
 });
 it('should increment and return the number each time the function is invoked', () => {
   const counterFunction = counter();
   expect(counterFunction()).toBe(1);
   expect(counterFunction()).toBe(2);
   expect(counterFunction()).toBe(3);
   expect(counterFunction()).toBe(4);
   expect(counterFunction()).toBe(5);
 });
});

describe('cacheFunction(cb)', function() {
 it('should return the callback function', function() {
   const cb = function() {};
   expect(typeof cacheFunction(cb)).toEqual('function');
 });
 it('should return the callback functions result when the cached function is invoked', function() {
   const cb = function(x) {
     return x * 2;
   };
   const cachedFunction = cacheFunction(cb);
   expect(cachedFunction(5)).toBe(10);
 });
 it('should cache function results', function() {
   const cb = jest.fn();
   const cachedFunction = cacheFunction(cb);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(10);
   cachedFunction(10);
   cachedFunction(10);
   cachedFunction(10);
   expect(cb).toHaveBeenCalledTimes(2);
 });
});

describe('Bind', function() {
 it('should return the correct name "Franco"', function() {
   expect(getNombreInstructor()).toEqual('Franco');
 });
 it('should return the correct name "Juan"', function() {
   expect(getNombreAlumno()).toEqual('Juan');
 });
 it('should return the correct string "*Hola*"', function() {
   expect(textoAsteriscos('Hola')).toEqual('*Hola*');
 });
 it('should return the correct string "-Hola-"', function() {
   expect(textoGuiones('Hola')).toEqual('-Hola-');
 });
 it('should return the correct string "_Hola_"', function() {
   expect(textoUnderscore('Hola')).toEqual('_Hola_');
 });
});