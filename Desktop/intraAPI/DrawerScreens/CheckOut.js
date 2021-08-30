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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Avatar } from "react-native-paper";

const CheckOut = (props) => {
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
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
            marginTop: 0,
            paddingHorizontal: 15,
            marginTop: 60,
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
              color="#DDDDDD"
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
              name="radio-button-unchecked"
              size={40}
              color="#DDDDDD"
            />
            <Text style={{ fontSize: 13, color: "#8F8F8F" }}>Payment</Text>
          </View>
        </View>
        {/*------------------------------------------------Billing address------------------------------------------- */}
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              marginBottom: 30,
              paddingHorizontal: 15,
            }}
          >
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={30}
              color="#202AA8"
            />
            <Text style={{ marginLeft: 15 }}>
              Billing address is the same as delivery address
            </Text>
          </View>
          {/*------------------------------------------------Street 1------------------------------------------- */}
          <View
            style={{
              width: "100%",
              heigth: 150,
              backgroundColor: "white",
              marginBottom: 35,
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ color: "#A9A9A9", marginBottom: 5 }}>Street 1</Text>
            <TextInput
              value="It is a long established fact"
              style={styles.input}
            />
          </View>
          <View
            style={{
              width: "100%",
              heigth: 150,
              backgroundColor: "white",
              marginBottom: 35,
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ color: "#A9A9A9", marginBottom: 5 }}>Street 2</Text>
            <TextInput value="It is a long established" style={styles.input} />
          </View>
          <View
            style={{
              width: "100%",
              heigth: 150,
              backgroundColor: "white",
              marginBottom: 35,
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ color: "#A9A9A9", marginBottom: 5 }}>City</Text>
            <TextInput value="set dolar" style={styles.input} />
          </View>
          <View
            style={{
              width: "100%",
              heigth: 150,
              backgroundColor: "white",
              marginBottom: 35,
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ color: "#A9A9A9", marginBottom: 5 }}>Pincode</Text>
            <TextInput value="123456" style={styles.input} />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "50%",
                heigth: 150,
                backgroundColor: "white",
                paddingHorizontal: 15,
              }}
            >
              <Text style={{ color: "#A9A9A9", marginBottom: 5 }}>State</Text>
              <TextInput value="set" style={styles.input} />
            </View>
            <View
              style={{
                width: "50%",
                heigth: 150,
                backgroundColor: "white",
                paddingHorizontal: 15,
              }}
            >
              <Text style={{ color: "#A9A9A9", marginBottom: 5 }}>Country</Text>
              <TextInput value="dollar" style={styles.input} />
            </View>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CheckOut2")}
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

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 0,
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
