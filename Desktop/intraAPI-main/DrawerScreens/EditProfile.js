import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { inject, observer } from "mobx-react";
import { launchImageLibrary } from 'react-native-image-picker';
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import firebase from 'firebase';
require("firebase/firebase-firestore")
require("firebase/firebase-storage")

const EditProfile = (props) => {
  const [filePath, setFilePath] = useState("");
  const [spinner, setSpinner] = useState(false)
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.assets.map(item=>item.uri)[0]);
      setFilePath(response.assets.map(item=>item.uri)[0]);
      const uriofImage = response.assets.map(item=>item.uri)[0];
      const uploadImage = async () => {
        console.log("this is the uri ",uriofImage)
        const uri = uriofImage;
        const response = await fetch(uri);
        const blob = await response.blob();
        const task = firebase.storage().ref().child(`users/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`).put(blob);
        const taskProgress = snapshot => {
            console.log(`transferred:${snapshot.bytesTransferred}`);
            setSpinner(true);
        }
        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                // savePostData(snapshot);
                console.log(snapshot);
                var requestOptions = {
                  method: "patch",
                  body: JSON.stringify({
                    profile_pic_url:snapshot
                }),
                  headers: {
                    "Authorization":`Bearer ${props.store.getToken}`,
                    "Content-Type": "application/json",
                  },
                  redirect: "follow",
                };
                const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
                fetch(`${apiURL}/user/${props.store.getUid}`, requestOptions)
                  .then((response) => response.json())
                  .then((result) => {
                    console.log("This is the filePath ",result);
                    setSpinner(false);
                  })
                  .catch((error) => console.log("error", error));
            })
        }
        const taskError = snapshot => {
            console.log(snapshot);
            setSpinner(false);
        }
        task.on("state_change",taskProgress,taskError,taskCompleted);
    }
    uploadImage();
    });
  };
  const [userData, setUserData] = useState({});
  const [Education, setEducationData] = useState([]);
  const [Experience, setExperienceData] = useState([]);
  const [Certificates, setCertificatesData] = useState([]);

  // const getUser = async () => {
  //   await db
  //     .collection("users")
  //     .doc("m6MlUHaFw6GScEAUXw0K")
  //     .get()
  //     .then((documentSnapshot) => {
  //       if (documentSnapshot.exists) {
  //         // console.log("User Data", documentSnapshot.data());
  //         setUserData(documentSnapshot.data());
  //       }
  //     });
  // };
  const getUser = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result ",result.date_of_birth);
        setUserData(result);
        setFilePath(result.profile_pic_url);
      })
      .catch((error) => console.log("error", error));
  };
  const getEducation = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${props.store.getUid}/educations`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result ",result);
        setEducationData(result["educations"]);

      })
      .catch((error) => console.log("error", error));
  };
  const getExperience = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${props.store.getUid}/experiences`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result ",result);
        setExperienceData(result["experiences"]);

      })
      .catch((error) => console.log("error", error));
  };
  const getCertificates = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${props.store.getUid}/certificates`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result ",result);
        setCertificatesData(result["certificates"]);

      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    const unsubscribe = () =>
      props.navigation.addListener("focus", () => {
        getUser();
        getEducation();
  getExperience();
  getCertificates();

      });
    return unsubscribe();
  }, [props.navigation]);


  const Intrests = [
    {
      id: "1",
      img: {
        uri: "https://static.toiimg.com/photo/imgsize-74502,msid-82791170/82791170.jpg",
      },
      school: "Dewell Public School",
      per: "Commerce 85%",
      board: "CBSE",
    },
    {
      id: "2",
      img: {
        uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
      school: "Airforce Public School",
      per: "Commerce 95%",
      board: "CBSE",
    },
    {
      id: "3",
      img: {
        uri: "https://i.pinimg.com/736x/33/e4/83/33e48331558011e745a4c428a448bf27.jpg",
      },
      school: "Sfs Public School",
      per: "Commerce 95%",
      board: "CBSE",
    },
  ];
  return (
    <View
      style={{
        paddingTop: 40,
        backgroundColor: "white",
      }}
    >
    <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF' }}
        />
      <FlatList
        data={Certificates}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={({ item, index }) => {
          return (
            <View>
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
                    Edit Profile
                  </Text>
                </View>
              </View>
              {/* ---------------------------- profile --------------------------------------- */}
              <View style={styles.profile}>
              <TouchableOpacity onPress={()=>chooseFile('photo')}><Avatar.Image source={{uri:filePath}}size={110}/></TouchableOpacity>
                <View style={styles.camera}>
                  <Feather name="camera" size={18} color="grey" />
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#434B56",
                      padding: 2,
                    }}
                  >
                    {userData.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#434B56",
                      padding: 2,
                    }}
                  >
                    {userData.email}
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "600",
                      color: "#434B56",
                      padding: 2,
                    }}
                  >
                    Deaken University, Delhi, {userData.country}
                  </Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Connections")}
                    activeOpacity={0.5}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#434B56",
                        padding: 2,
                      }}
                    >
                      70 Connections
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* ---------------------------- 3 Buttons --------------------------------------- */}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  borderTopWidth: 0.3,
                  borderBottomWidth: 0.3,
                  borderColor: "darkgrey",
                  paddingVertical: 20,
                }}
              >
                <TouchableOpacity
                  style={styles.button3}
                  activeOpacity={0.5}
                  onPress={() => props.navigation.navigate("MyPosts")}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#434b56",
                      fontWeight: "bold",
                    }}
                  >
                    My Posts
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button3}
                  activeOpacity={0.5}
                  onPress={() => props.navigation.navigate("Activities")}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#434b56",
                      fontWeight: "bold",
                    }}
                  >
                    Activities
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button3}
                  activeOpacity={0.5}
                  onPress={() => props.navigation.navigate("Saved")}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#434b56",
                      fontWeight: "bold",
                    }}
                  >
                    Saved
                  </Text>
                </TouchableOpacity>
              </View>
              {/* ---------------------------- personal details navigation--------------------------------------- */}
              <View style={styles.personal}>
                <Text style={styles.title}>Personal Details</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("PersonalDetails")}
                  activeOpacity={0.5}
                >
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={20}
                    color="#535B65"
                  />
                </TouchableOpacity>
              </View>
              {/* ---------------------------- education details --------------------------------------- */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 15,
                  paddingHorizontal: 15,
                }}
              >
                <Text style={styles.title}>Education</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("AddEducation")}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={20}
                    color="#535B65"
                  />
                </TouchableOpacity>
              </View>
              {/*---------------------------------------------Education Flatlist------------------------------------------------------------------------------*/}
              <FlatList
                data={Education}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingTop: 20,
                        width: "100%",
                        paddingLeft: 15,
                      }}
                    >
                      <View
                        style={{
                          height: 65,
                          width: 65,
                          backgroundColor: "white",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 50,
                          elevation: 10,
                        }}
                      >
                        <Avatar.Image source={item.img} size={60} />
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "80%",

                          borderBottomWidth: 0.3,
                          borderBottomColor: "darkgrey",
                        }}
                      >
                        <View style={{ paddingLeft: 15, paddingBottom: 5 }}>
                          <Text style={styles.title}>{item.institute_name}</Text>
                          <Text style={styles.subtitle}>{item.degree}</Text>
                          <Text style={styles.subtitle}>{item.subject}</Text>
                        </View>
                        <MaterialCommunityIcons
                          name="pencil-outline"
                          size={20}
                          color="#535B65"
                        />
                      </View>
                    </View>
                  );
                }}
                ListFooterComponent={({ item, index }) => {
                  return (
                    <View>
                      {/*---------------------------------------------Experience titile-----------------------------------------------------------------------------*/}
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 15,
                          paddingHorizontal: 15,
                        }}
                      >
                        <Text style={styles.title}>Experience</Text>
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate("AddExperience")}
                        >
                          <MaterialCommunityIcons
                            name="plus"
                            size={20}
                            color="#535B65"
                          />
                        </TouchableOpacity>
                      </View>
                      <FlatList
                        data={Experience}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={({ item, index }) => {
                          return (
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: 15,
                                paddingHorizontal: 15,
                              }}
                            >
                              {/*---------------------------------------------Rewards and certificates text------------------------------------------------------------------------------*/}
                              <Text style={styles.title}>
                                Rewards and Certificates
                              </Text>
                              <TouchableOpacity
                                onPress={() =>
                                  props.navigation.navigate("AddRewardsCertificates")
                                }
                              >
                                <MaterialCommunityIcons
                                  name="plus"
                                  size={20}
                                  color="#535B65"
                                />
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                        renderItem={({ item, index }) => {
                          return (
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                paddingTop: 20,
                                width: "100%",
                                paddingLeft: 15,
                              }}
                            >
                              {/*---------------------------------------------Experience Flatlist-----------------------------------------------------------------------------*/}
                              <View
                                style={{
                                  height: 65,
                                  width: 65,
                                  backgroundColor: "white",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: 50,
                                  elevation: 10,
                                }}
                              >
                                <Avatar.Image source={item.img} size={60} />
                              </View>
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: "80%",

                                  borderBottomWidth: 0.3,
                                  borderBottomColor: "darkgrey",
                                }}
                              >
                                <View
                                  style={{ paddingLeft: 15, paddingBottom: 5 }}
                                >
                                  <Text style={styles.title}>
                                    {item.title}
                                  </Text>
                                  <Text style={styles.subtitle}>
                                    {item.company_name}
                                  </Text>
                                  <Text style={styles.subtitle}>
                                    {item.decription}
                                  </Text>

                                </View>
                                <MaterialCommunityIcons
                                  name="pencil-outline"
                                  size={20}
                                  color="#535B65"
                                />
                              </View>
                            </View>
                          );
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 20,
                width: "100%",
                paddingLeft: 15,
                backgroundColor: "white",
              }}
            >
              {/*---------------------------------------------Rewars and certificates flat list------------------------------------------------------------------------------*/}
              <View
                style={{
                  height: 65,
                  width: 65,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  elevation: 10,
                }}
              >
                <Avatar.Image source={item.img} size={60} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "80%",

                  borderBottomWidth: 0.3,
                  borderBottomColor: "darkgrey",
                }}
              >
                <View style={{ paddingLeft: 15, paddingBottom: 5 }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subtitle}>{item.issuing_organization}</Text>

                </View>
                <MaterialCommunityIcons
                  name="pencil-outline"
                  size={20}
                  color="#535B65"
                />
              </View>
            </View>
          );
        }}
        ListFooterComponent={({ item, index }) => {
          return (
            <View>
              {/*---------------------------------------------Interests------------------------------------------------------------------------------*/}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 15,
                  paddingHorizontal: 15,
                }}
              >
                <Text style={styles.title}>Interests</Text>
                <TouchableOpacity onPress={() => {}}>
                  <MaterialCommunityIcons
                    name="plus"
                    size={20}
                    color="#535B65"
                  />
                </TouchableOpacity>
              </View>
              {/*---------------------------------------------Interests flatlist------------------------------------------------------------------------------*/}
              <FlatList
                data={Intrests}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingTop: 20,
                        width: "100%",
                        paddingLeft: 15,
                      }}
                    >
                      <View
                        style={{
                          height: 65,
                          width: 65,
                          backgroundColor: "white",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 50,
                          elevation: 10,
                        }}
                      >
                        <Avatar.Image source={item.img} size={60} />
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "80%",

                          borderBottomWidth: 0.3,
                          borderBottomColor: "darkgrey",
                        }}
                      >
                        <View style={{ paddingLeft: 15, paddingBottom: 5 }}>
                          <Text style={styles.title}>{item.school}</Text>
                          <Text style={styles.subtitle}>{item.per}</Text>
                          <Text style={styles.subtitle}>{item.board}</Text>
                        </View>
                        <TouchableOpacity>
                          <Text style={{ fontSize: 11 }}>Following</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
                ListFooterComponent={({ item, indes }) => {
                  return (
                    <TouchableOpacity
                      style={{
                        width: "80%",
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 0.5,
                        borderColor: "darkgrey",
                        marginVertical: 20,
                        alignSelf: "center",
                        borderRadius: 5,
                      }}
                    >
                      {/*---------------------------------------------See all button------------------------------------------------------------------------------*/}
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          color: "#535B65",
                        }}
                      >
                        See all
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        }}
      />
      {/*--------------------------------------------- space below-----------------------------------------------------------------------------*/}
      <View
        style={{ height: 100, width: "100%", backgroundColor: "white" }}
      ></View>
    </View>
  );
};

export default inject("store")(observer(EditProfile));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
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
  profile: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 20,
    paddingBottom: 10,
  },
  camera: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#1C2172",
    position: "absolute",
    left: 105,
    top: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  personal: {
    width: "100%",
    height: 60,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#535B65",
    padding: 2,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#535B65",
    paddingLeft: 2,
  },
  button3: {
    backgroundColor: "white",
    width: "25%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "darkgrey",
    borderRadius: 5,
  },
});
