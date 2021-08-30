// import React from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { Avatar, Button } from "react-native-paper";
// import { ScrollView } from "react-native";
// import { TextInput } from "react-native";

// const ContactUsCl = (props) => {
//   return (
//     <View style={styles.container}>
//       {/* ----------------------------header--------------------------------------- */}
//       <ScrollView
//         style={{ width: "100%", height: "100%" }}
//         contentContainerStyle={{ alignItems: "center" }}
//       >
//         <View style={styles.TitileHeader}>
//           <View
//             style={{
//               width: "90%",
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => props.navigation.goBack()}
//               activeOpacity={0.5}
//             >
//               <Ionicons
//                 name="md-chevron-back-outline"
//                 size={35}
//                 color="#434B56"
//               />
//             </TouchableOpacity>
//             <Text
//               style={{
//                 fontSize: 24,
//                 fontWeight: "bold",
//                 color: "#434B56",
//                 marginLeft: 15,
//               }}
//             >
//               Contact Us
//             </Text>
//           </View>
//           <View
//             style={{
//               width: "10%",
//               alignItems: "flex-end",
//             }}
//           >
//             <Avatar.Image
//               source={{
//                 uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
//               }}
//               size={35}
//               style={{ marginRight: 20 }}
//             />
//           </View>
//         </View>
//         {/* ------------------------------------------------------------search bar -------------------------------------------------------*/}
//         <View style={styles.searchbar}>
//           <View
//             style={{
//               width: "80%",
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <Ionicons name="search" size={18} color="#434B56" />
//             <TextInput
//               placeholder="Search "
//               style={styles.textbox}
//               placeholderTextColor="#535B65"
//             />
//           </View>
//           <View
//             style={{
//               width: "20%",
//               alignItems: "flex-start",
//               paddingRight: 15,
//             }}
//           >
//             <Image
//               source={require("../assets/menu.png")}
//               style={{ height: 110, width: 110, tintColor: "#434B56" }}
//             />
//           </View>
//         </View>
//         {/* ---------------------------- Message section 1 --------------------------------------- */}
//         <TouchableOpacity
//           onPress={() => props.navigation.navigate("ChatScreen")}
//           style={styles.messagest}
//         >
//           <View style={styles.messages}>
//             <View style={styles.avatar}>
//               <Avatar.Image
//                 source={{uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",}}
//                 size={50}
//               />
//             </View>

//             <View
//               style={{
//                 justifyContent: "center",
//                 marginLeft: 15,
//                 height: "100%",
//                 width: "75%",
//                 borderBottomWidth: 0.3,
//                 borderBottomColor: "grey",
//                 backgroundColor: "white",
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text style={styles.title}>Johny Vino</Text>
//                 <Text style={styles.time}>2:10 PM</Text>
//               </View>
//               <Text style={styles.subtitle}>This type of badge</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//         {/* ---------------------------- Message section 2 --------------------------------------- */}
//         <TouchableOpacity
//           onPress={() => props.navigation.navigate("ChatScreen")}
//           style={styles.messagest}
//         >
//           <View style={styles.messages}>
//             <View style={styles.avatar}>
//               <Avatar.Image
//                 source={{
//                   uri: "https://images.ctfassets.net/hrltx12pl8hq/31f9j3A3xKasyUMMsuIQO8/6a8708add4cb4505b65b1cee3f2e6996/9db2e04eb42b427f4968ab41009443b906e4eabf-people_men-min.jpg?fit=fill&w=368&h=207",
//                 }}
//                 size={50}
//                 style={{}}
//               />
//               <View
//                 style={{
//                   height: 12,
//                   width: 12,
//                   borderRadius: 50,
//                   backgroundColor: "#23D393",
//                   position: "absolute",
//                   top: 37,
//                   left: 43,
//                   borderWidth: 2,
//                   borderColor: "white",
//                 }}
//               ></View>
//             </View>

//             <View
//               style={{
//                 justifyContent: "center",
//                 marginLeft: 15,
//                 height: "100%",
//                 width: "75%",
//                 borderBottomWidth: 0.3,
//                 borderBottomColor: "darkgrey",
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text style={styles.title}>Jeffery</Text>
//                 <Text style={styles.time}>Mon</Text>
//               </View>
//               <Text style={styles.subtitle}>This type of badge</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//         {/* ---------------------------- Message section 3 --------------------------------------- */}
//         <TouchableOpacity
//           onPress={() => props.navigation.navigate("ChatScreen")}
//           style={styles.messagest}
//         >
//           <View style={styles.messages}>
//             <View style={styles.avatar}>
//               <Avatar.Image
//                 source={{
//                   uri: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
//                 }}
//                 size={50}
//               />
//             </View>
//             <View
//               style={{
//                 justifyContent: "center",
//                 marginLeft: 15,
//                 height: "100%",
//                 width: "75%",
//                 borderBottomWidth: 0.3,
//                 borderBottomColor: "darkgrey",
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text style={styles.title}>Johny</Text>
//                 <Text style={styles.time}>Sat</Text>
//               </View>
//               <Text style={styles.subtitle}>This type of badge</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//         {/* ---------------------------- Message section 1 --------------------------------------- */}
//         <TouchableOpacity
//           onPress={() => props.navigation.navigate("ChatScreen")}
//           style={styles.messagest1}
//         >
//           <View style={styles.messages1}>
//             <View
//               style={{
//                 width: "50%",
//                 backgroundColor: "pink",
//                 justifyContent: "center",
//                 position: "absolute",
//                 left: 0,
//               }}
//             >
//               <View
//                 style={{
//                   height: 55,
//                   width: 55,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: 50,
//                   elevation: 10,
//                   position: "absolute",
//                   left: 120,
//                 }}
//               >
//                 <Avatar.Image
//                   source={{
//                     uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
//                   }}
//                   size={50}
//                 />
//               </View>
//               <View
//                 style={{
//                   height: 55,
//                   width: 55,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",

