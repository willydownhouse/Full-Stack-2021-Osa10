import { useMutation } from "@apollo/client";
import { authorize } from "../qraphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(authorize);

  const signIn = ({ username, password }) => {
    mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
  };

  return [signIn, result];
};

export default useSignIn;
