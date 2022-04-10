import { useUserQuery } from "../hooks/useUsers";

const UserName = () => {
  const { data } = useUserQuery();

  return <h2>User Name: {data.name}</h2>;
};

export default UserName;
