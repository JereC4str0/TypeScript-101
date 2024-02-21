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

## ClassName
 es una propiedad de js que es utilizada para obtener u asignar la clase de un elemento.

 ## Formulario 
 componente para crear un input y guardar los datos.

 ```js
import React from "react";
import { useState } from "react";

const [inputValue, setInputValue] = useState("");
const onInputChange = (event) => {
  setInputValue(event.target.value);
};

const onSubmit = (event) => {
  event.preventDefault() // no se recarga la pagina al mandar el  input
}

export const AgregarTarea = () => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresar Tarea Nueva"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
```

## Comunicacion entre componentes
### Padre a hijo
en este ejemplo se le pasa como prop al hijo una funcion llamada agregarTarea, que es la que modifica el listado del padre,
el hijo recibe esa agregarTarea y agrega la tarea nueva pasandole el objeto de la nueva tarea usando el spread operator


 ```js
import { useState } from "react";
import { AgregarTarea } from "./AgregarTarea";

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
  <AgregarTarea agregarTarea = {setArreglo}></AgregarTarea>
  <ol>
      {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
  </ol>

  <button onClick={() => AddTask()}>Agregar Tarea</button>
  </>
  )
}

```

 ```js
import React from "react";
import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    const envio = {
      nombre: inputValue,
      visto: false
    }
    event.preventDefault(); // no se recarga la pagina al mandar el  input
    agregarTarea(tareas => [...tareas, envio])
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresar Tarea Nueva"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

```

### hijo a padre

```js
import { useState } from "react";
import { AgregarTarea } from "./AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? " visto" : " por ver"}
    </li>
  );
};

const AddTask = () => {
  setArreglo([...arreglo, { nombre: "nuevo nombre", visto: false }]);
};

const onAgregarTarea = (val) => {
  let valor = val.trim();
  if (val < 1) return;
  const envio = {
    id: arreglo.length + 1,
    nombre: valor,
    visto: false,
  };
  setArreglo([...arreglo, envio]);
};

export const ListadoApp = () => {
  let listadoSecciones = [
    { id: 1, nombre: "instalaciones", visto: true },
    { id: 2, nombre: "Uso de Vit", visto: true },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Variables", visto: true },
    { id: 5, nombre: "Eventos", visto: true },
    { id: 6, nombre: "useState", visto: true },
    { id: 7, nombre: "Redux", visto: false },
    { id: 8, nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState([listadoSecciones]);

  return (
    <>
      <h1>Listado de temas en el curso:</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map((item) => (
          <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>
        ))}
      </ol>

      <button onClick={() => AddTask()}>Agregar Tarea</button>
    </>
  );
};

```

```js
import React from "react";
import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    agregarTarea(inputValue)
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresar Tarea Nueva"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
  
```

## UseEffect y Fetch

de esta forma se traerian los datos al comienzo
```js
import { useEffect, useState } from "react";

export const UsersApp = () => {
   const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
   

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Lista de usuarios:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

```

### Para hacer la call con una llamada se hace de la siguiente forma:
```js
import { useEffect, useState } from "react";

export const UsersApp = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFetch = () => {
    fetchUsers()
  }


  return (
    <>
      <h1>Lista de usuarios:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleFetch}>llamar a la API</button>
    </>
  );
};

```
_se deja de utilizar useEffect_

### uso de useEffect con una dependencia puntual :
```js
import { useEffect, useState } from "react";

export const UserList = (endpoint) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}`
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchUsers()
  }, [endpoint])

  return (
    <>
      <ul>
        {endpoint = 'users' ? users.map(item => <li key={item.id}>{item.name}</li>) 
        : users.map(item => <li key={item.id}>{item.body}</li>)}
        
      </ul>
    </>
  );
};

```

```js

import { useState } from "react";
import { UserList } from "./UserList";

export const UsersApp = () => {

  const [endpoint,setEndPoint] = useState('users')

  const handleFetch = () => {
    setEndPoint('comments')
  }


  return (
    <>
      <h1>Lista de usuarios:</h1>
      <UserList endpoint={endpoint}></UserList>
      <button onClick={handleFetch}>llamar a la API</button>
    </>
  );
};

```

### UseCounter

```js
import { useState } from "react"

export const useCounter = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial)
  
  const incrementar = (valor = 1 ) => setContador(contador + valor)
  const decrementar = (valor = 1, negativo) => {
    if(!negativo && contador - valor < 0 ){
      setContador(0)
      return
    }
    setContador(contador - valor)
  }
  const resetear = () => setContador(0)
  
  return {
    contador,
    incrementar,
    decrementar,
    resetear,
  }
}
```



```js

