import React, { useRef, useState,useEffect } from "react";

export const FormularioComponent = () => {
  
  const focusRef = useRef()

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

  useEffect(() => {
    focusRef.current.focus()
  }, []);

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
          ref={focusRef}
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
