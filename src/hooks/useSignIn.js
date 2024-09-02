import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const res = await mutate({
      variables: { credentials: { username, password } },
    });
    return res;
  };

  return [signIn, result];
};

export default useSignIn;
