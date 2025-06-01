import React, { useState } from "react";
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./DietModal.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../../styles/colors";

export const DietModal = ({ isVisible, onClose }) => {
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
        <Text>Diet Modal</Text>
      </View>
    </Modal>
  );
};
