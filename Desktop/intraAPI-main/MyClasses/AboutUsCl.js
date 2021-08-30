import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { inject, observer } from "mobx-react";

const AboutUsCl = (props) => {
  const [adminData, setAdminData] = React.useState({})
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
        console.log("yeh contact page hain",result)
        var requestOptions1 = {
          method: "GET",
          headers: {
            "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9PelVJVUxrNTNXb0szejEwOXFWIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjI0NDczODM1fQ.qCdo3AZXXWsl2fgl7Vu1nO5oReSP8yA-4O29rmespPw`,
            "Content-Type": "application/json"
          },
          redirect: "follow",
        };
        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
        fetch(`${apiURL}/institute/${result.institute_id}`, requestOptions1)
          .then((response) => response.json())
          .then((result1) => {
            setAdminData(result1);
            console.log(result1)
          }).catch((error1) => console.log("error", error1));
      }).catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
}, [])
  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "80%" }}
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
              About Us
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              alignItems: "flex-end",
            }}
          >
            {/*<Avatar.Image
            source={{
              uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
            }}
            size={35}
            style={{ marginRight: 20 }}
          />*/}
          </View>
        </View>
        <View
          style={{
            height: "95%",
            width: "100%",
            paddingHorizontal: 15,
            backgroundColor: "white",
          }}
        >
          <Text style={{ color: "#434b56", marginTop: 30 }}>
            {adminData.about_us}
          </Text>
          <Text style={{ color: "#434b56", marginTop: 30 }}>
          {adminData.about_us}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default inject("store")(observer(AboutUsCl));

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
