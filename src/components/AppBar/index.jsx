import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.primaryBg,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab
          title="Repositories"
          to="/"
        />
        <AppBarTab
          title="Sign In"
          to="/signin"
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
