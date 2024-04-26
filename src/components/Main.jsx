import { View, StyleSheet } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

import theme from "../theme";


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.secondaryBg,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
