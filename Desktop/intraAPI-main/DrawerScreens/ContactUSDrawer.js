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

const ContactUSDrawer = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ flexGrow: 1, width: "100%" }}
      >
        <View
          style={{
            height: "90%",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/*-----------------header------------------------- */}
          <View style={styles.TitileHeader}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons
                name="md-chevron-back-outline"
                size={35}
                color="#434B56"
              />
            </TouchableOpacity>
            <Text style={styles.HeadingText}>Contact Us</Text>
          </View>
          {/*-------------------email text box------------------------- */}
          <View
            style={{
              width: "95%",
              height: 50,
              marginTop: 80,
            }}
          >
            <Text style={{ fontSize: 12, color: "#535B65" }}>
              Email Address
            </Text>

            <View style={{ alignItems: "center", paddingTop: 15 }}>
              <TextInput style={styles.textbox} />
            </View>
          </View>
          {/*-------------------phone no text box------------------------- */}
          <View
            style={{
              width: "95%",
              height: 50,
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 12, color: "#535B65" }}>Phone no. </Text>

            <View style={{ alignItems: "center", paddingTop: 15 }}>
              <TextInput style={styles.textbox} />
            </View>
          </View>
          {/*-------------------button ------------------------- */}
          <TouchableOpacity style={styles.send} onPress={() => {}}>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
              SEND
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#535B65",
            }}
          >
            loremipsum@gmail.co.in
          </Text>
          <Text style={{ fontSize: 13, color: "#535B65" }}>+919876543442</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUSDrawer;

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
  textbox: {
    width: "100%",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    color: "black",
    paddingVertical: 5,
  },
  send: {
    width: "95%",
    height: 50,
    backgroundColor: "#202AA8",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
