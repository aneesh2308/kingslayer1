import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { inject, observer } from "mobx-react";

const Annoncements = (props) => {
  const [Announcements, setAnnouncements] = React.useState({})
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
        var requestOptions = {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${props.store.getToken}`,
            "Content-Type": "application/json"
          },
          redirect: "follow",
        };
        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
        fetch(`${apiURL}/announcements?page_index=0&size=10&institute_id=${result.institute_id}&standard=${result.standard}`, requestOptions)
        .then((response) => response.json())
        .then((result1) => {
          setAnnouncements(result1.announcement)
        })
      }).catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
}, [])
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: "80%",
    height: 300,
    backgroundColor: "white",
    alignSelf: "center",
    padding: 15,
  };
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
  return (
    <Provider>
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <View style={{ width: "100%", alignItems: "center", height: "90%" }}>
        <View style={styles.TitileHeader}>
          <View
            style={{
              width: "10%",
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
          </View>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            {/* <View style={{ ...styles.Avatar, position: "relative", left: 83 }}>
              <Avatar.Image
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
                }}
                size={40}
              />
            </View>
            <View style={{ ...styles.Avatar, position: "relative", right: 0 }}>
              <Avatar.Image
                source={{
                  uri: "https://images.ctfassets.net/hrltx12pl8hq/31f9j3A3xKasyUMMsuIQO8/6a8708add4cb4505b65b1cee3f2e6996/9db2e04eb42b427f4968ab41009443b906e4eabf-people_men-min.jpg?fit=fill&w=368&h=207",
                }}
                size={40}
              />
            </View>
            <View style={{ ...styles.Avatar, position: "relative", right: 83 }}>
              <Avatar.Image
                source={{
                  uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/179676946/original/bbcd7b485cc08faeb6a17b274543b0a3c2495bce/pack-of-ai-generated-faces.png",
                }}
                size={40}
              />
            </View>
            <Text style={{ fontWeight: "700", color: "#434b56" }}>
              Group 01
            </Text> */}
            <Text style={{ fontSize:22,fontWeight: "700", color: "#434b56" }}>Announcement</Text>
          </View>
          <View
            style={{
              width: "10%",
              alignItems: "flex-end",
              backgroundColor: "white",
            }}
          >
            {/* <TouchableOpacity onPress={showModal} activeOpacity={0.5}>
              <Ionicons
                name="ios-information-circle-outline"
                size={30}
                color="#434b56"
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity> */}
          </View>
        </View>
        {/*----------------------------------------------Modal---------------------------- */}
        {/* <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Video Chat</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Mute Messages</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Unfollow</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Block</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Report</Text>
            </View>
          </Modal>
        </Portal> */}
        {/* ----------------------------Announcment--------------------------------------- */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "#a1a1a1",
            marginTop: 20,
          }}
        >
          Announcements
        </Text>
        <ScrollView style={{ width: "100%", padding: 0, height: "80%" }}>
          {/* ---------------------------------------------Reciever------------------------------------- */}
          {/* <View style={styles.reciever}> */}
            {/* <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: "white",
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Avatar.Image
                size={55}
                source={{uri: "http://cdn.differencebetween.net/wp-content/uploads/2018/03/Difference-Between-Institute-and-University--768x520.jpg",}}
              />
            </View> */}
            {/* ---------------------------------------------Reciever msg------------------------------------- */}
            {/* <View style={styles.recievermsgcontainer}>
              <Text style={styles.recievermsg}>
                It is a long established fact that a reader will be distracted
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#434b56", fontSize: 13 }}>7:50 PM</Text>
                <Entypo name="dot-single" size={24} color="#434b56" />
                <Text style={{ color: "#434b56", fontSize: 13 }}>Seen</Text>
              </View>
            </View> </View> */}
      
         <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={Announcements}
          horizontal={false}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.reciever}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: "white",
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Avatar.Image
                size={55}
                source={{uri: "http://cdn.differencebetween.net/wp-content/uploads/2018/03/Difference-Between-Institute-and-University--768x520.jpg"}}/>
            </View>
            {/* ---------------------------------------------Reciever msg------------------------------------- */}
            <View style={styles.recievermsgcontainer}>
              <Text style={styles.recievermsg}>
                {item.announcement}
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#434b56", fontSize: 13 }}>{timeago(item.timestamp)}</Text>
                <Entypo name="dot-single" size={24} color="#434b56" />
                <Text style={{ color: "#434b56", fontSize: 13 }}>Seen</Text>
              </View>
            </View>
          </View>
            );
          }}
        />
 
          {/* ---------------------------------------------Sender------------------------------------- */}
        </ScrollView>
      </View>
    </View>
    </Provider>
  );
};
export default inject("store")(observer(Annoncements));


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
    borderBottomWidth: 0,
    borderBottomColor: "darkgrey",
  },
  Avatar: {
    height: 45,
    width: 45,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 10,
  },

  mute: {
    width: "60%",
    height: "65%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#434b56",
    justifyContent: "center",
    alignItems: "center",
  },
  reciever: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    marginVertical: 5,
  },
  recievermsgcontainer: {
    backgroundColor: "#E4E4E4",
    width: 250,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
  },
  recievermsg: {
    color: "black",
    fontSize: 13,
    fontWeight: "100",
  },
  sender: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 5,
  },
  sendermsgcontainer: {
    backgroundColor: "#202AA8",
    width: 250,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
  },
  sendermsg: {
    color: "white",
    fontSize: 13,
    fontWeight: "100",
  },
  msgsection: {
    height: "10%",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  entermsg: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    height: 50,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#434b56",
  },
});
