import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { inject, observer } from "mobx-react";

import RoundCheckbox from "rn-round-checkbox";

const AddEducation = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [educationDetails, setEducationDetails] = useState({});
  const addEducation = () => {
    console.log(JSON.stringify(educationDetails));
    var requestOptions = {
      method: "post",
      body: JSON.stringify(educationDetails),
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    console.log(requestOptions);
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    fetch(`${apiURL}/users/${props.store.getUid}/education`, requestOptions)
      .then((response) => {
        response.json()})
      .then((result) => {
        props.navigation.navigate("EditProfile");
        console.log("Education details added");
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
  }, []);
  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "80%" }}
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
            <Text style={styles.Heading}>Add Education</Text>
          </View>
          <View style={{ width: "20%", alignItems: "flex-end" }}>
          <TouchableOpacity onPress={addEducation} activeOpacity={0.5}>
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
          {/* textInput school */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>School</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setEducationDetails({...educationDetails,"institute_name":txt})}

            />
          </View>
          {/* textInput degree */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Standard</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setEducationDetails({...educationDetails,"degree":txt})}

            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              width: "100%",
            }}
          >
            <RoundCheckbox
              icon={"checkmark"}
              size={25}
              backgroundColor={"#202AA8"}
              iconColor={"white"}
              checked={isChecked}
              onValueChange={(checked) => setIsChecked(checked)}
              style={{ position: "relative", right: 0, top: 0 }}
            />

            <Text style={styles.bluetext}>Currently Studying</Text>
          </View>
          {/* textInput field of study */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Field of Study</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setEducationDetails({...educationDetails,"subject":txt})}

             />
          </View>
          {/* textInput start date end date */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "40%" }}>
              <View style={styles.inputlist}>
                <Text style={styles.listtitle}>Start(mm/dd/yyyy) </Text>
                <TextInput style={styles.textbox}
               onChangeText={(txt) => setEducationDetails({...educationDetails,"start_date_timestamp":Date.parse(txt)/1000})}

                 />
              </View>
            </View>
            <View style={{ width: "40%" }}>
              <View style={styles.inputlist}>
                <Text style={styles.listtitle}>End(mm/dd/yyyy) </Text>
                <TextInput style={styles.textbox}
               onChangeText={(txt) => setEducationDetails({...educationDetails,"end_date_timestamp":Date.parse(txt)/1000})}

                 />
              </View>
            </View>
          </View>
          {/* textInput grade */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Grade (optional)</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setEducationDetails({...educationDetails,"grade":txt})}

             />
          </View>
          {/* textInput Activities and socities */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Activities and socities</Text>
            <TextInput style={styles.textbox} />
          </View>
          {/* textInput Description */}
          <View style={styles.inputlist1}>
            <Text style={styles.listtitle}>Description</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setEducationDetails({...educationDetails,"decription":txt})}

             />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default inject("store")(observer(AddEducation));

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
    borderBottomColor: "#e4e4e4",
    marginVertical: 10,
    marginTop: 20,
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
    color: "#202AA8",
    fontWeight: "700",
    marginLeft: 30,
  },
  inputlist1: {
    width: "100%",
    height: 60,
    borderBottomWidth: 0.3,
    borderBottomColor: "#e4e4e4",
    marginVertical: 10,
    marginTop: 20,
    marginBottom: 50,
  },
});
