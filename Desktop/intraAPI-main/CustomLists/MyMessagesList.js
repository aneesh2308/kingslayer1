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
import { inject, observer } from "mobx-react";
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
const MyMessagesList = (props) => {
  const [userData, setUserData] = useState([]);
  const [usersList, setUsersList] = useState([]);
const getUser = async () => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Authorization":`Bearer ${props.store.getToken}`,
      "Content-Type": "application/json"
    },
    redirect: "follow",
  };
  const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

  fetch(`${apiURL}/users/${props.store.getUid}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setUserData(result);
    })
    .catch((error) => console.log("error", error));
};

const getProfile = async (uid,index) => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Authorization":`Bearer ${props.store.getToken}`,
      "Content-Type": "application/json"
    },
    redirect: "follow",
  };
  const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

   fetch(`${apiURL}/users/${uid}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // return result;
     chats[index]={...chats[index],...result};
     setChats([...chats])

    })
    .catch((error) => console.log("error", error));
};
  const getUsersList = async (txt) => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";
    fetch(`${apiURL}/chat/getuser?user=${txt}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        setUsersList(result);
      })
      .catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
  getChats();


}, [])
const getChats = () => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };
  const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";

  fetch(`${apiURL}/chat/list?user=${props.store.getUid}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
console.log("chat lsit",result);
      // const unique = [...new Set(result.map(item =>item.users[1]   ))];
    // const z=  [...new Set(  unique.map(item =>{return{"userId":item}}))  ];
      // console.log(z);
setChats(result)
      // chats.forEach((item,index)=>{getProfile(item.userId,index);} )


    })
    .catch((error) => console.log("error", error));
};

  const [chats, setChats] = useState([

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
            Messages
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            alignItems: "flex-end",
          }}
        >
          <Avatar.Image
            source={{uri: userData.profile_pic_url}}

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
            onChangeText={(txt)=>{

              getUsersList(txt);
            }}
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
            source={require("../assets/menu.png")}
            style={{ height: 110, width: 110, tintColor: "#434B56" }}
          />
        </View>
      </View>
      {/*  users list to start a chat*/}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={usersList}
        keyExtractor={(item, index) => item.userId}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ChatScreen", {receiver: item,userData:userData })}
            activeOpacity={0.7}
          >
            <View style={styles.messages}>
              <View style={styles.avatar}>
                <Avatar.Image source={{uri:item.profile_pic_url}} size={50} style={{}} />
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
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* -----------------------------------------------------------Message section -------------------------------------------------------*/}
      <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#434B56",
              marginLeft: 15,
            }}
          >
            Chats
          </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chats}
        keyExtractor={(item, index) => item.userId}
        renderItem={ ({ item,index }) =>{


           return (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ChatScreen", {receiver: item,userData:userData })}
            activeOpacity={0.7}
          >
            <View style={styles.messages}>
              <View style={styles.avatar}>
                <Avatar.Image source={{uri:item.profile_pic_url}} size={50} style={{}} />
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
                  <Text style={styles.title}> {item.name} </Text>
                  <Text style={styles.time}></Text>
                </View>
                <Text style={styles.subtitle}></Text>
              </View>
            </View>
          </TouchableOpacity>
        )}}
      />
    </KeyboardAvoidingView>
  );
};

export default inject("store")(observer(MyMessagesList));

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