import { useState } from "react";

export const useFetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const fetchUsers = async () => {
  
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}`
      );
      const data = await response.json();
      setUsers(data);
      setisLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [endpoint]);

  return {
    data,
    isLoading,
  };
};
