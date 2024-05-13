import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  nav: {
    padding: 8,
  },
});

const AppBarTab = ({ title, to }) => {
  return (
    <Pressable>
      <Link to={to}>
        <Text
          style={styles.nav}
          fontSize="medium"
          fontWeight="bold"
        >
          {title}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
