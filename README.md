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
## Operadores Ternarios 
si visto es true entonces renderiza 'visto' else 'por ver'

tambien se puede usar  

```js
visto  &&  'visto' 
```

si se cumple la primera entonces pasa a la segunda condicion

```js
const Items = ({nombre,visto})=>{
  return (
  <li>{nombre}
      {visto ? ' visto': ' por ver' }</li>
  )
}


export const ListadoApp = () => {
  return(
    <>
    <h1>Listado de Temas de Curso</h1>
    <ol>
      <Items nombre = "Instalaciones" visto={true}></Items>
      <Items nombre = "Uso de vit" visto={true}></Items>
      <Items nombre = "Componentes" visto={true}></Items>
      <Items nombre = "Variables" visto={true}></Items>
      <Items nombre = "Eventos" visto={true}></Items>
      <Items nombre = "useState" visto={true}></Items>
      <Items nombre = "Redux" visto={false}></Items>
      <Items nombre = "customHooks" visto={false}></Items>
    </ol>
  )
}
    </>
```


## Map 
```js
import { useState } from "react";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? " visto" : " por ver"}
    </li>
  );
};

export const ListadoApp = () => {
  let listadoSecciones = [
    { nombre: "instalaciones", visto: true },
    { nombre: "Uso de Vit", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "useState", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState([listadoSecciones]);

  return( 
  <>
  <h1>Listado de temas en el curso:</h1>
  <ol>
      {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
  </ol>
  </>
  )
}
}

```
### como ingresar un elemento a la lista ?
Usando spread operator:
```js
import { useState } from "react";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? " visto" : " por ver"}
    </li>
  );
};

const AddTask = () => {
  setArreglo([...arreglo, {nombre: "nuevo nombre", visto: false}])
}

export const ListadoApp = () => {
  let listadoSecciones = [
    { nombre: "instalaciones", visto: true },
    { nombre: "Uso de Vit", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "useState", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState([listadoSecciones]);

  return( 
  <>
  <h1>Listado de temas en el curso:</h1>
  <ol>
      {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
  </ol>
  <button onClick={() => AddTask()}>Agregar Tarea</button>
  </>
  )
}

```


## ¿ Que es el Atomic Design? 
Es un enfoque de diseño de las interfaces de usuario la cual se basa en la creacion y organizacion de componentes reutilizables
La idea es hacer componentes pequeños e indivicibles(botones, inputs, etc) e ir haciendo moleculas, organizmos, etc
[MAS INFORMACION](https://bradfrost.com/blog/post/atomic-web-design/)



