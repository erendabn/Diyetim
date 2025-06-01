import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const deviceSize = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: deviceSize.height / 1.15,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
