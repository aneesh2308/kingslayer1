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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from "react-native-paper";

const Books = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "100%", paddingBottom: 10, height: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* ---------------------------------------------Header------------------------------------- */}
        <View style={styles.header}>
          <View
            style={{ width: "85%", flexDirection: "row", alignItems: "center" }}
          >
            <View style={{ position: "relative", right: 15 }}>
              <Ionicons
                name="chevron-back-outline"
                size={35}
                color="#434b56"
                onPress={() => props.navigation.goBack()}
              />
            </View>
            <Text
              style={{
                fontSize: 24,
                color: "#434b56",
                fontWeight: "bold",
                marginLeft: 0,
              }}
            >
              Books
            </Text>
          </View>
          <View
            style={{
              width: "15%",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 10,
            }}
          >
            <Avatar.Image
              size={35}
              source={{
                uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/179676946/original/894408990ef13b7e02f4c76c83558788e70e34ee/pack-of-ai-generated-faces.png",
              }}
            />
          </View>
        </View>
        {/* ---------------------------------------------Top Tab------------------------------------- */}
        <View style={styles.toptab}>
          <View
            style={{
              flex: 1,
              padding: 15,
              borderBottomColor: "#202AA8",
              borderBottomWidth: 3.5,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#202AA8", fontSize: 16 }}>Novels</Text>
          </View>
          <View
            style={{
              flex: 1,
              padding: 15,
              borderBottomColor: "#C2C5C8",
              borderBottomWidth: 1.5,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#C2C5C8", fontSize: 16 }}>Reading</Text>
          </View>
          <View
            style={{
              flex: 1,
              padding: 15,
              borderBottomColor: "#C2C5C8",
              borderBottomWidth: 1.5,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#C2C5C8", fontSize: 16 }}>Writing</Text>
          </View>
        </View>
        {/* ---------------------------------------------Scroll Cards------------------------------------ */}

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ItemDetails")}
            >
              <Image
                style={styles.img}
                source={{
                  uri: "https://d1e00ek4ebabms.cloudfront.net/production/fe570fc5-a302-4f17-b17f-3e13b548c972.jpg",
                }}
              />
            </TouchableOpacity>
            <Text style={styles.uniname}>Deaken University</Text>
            <Text style={styles.mba}>Novel</Text>

            <Text style={styles.viewprogram}>$755</Text>
          </View>
          {/* -----------------------------------------------2nd card--------------------------------------------- */}
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={{
                uri: "https://assets.noodle.com/logos/partners_programs/AU-mat.jpg",
              }}
            />
            <Text style={styles.uniname}>Dewell University</Text>
            <Text style={styles.mba}>Reading</Text>

            <Text style={styles.viewprogram}>$450</Text>
          </View>
        </View>

        {/* -----------------------------------------------3rd card--------------------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              style={styles.imgbg}
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: "https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg",
              }}
            >
              <View
                style={{
                  height: 30,
                  backgroundColor: "#E92B81",
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  margin: 10,
                }}
              >
                <Text style={{ fontSize: 14, color: "white" }}>New</Text>
              </View>
            </ImageBackground>
            <Text style={styles.uniname}>Deaken University</Text>
            <Text style={styles.mba}>Writing</Text>
            <Text style={styles.viewprogram}>$300</Text>
          </View>
          {/* -----------------------------------------------4th card--------------------------------------------- */}
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={{
                uri: "https://assets.noodle.com/logos/partners_programs/AU-mat.jpg",
              }}
            />
            <Text style={styles.uniname}>Dewell University</Text>
            <Text style={styles.mba}>Reading</Text>
            <Text style={styles.viewprogram}>$34</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Books;

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
    marginBottom: 25,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    paddingHorizontal: 15,
  },
  toptab: {
    height: "5%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  bottomTab: {
    height: "10%",
    backgroundColor: "white",
  },
  card: {
    width: "50%",
    backgroundColor: "white",
    padding: 15,
  },
  img: {
    height: 250,
    width: "100%",
    borderRadius: 10,
  },
  uniname: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
  },
  mba: {
    color: "#A1A1A1",
    fontSize: 13,
    marginTop: 5,
  },
  mentorship: {
    color: "#A1A1A1",
    fontWeight: "700",
    fontSize: 10,
    marginTop: 5,
  },
  viewprogram: {
    color: "#464EB7",
    fontSize: 14,
    marginTop: 5,
    fontWeight: "700",
    marginBottom: 5,
  },
  imgshort: {
    height: 150,
    width: "100%",
    borderRadius: 10,
  },
  imgbg: {
    height: 250,
    width: "100%",
    alignItems: "flex-end",
  },
});
