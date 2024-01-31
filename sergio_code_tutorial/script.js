// let estudiasteJavascript: boolean =  true
var dev = {
    nombre: 'linus torvalds',
    tecnologias: ['linux'],
    tomarmates: true
};
var dev2 = {
    nombre: 'federico',
    tecnologias: ['html', 'COBOL'],
    tomarmates: null,
};
function enviarCurriculums(programador) {
    console.log("este CV es de ".concat(programador.nombre));
}
enviarCurriculums(dev2);
