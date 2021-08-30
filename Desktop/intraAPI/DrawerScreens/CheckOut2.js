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
import { Avatar, RadioButton } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CheckOut2 = (props) => {
  const [checked, setChecked] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "90%", alignItems: "center" }}>
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
            <Text style={{ fontSize: 13, color: "#8F8F8F" }}>Delivery</Text>
          </View>
          <View
            style={{
              width: "28%",
              borderColor: "#DDDDDD",
              borderWidth: 1,
              height: 0,
              marginBottom: 16,
            }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons
              name="radio-button-checked"
              size={40}
              color="#DDDDDD"
            />
            <Text style={{ fontSize: 13, color: "#8F8F8F" }}>Payment</Text>
          </View>
        </View>
        {/*------------------------------------------------1st section------------------------------------------- */}
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "white",
            justifyContent: "center",
            paddingHorizontal: 15,
            marginTop: 35,
          }}
        >
          <View
            style={{ width: "100%", height: "50%", justifyContent: "center" }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#434B56" }}
            >
              Standard Delivery
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: "50%",
              paddingBottom: 10,
              backgroundColor: "white",
            }}
          >
            <View style={{ width: "90%" }}>
              <Text style={{ fontSize: 14, lineHeight: 20 }}>
                Order will be delivered betweem 3 - 5 buisness days
              </Text>
            </View>
            <View style={{ width: "10%", alignItems: "flex-end" }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                uncheckedColor="grey"
                color="#1C2172"
              />
            </View>
          </View>
        </View>
        {/*------------------------------------------------2nd section------------------------------------------- */}
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "white",
            justifyContent: "center",
            paddingHorizontal: 15,
            marginTop: 5,
          }}
        >
          <View
            style={{ width: "100%", height: "50%", justifyContent: "center" }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#434B56" }}
            >
              Next Day Delivery
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: "50%",
              paddingBottom: 10,
              backgroundColor: "white",
            }}
          >
            <View style={{ width: "90%" }}>
              <Text style={{ fontSize: 14, lineHeight: 20 }}>
                Place your order before 6pm and your items will be delivered the
                next day
              </Text>
            </View>
            <View style={{ width: "10%", alignItems: "flex-end" }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                uncheckedColor="grey"
                color="#1C2172"
              />
            </View>
          </View>
        </View>
        {/*------------------------------------------------3rd section------------------------------------------- */}
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "white",
            justifyContent: "center",
            paddingHorizontal: 15,
            marginTop: 25,
          }}
        >
          <View
            style={{ width: "100%", height: "50%", justifyContent: "center" }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#434B56" }}
            >
              Nominated Delivery
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: "50%",
              paddingBottom: 10,
            }}
          >
            <View style={{ width: "90%" }}>
              <Text style={{ fontSize: 14, lineHeight: 20 }}>
                Pick a particular date from the calender and order will be
                delivered on selected date
              </Text>
            </View>
            <View style={{ width: "10%", alignItems: "flex-end" }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                uncheckedColor="grey"
                color="#1C2172"
              />
            </View>
          </View>
        </View>
      </View>
      {/*------------------------------------------------Next Button------------------------------------------- */}
      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
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

export default CheckOut2;

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
