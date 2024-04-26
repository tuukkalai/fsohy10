import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  heading: {
    padding: 10,
    color: "#fefefe",
    fontSize: 26,
    fontWeight: "700"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.heading}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;