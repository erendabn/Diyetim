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
  title: {
    fontSize: 20,
    borderBottomWidth: 1,
    textAlign: "center",
    color: colors.green600,
    borderColor: "#bdbdbd",
  },
  menu: {
    borderWidth: 1,
    borderColor: colors.green400,
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu_text: {
    color: colors.green900,
  },
});
