import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.secondaryBg,
    padding: 8,
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#444444",
    padding: 8,
  },
  button: {
    backgroundColor: "#4561e4",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) => console.log(values),
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      <Pressable
        style={styles.button}
        onPress={formik.handleSubmit}
      >
        <Text
          align="center"
          style={{ color: "#ffffff" }}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
