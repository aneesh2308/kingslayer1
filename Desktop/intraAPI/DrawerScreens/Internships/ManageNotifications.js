import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";


const ManageNotifications = (props) => {
  const [selectedButton, setSelectedButton] = useState("Saved");

  return (
    <View style={styles.container}>
      
      {/* ----------------------------header--------------------------------------- */}
      <View style={styles.TitileHeader}>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            activeOpacity={0.5}
          >
            <Ionicons
              name="md-chevron-back-outline"
              size={35}
              color="#434B56"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#434B56",
              marginLeft: 15,
            }}
          >
            Manage Notifications
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            alignItems: "flex-end",
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
            }}
            size={28}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      {/* ---------------------------- buttons saved applied--------------------------------------- */}
      <Text style={styles.title}>Notifications</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 40,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => selectedButton("Saved")}>
          <View
            style={{
              backgroundColor:
                selectedButton === "Saved" ? "#1C2172" : "#E72C83",
              paddingHorizontal: 20,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>On</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedButton("Applied")}>
          <View
            style={{
              backgroundColor:
                selectedButton === "Applied" ? "#1C2172" : "#E72C83",
              paddingHorizontal: 20,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Off</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* ---------------------------- internship applied--------------------------------------- */}
    </View>
  );
};
export default ManageNotifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
    height: 50,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 0.3,
  },
  title: {
    color: "#a1a1a1",
    fontSize: 14,
    fontWeight: "700",
    padding: 10,
  },
  avatar: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    elevation: 10,
  },
});
