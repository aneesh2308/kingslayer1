import React, { useState, Component } from "react";
import {} from "react-native";
import {} from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {} from "react-native-gesture-handler";

export default class SellBookFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "Saved" };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }
  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }
  render() {
    return (
      <View style={styles.conatiner}>
        
        {/*header */}
        <View style={styles.header}>
          <View style={{ width: "20%", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              activeOpacity={0.5}
            >
              <Ionicons name="chevron-back" size={35} color="#434B56" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "60%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#434B56",
              }}
            >
              Filter
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*buttons */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 40,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => this.selectionOnPress("Saved")}>
            <View
              style={{
                backgroundColor:
                  this.state.selectedButton === "Saved" ? "#1C2172" : "#E72C83",
                paddingHorizontal: 20,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                height: 30,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>To be sold</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectionOnPress("Applied")}>
            <View
              style={{
                backgroundColor:
                  this.state.selectedButton === "Applied"
                    ? "#1C2172"
                    : "#E72C83",
                paddingHorizontal: 20,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                height: 30,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Already sold</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* books */}
        <View style={styles.books}>
          <Image
            style={styles.bookdesc}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU",
            }}
          />
          <View
            style={{
              width: "50%",
              paddingLeft: 20,
            }}
          >
            <Text style={{ color: "#534b56", fontSize: 16, fontWeight: "700" }}>
              Lorem
            </Text>
            <Text style={{ color: "#434b56", fontSize: 15, fontWeight: "700" }}>
              $755
            </Text>
          </View>
        </View>
        {/* books */}
        <View style={styles.books}>
          <Image
            style={styles.bookdesc}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU",
            }}
          />
          <View
            style={{
              width: "50%",
              paddingLeft: 20,
            }}
          >
            <Text style={{ color: "#534b56", fontSize: 16, fontWeight: "700" }}>
              Lorem
            </Text>
            <Text style={{ color: "#434b56", fontSize: 15, fontWeight: "700" }}>
              $755
            </Text>
          </View>
        </View>
        {/* books */}
        <View style={styles.books}>
          <Image
            style={styles.bookdesc}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU",
            }}
          />
          <View
            style={{
              width: "50%",
              paddingLeft: 20,
            }}
          >
            <Text style={{ color: "#534b56", fontSize: 16, fontWeight: "700" }}>
              Lorem
            </Text>
            <Text style={{ color: "#434b56", fontSize: 15, fontWeight: "700" }}>
              $755
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 40,
  },
  books: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 0.25,
    borderBottomColor: "#e4e4e4",
    paddingVertical: 20,
  },
  bookdesc: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
});
