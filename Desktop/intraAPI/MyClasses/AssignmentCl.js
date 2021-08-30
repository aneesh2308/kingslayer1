import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import AssignmentsListCl from "../CustomLists/MyClassesList/AssignmentsListCl";
import { inject, observer } from "mobx-react";

const AssignmentCl = (props) => {
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
            }}>
            Assignments
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            alignItems: "flex-end",
          }}>
          <Avatar.Image
            source={{uri:userData.profile_pic_url}}
            size={35}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      {/* -----------------------------Assignments-------------------------------------- */}

      <AssignmentsListCl navigation={props.navigation} />
      {/* -----------------------------Bottom TAb-------------------------------------- */}
    </View>
  );
};

export default inject("store")(observer(AssignmentCl));

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
});
