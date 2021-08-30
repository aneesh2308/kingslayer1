import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";

const ContactUsClList = (props) => {
  const [message, setMessage] = useState([
    {
      title: "Johny Vino",
      subtitle: "This type of badge",
      time: "2:10 PM",
      avataruri: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      id: "1",
    },
    {
      title: "Jeffery Vini",
      subtitle: "Lorem Ipsum dolar",
      time: "Mon",
      avataruri: {
        uri: "https://images.ctfassets.net/hrltx12pl8hq/31f9j3A3xKasyUMMsuIQO8/6a8708add4cb4505b65b1cee3f2e6996/9db2e04eb42b427f4968ab41009443b906e4eabf-people_men-min.jpg?fit=fill&w=368&h=207",
      },
      id: "2",
    },
    {
      title: "Johny",
      subtitle: "Lorem Ipsum dolar set dolar",
      time: "Sat",
      avataruri: {
        uri: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      },
      id: "3",
    },
  ]);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      {/* ---------------------------Header ----------------------------------------------------------- */}
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
            Contact Us
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
      {/* ------------------------------------------------------------search bar -------------------------------------------------------*/}
      <View style={styles.searchbar}>
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="search" size={18} color="#434B56" />
          <TextInput
            placeholder="Search "
            style={styles.textbox}
            placeholderTextColor="#535B65"
          />
        </View>
        <View
          style={{
            width: "20%",
            alignItems: "flex-start",
            paddingRight: 15,
          }}
        >
          <Image
            source={require("../../assets/menu.png")}
            style={{ height: 110, width: 110, tintColor: "#434B56" }}
          />
        </View>
      </View>
      {/* -----------------------------------------------------------Message section -------------------------------------------------------*/}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={message}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ChatScreen", { item })}
          >
            <View style={styles.messages}>
              <View style={styles.avatar}>
                <Avatar.Image source={item.avataruri} size={50} style={{}} />
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 50,
                    backgroundColor: "#23D393",
                    position: "absolute",
                    top: 37,
                    left: 43,
                    borderWidth: 2,
                    borderColor: "white",
                  }}
                ></View>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  marginLeft: 15,
                  height: "100%",
                  width: "75%",
                  borderBottomWidth: 0.3,
                  borderBottomColor: "darkgrey",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </KeyboardAvoidingView>
  );
};

export default ContactUsClList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 60,
    paddingHorizontal: 15,
  },
  textbox: {
    width: "80%",
    fontSize: 12,
    color: "black",
    padding: 10,
  },
  messages1: {
    width: "100%",

    height: 100,
    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",
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
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
  },
  subtitle: {
    color: "#434B56",
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: "#434B56",
  },
  messagest: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  messagest1: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
});
