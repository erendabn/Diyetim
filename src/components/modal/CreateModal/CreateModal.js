import React, { useState } from "react";
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./CreateModal.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../../styles/colors";
import { DietModal } from "../DietModal/DietModal";

export const CreateModal = ({ isVisible, onClose }) => {
  const [dietModalVisible, setDietModalVisible] = useState(false);

  function handleDietModal() {
    setDietModalVisible(!dietModalVisible);
  }

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={"down"}
      onSwipeComplete={onClose}
      backdropOpacity={0.1}
      style={styles.modal}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Oluştur</Text>
        <TouchableOpacity style={styles.menu} onPress={handleDietModal}>
          <Text style={styles.menu_text}>Diyet Oluştur</Text>
          <Icon name="arrow-right" size={30} color={colors.green600} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.menu_text}>Menü Oluştur</Text>
          <Icon name="arrow-right" size={30} color={colors.green600} />
        </TouchableOpacity>
      </View>
      <DietModal isVisible={dietModalVisible} onClose={handleDietModal} />
    </Modal>
  );
};
