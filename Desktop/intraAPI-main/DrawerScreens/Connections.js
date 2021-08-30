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
import { Avatar } from "react-native-paper";
import ConnectionList from "../CustomLists/DrawerList/ConnectionsList";

const Connections = (props) => {
  return (
    <View style={styles.container}>
      {/* ---------------------------------------------Header------------------------------------- */}
      <View style={styles.header}>
        <View
          style={{
            width: "85%",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <View style={{ position: "relative", right: 15 }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              activeOpacity={0.5}
            >
              <Ionicons name="chevron-back-outline" size={35} color="#434b56" />
            </TouchableOpacity>
          </View>
          <Ionicons name="search" size={22} color="#434b56" />
          <TextInput
            placeholder="Search people"
            style={{
              fontSize: 14,
              color: "#434b56",
              fontWeight: "bold",
              marginLeft: 5,
              backgroundColor: "white",
              width: "80%",
              height: 40,
            }}
          />
        </View>
        <View
          style={{
            width: "15%",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: 10,
          }}
        >
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("FilterConnection")}
            activeOpacity={0.5}
          >
            <Image
              source={require("../assets/menu.png")}
              style={{ height: 100, width: 100, tintColor: "#434B56" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* ---------------------------------------------Results------------------------------------- */}
      <View
        style={{
          width: "100%",
          height: 35,
          backgroundColor: "#DDDEE0",
          paddingHorizontal: 10,
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#a1a1a1", fontSize: 13, fontWeight: "bold" }}>
          233 Results
        </Text>
      </View>
      {/* ---------------------------------------------Chat1------------------------------------- */}

      <ConnectionList navigation={props.navigation} />
    </View>
  );
};

export default Connections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    paddingHorizontal: 15,
  },
});
