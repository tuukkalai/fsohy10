import React, { useEffect } from "react";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const handleSignOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  };

  useEffect(() => {
    handleSignOut();
  }, []);

  return <></>;
};

export default SignOut;
