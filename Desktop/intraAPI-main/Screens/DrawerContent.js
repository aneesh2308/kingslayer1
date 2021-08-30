import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Image,Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Text } from "react-native-paper";
import { auth, db } from "../Config";
import { inject, observer } from "mobx-react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TouchableOpacity } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import { Provider, Portal, Modal } from "react-native-paper";

function DrawerContent(props) {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState({});
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    height: 170,
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
  };

  const signOutUser = () => {
    auth.signOut().then(() => {
      props.navigation.replace("SignIn");
    });
  };

  const getUser = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
        console.log("This is the user Data ",result.name);
        console.log("This is the user photo ",result.profile_pic_url);
      })
      // .then(console.log(userData))
      .catch((error) => console.log("error", error));
  };

  // const [userData, setUserData] = useState([]);

  // const getUser = async () => {
  //   await db
  //     .collection("users")
  //     .doc("zcJ30iMmxg7JxDljALZl")
  //     .get()
  //     .then((documentSnapshot) => {
  //       if (documentSnapshot.exists) {
  //         console.log("User Data", documentSnapshot.data());
  //         setUserData(documentSnapshot.data());
  //       }
  //     });
  // };
  useEffect(() => {
    const unsubscribe = () =>
      props.navigation.addListener("focus", () => {
        getUser();
      });
    return unsubscribe();
  }, [props.navigation]);

  return (
    <Provider>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          alignSelf: "baseline",
          height: "100%",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <DrawerContentScrollView
          {...props.navigation}
          style={{
            height: "100%",
            backgroundColor: "transparent",
            paddingTop: 0,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* -------------------------Drawer Content-------------------------------- */}


          <View style={styles.profilesection}>
            <View
              style={{
                width: "80%",
                backgroundColor: "#F8F8F8",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => props.navigation.navigate("EditProfile")}>
                <Avatar.Image
                  source={{uri:userData.profile_pic_url}}
                  size={55}
                />
              </TouchableOpacity>
              <View style={{ width: "70%", marginLeft: 20 }}>
                <Text
                  style={{ fontSize: 16, color: "black", fontWeight: "bold" }}
                >
                  {userData.name}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("EditProfile")}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#202AA8",
                      fontWeight: "bold",
                      marginTop: 5,
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Entypo name="cross" size={24} color="grey" onPress={() => {}} />
          </View>

          {/* -------------------------My Orders-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("MyOrder")}
            style={styles.sections}
          >
            <Ionicons name="wallet-outline" size={24} color="#535b65" />
            <Text style={styles.label}>My Orders</Text>
          </TouchableOpacity> */}
          {/* -------------------------My Cart-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("MyCart")}
            style={styles.sections}
          >
            <AntDesign name="inbox" size={24} color="#535b65" />
            <Text style={styles.label}>My Cart</Text>
          </TouchableOpacity> */}

          {/* -------------------------Rewards-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("Rewards")}
            style={styles.sections}
          >
            <MaterialCommunityIcons
              name="currency-usd-circle-outline"
              size={24}
              color="#535b65"
            />
            <Text style={styles.label}>Rewards</Text>
          </TouchableOpacity> */}
          {/* -------------------------Refer and earn-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("ReferEarn")}
            style={styles.sections}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color="#535b65"
            />
            <Text style={styles.label}>Refer & Earn</Text>
          </TouchableOpacity> */}
          {/* -------------------------Downloads-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("Downloads")}
            style={styles.sections}
          >
            <Feather name="arrow-down-circle" size={24} color="#535b65" />
            <Text style={styles.bottomtext}>Downloads</Text>
          </TouchableOpacity> */}
          {/* -------------------------Sell Book-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("SellBook")}
            style={styles.sections}
          >
            <MaterialCommunityIcons
              name="book-outline"
              size={24}
              color="#535b65"
            />
            <Text style={styles.label}>Sell Book</Text>
          </TouchableOpacity> */}
          {/* -------------------------Create Page-------------------------------- */}
          {/* <TouchableOpacity onPress={() => {}} style={styles.sections}>
            <Feather name="plus-square" size={24} color="#535b65" />
            <Text style={styles.label}>Create Page</Text>
          </TouchableOpacity> */}
          {/* -------------------------Mentor-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("Mentors")}
            style={styles.sections}
          >
            <MaterialCommunityIcons
              name="account-outline"
              size={24}
              color="#535b65"
            />
            <Text style={styles.label}>Mentors</Text>
          </TouchableOpacity> */}
          {/* -------------------------Internships-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("Internships")}
            style={{
              flexDirection: "row",
              width: "100%",
              padding: 20,
              alignItems: "center",
              backgroundColor: "white",
              paddingBottom: 40,
            }}
          >
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={24}
              color="#535b65"
            />
            <Text style={styles.label}>Internships</Text>
          </TouchableOpacity> */}
          {/* -------------------------Bottom Section-------------------------------- */}
          {/* -------------------------Try Premium-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("CarouselCards")}
            style={styles.bottomsections}
          >
            <Text style={styles.bottomtext}>Try Premium</Text>
          </TouchableOpacity> */}

          {/* -------------------------Contact Us-------------------------------- */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("ContactUSDrawer")}
            style={styles.bottomsections}
          >
            <Text style={styles.bottomtext}>Contact Us</Text>
          </TouchableOpacity> */}
          {/* -------------------------FAQs-------------------------------- */}
          {/* <TouchableOpacity onPress={() => {}} style={styles.bottomsections}>
            <Text style={styles.bottomtext}>FAQs</Text>
          </TouchableOpacity> */}
          {/* -------------------------Sign Out-------------------------------- */}
          <TouchableOpacity onPress={showModal} style={styles.bottomsections}>
            <Text style={styles.bottomtext}>Sign Out</Text>
          </TouchableOpacity>
          {/* -------------------------Social Section-------------------------------- */}
          <View style={styles.socialmedia}>
            <TouchableOpacity onPress={()=>{
Linking.openURL("https://www.facebook.com/Intraedu").catch(err => console.error("Couldn't load page", err));

            }} style={styles.logo}>
              <Fontisto name="facebook" size={19} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
Linking.openURL("https://www.instagram.com/intraedu/").catch(err => console.error("Couldn't load page", err));

            }} style={styles.logo}>
              <Fontisto name="instagram" size={17} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
