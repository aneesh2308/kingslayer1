import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import RoundCheckbox from "rn-round-checkbox";
import { inject, observer } from "mobx-react";

const AddRewardsCertificates = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [certificateDetails, setCertificateDetails] = useState({});
  const addCertificate = () => {
    console.log(JSON.stringify(certificateDetails));
    var requestOptions = {
      method: "post",
      body: JSON.stringify(certificateDetails),
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    console.log(requestOptions);
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    fetch(`${apiURL}/users/${props.store.getUid}/certificate`, requestOptions)
      .then((response) => {
        response.json()})
      .then((result) => {
        props.navigation.navigate("EditProfile");

        console.log("certificate details added");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <View style={{ width: "100%", height: "90%", alignItems: "center" }}>
        <View style={styles.TitileHeader}>
          <View
            style={{
              width: "100%",
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
            <Text style={styles.Heading}>Add Rewards & Certificates</Text>
          </View>
        </View>
        {/* ---------------------------------------------- textInput ------------------------------------------------------ */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
          }}
        >
          {/* textInput Name* */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Name*</Text>
            <TextInput style={styles.textbox}

onChangeText={(txt) => setCertificateDetails({...certificateDetails,"name":txt})}

            />
          </View>
          {/* textInput Issuing organation */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Issuing organation </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput style={styles.textbox}
onChangeText={(txt) => setCertificateDetails({...certificateDetails,"issuing_organization":txt})}

               />
              <Entypo
                name="chevron-small-down"
                size={24}
                color="#687980"
                style={{ position: "relative", top: 10 }}
              />
            </View>
          </View>
          {/* radio button */}
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
            />

            <Text style={styles.bluetext}>The credential does not expire</Text>
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
                <Text style={styles.listtitle}>Issue Date(mm/dd/yyyy) </Text>
                <TextInput style={styles.textbox}
onChangeText={(txt) => setCertificateDetails({...certificateDetails,"issue_date_timestamp":Date.parse(txt)})}

                 />
              </View>
            </View>
            <View style={{ width: "40%" }}>
              <View style={styles.inputlist}>
                <Text style={styles.listtitle}>Expiration Date(mm/dd/yyyy)</Text>
                <TextInput style={styles.textbox}

onChangeText={(txt) => setCertificateDetails({...certificateDetails,"expiration_date_timestamp":Date.parse(txt)})}

                />
              </View>
            </View>
          </View>
          {/* textInput Credential ID */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Credential ID</Text>
            <TextInput style={styles.textbox}
onChangeText={(txt) => setCertificateDetails({...certificateDetails,"credential_id":txt})}

             />
          </View>
          {/* textInput Credential URL */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Credential URL</Text>
            <TextInput style={styles.textbox}
onChangeText={(txt) => setCertificateDetails({...certificateDetails,"credential_url":txt})}


            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >


        <TouchableOpacity style={styles.Save}  onPress={addCertificate}  activeOpacity={0.7}>
          <Text style={{ color: "#e4e4e4", fontSize: 16, fontWeight: "700" }}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default inject("store")(observer(AddRewardsCertificates));

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
    marginLeft: 15,
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
  Save: {
    width: "100%",
    height: 50,
    backgroundColor: "#202AA8",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