import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {
 
  const {contador, incrementar, decrementar, resetear} = useCounter(0)
 
  return(
    <>
    <h1>Contador: {contador} </h1>
    <button className="btn btn-primary" onClick={()=> incrementar(1)}> +1 </button>
    <button className="btn btn-danger" onClick={()=> resetear()}> Reset </button>
    <button className="btn btn-primary" onClick={()=> decrementar(1, false) }> -1 </button>

    </>
  ) 
}
```

### Formulario con Hooks

El componente FormularioComponent es una función de React que gestiona un formulario. Utiliza el hook useState para definir el estado del formulario, que incluye tres campos: userName, email y password. Cada campo se inicializa con un valor predeterminado.

La función onInputChange se encarga de actualizar el estado del formulario cuando cambia el valor de un campo de entrada. Recibe un evento como parámetro, del cual extrae el nombre (name) y el valor (value) del campo modificado. Luego, utiliza el spread operator (...) para actualizar el estado del formulario, manteniendo los valores anteriores y sobrescribiendo el campo modificado con su nuevo valor.

El componente renderiza un formulario HTML con tres campos de entrada (input). Cada campo está vinculado al estado del formulario a través de sus propiedades value y onChange, lo que permite que los campos se actualicen dinámicamente según el estado actual del formulario.

Además, se define una función handleSubmit que se activa cuando se envía el formulario. Esta función, que también recibe un evento como parámetro, previene el comportamiento predeterminado de enviar el formulario y, en su lugar, simplemente imprime los datos del formulario en la consola del navegador.


```js
import React, { useState } from "react";

export const FormularioComponent = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { userName, email, password } = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer lo que necesites con los datos del formulario, como enviarlos a un servidor
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          name="userName"
          placeholder="Enter your username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
```

### Fetch con Hook

## `useFetch`

Este componente es una función personalizada diseñada para manejar solicitudes de red en aplicaciones React utilizando los hooks `useEffect` y `useState`. Su objetivo principal es simplificar la obtención de datos de una URL específica a través de una solicitud `fetch` y manejar el estado de carga y posibles errores asociados.

### Uso

```javascript
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const getFetch = async () => {
    if (!url) return;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return state; 
};
```
## Funcionamiento

useState: Define un estado inicial con tres propiedades: data (los datos obtenidos de la solicitud), isLoading (un indicador booleano que muestra si la solicitud está en curso) y errors (los posibles errores ocurridos durante la solicitud).

getFetch: Una función asíncrona que realiza la solicitud a la URL proporcionada. Si la URL no está definida, la función sale temprano sin hacer nada. Si la solicitud tiene éxito, actualiza el estado con los datos obtenidos y marca isLoading como false. Si hay errores durante la solicitud, actualiza el estado con null para los datos, marca isLoading como false y almacena el error en la propiedad errors.

useEffect: Se utiliza para ejecutar la función getFetch cuando cambia la URL proporcionada. Esto asegura que la solicitud se realice cada vez que la URL cambie, por ejemplo, cuando se actualiza un enlace.

Retorno de estado: Devuelve el estado actualizado, que incluye los datos obtenidos de la solicitud (o null si no hay datos), un indicador de carga (isLoading) y cualquier error que pueda haber ocurrido durante la solicitud.

### Componente `UsuariosComponent`

Este componente es un componente funcional de React que muestra una lista de usuarios obtenidos de una API utilizando el hook personalizado `useFetch`. A continuación, se proporciona una explicación de su funcionamiento:

#### Uso de `useFetch`

- El componente utiliza el hook personalizado `useFetch` para realizar una solicitud a la API `https://jsonplaceholder.typicode.com/users`. Este hook devuelve un objeto que contiene `data` (los datos obtenidos de la solicitud), `isLoading` (un indicador booleano que muestra si la solicitud está en curso) y `errors` (los posibles errores ocurridos durante la solicitud).

#### Renderizado Condicional

- Muestra un título `<h1>` indicando "Lista de Usuarios".
- Utiliza un operador ternario para renderizar condicionalmente:
  - Si `isLoading` es verdadero, muestra un mensaje "Cargando...".
  - Si `isLoading` es falso, muestra una tabla (`<table>`) para visualizar los usuarios.
  
#### Mapeo de Datos

- Si la carga no está en curso (`isLoading` es falso), itera sobre los datos (`data`) obtenidos de la solicitud utilizando el método `map()`.
- Para cada usuario en los datos, crea una fila (`<tr>`) en la tabla con su correspondiente información de usuario: id, nombre, correo electrónico y sitio web.

