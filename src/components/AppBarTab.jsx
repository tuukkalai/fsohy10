import { Pressable } from 'react-native';
import Text from "./Text";


const AppBarTab = ({ title }) => {
  return (
    <Pressable>
      <Text fontSize="medium" fontWeight="bold" serif style={{ paddingTop: 10 }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;