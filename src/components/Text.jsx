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
      color: theme.color.textSecondary,
    },
    code: {
      fontFamily: theme.font.mono,
      fontSize: theme.fontSize.xsmall,
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
    },
    center: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

const Text = ({
  color,
  fontSize,
  fontWeight,
  code,
  style,
  align,
  ...props
}) => {
  const textStyle = [
    styles.text.normal,
    color === "secondary" && styles.text.secondary,
    fontSize === "large" && styles.text.large,
    fontSize === "small" && styles.text.small,
    fontWeight === "bold" && styles.text.bold,
    align === "center" && styles.text.center,
    code && styles.text.code,
    style,
  ];

  return (
    <NativeText
      style={textStyle}
      {...props}
    />
  );
};

export default Text;
