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

const AboutUs = (props) => {
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
export default inject("store")(observer(AboutUs));

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

{
  /* import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  Ionicons,
  Feather,
  Entypo,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { Avatar } from "react-native-paper";

import { Rating, AirbnbRating } from "react-native-ratings";

const AboutUs = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        
        <View style={{ width: "100%", height: 400, backgroundColor: "grey" }}>
          <ImageBackground
            style={styles.img}
            source={{
              uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
          >
            <View style={styles.header}>
              <View>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  activeOpacity={0.5}
                >
                  <Ionicons
                    name="chevron-back-outline"
                    size={35}
                    color="white"
                    style={{ position: "relative", right: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 18 }}>Elise</Text>
              <Text style={{ color: "#a1a1a1" }}>Art Director</Text>
              <AirbnbRating
                defaultRating={0}
                selectedColor={"white"}
                size={10}
                showRating={false}
              />
            </View>
          </ImageBackground>
        </View>

       
        <View style={{ backgroundColor: "#1C2172", height: 50, width: "100%" }}>
          <TouchableOpacity
            style={{ backgroundColor: "#1C2172", height: 50, width: "100%" }}
            activeOpacity={0.5}
          >
            <Text
              style={{
                textAlign: "center",
                top: 15,
                color: "white",
                fontSize: 15,
              }}
            >
              SELECT
            </Text>
          </TouchableOpacity>
        </View>
        
        <View
          style={{
            width: "100%",
            height: 40,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 20,
            borderBottomWidth: 0.25,
            borderBottomColor: "#e4e4e4",
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 5,
                  position: "relative",
                  bottom: 20,
                }}
                source={{
                  uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                color: "#434B56",
                position: "relative",
                bottom: 18,
              }}
            >
              {"  "}
              About{"  "}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#434B56" }}>1225</Text>
            <Text style={{ fontSize: 12, color: "#434B56" }}>Students</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#434B56" }}>173</Text>
            <Text style={{ fontSize: 12, color: "#434B56" }}>Reviews</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#434B56" }}>44</Text>
            <Text style={{ fontSize: 12, color: "#434B56" }}>Posts</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#434b56" }}>
            Sharing my expirence with aspiring artworks
          </Text>
          <Text style={{ fontSize: 13, color: "#a1a1a1" }}>
            ksLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse a molestie augue. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris at
            tellus metus. Sed nec tortor eu eros tempor volutpat quis vel ex.
            Vivamus at orci in lorem ornare dictum in eu quam. Nullam laoreet
            congue accumsan. Pellentesque suscipit libero malesuada suscipit
            sodales. Nullam sollicitudin sapien est.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 50,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  starticon: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
});*/
}
