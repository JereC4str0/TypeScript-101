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
let obj: any = {x : 0};

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// funciones
function saludar(name: string){
  console.log('Hola ${name}')
}

// saludar('Pepe')
// saludar(2)

// por defecto las funciones no tienen inferencia si no tienen contexto

// objetos con funciones
// 1er forma de tipar funciones
function saludar_edad_1({name,age}:{name:string, age:number}){
  console.log(`Hola ${name}, tienes ${age} años`)
}
// 2da forma:
function saludar_edad_2(persona: {name: string, age: number}){
  const {name, age} = persona
  console.log(`Hola ${name}, tienes ${age} años`)
}

// con retorno 
function saludar_edad_3({name,age}:{name:string, age:number}): number{
  console.log(`Hola ${name}, tienes ${age} años`)
  return age // tiene inferencia en el tipo que retorna
}

// continuar con "tipear funciones parametros" min 38:00 
