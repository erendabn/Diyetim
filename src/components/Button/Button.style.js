import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const base_style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ededed",
  },
  text: {
    fontSize: 20,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.green600,
    },
    text: {
      ...base_style.text,
      color: "white",
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: "white",
    },
    text: {
      ...base_style.text,
      color: colors.green600,
    },
  }),
};
