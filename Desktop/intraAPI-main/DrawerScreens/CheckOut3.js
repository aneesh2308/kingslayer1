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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, RadioButton } from "react-native-paper";

const CheckOut3 = (props) => {
  const [checked, setChecked] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "90%" }}>
        {/*------------------------------------------------Header------------------------------------------- */}
        <View style={styles.header}>
          <View style={{ position: "relative", right: 15 }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              activeOpacity={0.5}
            >
              <Ionicons name="chevron-back-outline" size={35} color="#434b56" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 24,
              color: "#434b56",
              fontWeight: "bold",
              marginLeft: 0,
            }}
          >
            Checkout
          </Text>
        </View>
        {/*------------------------------------------------Progress Bar------------------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 0,
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            paddingHorizontal: 15,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <MaterialIcons
              name="radio-button-checked"
              size={40}
              color="#202AA8"
            />
            <Text style={{ fontSize: 13 }}>Address</Text>
          </View>
          <View
            style={{
              width: "28%",
              borderColor: "#202AA8",
              borderWidth: 1,
              height: 0,
              marginBottom: 16,
            }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons
              name="radio-button-checked"
              size={40}
              color="#202AA8"
            />
            <Text style={{ fontSize: 13, color: "black" }}>Delivery</Text>
          </View>
          <View
            style={{
              width: "28%",
              borderColor: "#202AA8",
              borderWidth: 1,
              height: 0,
              marginBottom: 16,
            }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons
              name="radio-button-checked"
              size={40}
              color="#202AA8"
            />
            <Text style={{ fontSize: 13, color: "black" }}>Payment</Text>
          </View>
        </View>
        {/*------------------------------------------------Payment Options------------------------------------------- */}
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            justifyContent: "flex-start",
            marginTop: 30,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#434B56" }}>
            Payment Options
          </Text>
        </View>
        {/*------------------------------------------------Payment Options------------------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            marginBottom: 35,
            paddingHorizontal: 5,
          }}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
            uncheckedColor="grey"
            color="#202AA8"
          />
          <Text style={{ fontSize: 15, color: "#545A6B", marginLeft: 5 }}>
            Credit/Debit Card
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            marginBottom: 35,
            paddingHorizontal: 5,
          }}
        >
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
            uncheckedColor="grey"
            color="#1C2172"
          />
          <Text style={{ fontSize: 15, color: "#545A6B", marginLeft: 5 }}>
            Cash on Delivery
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            marginBottom: 35,
            paddingHorizontal: 5,
          }}
        >
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
            uncheckedColor="grey"
            color="#1C2172"
          />
          <Text style={{ fontSize: 15, color: "#545A6B", marginLeft: 5 }}>
            Paytm/Wallets
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            marginBottom: 35,
            paddingHorizontal: 5,
          }}
        >
          <RadioButton
            value="fourth"
            status={checked === "fourth" ? "checked" : "unchecked"}
            onPress={() => setChecked("fourth")}
            uncheckedColor="grey"
            color="#1C2172"
          />
          <Text style={{ fontSize: 15, color: "#545A6B", marginLeft: 5 }}>
            Net Banking
          </Text>
        </View>
      </View>
      {/*------------------------------------------------Next Button------------------------------------------- */}
      <View style={{ width: "100%", height: "10%", paddingHorizontal: 15 }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Summary")}
          style={styles.addt}
          activeOpacity={0.7}
        >
          <View style={styles.add}>
            <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
              NEXT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 60,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    paddingHorizontal: 15,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    fontSize: 17,
  },
  add: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 20,
  },
  add: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  addt: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 20,
  },
});
