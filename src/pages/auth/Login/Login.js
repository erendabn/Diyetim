import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../../firebase.config";

import styles from "./Login.style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";

const initialValues = {
  email: "",
  password: "",
};

export default function Login({ navigation }) {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  function handleButton() {
    navigation.navigate("SignPage");
  }
  async function handleLogin(formValues) {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      showMessage({
        message: "Başarılı",
        type: "success",
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showMessage({
        message: error.code,
        type: "danger",
      });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Diyetim App</Text>
      </View>
      <View style={styles.input_container}>
        <Formik initialValues={initialValues} onSubmit={handleLogin}>
          {({ handleChange, handleSubmit, values }) => (
            <>
              <Input
                placeholder="Email"
                icon={"mail"}
                onTextChange={handleChange("email")}
                value={values.email}
              />
              <Input
                placeholder="Password"
                icon={"key"}
                onTextChange={handleChange("password")}
                value={values.password}
                isSecure
              />
              <Button
                text="Giriş yap"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Button text="Kayıt Ol" onPress={handleButton} theme="secondary" />
      </View>
    </SafeAreaView>
  );
}
