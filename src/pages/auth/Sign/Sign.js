import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";
import app from "../../../../firebase.config";

import styles from "./Sign.style";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const initialValues = {
  email: "",
  password: "",
  repassword: "",
};

export default function Sign({ navigation }) {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  function handleButton() {
    navigation.goBack();
  }
  async function handleLogin(formValues) {
    if (formValues.password === formValues.repassword) {
      try {
        setLoading(true);
        await createUserWithEmailAndPassword(
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
    } else {
      showMessage({
        message: "Lütfen aynı şifreyi giriniz",
        type: "warning",
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
              <Input
                placeholder="RePassword"
                icon={"key"}
                onTextChange={handleChange("repassword")}
                value={values.repassword}
                isSecure
              />
              <Button
                text="Kayıt Ol"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Button text="Geri" onPress={handleButton} theme="secondary" />
      </View>
    </SafeAreaView>
  );
}
