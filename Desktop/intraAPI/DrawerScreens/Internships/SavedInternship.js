import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Avatar } from "react-native-paper";


export default function SavedInternship(props) {
  const [selectedButton, setSelectedButton] = useState("Saved");

  const isSelected = () => {
    if (selectedButton === "Saved") {
      return (
        (
          <View>
            <Text>Saved list</Text>
          </View>
        ) && setSelectedButton("Saved")
      );
    } else {
      return (
        (
          <View>
            <Text>Applied list</Text>
          </View>
        ) && setSelectedButton("Applied")
      );
    }
  };

  return (
    <View style={styles.container}>
      
      {/* ----------------------------header--------------------------------------- */}
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
            My Internships
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            alignItems: "flex-end",
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
            }}
            size={35}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      {/* ---------------------------- buttons saved applied--------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 60,
          borderBottomColor: "darkgrey",
          borderBottomWidth: 0.3,
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <TouchableOpacity onPress={() => setSelectedButton("Saved")}>
          <View
            style={{
              backgroundColor:
                selectedButton === "Saved" ? "#1C2172" : "#E72C83",
              paddingHorizontal: 10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              alignItems: "center",
              height: 30,
              margin: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Saved</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedButton("Applied")}>
          <View
            style={{
              backgroundColor:
                selectedButton === "Applied" ? "#1C2172" : "#E72C83",
              paddingHorizontal: 10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              alignItems: "center",
              height: 30,
              margin: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Applied</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <View style={styles.messages}>
          <View style={styles.avatar}>
            <Avatar.Image
              source={{
                uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              size={50}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              marginLeft: 15,
              height: "100%",
              width: "75%",
              borderBottomWidth: 0.3,
              borderBottomColor: "#e4e4e4",
            }}
          >
            <Text style={styles.title}>Johny Vino</Text>

            <Text style={styles.subtitle}>A B C Pvt.Ltd</Text>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons name="location" size={18} color="black" />
              <Text
                style={{ color: "#a1a1a1", fontSize: 12, fontWeight: "500" }}
              >
                India
              </Text>
            </View>
            <Text style={styles.bluetext}>3 weeks ago</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

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
  },
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 5,
  },
  subtitle: {
    color: "#a1a1a1",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 5,
  },
  messages: {
    width: "100%",

    height: 100,
    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    elevation: 10,
  },
  bluetext: {
    color: "#1C2172",
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: 5,
    paddingLeft: 5,
  },
});

/*

import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Ionicons,
  Feather,
  EvilIcons,
  FontAwesome,
} from "react-native-vector-icons";
import { Avatar } from "react-native-paper";


export default class SavedInternship extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "Saved" };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }
  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }
  render() {
    return (
      <View style={styles.container}>
        
        
        <View style={styles.TitileHeader}>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
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
              My Internships
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              alignItems: "flex-end",
            }}
          >
            <Avatar.Image
              source={{
                uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
              }}
              size={35}
              style={{ marginRight: 20 }}
            />
          </View>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 60,
            borderBottomColor: "darkgrey",
            borderBottomWidth: 0.3,
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => this.selectionOnPress("Saved")}>
            <View
              style={{
                backgroundColor:
                  this.state.selectedButton === "Saved" ? "#1C2172" : "#E72C83",
                paddingHorizontal: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                alignItems: "center",
                height: 30,
                margin: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Saved</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectionOnPress("Applied")}>
            <View
              style={{
                backgroundColor:
                  this.state.selectedButton === "Applied"
                    ? "#1C2172"
                    : "#E72C83",
                paddingHorizontal: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                alignItems: "center",
                height: 30,
                margin: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Applied</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity>
          <View style={styles.messages}>
            <View style={styles.avatar}>
              <Avatar.Image
                source={{
                  uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                size={50}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                marginLeft: 15,
                height: "100%",
                width: "75%",
                borderBottomWidth: 0.3,
                borderBottomColor: "#e4e4e4",
              }}
            >
              <Text style={styles.title}>Johny Vino</Text>

              <Text style={styles.subtitle}>A B C Pvt.Ltd</Text>
              <View style={{ flexDirection: "row" }}>
                <EvilIcons name="location" size={18} color="black" />
                <Text
                  style={{ color: "#a1a1a1", fontSize: 12, fontWeight: "500" }}
                >
                  India
                </Text>
              </View>
              <Text style={styles.bluetext}>3 weeks ago</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  },
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 5,
  },
  subtitle: {
    color: "#a1a1a1",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 5,
  },
  messages: {
    width: "100%",

    height: 100,
    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    elevation: 10,
  },
  bluetext: {
    color: "#1C2172",
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: 5,
    paddingLeft: 5,
  },
});
*/
