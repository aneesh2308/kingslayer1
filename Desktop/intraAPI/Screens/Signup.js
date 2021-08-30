import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  CheckBox,
  Alert,
  Linking
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import ModalDropdown from 'react-native-modal-dropdown';
import LinearGradient from "react-native-linear-gradient";
import firebase from "firebase";
import DateTimePickerModal from "react-native-modal-datetime-picker";
require("firebase/firebase-firestore");
import { inject, observer } from "mobx-react";

const Signup = (props) => {
  const [userData, setUserData] = useState([]);

  const [isSelected, setSelection] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState();
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [imgUrl, setImgUrl] = useState(
    "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png"
  );

  // const googleusersignin = async () => {
  //   var provider = new firebase.auth.GoogleAuthProvider();

  //   provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  //   firebase.auth().languageCode = "it";

  //   provider.setCustomParameters({});

  //   await firebase
  //     .auth()
  //     .getRedirectResult()
  //     .then((result) => {
  //       if (result.credential) {
  //
  //         var credential = result.credential;

  //
  //         var token = credential.accessToken;
  //
  //       }

  //
  //       var user = result.user;
  //     })
  //     .catch((error) => {
  //
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //
  //       var email = error.email;
  //
  //       var credential = error.credential;
  //
  //     });
  // };

  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  }

  function onSignIn(googleUser) {
    console.log("user info", googleUser.user);
    setUserData(googleUser.user);

    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.accessToken
        );

        firebase
          .auth()
          .signInWithCredential(credential)
          .then(console.log(credential))
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  }
  const apiURL = "https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
  const register = async () => {
    const uid = await sigupAuth();
    await registerAuth(uid);
  };
  const convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  const sigupAuth = async () => {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(user.user.uid);
    // setauthid(authUser.user.uid);
    return user.user.uid;
  };
  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const registerAuth = async (uid) => {
    await fetch(`${apiURL}/user/register/`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        auth_id: uid,
        country: country,
        father_name: "Enter your father's name",
        gender: "male",
        bio: "Set your bio",
        contact: phone,
        date_of_birth: dob,
        name: name,
        profile_pic_url: "https://cdn.site.com/myprofilepic.jpg",
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        props.store.setToken(resJson.token);
        console.log("Token is from above :",resJson.token);
        props.store.setUid(resJson.id);
        props.navigation.navigate("Home")
      })
      .catch((error) => Alert.alert("error", error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "#191E63",
          "#191F64",
          "#191E62",
          "#1C237E",
          "#1F289C",
          "#1F289A",
        ]}
        style={styles.background}
      >
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <Text style={styles.maintext}>Sign Up</Text>
          </TouchableOpacity>
          {/*------------------------------------------------------- textInput------------------------------------------------------ */}
          {/* textInput full name */}
          <View style={styles.inputcontainer}>
          <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>Full Name</Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.textbox}
              />
            </View>
          </View>
          {/*------------------------------------------------------- textInput------------------------------------------------------ */}
          {/* textInput dob */}
          <View style={styles.inputcontainer}>
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                Date Of Birth
              </Text>
            </View>
            <TouchableOpacity onPress={()=>{setIsDatePickerVisible(true)}} style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                keyboardType={"number-pad"}
                value={dob}
                editable={false}
                onChangeText={(text) => setDob(text)}
              />
              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={(date)=>{
                setDob(convert(date))
                hideDatePicker();
              }}
              onCancel={hideDatePicker}
            />
            </TouchableOpacity>
          </View>
          {/* textInput */}
          <View
            style={{
              width: "80%",
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 5,
              flexDirection: "row",
              backgroundColor: "transparent",
              height: 40,
            }}
          >
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>Country</Text>
            </View>
            <View style={{paddingTop:20}}>
            {/* <TextInput
              // value={selectedValue}
              // style={{
              //   width: "80%",
              //   fontSize: 12,
              //   color: "white",
              //   height: 40,
              //   backgroundColor: "transparent",
              //   position: "relative",
              //   top: 10,
              // }}
              style={styles.textbox}
              value={country}
              onChangeText={(text) => setCountry(text)}
            /> */}
            <ModalDropdown dropdownStyle={{ width:"80%",height:"20%" }} textStyle={{color:"white"}} options={['India','USA','UK']}/>
            {/* <Picker
              selectedValue={selectedValue}
              style={{
                height: 40,
                width: "20%",
                position: "relative",
                top: 10,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="Java" value="Java" />
              <Picker.Item label="JavaScript" value="JavaScript" />
              <Picker.Item label="Kotlin" value="Kotlin" />
              <Picker.Item label="Italy" value="Italy" />
            </Picker> */}
            </View>
          </View>

          {/* textInput */}
          {/* textInput email */}
          <View style={styles.inputcontainer}>
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>Email</Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          {/* textInput */}
          {/* textInput Phone Number name */}
          <View style={styles.inputcontainer}>
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                Phone Number
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />
            </View>
          </View>
          {/* textInput */}
          <View style={styles.inputcontainer}>
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>Password</Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
          {/* textInput */}
          {/* textInput */}
          <View style={styles.inputcontainer}>
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                Confirm Password
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput style={styles.textbox} secureTextEntry={true} />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 0,
                marginTop: 50,
              }}
            >
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <TouchableOpacity onPress={()=>{Linking.openURL("https://intraedu.in/terms-of-use/").catch(err => console.error("Couldn't load page", err));}} style={styles.logo}>
              <Text style={{ color: "white", fontSize: 12 }}>
                Terms & Conditions
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: 20,
              backgroundColor: "transparent",
              position: "relative",
              marginTop: 50,
            }}
          >
            {/* signup */}
            <TouchableOpacity style={styles.Signupbutton} onPress={register}>
              <Text
                style={{ color: "#1C2172", fontSize: 13, fontWeight: "bold" }}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
            {/* google */}
            <View style={styles.Googlebutton}>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AntDesign name="googleplus" size={20} color="white" />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                      paddingLeft: 20,
                    }}
                  >
                    Login With Google
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Collaboration")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 170,
                backgroundColor: "transparent",
                borderColor: "white",
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Collaboration Form
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default inject("store")(observer(Signup));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  maintext: {
    fontSize: 26,
    fontWeight: "700",
    color: "white",
    marginBottom: 50,
    marginTop: 50,
  },
  Signupbutton: {
    width: "95%",
    height: 50,
    backgroundColor: "white",
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  Googlebutton: {
    width: "95%",
    height: 50,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 0,
    marginTop: 10,
  },
  icon: {
    position: "relative",
    top: 15,
  },
  textbox: {
    width: "80%",
    color: "white",
    fontSize: 12,
    height:30,
    paddingTop:-18,
    paddingBottom:-20
  },
  textbox1: {
    width: "75%",
    fontSize: 12,
    color: "white",
  },
  inputcontainer: {
    width: "80%",
    height: 40,
    borderBottomWidth: 0.6,
    borderBottomColor: "#687980",
    marginBottom: 5,
  },
});
