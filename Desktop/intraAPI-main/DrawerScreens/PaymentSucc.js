import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, RadioButton } from "react-native-paper";

const PaymentSucc = (props) => {
  return (
    <View style={styles.container}>
      {/* ---------------------------------------------Header------------------------------------- */}

      <Ionicons name="checkmark-circle-sharp" size={90} color="#202AA8" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#434B56",
          marginTop: 15,
          marginBottom: 25,
        }}
      >
        Payment Successful
      </Text>
      <Text
        style={{
          lineHeight: 20,
          fontSize: 13,
          color: "#434B56",
          textAlign: "center",
        }}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
      </Text>
      <Text style={{ color: "#202AA8", fontSize: 13, marginTop: 25 }}>
        Your Order No. 987654321
      </Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home1")}
        style={styles.addt}
        activeOpacity={0.7}
      >
        <View style={styles.add}>
          <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
            BACK TO HOME
          </Text>
        </View>
      </TouchableOpacity>

      {/* ---------------------------------------------Bottom button------------------------------------- */}
    </View>
  );
};

export default PaymentSucc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 0.3,
    borderBottomColor: "#E4E4E4",
    paddingHorizontal: 15,
  },
  bottomTab: {
    height: "10%",
    backgroundColor: "white",
  },
  add: {
    width: "100%",
    backgroundColor: "#a1a1a1",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  addt: {
    height: 50,
    backgroundColor: "#a1a1a1",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 50,
  },
});
