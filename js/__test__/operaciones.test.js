
const {suma}= require('../operaciones.js')


describe('casos de prueba positivos para la funcion suma',()=>
test('suma de números enteros',()=>expect(suma(1,2)).toBe(3) ),
//test('suma de decimales',()=> expect(suma(1.5,1.7)).toBeCloseTo(3.2)),
test('suma de números enteros en formato String',()=>expect(suma("1","2")).toEqual(3) ),

)

describe('casos negativos para la función suma',()=>test('Ingresar dos palabras',
    ()=>expect(()=>suma('hola',2)).toThrow('parámetros inválidos') ))





/**
 * 
 * 
 * 
 * 
 */