import { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import Modal from "react-native-modal";

import styles from "./Diyetlerim.style";
import app from "../../../../firebase.config";
import FloatingButton from "../../../components/FloatingButton/FloatingButton";
import { CreateModal } from "../../../components/modal/CreateModal/CreateModal";

const Diyetlerim = ({ navigation }) => {
  const [dietList, setDietList] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const auth = getAuth(app);
  const db = getDatabase(app);
  const diets = ref(db, `diyetlerim/${auth.currentUser.uid}`);
  useEffect(() => {
    onValue(diets, (snapshot) => {
      const data = snapshot.val();
      setDietList(data);
    });
  }, []);
  console.log(dietList);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{auth.currentUser.email.split("@", 1)}</Text>
      <Text>Diyetlerim</Text>
      <FloatingButton
        onPress={() => {
          setModalVisible(!isModalVisible);
        }}
      />
      <CreateModal
        isVisible={isModalVisible}
        onClose={() => {
          setModalVisible(!isModalVisible);
        }}
      />
    </SafeAreaView>
  );
};

export default Diyetlerim;
