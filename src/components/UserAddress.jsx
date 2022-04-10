import { useUserQuery } from "../hooks/useUsers";

const UserAddress = () => {
  const { data } = useUserQuery();

  return (
    <h2>{`User Address: ${data.address.street} ${data.address.suite}, ${data.address.city}`}</h2>
  );
};

export default UserAddress;
