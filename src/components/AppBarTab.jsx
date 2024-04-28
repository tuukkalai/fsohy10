import { Pressable, StyleSheet } from 'react-native';
import Text from "./Text";
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  nav: {
    padding: 8
  }
})

const AppBarTab = ({ title, to }) => {
  return (
    <Pressable style={styles.nav}>
      <Link to={to}>
        <Text fontSize="medium" fontWeight="bold" serif style={{ paddingTop: 10 }}>
          {title}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;