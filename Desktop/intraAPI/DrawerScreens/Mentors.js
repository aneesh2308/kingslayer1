import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, Button } from "react-native-paper";
import MentorList from "../CustomLists/DrawerList/MentorList";

const Mentors = (props) => {
  return (
    <View style={styles.container}>
      
      {/* ----------------------------header--------------------------------------- */}
      <View style={styles.TitileHeader}>
        <View
          style={{ width: "80%", flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.navigation.goBack()}
          >
            <Ionicons
              name="md-chevron-back-outline"
              size={35}
              color="#434B56"
            />
          </TouchableOpacity>
          <Text style={styles.Heading}>Mentors</Text>
        </View>
        <View style={{ width: "20%", alignItems: "flex-end" }}></View>
      </View>

      <MentorList navigation={props.navigation} />
    </View>
  );
};

export default Mentors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 40,
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
  Heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
  mentorlist: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 0.3,
  },
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
  },
  subtitle: { color: "#434B56", fontSize: 12 },
  time: { fontSize: 12, color: "#434B56" },
});
