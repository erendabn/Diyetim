import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.green700,
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.green100,
  },
});
