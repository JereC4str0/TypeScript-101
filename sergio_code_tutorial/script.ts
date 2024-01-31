// let estudiasteJavascript: boolean =  true

// if(estudiasteJavascript){
//   console.log("podes seguir viendo el curso")
// }else{
//   console.log("primero tenes que ver el curso")
// }

// let interMiami: number = 11 
// let fcDallas: number = 11 
// let messi: number = 1 
// let juegaMessi: boolean = true
// let palabras:string = 'aguante messi'

// function jugar(equipo1:number,equipo2:number, juegaMessi:boolean):void{
//   // si no devuelve nada es void
//   let motivo:string = ''
  
//   if(juegaMessi){ equipo1 += messi
//     motivo = ' por que juega messi'
//   }

//   if(equipo1 > equipo2) console.log(`Gana inter ${motivo}`)
//   if(equipo1 == equipo2) console.log("Empate")
//   if(equipo1 < equipo2) console.log("Gana fcDallas")
// }

// jugar(interMiami,fcDallas, juegaMessi)



// any [LA IDEA ES SIEMPRE EVITARLO, SIEMPRE TIPAR]
// se usa para saltear las propias validaciones de TS
// let disney: string | number

// disney = 'star wars y marvel'

// console.log(disney)

// cambia los metodos por que se realizo un cambio de dato

// disney = 1500000000

// console.log(disney)



// Arrays 

// let arrayNumberos:number[] = [1,2,3,4,5,6]

// let arrayStrings:string[] = ['html', 'css', 'js']

// arrayStrings[0].indexOf('html')



// OBJETOS 

// let programador = {
//   nombre: 'juan pedro tercero',
//   tomamate: true,
//   tecnologias: 'zarasa'
// }

// programador = {
//   nombre: 'ricardo',
//   tecnologias: 'bla bla bla',
//   tomamate: false
// }


// console.log(programador)



// TYPES (tipear objetos)
// type Programador = {
//   nombre:string,
//   tecnologias:string[],
//   tomarmates?:boolean | null
// }

// let programador = {
//   nombre: 'linus torvalds',
//   tecnologias: ['linux'],
//   tomarmates:true
// }

// let programador2: Programador = {
//   nombre:'federico',
//   tecnologias:['html', 'COBOL'],
//   tomarmates: null
// }


// INTERFACES 

interface Programador {
  nombre:string,
  tecnologias: string[],
  tomarmates: boolean | null
}
let dev:Programador = {
  nombre: 'linus torvalds',
  tecnologias: ['linux'],
  tomarmates:true
}


let dev2: Programador = {
  nombre:'federico',
  tecnologias:['html', 'COBOL'],
  tomarmates: null,
 }


function enviarCurriculums(programador:Programador) {
  console.log(`este CV es de ${programador.nombre}`)
}

enviarCurriculums(dev2)