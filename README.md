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
export const ContadorApp = (value) => {
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

## ¿ Que son los Hooks?
Es una funcion especial que nos permite utilizar una funcion de react en un componente de tipo funcion fueron introducidos en react 16.8 para poder manejar el estado y otras caracteristicas sin la necesidad de utilizar componentes de tipo clase.

## ¿Que es el estado en React?
Es un objeto que contiene datos y representa la informacion que una interfaz de usuario necesita para poder renderizarse y funcionar correctamente.
El estado es mutable y tiene todos los datos que necesita un componente para funcionar de forma correcta y mutar si asi lo desea

se puede modificar el estado a travez de los hooks o con con un constructor en un componente de tipo clase. 



```js

import { useState } from "react";

export const ContadorApp = ({value}) => {
  const [contador, setContador] = useState(value)
  const handleClick = () => {
    setContador(contador + 1)
    console.log(contador);
  };

  return (
    <>
      <h1>Contador: </h1>
      <p>{contador}</p>
      <button onClick={handleClick}>Soy un boton</button>
    </>
  );
};

```


