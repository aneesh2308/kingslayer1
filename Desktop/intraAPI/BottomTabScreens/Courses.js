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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Masters from "../Courses/Masters";
import PGProgram from "../Courses/PGProgram";
import Certification from "../Courses/Certification";

const Courses = (props) => {
  const TopTab = createMaterialTopTabNavigator();

  function TopTabNav() {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Paid" component={Masters} />
        <TopTab.Screen name="Free" component={PGProgram} />
        <TopTab.Screen name="Cerification" component={Certification} />
      </TopTab.Navigator>
    );
  }

  return (
    <View style={styles.container}>
      {/*<TopTabNav style={{ innerHeight: "10%",  }} />*/}
      <ScrollView
        style={{
          width: "100%",
          paddingBottom: 10,
          backgroundColor: "white",
          height: "100%",
        }}
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
                fontSize: 25,
                color: "#434b56",
                fontWeight: "bold",
                marginLeft: 0,
              }}
            >
              Courses
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
            <Text style={{ color: "#202AA8", fontSize: 16 }}>Paid</Text>
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
            <Text style={{ color: "#C2C5C8", fontSize: 16 }}>Free</Text>
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
            <Text style={{ color: "#C2C5C8", fontSize: 16 }}>
              Certification
            </Text>
          </View>
        </View>
        {/* ---------------------------------------------Scroll Cards------------------------------------ */}

        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={{
                uri: "https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg",
              }}
            />
            <Text style={styles.uniname}>Deaken University</Text>
            <Text style={styles.mba}>MBA Buissness School</Text>
            <Text style={styles.mentorship}>1-1 MentorShip & Job Support</Text>
            <Text style={styles.viewprogram}>View Program</Text>
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
            <Text style={styles.mba}>MBA Buissness School</Text>
            <Text style={styles.mentorship}>1-1 MentorShip & Job Support</Text>
            <Text style={styles.viewprogram}>View Program</Text>
          </View>
        </View>
        {/* -----------------------------------------------Free courses--------------------------------------------- */}
        <View style={{ width: "100%", paddingLeft: 15 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "#434b56",
            }}
          >
            Free Courses
          </Text>
        </View>
        {/* -----------------------------------------------3rd card--------------------------------------------- */}
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <View style={styles.card}>
            <Image
              style={styles.imgshort}
              source={{uri: "https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg"}}/>
            <Text style={styles.uniname}>Deaken University</Text>
            <Text style={styles.mba}>MBA Buissness School</Text>
            <Text style={styles.viewprogram}>Start Now</Text>
          </View>
          {/* -----------------------------------------------4th card--------------------------------------------- */}
          <View style={styles.card}>
            <Image
              style={styles.imgshort}
              source={{
                uri: "https://assets.noodle.com/logos/partners_programs/AU-mat.jpg",
              }}
            />
            <Text style={styles.uniname}>Dewell University</Text>
            <Text style={styles.mba}>MBA Buissness School</Text>
            <Text style={styles.viewprogram}>Start Now</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Courses;

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
    fontSize: 14,
    marginTop: 5,
  },
  mentorship: {
    color: "#A1A1A1",
    fontWeight: "700",
    fontSize: 10,
    marginTop: 5,
  },
  viewprogram: {
    color: "#EB3F8D",
    fontSize: 10,
    marginTop: 5,
    fontWeight: "700",
    marginBottom: 20,
  },
  imgshort: {
    height: 150,
    width: "100%",
    borderRadius: 10,
  },
});
