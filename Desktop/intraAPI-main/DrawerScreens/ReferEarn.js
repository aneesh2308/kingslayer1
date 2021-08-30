import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const ReferEarn = (props) => {
  return (
    <View style={styles.container}>
      {/*-----------------header------------------------- */}
      <View style={styles.TitileHeader}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          activeOpacity={0.5}
        >
          <Ionicons name="md-chevron-back-outline" size={35} color="#434B56" />
        </TouchableOpacity>
        <Text style={styles.HeadingText}>Refer & Earn</Text>
      </View>
      {/*-----------------conatainer------------------------- */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: "#535B65",
            width: "80%",
            marginTop: 100,
            textAlign: "center",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#535B65",
            marginTop: 15,
            fontWeight: "bold",
          }}
        >
          Your Referral Code
        </Text>
        <View
          style={{
            backgroundColor: "#EFF0F9",
            height: 40,
            width: 140,
            borderRadius: 5,
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#1C2172",
              fontWeight: "600",
            }}
          >
            BDERCGF
          </Text>
        </View>

        <TouchableOpacity onPress={() => {}} style={{ marginTop: 50 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: 80,
              borderRadius: 100,
              backgroundColor: "#202AA8",
            }}
          >
            <Ionicons name="share-social-sharp" size={35} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      {/*------------------------------------------------------------------------------- */}
      {/* ---------------------------- Bootom tab--------------------------------------- */}
    </View>
  );
};

export default ReferEarn;

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
  HeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
});
