import { useMutation, useApolloClient } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const res = await mutate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(res);
    apolloClient.resetStore();
    return res;
  };

  return [signIn, result];
};

export default useSignIn;
