import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./MenuModal.style";
import { SafeAreaView } from "react-native-safe-area-context";

export const MenuModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={"down"}
      onSwipeComplete={onClose}
      style={styles.modal}
    >
      <View style={styles.container}>
        <Text>MenuModal</Text>
      </View>
    </Modal>
  );
};
