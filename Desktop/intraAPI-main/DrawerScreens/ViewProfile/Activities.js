import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";

// import { auth, db } from "../../Config";

const Activities = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.TitileHeader}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
            Activities
          </Text>
        </View>
      </View>
      <Text>Activities</Text>
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
});
