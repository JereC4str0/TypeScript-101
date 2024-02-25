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
