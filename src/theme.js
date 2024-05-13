import { Platform } from "react-native";

const theme = {
  color: {
    textPrimary: "#444444",
    textSecondary: "#777787",
    primaryBg: "#cdedff",
    secondaryBg: "#fefdfd",
  },
  font: {
    sans: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
    serif: Platform.select({
      ios: "Georgia",
      android: "serif",
      default: "System",
    }),
    mono: Platform.select({
      ios: "Menlo",
      android: "monospace",
      default: "System",
    }),
  },
  fontSize: {
    xsmall: 13,
    small: 16,
    medium: 22,
    large: 48,
  },
  lineHeight: {
    small: 18,
    medium: 24,
    large: 48,
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
