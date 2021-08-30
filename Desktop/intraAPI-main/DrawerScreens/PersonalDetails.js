import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Picker,
} from "react-native";
import { Avatar } from "react-native-paper";
import { inject, observer } from "mobx-react";

import Ionicons from "react-native-vector-icons/Ionicons";

// import { auth, db } from "../Config";

const PersonalDetails = (props) => {
  const [userData, setUserData] = useState({});

  // const getUser = async () => {
  //   await db
  //     .collection("users")
  //     .doc("zcJ30iMmxg7JxDljALZl")
  //     .get()
  //     .then((documentSnapshot) => {
  //       if (documentSnapshot.exists) {
  //         console.log("User Data", documentSnapshot.data());
  //         setUserData(documentSnapshot.data());
  //       }
  //     });
  // };

  const getUser = async () => {
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
        setName(result.name);
        setDob(result.date_of_birth);
        setBio(result.bio);
        setEmail(result.email);
        setSelectedValue(result.gender);
        setPhone(result.contact);
      })
      .catch((error) => console.log("error", error));
  };


  useEffect(() => {
    getUser();
  }, []);

  // const update = async () => {
  //   await db
  //     .collection("users")
  //     .doc("zcJ30iMmxg7JxDljALZl")
  //     .update({
  //       email: userData.email,
  //       auth_id: userData.auth_id,
  //       country: userData.country,
  //       father_name: userData.father_name,
  //       gender: userData.gender,
  //       bio: userData.bio,
  //       contact: userData.contact,
  //       date_of_birth: userData.date_of_birth,
  //       name: userData.name,
  //       profile_pic_url: userData.profile_pic_url,
  //       password: userData.password,
  //     })
  //     .then(() => {
  //       console.log("User Updated!");
  //       Alert.alert(
  //         "Profile Updated!",
  //         "Your profile has been updated successfully."
  //       );
  //     });

  //   props.navigation.navigate("EditProfile", { info: userData });
  // };

  const update = () => {
    var requestOptions = {
      method: "patch",
      body: JSON.stringify({
        email: email,
        bio: bio,
        contact: phone,
        gender:selectedValue,
        date_of_birth: dob,
        name: name
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
        props.navigation.navigate("EditProfile", { info: userData });
        console.log("This is the user Data ",dob);
      })
      .catch((error) => console.log("error", error));
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={styles.container}>

      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.TitileHeader}>
          <View
            style={{ width: "80%", flexDirection: "row", alignItems: "center" }}
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
            <Text style={styles.Heading}>Personal Details</Text>
          </View>
          <View style={{ width: "20%", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={update} activeOpacity={0.5}>
              <Text
                style={{
                  fontSize: 16,
                  paddingRight: 10,
                  color: "#A1a1a1",
                  fontWeight: "700",
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ---------------------------------------------- textInput ------------------------------------------------------ */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
          }}
        >
          {/* textInput first name */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Name</Text>
            <TextInput
              style={styles.textbox}
              value={name}
              onChangeText={(txt) => setName(txt)}
            />
          </View>

          {/* textInput  headline name*/}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Email</Text>
            <TextInput
              style={styles.textbox}
              value={email}
              onChangeText={(txt) => setEmail(txt)}            />
          </View>
          {/* textInput  current name*/}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Bio</Text>
            <TextInput
              style={styles.textbox}
              value={bio}
              onChangeText={(txt) => setBio(txt)}
            />
          </View>
          {/* add new education button */}

          {/* textInput  Education name*/}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Phone Number</Text>
            <TextInput
              style={styles.textbox}
              value={phone}
              onChangeText={(txt) => setPhone(txt)}
            />
          </View>
          {/* add new education button */}

          {/* textInput  Education name*/}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Gender</Text>

            {/* <TextInput
              style={styles.textbox}
              value={userData ? userData.gender || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, gender: txt })}
            /> */}
            <Picker
              selectedValue={selectedValue}
              style={{
                width: "100%",
                position: "relative",
                top: 10,
                height: 20,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="male" value="male" key={0} />
              <Picker.Item label="female" value="female" />
              <Picker.Item label="other" value="other" />
            </Picker>
          </View>

          {/* textInput  date of birt name*/}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Date of birth</Text>
            <TextInput
              style={styles.textbox}
              value={dob.toString()}
              onChangeText={(txt) =>setDob(txt)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default inject("store")(observer(PersonalDetails));

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
  Heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },

  inputlist: {
    width: "100%",
    height: 60,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    marginVertical: 10,
    marginTop: 20,
    backgroundColor: "white",
  },
  textbox: {
    width: "90%",
    color: "black",
    height: 40,
  },
  listtitle: {
    fontSize: 14,
    color: "#A1a1a1",
    fontWeight: "700",
  },
  bluetext: {
    fontSize: 14,
    color: "#1C2172",
    fontWeight: "700",
  },
});

// await db.collection("users").doc(firebase.auth().currentUser.uid).set({
//   // createdAt: firebase.firestore().Timestamp.fromDate(new Date()),

//   dob: userData.dob,
//   bio: bio,
//   phone: phone,
//   gender: gender,
// });
