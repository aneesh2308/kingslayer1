import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Picker,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ChangeStatus = ({ navigation, route }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { item } = route.params;


  return (
    <View style={styles.container}>
      {/* -------------------------------------------------header -----------------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "20%", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
          >
            <Ionicons
              name="md-chevron-back-outline"
              size={35}
              color="#434B56"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#434B56",
            }}
          >
            Change Status
          </Text>
        </View>
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* books */}
      <View style={styles.books}>
        <Image
          style={styles.bookdesc}
          source={ {uri:  item.bookimg!=undefined?item.bookimg[0]:item.img.uri}}
        />
        <View
          style={{
            width: "50%",
            paddingLeft: 20,
          }}
        >
          <Text style={{ color: "#534b56", fontSize: 16, fontWeight: "700" }}>
            {item.name}
          </Text>
          <Text style={{ color: "#1C2172", fontSize: 15, fontWeight: "700" }}>
          ${item.price}

          </Text>
        </View>
      </View>
      {/* textInput 1 */}
      <View style={styles.textbox}>
        <Text style={{ color: "grey", fontSize: 15 }}>Status</Text>

        <Picker
          selectedValue={selectedValue}
          style={{
            width: "100%",
            position: "relative",
            top: 10,
            height: 20,
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          mode="dropdown"
        >
          <Picker.Item label="Sold out" value="Sold out" />
          <Picker.Item label="Available" value="Available" />
        </Picker>
      </View>
    </View>
  );
};

export default ChangeStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  books: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 50,
  },
  bookdesc: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  textbox: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    paddingVertical: 15,
    width: "95%",
    marginTop: 5,
  },
});
