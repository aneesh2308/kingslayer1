import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, Button } from "react-native-paper";
import { inject, observer } from "mobx-react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import UpcomingLecClList from "../CustomLists/MyClassesList/UpcomingLecClList";

const UpcomingLecCl = (props) => {
  const [userData, setUserData] = React.useState([]);
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

React.useEffect(() => {
  getUser();
}, [])
  return (
    <View style={styles.container}>
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
            Upcoming Lectures
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
      {/* search bar -------------------------------------------------------------------------- */}
      <View style={styles.searchbar}>
        <View
          style={{
            width: "90%",
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
      </View>

      <UpcomingLecClList navigation={props.navigation} />
    </View>
  );
};
export default inject("store")(observer(UpcomingLecCl));

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
    height: 60,
    paddingHorizontal: 20,
  },
  textbox: {
    width: "80%",
    fontSize: 12,
    color: "black",
    padding: 10,
  },
  lec_box: {
    height: 180,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  shadow: {
    elevation: 50,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,

    shadowOffset: {
      width: 1,
      height: 1,
    },

    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
