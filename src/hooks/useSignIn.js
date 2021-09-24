import { useMutation } from "@apollo/client";
import { authorize } from "../qraphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router";

const useSignIn = () => {
  const [mutate, result] = useMutation(authorize);

  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const history = useHistory();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    await authStorage.setAccessToken(data.authorize.accessToken);
    client.resetStore();
    history.push("/");
  };

  return [signIn, result];
};

export default useSignIn;
