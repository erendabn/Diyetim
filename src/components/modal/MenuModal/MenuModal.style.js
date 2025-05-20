import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const deviceSize = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    backgroundColor: "white",
    padding: 5,
  },
  modal: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
