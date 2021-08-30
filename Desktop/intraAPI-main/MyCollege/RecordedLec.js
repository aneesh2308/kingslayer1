import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { Surface } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import { inject, observer } from "mobx-react";

function RecordedLec(props) {
  const [userData, setUserData] = React.useState({})
  const [institute, setInstitute] = React.useState({})
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
        var requestOptions1 = {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${props.store.getToken}`,
            "Content-Type": "application/json"
          },
          redirect: "follow",
        };
        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
        fetch(`${apiURL}/institute/${result.institute_id}`, requestOptions1)
        .then((response) => response.json())
        .then((result1) => {
          setInstitute(result1)
          getRecordedLecture(result1.id);
        })
        .catch((error) => console.log("error", error));
      }).catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
}, [])
  const getRecordedLecture = async (id) => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization":`Bearer ${props.store.getToken}`,
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    
    fetch(`${apiURL}/lectures?size=10&page_index=0&lecture_type=recorded&institute_id=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLec(result.lectures);
        console.log("This is the user Data ",result.lectures);
      })
      // .then(console.log(userData))
      .catch((error) => console.log("error", error));
  };
  const [lec, setLec] = useState([]);
  return (
    <View style={styles.container}>
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
            Recorded Lectures
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            alignItems: "flex-end",
          }}
        >
          <Avatar.Image
            source={{uri:userData.profile_pic_url}}
            size={28}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={lec}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
              <Surface style={styles.surface}>
                <ImageBackground
                  mode="cover"
                  source={{uri:item.thumbnail_image_url}}
                  style={{
                    height: 110,
                    width: 110,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <TouchableOpacity onPress={()=>{props.navigation.navigate("Player", { item })}}>
                    <Entypo
                      name="controller-play"
                      size={32}
                      color="white"
                      style={styles.shadow}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <Text
                  style={{ fontSize: 11, color: "#434B56", paddingTop: 10 }}
                >
                  {item.title}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
export default inject("store")(observer(RecordedLec));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "#e4e4e4",
    backgroundColor: "transparent",
  },
  surface: {
    height: 180,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 50,
    paddingLeft: 15,
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
