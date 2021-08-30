import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Avatar } from "react-native-paper";

import { Rating, AirbnbRating } from "react-native-ratings";

const MentorDetail = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* ----------------------------------------------Image------------------------------------------------ */}
        <View style={{ width: "100%", height: 400, backgroundColor: "grey" }}>
          <ImageBackground style={styles.img} source={item.img}>
            <View style={styles.header}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.5}
                >
                  <Ionicons
                    name="chevron-back-outline"
                    size={35}
                    color="#434b56"
                    style={{ position: "relative", right: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 18 }}>{item.name}</Text>
              <Text style={{ color: "#a1a1a1" }}>{item.title}</Text>
              <AirbnbRating
                defaultRating={0}
                selectedColor={"white"}
                size={10}
                showRating={false}
              />
            </View>
          </ImageBackground>
        </View>

        {/* ----------------------------------------------Select Button------------------------------------------------ */}
        <View style={{ backgroundColor: "#1C2172", height: 50, width: "100%" }}>
          <TouchableOpacity
            style={{ backgroundColor: "#1C2172", height: 50, width: "100%" }}
            activeOpacity={0.5}
          >
            <Text
              style={{
                textAlign: "center",
                top: 15,
                color: "white",
                fontSize: 15,
              }}
            >
              SELECT
            </Text>
          </TouchableOpacity>
        </View>
        {/* ----------------------------------------------tab------------------------------------------------ */}
        <View
          style={{
            width: "100%",
            height: 40,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 20,
            borderBottomWidth: 0.25,
            borderBottomColor: "#e4e4e4",
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 5,
                  position: "relative",
                  bottom: 20,
                }}
                source={item.img}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                color: "#434B56",
                position: "relative",
                bottom: 18,
              }}
            >
              {"  "}
              About{"  "}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#434B56" }}>{item.studs}</Text>
            <Text style={{ fontSize: 12, color: "#434B56" }}>Students</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#434B56" }}>{item.rev}</Text>
            <Text style={{ fontSize: 12, color: "#434B56" }}>Reviews</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#434B56" }}>{item.posts}</Text>
            <Text style={{ fontSize: 12, color: "#434B56" }}>Posts</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#434b56" }}>
            {item.detailhead}
          </Text>
          <Text style={{ fontSize: 13, color: "#a1a1a1" }}>{item.detail}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MentorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 50,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  starticon: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
});
