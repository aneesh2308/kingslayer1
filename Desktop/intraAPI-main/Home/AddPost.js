import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import Geolocation from 'react-native-geolocation-service';
import { launchImageLibrary } from 'react-native-image-picker';
import firebase from 'firebase';
require("firebase/firebase-firestore")
require("firebase/firebase-storage")
import { inject, observer } from "mobx-react";
import { Alert } from "react-native";

const AddPost = (props) => {
  const [userData, setUserData] = useState({});
  const [location, setLocation] = useState("Maharashtra,India");
  const [filePath, setFilePath] = useState("https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  const [caption, setCaption] = useState("");
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64:true
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        alert('You Cancelled Photo Selection');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on your device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission Denied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.assets.map(item=>item.base64)[0]);
      setFilePath(response.assets.map(item=>item.uri)[0]);

      // const savePostData = (image_url) => {
      //   firebase.firestore().collection('userPosts').doc(firebase.auth().currentUser.uid).add({
      //       image_url,
      //       creation: firebase.firestore.FieldValue.serverTimestamp()
      //   }).then((function(){
      //       props.navigation.popToTop();
      //   }))
      // }
      const uriofImage = response.assets.map(item=>item.uri)[0];
      const uploadImage = async () => {
        console.log("this is the uri ",uriofImage)
        const uri = uriofImage;
        const response = await fetch(uri);
        const blob = await response.blob();
        const task = firebase.storage().ref().child(`posts/${firebase.auth().currentUser.uid}/${uriofImage}`).put(blob);
        const taskProgress = snapshot => {
            console.log(`transferred:${snapshot.bytesTransferred}`)
        }
        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                // savePostData(snapshot);
                console.log(snapshot);
                var requestOptions = {
                  method: "POST",
                  body: JSON.stringify({
                    image_url:snapshot,
                    caption: caption,
                    location: {
                      "city": "Mumbai",
                      "state": "Maharashtra",
                      "country": "India",
                      "location_line": "Mumbai, Maharashtra"
                    }
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.store.getToken}`,
                  },
                  redirect: "follow",
                };
                const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
                fetch(`${apiURL}/user/post`, requestOptions)
                  .then((response) => response.text())
                  .then((result) => {
                    console.log(result);
                    props.navigation.goBack();
                  })
                  .catch((error) => console.log("error", error));
            })
        }
        const taskError = snapshot => {
            console.log(snapshot)
        }
        task.on("state_change",taskProgress,taskError,taskCompleted);
    }
    uploadImage();
    });
  };
  const data = [
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosn277vkOVo-PiJyguD3vuHCWYBU3aUqXmg&usqp=CAU",
      id: "1",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8okjJ4RFxdfjYRsgpj2wbYq6LPxtH-GlVsw&usqp=CAU",
      id: "2",
    },
    {
      img:"https://i.pinimg.com/originals/7b/c6/aa/7bc6aaf5fb6543a2218b6bb02d488caa.jpg",

      id: "3",
    },
    {
      img:"https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      id: "4",
    },
    {
      img:"https://i.pinimg.com/originals/1d/5a/e3/1d5ae3641bddca297e6cb26917d76213.jpg",

      id: "5",
    },
  ];


  // const getUser = async () => {
  //   db.collection("users")
  //     .doc(auth.currentUser.uid)
  //     .onSnapshot((doc) => {
  //       setUserData(doc.data());
  //     });
  // };

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
    Geolocation.getCurrentPosition(
      (position) => {
        console.log("THIS IS THE POSITION",position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true }
    )
    props.navigation.addListener("focus", () => {
    getUser();
    })
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "80%",
          width: "100%",
          alignItems: "center",
          backgroundColor: "white",
        }}
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
              Add Post
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

        {/* -----------------------------  whats on your mind section?  -------------------------------------- */}
        <View style={{ width: "100%", paddingHorizontal: 15, marginTop: 15 }}>
          <TextInput
            placeholder="What's on your mind?"
            placeholderTextColor="black"
            value={caption}
            onChangeText={(txt)=>setCaption(txt)}
            style={styles.captioninput}
            multiline={true}
            numberOfLines={4}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="location-sharp" size={15} color="black" />
            <Text> {location}</Text>
          </View>
        </View>
        <Image
          source={{uri: filePath}}
          style={{ width: "100%", height: 300, marginTop: 50 }}
        />
        <TouchableOpacity
          onPress={()=>{}}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 50,
            backgroundColor: "#e4e4e4",
            borderRadius: 5,
            borderColor: "darkgrey",
            borderWidth: 0.5,
            marginTop: 30,
          }}
          activeOpacity={0.5}
        >
          <Text style={{ fontSize: 18, color: "#434b56", fontWeight: "bold" }}>
            Add Post
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "20%",
          width: "100%",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "flex-end",
          paddingTop: 20,
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={data}
          horizontal={true}
          renderItem={({ item, index }) => {
            if (item.id === "1") {
              return (
                <TouchableOpacity onPress={() => {if(caption!==""){chooseFile('video')}else{Alert.alert("Please make sure their is a caption")}}} activeOpacity={0.5}>
                  <Surface style={styles.surface}>
                    <View
                      style={{
                        width: 75,
                        height: 75,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        borderRadius: 10,
                        backgroundColor: "#fff",
                        borderWidth: 1,
                      }}
                    >
                      <FontAwesome5 name="video" size={30} color="#434b56" />
                    </View>
                  </Surface>
                </TouchableOpacity>
              );
            } else if (item.id === "2") {
              return (
                <TouchableOpacity onPress={() => {if(caption!==""){chooseFile('photo')}else{Alert.alert("Please make sure their is a caption")}}} activeOpacity={0.5}>
                  <Surface style={styles.surface}>
                    <View
                      style={{
                        width: 75,
                        height: 75,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        borderRadius: 10,
                        backgroundColor: "#fff",
                        borderWidth: 1,
                      }}
                    >
                      <FontAwesome name="camera" size={30} color="#434b56" />
                    </View>
                  </Surface>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity onPress={() => {
                  if(caption!==""){var requestOptions = {
                    method: "POST",
                    body: JSON.stringify({
                      image_url:item.img,
                      caption: caption,
                      location: {
                        "city": "Mumbai",
                        "state": "Maharashtra",
                        "country": "India",
                        "location_line": "Mumbai, Maharashtra"
                      }
                    }),
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${props.store.getToken}`,
                    },
                    redirect: "follow",
                  };
                  const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
                  fetch(`${apiURL}/user/post`, requestOptions)
                    .then((response) => response.text())
                    .then((result) => {
                      console.log(result);
                      props.navigation.goBack();
                    })
                    .catch((error) => console.log("error", error));}else{Alert.alert("Please make sure their is a caption")}
                }} activeOpacity={0.5}>
                  <Surface style={styles.surface}>
                    <Image
                      style={{
                        width: 75,
                        height: 75,
                        borderRadius: 10,
                        justifyContent: "center",
                        padding: 0,
                        borderRadius: 10,
                      }}
                      source={{uri:item.img}}
                    />
                  </Surface>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default inject("store")(observer(AddPost));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 40,
  },
  surface: {
    width: 80,
    height: 90,
    backgroundColor: "transparent",
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },

  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
  captioninput: {
    width: "100%",
    backgroundColor: "white",
    padding: 5,
  },
});

{
  /*

      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#434b56" }}>
          {userData.fname}
        </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
          <FontAwesome name="plus-square-o" size={24} color="#434b56" />
        </TouchableOpacity>
      </View>
      
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          width: "100%",
          height: "10%",
          backgroundColor: "white",
          paddingHorizontal: 10,
          marginBottom: 30,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Avatar.Image
            source={{
              uri: userData.userImg,
            }}
            size={50}
          />
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#434b56" }}>
            {userData.fname}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>0</Text>
          <Text>Posts</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>356</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>348</Text>
          <Text>Following</Text>
        </View>
      </View>
      
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: "33.34%",
                backgroundColor: "white",
                padding: 2,
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Image source={item.img} style={{ height: 100, width: "100%" }} />
            </View>
          );
        }}
      />
      */
}
