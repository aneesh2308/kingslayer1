import React,{useState,useEffect} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { inject, observer } from "mobx-react";

import { Avatar } from "react-native-paper";

const DeakenUniversity = (props) => {
  const [payments,setPayments]=useState([])
useEffect(() => {
 getPayments()
}, [])
const getPayments = () => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",


    },
    redirect: "follow",
  };
  const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";
  console.log(`${apiURL}/pay-invoice?userId=${props.store.getUid}`);
  fetch(`${apiURL}/pay-invoice?userId=${props.store.getUid}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("get payments result ",result);
      setPayments(result["data"]);
    })
    .catch((error) => console.log("error", error));
};
const getInvoice = (id) => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };
  const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";

  fetch(`${apiURL}/getInvoice?Id=${id}`, requestOptions)
    .then((response) => response)
    .then((result) => {
      console.log("get invoice result ",result);

    })
    .catch((error) => console.log("error", error));
};
  return (
    <View style={styles.container}>
      {/* ---------------------------------------------Header------------------------------------- */}
      <View style={styles.header}>
        <View style={{ position: "relative", right: 15 }}>
          <Ionicons
            name="chevron-back-outline"
            size={35}
            color="#434b56"
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            color: "#434b56",
            fontWeight: "bold",
            marginLeft: 0,
          }}
        >
          Deaken University
        </Text>
      </View>
      {/* ---------------------------------------------Content------------------------------------- */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={payments}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {return(<View
         style={{ width: "100%",paddingHorizontal: 15,alignItems: "flex-end" }}
         >
          <Text style={styles.time}>Mar 22 at 9:22 AM</Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
         <TouchableOpacity
              onPress={() =>{getInvoice(item.id)}}
              activeOpacity={0.5}
            >
          <Feather name="arrow-down-circle" size={24} color="#434b56" />
</TouchableOpacity>
          <View style={styles.msg}>
            <AntDesign name="checkcircle" size={24} color="#202AA8" />
            <Text style={styles.msgtext}>Rs. {item.Amount} Paid</Text>
          </View>
        </View>
        <Text style={styles.reward}>You earned a reward</Text>
        </View>
        )}}
      />

      <View style={styles.bottomTab}>
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 200,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 10,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/HomeOut.png")}
                style={{ height: 23, width: 23, tintColor: "#434b56" }}
              />

              <Text style={{ fontSize: 10, color: "#434b56" }}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("MyCollege")}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/CollegeOut.png")}
                style={{ height: 23, width: 23, tintColor: "#434b56" }}
              />
              <Text style={{ fontSize: 10, color: "#434b56" }}>My College</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("MyClasses")}
          >
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="account-outline"
                size={23}
                color="#434b56"
              />
              <Text style={{ fontSize: 10, color: "#434b56" }}>My Classes</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Courses")}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/CoursesOut.png")}
                style={{ height: 23, width: 23, tintColor: "#434b56" }}
              />
              <Text style={{ fontSize: 10, color: "#434b56" }}>Courses</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Books")}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/BookOut.png")}
                style={{ height: 23, width: 23, tintColor: "#434b56" }}
              />
              <Text style={{ fontSize: 10, color: "#434b56" }}>Books</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default inject("store")(observer(DeakenUniversity));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    paddingHorizontal: 15,
  },
  msg: {
    backgroundColor: "#E4E4E4",
    paddingLeft: 15,
    paddingVertical: 35,
    borderRadius: 10,
    flexDirection: "row",
    paddingRight: 25,
    marginLeft: 15,
  },
  msgtext: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "600",
    color: "#353434",
  },
  time: {
    color: "grey",
    marginBottom: 10,
  },
  reward: {
    color: "#202AA8",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 10,
    marginRight: 5,
    marginBottom: 45,
  },
  bottomTab: {
    height: "10%",
    backgroundColor: "white",
  },
});
