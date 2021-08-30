import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { inject, observer } from "mobx-react";

const MyClasses = (props) => {
  const [userData, setUserData] = React.useState({})
  const [institute, setInstitute] = React.useState({})
  const [spinner, setSpinner] = React.useState(false)
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
    setSpinner(true)
    fetch(`${apiURL}/users/${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
        var requestOptions1 = {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${props.store.getToken}`,
            "Content-Type": "application/json"
          },
          redirect: "follow",
        };
        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
        fetch(`${apiURL}/institute/${result.institute_id}`, requestOptions1)
        .then((response) => response.json())
        .then((result1) => {
          setInstitute(result1)
          setSpinner(false)
        })
        .catch((error) => console.log("error", error));
      }).catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
}, [])
const timeago = (timestamp) => {
  var d = new Date(timestamp);
  var day=""
  var month=""
  var year=""
console.log(d)
if(d.getUTCDate()>9)
      {
        day=d.getUTCDate();
        console.log(d.getUTCDate())
      }else{
        day=("0"+d.getUTCDate());
        console.log("0"+d.getUTCDate())
      }
if((d.getUTCMonth()+1)>9)
      {
        month=(d.getUTCMonth()+1);
        console.log(d.getUTCMonth()+1)
      }else{
        month=("0"+(d.getUTCMonth()+1));
        console.log("0"+(d.getUTCMonth()+1))
      }
console.log(d.getUTCFullYear().toString().slice(2,4));
year=d.getUTCFullYear().toString().slice(2,4);
return `${day}-${month}-${year}`
}
  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF' }}
        />
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
              My Classes
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
        {/* ---------------------------- section--------------------------------------- */}

        <View style={styles.list}>
          <Text style={{ fontSize: 10, color: "#535B65" }}>{timeago(institute.timestamp)}</Text>
          <View style={styles.listleftcontent}>
            <Text
              style={{
                fontSize: 15,
                color: "#535B65",
                fontWeight: "600",
                paddingVertical: 3,
              }}
            >
              {institute.name}
            </Text>

            {/* <Text style={{ fontSize: 10, color: "#535B65" }}>25 mins</Text> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 11, color: "#535B65", fontWeight: "500" }}>
            {institute.type}
            </Text>

            <TouchableOpacity onPress={()=>{props.navigation.navigate("JoinClass1")}}><Text style={{ fontSize: 12, color: "#E72C83", fontWeight: "700" }}>Join Session</Text></TouchableOpacity>
          </View>
        </View>
        {/* ---------------------------- section 1 --------------------------------------- */}

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("UpcomingLecCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                Upcoming Lectures
              </Text>

              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View>

        {/* ---------------------------- section 2--------------------------------------- */}

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("AssignmentCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                Assignments
              </Text>
              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View>
        {/* ---------------------------- section 3--------------------------------------- */}

        {/* <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("RecordedLecCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                Recorded Lectures
              </Text>
              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View> */}
        {/* ---------------------------- section 4--------------------------------------- */}

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PayFeesInvoiceCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                Pay fees & invoice
              </Text>
              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View>
        {/* ---------------------------- section 5--------------------------------------- */}

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("McqTestsCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                MCQ Tests
              </Text>
              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View>
        {/* ---------------------------- section 6--------------------------------------- */}

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("AnnoncementsCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                Annoucement
              </Text>
              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View>
        {/* ---------------------------- section 7--------------------------------------- */}

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ContactUsCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                Contact Us
              </Text>
              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View>
        {/* ---------------------------- section 8--------------------------------------- */}

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("AboutUsCl")}
          >
            <View style={styles.listleftcontent}>
              <Text
                style={{ fontSize: 14, color: "#535B65", fontWeight: "700" }}
              >
                About Us
              </Text>
              <MaterialIcons name="navigate-next" size={22} color="#434B56" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default inject("store")(observer(MyClasses));


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
    borderBottomWidth: 0.2,
    borderBottomColor: "darkgrey",
  },
  list: {
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listleftcontent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
