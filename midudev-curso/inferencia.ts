// inferencia
// como a y b infiere que son number sin declarar nada

const a = 1
const b = 2
const c = a + b
// c tambíen será number

let cadenadetexto = 'hola'

cadenadetexto.toLocaleLowerCase()

// X cadenadetexto = 2
// X cadenadetexto.propiedadInexistente

//any
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// funciones
function saludar(name: string) {
  console.log('Hola ${name}')
}

// saludar('Pepe')
// saludar(2)

// por defecto las funciones no tienen inferencia si no tienen contexto

// objetos con funciones
// 1er forma de tipar funciones
function saludar_edad_1({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`)
}
// 2da forma:
function saludar_edad_2(persona: { name: string, age: number }) {
  const { name, age } = persona
  console.log(`Hola ${name}, tienes ${age} años`)
}

// con retorno 
function saludar_edad_3({ name, age }: { name: string, age: number }): number {
  console.log(`Hola ${name}, tienes ${age} años`)
  return age // tiene inferencia en el tipo que retorna
}

// Las funciones en js son de primera clase 
// quiere decir que, se pueden:
// guardar como variables, se pueden pasar como parametros 
// callback, funcion que se ejecuta dentro de otra funcion 
// para tipar funciones:
// una funcion que se llama name, que toma un string y devuelve void (nada)
// las funciones devuelven undefined de forma predeterminada 
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('miguel')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// para tipar arrow functions 

const sumar = (a: number, b: number): number => {
  return a + b
}

// never 
// esto nunca va a devolver nada 
function throwError(message: string): never {
  throw new Error(message)
}

// inferencia funciones anonimas segun el contexto
// aca da por hecho de que avengers es de tipo string  
const avengers = ['spidey', 'Hulk', 'Avengers']

avengers.forEach(function (avenger) {
  console.log(avenger.toUpperCase())
})



// Type alias (cosa importante de typescript )
// siempre se hacen en PascalCase
type Jero = {
  //mutabilidad readonly
  id?: string,
  name: string,
  age: number,
  isActive?: boolean
}


// type HeroId = '${string}-${string}-${string}-${string}-${string}'
// objetos

let hero: Hero = {
  name: 'thor',
  age: 1500
}

function createHero(hero: Hero): Hero {
  const { name, age, } = hero
  return {
    id: crypto.randomUUID(), // nativo de la plataforma web
    name,
    age,
    isActive: true
  }
}

const thor = Object.freeze(createHero({ name: 'Thor', age: 1500 }))
console.log(thor.isActive) // --> true

// encadenamiento opcional 
thor.id?.toString()

type HeroId = `${string}-${string}-${string}-${string}-${string}`
// Template union types
type HexadecimalColor = `#${string}`

const color: HexadecimalColor = '#blablabla'

// union types 
type HeroPowerEscale = 'local' | 'planetary' | 'galactic'
// | <-- esto es un tipo de union (or)

// interception types 

type HeroBasicInfo = {
  name: string,
  age: number,
}

type HeroProperties = {
  readonly id?: HeroId
  isActive?: boolean
  powerScale?: HeroPowerEscale
  // address: {
  //   planet: string,
  //   city: string
  // }
}

type Hero = HeroBasicInfo & HeroProperties

// type indexes 
// const addressHero: HeroProperties['address'] = {
//   planet: 'Earth',
//   city: 'Cordoba'
// }

// type from value

const address = {
  planet: 'Earth',
  city: 'Cordoba'
}


// Extraer los tipos con typeof
// type Address = typeof address

const AddressTwich: Address = {
  planet: 'Mars',
  city: 'Twich'
}

// type from function return 
// a traves de lo que devuelve la funcion

function createAddress() {
  return {
    planet: 'Tierra',
    city: 'republica de cordoba'
  }
}

type Address = ReturnType<typeof createAddress>



// Arrays

// const lenguages = []  que siempre este vacio (array de never)
// solo de strings

const lenguages: string[] = [] // <-- mas facil de entender
// otra forma de hacerlo 
// const lenguages: Array<string> = []

lenguages.push('Javascript')

// si tambien quiero poner numeros 
// Error muy comun al intentar hacer un array de numeros y strings:
//const lenguages: string[] | number [] = []
// forma correcta de hacerlo: 

// ---> const lenguages: (string | number) [] = []


// crear matrices 
// ta te ti
/*
  [x, o, x] --> string[]
  [o, x, o] --> string[]
  [x, o, x] --> string[]

*/
type CellValue = 'X' | 'O' | ''
// Describir con una tupla como es el gameboard
// una tupla es un array que tiene un limite fijado de longitud
type GameBoard = [
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue]

]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X']

]