//                   borderRadius: 50,
//                   elevation: 10,
//                   position: "absolute",
//                   left: 70,
//                 }}
//               >
//                 <Avatar.Image
//                   source={{
//                     uri: "https://images.ctfassets.net/hrltx12pl8hq/31f9j3A3xKasyUMMsuIQO8/6a8708add4cb4505b65b1cee3f2e6996/9db2e04eb42b427f4968ab41009443b906e4eabf-people_men-min.jpg?fit=fill&w=368&h=207",
//                   }}
//                   size={50}
//                 />
//               </View>
//               <View
//                 style={{
//                   height: 55,
//                   width: 55,
//                   backgroundColor: "white",
//                   alignItems: "center",
//                   justifyContent: "center",

//                   borderRadius: 50,
//                   elevation: 10,
//                   position: "absolute",
//                   left: 20,
//                 }}
//               >
//                 <Avatar.Image
//                   source={{
//                     uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
//                   }}
//                   size={50}
//                 />
//               </View>
//             </View>
//             <View
//               style={{
//                 width: "50%",
//                 position: "absolute",
//                 left: 175,
//                 marginLeft: 10,
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text style={styles.title}>Group:</Text>
//                 <Text
//                   style={{ fontSize: 12, color: "#434B56", marginRight: 5 }}
//                 >
//                   Fri
//                 </Text>
//               </View>

//               <Text style={styles.subtitle}>Johny, Rob, +21</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default ContactUsCl;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "white",
//     paddingTop: 40,
//   },
//   TitileHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "100%",
//     height: 50,
//     borderBottomWidth: 0.3,
//     borderBottomColor: "darkgrey",
//   },
//   searchbar: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 0.3,
//     borderBottomColor: "darkgrey",
//     width: "100%",
//     height: 60,
//     paddingHorizontal: 15,
//   },
//   textbox: {
//     width: "80%",
//     fontSize: 11,
//     color: "black",
//     padding: 10,
//   },
//   messages1: {
//     width: "100%",

//     height: 100,
//     paddingHorizontal: 15,

//     flexDirection: "row",
//     alignItems: "center",
//   },
//   messages: {
//     width: "100%",

//     height: 100,
//     paddingHorizontal: 15,

//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatar: {
//     height: 55,
//     width: 55,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 90,
//     elevation: 10,
//   },
//   title: {
//     color: "#434B56",
//     fontSize: 14,
//     fontWeight: "700",
//   },
//   subtitle: { color: "#434B56", fontSize: 12 },
//   time: { fontSize: 12, color: "#434B56" },
//   messagest: {
//     width: "100%",

//     height: 100,

//     flexDirection: "row",
//     alignItems: "center",
//   },
//   messagest1: {
//     width: "100%",

//     height: 100,

//     flexDirection: "row",
//     alignItems: "center",
//   },
// });
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { inject, observer } from "mobx-react";

const ContactUsCl = (props) => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ flexGrow: 1, width: "100%" }}
      >
        <View
          style={{
            height: "90%",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/*-----------------header------------------------- */}
          <View style={styles.TitileHeader}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons
                name="md-chevron-back-outline"
                size={35}
                color="#434B56"
              />
            </TouchableOpacity>
            <Text style={styles.HeadingText}>Contact Us</Text>
          </View>
          {/*-------------------email text box------------------------- */}
          <View
            style={{
              width: "95%",
              height: 50,
              marginTop: 80,
            }}
          >
            <Text style={{ fontSize: 12, color: "#535B65" }}>
              Email Address
            </Text>

            <View style={{ alignItems: "center", paddingTop: 15 }}>
              <TextInput editable={false} value={adminData.email} style={styles.textbox} />
            </View>
          </View>
          {/*-------------------phone no text box------------------------- */}
          <View
            style={{
              width: "95%",
              height: 50,
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 12, color: "#535B65" }}>Phone no. </Text>

            <View style={{ alignItems: "center", paddingTop: 15 }}>
              <TextInput editable={false} value={adminData.contact} style={styles.textbox} />
            </View>
          </View>
          {/*-------------------button ------------------------- */}
          <TouchableOpacity style={styles.send} onPress={() => {}}>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
              SEND
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#535B65",
            }}
          >
            {adminData.email}
          </Text>
          <Text style={{ fontSize: 13, color: "#535B65" }}>+91{adminData.contact}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default inject("store")(observer(ContactUsCl));

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
  HeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
  textbox: {
    width: "100%",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    color: "black",
    paddingVertical: 5,
  },
  send: {
    width: "95%",
    height: 50,
    backgroundColor: "#202AA8",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
