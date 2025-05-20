import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#afafaf",
    borderRadius: 20,
  },
  input: {
    flex: 1,
    color: "black",
  },
});
