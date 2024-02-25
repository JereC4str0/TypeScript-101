import { useState } from "react";

export const useForm = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return {
    formState,
    onInputChange
  };
};
