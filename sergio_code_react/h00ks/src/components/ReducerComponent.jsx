import React from "react";
import { useForm } from "../hooks/useForm";

const ReducerComponent = () => {
  const { formState, onInputChange } = useForm();
  
  const agregarTareaForm = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <form onSubmit={agregarTareaForm}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingrese tarea"
            onChange={onInputChange}
            value={formState.tarea} // Acceder a la propiedad correcta de formState
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ReducerComponent; // Exportación predeterminada
