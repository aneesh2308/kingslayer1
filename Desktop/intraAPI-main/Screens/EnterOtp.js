import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const EnterOtp = () => {
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
        <Text style={styles.maintext}>Enter OTP</Text>
        {/*text input*/}
        <View
          style={{
            width: "100%",
            height: 60,
            marginTop: 80,
          }}
        >
          <View style={{ position: "absolute", left: 40 }}>
            <Text style={{ fontSize: 11, color: "#535B65" }}>
              One time password
            </Text>
          </View>
          <View style={{ alignItems: "center", paddingTop: 15 }}>
            <TextInput style={styles.textbox} />
          </View>
        </View>
        {/*button */}
        <TouchableOpacity style={styles.Otpsent}>
          <Text style={{ color: "#1C2172", fontSize: 13, fontWeight: "bold" }}>
            VERIFY
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default EnterOtp;

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
