import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";


const InternshipDetail = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "90%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.TitileHeader}>
          <View
            style={{
              width: "90%",
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
              size={35}
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
            <Avatar.Image source={item.avataruri} size={55} />
          </View>
          <View
            style={{
              width: "40%",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 15, color: "#534b56", fontWeight: "700" }}>
              {item.company}
            </Text>
            <Text style={{ fontSize: 13, color: "#a1a1a1" }}>
              A B C Pvt.Ltd
            </Text>
            <Text style={{ fontSize: 13, color: "#a1a1a1" }}>
              {item.location}
            </Text>
            <Text style={styles.bluetext}>{item.time}</Text>
            <Text style={styles.bluetext}>{item.appli}</Text>
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
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Job Description
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 14,
              fontWeight: "800",
              marginVertical: 5,
            }}
          >
            Roles & Responsibilities
          </Text>

          <Text
            style={{
              maxWidth: "90%",
              fontSize: 13,
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
            backgroundColor: "white",
            paddingHorizontal: 15,
            paddingVertical: 30,
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Job Details</Text>
          <Text style={styles.greytext}>Employment</Text>
          <Text style={styles.desc}>Full time</Text>
          <Text style={styles.greytext}>Industry</Text>
          <Text style={styles.desc}>{item.company}</Text>
          <Text style={styles.greytext}>Stipend</Text>
          <Text style={styles.desc}>{item.stipend}</Text>
          <Text style={styles.greytext}>Skills</Text>
          <Text style={styles.desc}>1. {item.skills.one}</Text>
          <Text style={styles.desc}>2. {item.skills.two}</Text>
          <Text style={styles.greytext}>Openings</Text>
          <Text style={styles.desc}>{item.openings}</Text>
          <Text style={styles.greytext}>Perks</Text>
          <Text style={styles.desc}>{item.id}</Text>
          <Text style={styles.greytext}>Start Date</Text>
          <Text style={styles.desc}>{item.start}</Text>
          <Text style={styles.greytext}>Duration</Text>
          <Text style={styles.desc}>{item.duration}</Text>
        </View>
      </ScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          height: "10%",
          justifyContent: "flex-end",
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity
          style={styles.apply}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            APPLY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InternshipDetail;

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
    width: "100%",
    height: 50,
    backgroundColor: "#1C2172",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  greytext: {
    color: "#434b56",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 10,
  },
  desc: {
    fontSize: 13,
    fontWeight: "600",
  },
});
