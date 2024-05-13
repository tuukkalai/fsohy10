import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
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
  inputError: {
    borderColor: "#ee2332",
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Min username length: 3")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Min password length: 8")
    .required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, formik.errors.username && formik.touched.username && styles.inputError]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[styles.input, formik.errors.password && formik.touched.password && styles.inputError]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
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