#### Componente Completo

```jsx
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const UsuariosComponent = () => {
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h1>Lista de Usuarios</h1>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo Electrónico</th>
              <th scope="col">Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
```

## Explicación del hook useRef en React

El hook `useRef` en React es una herramienta que te permite crear una referencia mutable que apunta a un elemento del DOM. Esta referencia se mantiene constante a lo largo del ciclo de vida del componente, pero puedes actualizar su valor sin causar una nueva renderización del componente.

### Uso básico:

Supongamos que tenemos un componente de React que tiene un input y un botón:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Acción que queremos realizar cuando se hace clic en el botón
    inputRef.current.focus(); // Enfocamos el input
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Enfocar Input</button>
    </div>
  );
}

export default MyComponent;
```

En este ejemplo, hemos creado una referencia llamada inputRef utilizando el hook useRef. Luego, hemos asignado esta referencia al input usando el atributo ref. Ahora, podemos acceder al input a través de inputRef.current.

Cuando se hace clic en el botón, llamamos a la función handleClick. Dentro de esta función, usamos inputRef.current para acceder al input y enfocarlo utilizando el método focus().

Esencialmente, useRef nos permite mantener una referencia persistente a un elemento del DOM y acceder a él cuando sea necesario sin tener que buscarlo repetidamente en el DOM. Esto hace que trabajar con elementos del DOM en React sea más eficiente y sencillo.


## Explicación del hook useMemo en React

El hook `useMemo` en React es una herramienta que te permite memorizar el resultado de una función costosa en términos de cálculo, de modo que solo se recalcula cuando alguna de sus dependencias cambia. Esto ayuda a mejorar el rendimiento de tu aplicación al evitar cálculos innecesarios.

### Uso básico:

Supongamos que tenemos un componente de React que realiza un cálculo costoso cada vez que se renderiza:

```jsx
import React, { useState, useMemo } from 'react';

function MyComponent({ list }) {
  const [filter, setFilter] = useState('');

  const filteredList = useMemo(() => {
    return list.filter(item => item.includes(filter));
  }, [list, filter]);

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;

```
## Explicación del hook useCallback en React

El hook `useCallback` en React es una herramienta que te permite memorizar una versión memorizada de una función callback. Esto es útil cuando pasas funciones a componentes hijos y deseas evitar que esas funciones se creen nuevamente en cada renderizado, lo que puede causar renderizaciones innecesarias en los componentes hijos.

### Uso básico:

Supongamos que tenemos un componente de React que renderiza una lista y desea pasar una función de manejo de clic a cada elemento de la lista:

```jsx
import React, { useState, useCallback } from 'react';

function ListItem({ item, onClick }) {
  return <li onClick={onClick}>{item}</li>;
}

function MyComponent({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = useCallback(
    item => {
      setSelectedItem(item);
    },
    []
  );

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} onClick={() => handleItemClick(item)} />
      ))}
      <p>Item seleccionado: {selectedItem}</p>
    </ul>
  );
}

export default MyComponent;

```

En este ejemplo, useCallback se utiliza para memorizar la función handleItemClick. La función handleItemClick se crea solo una vez, ya que no tiene dependencias, y se pasa como una función de manejo de clic a cada ListItem. Esto evita que se cree una nueva función en cada renderizado de MyComponent, lo que puede causar renderizaciones innecesarias en los componentes hijos.

useCallback es especialmente útil cuando pasas funciones como props a componentes hijos y quieres evitar renderizaciones innecesarias. Al memorizar la función callback, React puede optimizar el rendimiento de tu aplicación al evitar la creación de nuevas instancias de funciones en cada renderizado.

Es importante tener en cuenta que useCallback debe usarse con moderación y solo cuando sea necesario, ya que puede complicar el código si se usa en exceso. Utiliza useCallback cuando necesites optimizar el rendimiento de tu aplicación al evitar la creación de funciones innecesarias en cada renderizado.

## Reducer 

un "reducer" es una función pura que toma el estado actual y una acción como argumentos y devuelve un nuevo estado. Los reducers son una parte fundamental de la gestión de estado en React, especialmente cuando se utiliza el contexto y el gancho useReducer.

Los reducers siguen el patrón de diseño de Redux, que es una biblioteca de gestión de estado para aplicaciones JavaScript. En Redux, los reducers son responsables de especificar cómo cambia el estado de la aplicación en respuesta a las acciones emitidas por los componentes.

En React, el gancho useReducer proporciona una forma de gestionar el estado de manera más compleja y estructurada que simplemente utilizando el gancho useState. useReducer se puede utilizar para manejar estados más complejos o cuando se tienen múltiples estados que dependen entre sí.


### ReducerComponent

```jsx
import { useState } from "react";
// estado inicial
const initialState = [
  {
    id: 1,
    tareas: "explicar reducer",
    finalizada: false,
  },
];

