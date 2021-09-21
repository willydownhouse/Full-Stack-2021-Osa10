import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    //main: "System",
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  appBarTab: {
    color: "#fff",
    fontSize: 20,
    cursor: "pointer",
  },
  loginInput: {
    height: 35,
    backgroundColor: "#ffffff",
  },
  loginInputWrapper: {
    minHeight: 35,
    margin: 10,
    borderColor: "#586069",
    borderWidth: 1,
    borderRadius: 2,
  },
  loginInputWrapperError: {
    minHeight: 35,
    margin: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 2,
  },
};

export default theme;
