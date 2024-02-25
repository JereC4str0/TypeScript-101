import { useFetchData } from "./hooks/userFetchData";

export const UserList = (endpoint) => {
  const { data, isLoading } = useFetchData(endpoint);
  return (
    <>
      <ul>
        {
          (endpoint = "users"
            ? users.map((item) => <li key={item.id}>{item.name}</li>)
            : users.map((item) => <li key={item.id}>{item.body}</li>))
        }
      </ul>
    </>
  );
};
