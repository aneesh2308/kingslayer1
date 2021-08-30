import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  Picker,
  CheckBox,
  Alert,
  ToastAndroid,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Collaboration = (props) => {
  const [userData, setUserData] = useState([]);

  const [isSelected, setSelection] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");
  const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [name, setName] = useState("");
  const [affiliate, setAffiliate] = useState("");
  const [phone, setPhone] = useState("");
  const [studs, setStuds] = useState("");
  const [address, setAddress] = useState("");
  const [imgUrl, setImgUrl] = useState(
    "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png"
  );

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
          <Text style={styles.maintext}>Collaboration Form</Text>
          {/* textInput full name */}
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}
          >
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
          {/* textInput */}
          {/* textInput email */}
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}
          >
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
          {/* textInput phone */}
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}
          >
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                Contact Number
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                keyboardType={"number-pad"}
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />
            </View>
          </View>
          {/* textInput */}
          <View
            style={{
              width: "80%",
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
              flexDirection: "row",
              backgroundColor: "transparent",
              height: 50,
            }}
          >
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>Country</Text>
            </View>

            <TextInput
              value={selectedValue}
              style={{
                width: "80%",
                fontSize: 12,
                color: "white",
                height: 50,
                backgroundColor: "transparent",
                position: "relative",
                top: 10,
              }}
            />
            <Picker
              selectedValue={selectedValue}
              style={{
                height: 50,
                width: "20%",
                position: "relative",
                top: 10,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="India" value="India" />
              <Picker.Item label="China" value="China" />
              <Picker.Item label="Russia" value="Russia" />
              <Picker.Item label="America" value="America" />
            </Picker>
          </View>

          {/* textInput */}
          {/* textInput */}
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}
          >
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                Institute Name
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                value={institute}
                onChangeText={(text) => setInstitute(text)}
              />
            </View>
          </View>
          {/* textInput */}
          {/* textInput */}
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}
          >
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                University Affiliate Number(optional)
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                value={affiliate}
                onChangeText={(text) => setAffiliate(text)}
              />
            </View>
          </View>
          {/* textInput */}
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}
          >
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                Number of Students
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                value={studs}
                onChangeText={(text) => setStuds(text)}
              />
            </View>
          </View>
          {/* textInput */}
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}
          >
            <View style={{ position: "absolute", left: 0 }}>
              <Text style={{ fontSize: 11, color: "#687980" }}>
                Institute Address
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                style={styles.textbox}
                value={address}
                onChangeText={(text) => setAddress(text)}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 20,
            backgroundColor: "transparent",
            position: "relative",
            marginTop: 0,
          }}
        >
          {/* signup */}
          <TouchableOpacity
            style={styles.Signupbutton}
            onPress={() => props.navigation.navigate("SignIn")}
          >
            <Text
              style={{ color: "#1C2172", fontSize: 13, fontWeight: "bold" }}
            >
              SUBMIT
            </Text>
          </TouchableOpacity>
          {/* google */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Collaboration;

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
    marginBottom: 30,
    marginTop: 100,
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
  },
  textbox1: {
    width: "75%",
    fontSize: 12,
    color: "white",
  },
});
