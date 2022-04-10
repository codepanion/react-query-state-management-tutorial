import { useState } from "react";
import { useUserQuery, useUpdateUserNameMutation } from "../hooks/useUsers";

const UserNameForm = () => {
  const { data } = useUserQuery();
  const [userName, setUserName] = useState(data.name);
  const userNameMutation = useUpdateUserNameMutation();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    userNameMutation.mutate(userName);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserNameForm;
