import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.primaryBg,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" to="/" />
      <AppBarTab title="Sign In" to="/signin" />
    </View>
  );
};

export default AppBar;