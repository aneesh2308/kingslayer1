import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { inject, observer } from "mobx-react";

import RoundCheckbox from "rn-round-checkbox";

const AddExperience = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [experienceDetails, setExperienceDetails] = useState({});
  const addExperience = () => {
    console.log(JSON.stringify(experienceDetails));
    var requestOptions = {
      method: "post",
      body: JSON.stringify(experienceDetails),
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    console.log(requestOptions);
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    fetch(`${apiURL}/users/${props.store.getUid}/experience`, requestOptions)
      .then((response) => {
        response.json()})
      .then((result) => {
        props.navigation.navigate("EditProfile");

        console.log("Experience details added");
      })
      .catch((error) => console.log("error", error));
  };
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
            <Text style={styles.Heading}>Add Experience</Text>
          </View>
          <View style={{ width: "20%", alignItems: "flex-end" }}>
          <TouchableOpacity onPress={addExperience} activeOpacity={0.5}>

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
          {/* textInput Title */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Title*</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"title":txt})}

             />
          </View>
          {/* textInput Employment type */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Employment type </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput style={styles.textbox}
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"employement_type":txt})}

               />
              <Entypo
                name="chevron-small-down"
                size={24}
                color="#687980"
                style={{ position: "relative", top: 10 }}
              />
            </View>
          </View>
          {/* textInput Company name */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Company name*</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"company_name":txt})}

             />
          </View>
          {/* textInput Location */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Location</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"location":txt})}

             />
          </View>
          {/* checkbox */}
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
              size={26}
              backgroundColor={"#202AA8"}
              iconColor={"white"}
              checked={isChecked}
              onValueChange={(checked) => setIsChecked(checked)}
              style={{ position: "relative", right: 50, top: 50 }}
            />

            <Text style={styles.bluetext}>I currently work in this role</Text>
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
                <Text style={styles.listtitle}>Start </Text>
                <TextInput
                  style={styles.textbox2}
                  placeholder="mm/dd/yyyy"
                  placeholderTextColor="#434B56"
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"start_date_timestamp":Date.parse(txt)/1000})}

                />
              </View>
            </View>
            <View style={{ width: "40%" }}>
              <View style={styles.inputlist}>
                <Text style={styles.listtitle}>End </Text>
                <TextInput
                  style={styles.textbox}
                  placeholder="mm/dd/yyyy"
                  placeholderTextColor="#A1a1a1"
                  onChangeText={(txt) => setExperienceDetails({...experienceDetails,"end_date_timestamp":Date.parse(txt)/1000})}

                />
              </View>
            </View>
          </View>
          {/* textInput Internship experience */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Experience</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"experience":txt})}

             />
          </View>
          {/* textInput Description */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Description</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"decription":txt})}

             />
          </View>
          {/* textInput Add additional cources */}
          <View style={styles.inputlist1}>
            <Text style={styles.listtitle}>Additional courses</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setExperienceDetails({...experienceDetails,"additional_course":txt})}

            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default inject("store")(observer(AddExperience));

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
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    height: 50,
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
  textbox2: {
    width: "90%",
    color: "#a1a1a1",
    height: 40,
    fontSize: 14,
    fontWeight: "700",
  },
});
