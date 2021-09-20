import { useMutation } from "@apollo/client";
import { authorize } from "../qraphql/mutations";

const useSignIn = (credentials) => {
  const [signIn, result] = useMutation(authorize(credentials));

  console.log(result);
  console.log(signIn);
  return {};
};

export default useSignIn;
