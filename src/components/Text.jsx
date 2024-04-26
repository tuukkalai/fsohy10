import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    normal: {
      color: theme.color.textPrimary,
      fontFamily: theme.font.sans,
      fontSize: theme.fontSize.small,
      lineHeight: theme.lineHeight.small,
      fontWeight: theme.fontWeight.normal,
    },
    secondary: {
      color: theme.color.textSecondary
    },
    serif: {
      fontFamily: theme.font.serif,
    },
    large: {
      fontSize: theme.fontSize.large,
      lineHeight: theme.lineHeight.large,
    },
    medium: {
      fontSize: theme.fontSize.medium,
      lineHeight: theme.lineHeight.medium,
    },
    bold: {
      fontWeight: theme.fontWeight.bold,
    }
  }
});

const Text = ({ color, fontSize, fontWeight, serif, style, ...props }) => {
  const textStyle = [
    styles.text.normal,
    color === "secondary" && styles.text.secondary,
    fontSize === "large" && styles.text.large,
    fontSize === "small" && styles.text.small,
    fontWeight === "bold" && styles.text.bold,
    serif === "serif" && styles.text.serif,
    style
  ];

  return <NativeText style={textStyle} {...props} />
};

export default Text;