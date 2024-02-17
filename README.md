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


