import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import Text from "./Text";

import theme from "../theme";


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.primaryBg,
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
