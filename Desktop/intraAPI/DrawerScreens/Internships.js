import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native";

import { TextInput } from "react-native";
import { Provider, Portal, Modal } from "react-native-paper";
import InternshipList from "./../CustomLists/DrawerList/InternshipList";

const Internships = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    height: 200,
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    paddingLeft: 30,
    paddingVertical: 10,
  };
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => props.navigation.navigate("SavedInternship")}
              activeOpacity={0.5}
            >
              <Text style={styles.modaltext}>See My interships</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <Text style={styles.modaltext}>Manage notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => props.navigation.navigate("PostInternship")}
              activeOpacity={0.5}
            >
              <Text style={styles.modaltext}>Post an internship</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
        
        {/* ----------------------------header--------------------------------------- */}

        <View style={styles.TitileHeader}>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
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
        {/* -------------------------------------------------search bar -------------------------------------------------------*/}
        <View style={styles.searchbar}>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              onpress={() => props.navigation.goBack()}
              activeOpacity={0.5}
            >
              <Ionicons name="search" size={18} color="#434B56" />
            </TouchableOpacity>
            <TextInput
              placeholder="Search "
              style={styles.textbox}
              placeholderTextColor="#535B65"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "20%",
              justifyContent: "space-between",
              paddingLeft: 20,
            }}
          >
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => props.navigation.navigate("InternshipFilter")}
              activeOpacity={0.5}
            >
              <Image
                source={require("../assets/menu.png")}
                style={{ height: 100, width: 100, tintColor: "#434B56" }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showModal}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color="#434B56"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* ------------------------------------------------------result -------------------------------------------------------*/}
        <View
          style={{
            width: "100%",
            height: 30,
            backgroundColor: "#DDDEE0",
            justifyContent: "center",
            paddingLeft: 30,
          }}
        >
          <Text style={styles.subtitle}>233 Results</Text>
        </View>

        <InternshipList navigation={props.navigation} />
      </View>
    </Provider>
  );
};

export default Internships;

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
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  textbox: {
    width: "80%",
    fontSize: 11,
    color: "black",
    padding: 10,
  },
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 5,
  },
  subtitle: {
    color: "#a1a1a1",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 5,
  },
  messages: {
    width: "100%",

    height: 100,
    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 55,
    width: 55,
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
    paddingVertical: 5,
    paddingLeft: 5,
  },
  modaltext: {
    color: "#434b56",
    fontSize: 14,
    fontWeight: "600",
    paddingLeft: 5,
  },
});
