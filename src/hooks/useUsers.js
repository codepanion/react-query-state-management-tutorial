import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  return await response.json();
};

const updateUserName = async (userName) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",
    body: JSON.stringify({
      name: userName,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return await response.json();
};

export const useUserQuery = () =>
  useQuery(["user"], fetchUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

export const useUpdateUserNameMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUserName, {
    onMutate: async (userName) => {
      await queryClient.cancelQueries("user");

      const prevUserData = queryClient.getQueryData(["user"]);

      queryClient.setQueryData(["user"], (prevData) => ({
        ...prevData,
        name: userName,
      }));

      return { prevUserData };
    },
    onSuccess: (newUser) => {
      queryClient.setQueryData(["user"], newUser);
    },
    onError: (error, userName, { prevUserData }) => {
      queryClient.setQueryData(["user"], prevUserData);
    },
  });
};
