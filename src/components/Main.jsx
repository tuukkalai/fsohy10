import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";
import Text from "./Text";

import theme from "../theme";


const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.primaryBg,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text
        fontSize="large"
        fontWeight="bold"
        serif="serif"
        style={{ marginTop: 10, paddingBottom: 10 }}>
          Rate Repository Application
      </Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
