import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";


export default class MyInternships extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: null };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }
  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }
  render() {
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
            <Ionicons
              name="md-chevron-back-outline"
              size={35}
              color="#434B56"
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#434B56",
                marginLeft: 15,
              }}
            >
              My Internships
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
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 60,
            borderBottomColor: "#e4e4e4",
            borderBottomWidth: 0.25,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => this.selectionOnPress("Saved")}>
            <View
              style={{
                backgroundColor:
                  this.state.selectedButton === "Saved" ? "#1C2172" : "#E72C83",
                paddingHorizontal: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                alignItems: "center",
                height: 30,
                margin: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Saved</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectionOnPress("Applied")}>
            <View
              style={{
                backgroundColor:
                  this.state.selectedButton === "Applied"
                    ? "#1C2172"
                    : "#E72C83",
                paddingHorizontal: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                alignItems: "center",
                height: 30,
                margin: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Applied</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* ---------------------------- internship applied--------------------------------------- */}
        <TouchableOpacity>
          <View style={styles.messages}>
            <View style={styles.avatar}>
              <Avatar.Image
                source={{
                  uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                size={50}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                marginLeft: 15,
                height: "100%",
                width: "75%",
                borderBottomWidth: 0.3,
                borderBottomColor: "#e4e4e4",
              }}
            >
              <Text style={styles.title}>Johny Vino</Text>

              <Text style={styles.subtitle}>A B C Pvt.Ltd</Text>
              <View style={{ flexDirection: "row" }}>
                <EvilIcons name="location" size={18} color="black" />
                <Text
                  style={{ color: "#a1a1a1", fontSize: 12, fontWeight: "500" }}
                >
                  India
                </Text>
              </View>
              <Text style={styles.bluetext}>3 weeks ago</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
    height: 50,
  },
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 5,
  },
  subtitle: {
    color: "#a1a1a1",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 5,
  },
  messages: {
    width: "100%",

    height: 100,
    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",
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
  bluetext: {
    color: "#1C2172",
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: 5,
    paddingLeft: 5,
  },
});
