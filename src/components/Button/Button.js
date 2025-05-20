import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "./Button.style";

const Button = ({ text, onPress, theme = "primary", loading }) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={30} color={"white"} />
      ) : (
        <Text style={styles[theme].text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
