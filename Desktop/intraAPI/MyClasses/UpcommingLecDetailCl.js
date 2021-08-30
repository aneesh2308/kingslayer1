import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { inject, observer } from "mobx-react";

const UpcomingLecDetailCl = (props) => {
  const [userData, setUserData] = React.useState({});
  const [institute, setInstitute] = React.useState({});
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
        var requestOptions = {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${props.store.getToken}`,
            "Content-Type": "application/json"
          },
          redirect: "follow",
        };
        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";  
        fetch(`${apiURL}/institute/${result.institute_id}`, requestOptions)
        .then((response) => response.json())
        .then((result1) => {
          setInstitute(result1);
        }).catch((error) => console.log("error", error));
  
      })
      .catch((error) => console.log("error", error));
  };
React.useEffect(() => {
  getUser();
}, [])
const timeago=(timestamp)=>{
  var d = new Date(timestamp);
  var time = d.toTimeString( );
  console.log(time)
  console.log(time.slice(0,2)-12)
  console.log(time.slice(3,5))
  console.log(time.slice(6,8))
  if(time.slice(0,2)>12){
    return((time.slice(0,2)-12)+":"+time.slice(3,5)+" "+"PM")
    // This if you want time in 05:39 rather than 5:30
    // if((time.slice(0,2)-12)>9)
    // { 
    //   console.log((time.slice(0,2)-12))
    //   return((time.slice(0,2)-12)+":"+time.slice(3,5)+" "+"PM")
    // }else{
    //   console.log((time.slice(0,2)-12))
    //   return("0"+(time.slice(0,2)-12)+":"+time.slice(3,5)+" "+"PM")
    // }
  }else{
    return(time.slice(0,2)+":"+time.slice(3,5)+" "+"AM")
    // This if you want time in 05:39 rather than 5:30
    // if(time.slice(0,2)>9)
    // { 
    //   return(time.slice(0,2)+":"+time.slice(3,5)+" "+"AM")
    // }else{
    //   return("0"+time.slice(0,2)+":"+time.slice(3,5)+" "+"AM")
    // }
  } 
}
const timeago1=(item)=>{
  var d = new Date(item.scheduled_at_timestamp+(item.duration*1000));
  var time = d.toTimeString( );
  console.log(item.duration*1000)
  console.log(time)
  console.log(time.slice(0,2)-12)
  console.log(time.slice(3,5))
  console.log(time.slice(6,8))
  if(time.slice(0,2)>12){
    return((time.slice(0,2)-12)+":"+time.slice(3,5)+" "+"PM")
    // This if you want time in 05:39 rather than 5:30
    // if((time.slice(0,2)-12)>9)
    // { 
    //   console.log((time.slice(0,2)-12))
    //   return((time.slice(0,2)-12)+":"+time.slice(3,5)+" "+"PM")
    // }else{
    //   console.log((time.slice(0,2)-12))
    //   return("0"+(time.slice(0,2)-12)+":"+time.slice(3,5)+" "+"PM")
    // }
  }else{
    return(time.slice(0,2)+":"+time.slice(3,5)+" "+"AM")
    // This if you want time in 05:39 rather than 5:30
    // if(time.slice(0,2)>9)
    // { 
    //   return(time.slice(0,2)+":"+time.slice(3,5)+" "+"AM")
    // }else{
    //   return("0"+time.slice(0,2)+":"+time.slice(3,5)+" "+"AM")
    // }
  } 
}
  const { item } = props.route.params;
  return (
    <ScrollView scrollEnabled={true}  contentContainerStyle={styles.container}>
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
            source={{uri:userData.profile_pic_url}}
            size={35}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      {/* -----------------------------join now and avatar-------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 15,
          marginTop: 50,
        }}
      >
        <View style={styles.avatar}>
          <Avatar.Image
          source={{uri:userData.profile_pic_url}} size={60}/>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{props.navigation.navigate("JoinClass")}}>
          <Text
            style={{
              color: "#E72C83",
              marginLeft: 15,
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Join now
          </Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------introduction-------------------------------------- */}
      <View style={{ width: "100%", paddingHorizontal: 15, marginTop: 30 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: "#434b56",
            lineHeight: 30,
          }}
        >
          Introduction
        </Text>
        <Text style={{ fontSize: 13 }}>
         {item.introduction}
        </Text>
        {/* -----------------------------title-------------------------------------- */}
        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",
            color: "#a1a1a1",
            lineHeight: 25,
            marginTop: 10,
          }}
        >
          Title
        </Text>
        <Text style={{ fontSize: 15, color: "black" }}>{item.title}</Text>
        {/* -----------------------------timming-------------------------------------- */}
        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",

            color: "#a1a1a1",
            lineHeight: 25,
            marginTop: 10,
          }}
        >
          Timings
        </Text>
        <Text style={{ fontSize: 15, color: "black" }}>{timeago(item.scheduled_at_timestamp)}-{timeago1(item)}</Text>
      </View>
    </ScrollView>
  );
};
export default inject("store")(observer(UpcomingLecDetailCl));

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
  avatar: {
    height: 65,
    width: 65,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    elevation: 10,
  },
});
