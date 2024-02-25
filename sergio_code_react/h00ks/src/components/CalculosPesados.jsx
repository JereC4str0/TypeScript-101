const getCalculo = (listaNumeros) => {
  console.log('Calculando')
  return listaNumeros.reduce((a,b) => a*b)
}

export const CalculosPesados = () => {
  
  const listaNumeros = [2,3,4,5,6,7,8,9]
  


  return (
  <>
   <h2>Calculo:</h2>
   <p>{getCalculo(listaNumeros)}</p>
  </>
  )
};