const nuevaTarea = {
  id: 2,
  tarea: " Explicar useReducer",
  finalizada: false,
};

// accion
const agregarTarea = {
  type: "[TAREAS] Agregar Tarea",
  payload: nuevaTarea,
};

// reducer
const tareaReducer = (state = initialState, action = {}) => {
  if (action.type === "[TAREAS] Agregar Tarea") {
    return [...state, action.payload];
  }
  return state;
};


console.log(tareaReducer(initialState, agregarTarea));

export const ReducerComponent = () => {
  return (
    <>
      <div>Lista de tareas</div>
    </>
  );
};

```
# Explicación de `useReducer` en React

`useReducer` es un hook en React que se utiliza para manejar estados complejos de componentes. A menudo se prefiere cuando el estado del componente implica transiciones complejas de un estado a otro. `useReducer` es similar a `useState`, pero en lugar de manejar un único estado, `useReducer` administra un estado basado en una función reductora.

## Sintaxis

La sintaxis básica de `useReducer` es la siguiente:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## Uso de `useReducer` en React

- **state:** Representa el estado actual del componente.
- **dispatch:** Es una función utilizada para enviar acciones al reductor.
- **reducer:** Es una función que recibe el estado actual y una acción, y devuelve el nuevo estado. La acción describe qué tipo de cambio se debe realizar en el estado.
- **initialState:** Es el estado inicial del componente.

### Uso

1. **Definir el Reductor (reducer):** El reductor es una función que especifica cómo el estado del componente debe cambiar en respuesta a una acción. Toma el estado actual y una acción como argumentos y devuelve el nuevo estado.

2. **Definir el Estado Inicial (initialState):** Esto es lo que se utilizará como estado inicial del componente.

3. **Usar `useReducer`:** Llama a `useReducer` en tu componente para inicializar el estado y obtener la función `dispatch` para enviar acciones al reductor.

4. **Enviar Acciones al Reductor:** Utiliza la función `dispatch` para enviar acciones al reductor. Una acción es simplemente un objeto que describe el tipo de cambio que deseas realizar en el estado.

5. **El Reductor Actualiza el Estado:** El reductor recibe la acción y actualiza el estado del componente en función de esa acción.

### Ventajas

- **Manejo de Estados Complejos:** `useReducer` es útil para manejar estados complejos o cuando el estado depende del estado anterior o de varias acciones.
- **Centralización del Lógica de Estado:** Puede ayudar a centralizar la lógica de actualización del estado en un solo lugar, lo que facilita la comprensión y el mantenimiento del código.

### Ejemplo

```jsx
```javascript
import React, { useReducer } from 'react';

// Reductor
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Componente
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </>
  );
};

export default Counter;

```
### React DOM en React

React DOM es una biblioteca específica de React que se encarga de manipular el DOM (Document Object Model) en una aplicación web desarrollada con React.

#### ¿Qué es el DOM?

El DOM es una representación en forma de árbol de la estructura de un documento HTML o XML. Cada elemento en una página web, como etiquetas `<div>`, `<p>`, `<span>`, etc., es un nodo en este árbol. El DOM es dinámico y puede ser modificado mediante scripts, como JavaScript.

#### ¿Qué hace React DOM?

React utiliza una abstracción llamada Virtual DOM para mejorar el rendimiento de las actualizaciones en la interfaz de usuario. Cuando se realizan cambios en los componentes de React, en lugar de actualizar directamente el DOM del navegador, React crea una representación virtual del DOM en memoria. Luego, compara este Virtual DOM con el DOM real y determina los cambios mínimos necesarios para actualizar el DOM real de manera eficiente.

React DOM es la implementación específica de React para interactuar con el DOM del navegador. Se encarga de traducir los cambios en el Virtual DOM a operaciones de manipulación del DOM real. Esto incluye la creación, actualización y eliminación de elementos DOM según sea necesario para reflejar el estado actual de los componentes de React.

#### Uso de React DOM

Para utilizar React DOM en una aplicación React, primero necesitas importar la biblioteca:

```javascript
import ReactDOM from 'react-dom';
```
```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```
#### Usar las rutas dentro de la app : 

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </BrowserRouter>
);

```


