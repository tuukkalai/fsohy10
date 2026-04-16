import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";

import { useQuery } from "@apollo/client";
import { WHOAMI } from "../../graphql/queries";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.color.primaryBg,
  },
});

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
        <AppBarTab
          title="Sign Out"
          to="/signout"
          visible={!loading && currentUser}
        />
        <AppBarTab
          title="Sign In"
          to="/signin"
          visible={!loading && !currentUser}
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
