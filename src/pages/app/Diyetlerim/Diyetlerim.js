import { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import Modal from "react-native-modal";

import styles from "./Diyetlerim.style";
import app from "../../../../firebase.config";
import FloatingButton from "../../../components/FloatingButton/FloatingButton";
import { MenuModal } from "../../../components/modal/MenuModal/MenuModal";

const Diyetlerim = ({ navigation }) => {
  const [roomList, setRoomList] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const auth = getAuth(app);
  const db = getDatabase(app);
  const rooms = ref(db, "diyetlerim/");
  useEffect(() => {
    onValue(rooms, (snapshot) => {
      const data = snapshot.val();
      setRoomList(data);
    });
  }, []);
  console.log(roomList);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{auth.currentUser.email.split("@", 1)}</Text>
      <Text>Diyetlerim</Text>
      <FloatingButton
        onPress={() => {
          setModalVisible(!isModalVisible);
        }}
      />
      <MenuModal
        isVisible={isModalVisible}
        onClose={() => {
          setModalVisible(!isModalVisible);
        }}
      />
    </SafeAreaView>
  );
};

export default Diyetlerim;
