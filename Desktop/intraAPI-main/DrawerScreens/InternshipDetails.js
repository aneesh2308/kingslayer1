import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";


const Internships47 = () => {
  return (
    <View style={styles.container}>
      
      {/* ----------------------------header--------------------------------------- */}
      <View style={{ width: "100%", alignItems: "center", height: "80%" }}>
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
              Internships
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
        {/* ----------------------------detail--------------------------------------- */}
        <View
          style={{
            height: 120,
            width: "100%",
            backgroundColor: "white",
            elevation: 5,
            marginTop: 5,
            flexDirection: "row",
            padding: 20,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <View style={styles.avatar}>
            <Avatar.Image
              source={{
                uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              size={55}
            />
          </View>
          <View
            style={{
              width: "40%",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 15, color: "#534b56", fontWeight: "700" }}>
              Graphic Designer
            </Text>
            <Text style={{ fontSize: 13, color: "#a1a1a1" }}>
              A B C Pvt.Ltd
            </Text>
            <Text style={{ fontSize: 13, color: "#a1a1a1" }}>India</Text>
            <Text style={styles.bluetext}>3 weeks ago</Text>
            <Text style={styles.bluetext}>Over 200 applicants</Text>
          </View>
        </View>

        {/* ----------------------------job description--------------------------------------- */}
        <View
          style={{
            marginTop: 15,
            backgroundColor: "white",
            elevation: 5,
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Job Description
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 17,
              fontWeight: "800",
              marginVertical: 5,
            }}
          >
            Roles & Responsibilities
          </Text>

          <Text
            style={{
              maxWidth: "90%",
              fontSize: 15,
              color: "black",
              lineHeight: 20,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Text>
        </View>
        {/* ----------------------------job details--------------------------------------- */}
        <View
          style={{
            marginTop: 15,
            backgroundColor: "white",
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Job Details</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              fontWeight: "800",
              marginVertical: 5,
              marginTop: 10,
            }}
          >
            Employment
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Full time
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              fontWeight: "800",
              marginVertical: 5,
            }}
          >
            Industry
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "black",
            }}
          >
            Design, Marketing
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          height: "10%",
        }}
      >
        <TouchableOpacity style={styles.apply} onPress={() => {}}>
          <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
            APPLY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Internships47;

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
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 60,
    width: 60,
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
    paddingVertical: 1,
  },
  apply: {
    width: "95%",
    height: 50,
    backgroundColor: "#1C2172",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
