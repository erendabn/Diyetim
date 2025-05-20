import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./FloatingButton.style";
const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="plus" size={40} color={"white"} />
    </TouchableOpacity>
  );
};
export default FloatingButton;