Linking.openURL("https://www.linkedin.com/company/intraedu").catch(err => console.error("Couldn't load page", err));

            }}
            style={styles.logo}>
              <Fontisto name="linkedin" size={14} color="white" />
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{ flex: 1, padding: 20, alignItems: "center" }}>
            <Text
              style={{ color: "#1c2172", fontSize: 20, fontWeight: "bold" }}
            >
              Sign Out
            </Text>
            <Text
              style={{ color: "#434b56", fontSize: 11, marginVertical: 20 }}
            >
              Are you sure you want to sign out?
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
                width: "100%",
                height: 40,
              }}
            >
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={signOutUser}
              >
                <Text
                  style={{ color: "#1c2172", fontSize: 13, fontWeight: "bold" }}
                >
                  YES{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={hideModal}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    color: "darkgrey",
                    fontSize: 13,
                    fontWeight: "bold",
                  }}
                >
                  NO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
}
export default inject("store")(observer(DrawerContent));

const styles = StyleSheet.create({
  imagesection: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    height: 160,
  },
  profilesection: {
    height: 90,
    width: "100%",
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
    paddingTop: 0,
  },
  sections: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#e4e4e4",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 17,
  },
  bottomsections: {
    paddingLeft: 20,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
    backgroundColor: "#F8F8F8",
  },
  bottomtext: {
    color: "#535b65",
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 10,
  },
  socialmedia: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#F8F8F8",
    paddingBottom: 50,
  },
  logo: {
    height: 30,
    width: 30,
    backgroundColor: "#434B56",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 50,
  },
  label: {
    color: "#535b65",
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
    width: "50%",
    height: "100%",
  },
});
