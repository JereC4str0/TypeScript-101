# Notas

## ¿ Que son las props?
Las props(propiedades) son un mecanismo para pasar informacion de un componente padre a un componente hijo(children)
Son Objetos que tienen valores que nos permiten la comunicacion entre componentes

```js
import React from "react";

export const PrimerComponente = ({titulo,subtitulo}) => {
  return(
    <>
      <h1>Props: {titulo}</h1>
      <h2>Props: {subtitulo}</h2> 
    </>
  )
}
```

Tambien se pueden hacer que las props sean requeridas como en TS pero usando js, usando PropTypes, usando defaultProps podemos setear valores para nuestras props por defecto

```js
import React from "react";
import Proptypes from 'prop-types'

export const PrimerComponente = ({titulo,subtitulo}) => {
  return(
    <>
      <h1>Props: {titulo}</h1>
      <h2>Props: {subtitulo + 1}</h2> 
    </>
  )
}

PrimerComponente.Proptypes ={
  titulo: Proptypes.string.isRequired,
  subtitulo: Proptypes.number.isRequired
}

PrimerComponente.defaultProps = {
  titulo: "Curso de React",
  subtitulo: 13
}
```
## ¿ Que son los eventos ? 
Los eventos en React son mecanismos por los cuales los componentes pueden reaccionar a la interaccion del usuario.
<br>
[Lista de eventos disponibles](https://es.legacy.reactjs.org/docs/events.html)



```js
**export const ContadorApp = (value) => {
  const handleClick = (event) => {
    value += 1
    console.log(event);
  }

  }

  return (
    <>
      <h1>Contador: </h1>
      <p>{value}</p>
      <button onClick={handleClick}>Soy un boton</button>
    </>
  );
};

```
Si ejecutamos el codigo de ejemplo podemos ver que por consola si cambia el valor pero en la pagina web no se ven reflejados, para hacer que se cambie el valor en el DOM se debe usar un estado

## ¿ Que son los estados? 


