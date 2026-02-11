import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import { useQuery } from "@apollo/client";
import { WHOAMI } from "../../graphql/queries";

import { Pressable } from "react-native";
import Text from "../Text";

import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.primaryBg,
  },
  nav: {
    padding: 8,
  },
});

const SignOutTab = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const handleSignOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  return (
    <Pressable onPress={handleSignOut}>
      <Text
        style={styles.nav}
        fontSize="medium"
        fontWeight="bold"
      >
        Sign Out
      </Text>
    </Pressable>
  );
};

const AppBar = () => {
  const { loading, data } = useQuery(WHOAMI, { fetchPolicy: "network-only" });
  const currentUser = data?.me;
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab
          title="Repositories"
          to="/"
        />
        { !loading && currentUser ? (
          <SignOutTab />
        ) : (
          <AppBarTab
            title="Sign In"
            to="/signin"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
