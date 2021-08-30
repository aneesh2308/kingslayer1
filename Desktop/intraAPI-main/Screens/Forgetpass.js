import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { auth } from "../Config";

const Forgetpass = (props) => {
  const [email, setEmail] = useState("");

  const forget = () => {
    auth
      .sendPasswordResetEmail(email)
      .then((authUser) => {
        alert("Check your Email");
        props.navigation.navigate("EnterOtp");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "#191E63",
          "#191F64",
          "#191E62",
          "#1C237E",
          "#1F289C",
          "#1F289A",
        ]}
        style={styles.background}
      >
        <Text style={styles.maintext}>Forget Password?</Text>
        {/*text input*/}
        <View
          style={{
            width: "100%",
            height: 60,
            marginTop: 80,
          }}
        >
          <View style={{ position: "absolute", left: 40 }}>
            <Text style={{ fontSize: 11, color: "#535B65" }}>Email</Text>
          </View>
          <View style={{ alignItems: "center", paddingTop: 15 }}>
            <TextInput
              style={styles.textbox}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        {/*button */}
        {/* onpress add the otp sent screen */}
        <TouchableOpacity style={styles.Otpsent} onPress={forget}>
          <Text style={{ color: "#1C2172", fontSize: 13, fontWeight: "bold" }}>
            OTP SENT
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Forgetpass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  maintext: {
    fontSize: 26,
    fontWeight: "700",
    color: "white",
    marginTop: 120,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",

    alignItems: "center",
  },

  Otpsent: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textbox: {
    width: "80%",
    borderBottomWidth: 0.3,
    borderBottomColor: "#535B65",
    color: "white",
    padding: 5,
  },
});
