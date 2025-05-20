import { TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./Input.style";

const Input = ({ placeholder, icon, onTextChange, value, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={"gray"}
        value={value}
        onChangeText={onTextChange}
        secureTextEntry={isSecure}
        maxLength={40}
        autoCapitalize="none"
      />
      <Icon name={icon} size={30} />
    </View>
  );
};

export default Input;
