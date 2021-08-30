import React, { useState } from "react";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { TouchableOpacity } from "react-native-gesture-handler";
import FilterButtons from "../Constants/FilterButtons";

const FilterConnection = (props) => {
  return (
    <ScrollView
      style={{ width: "100%", height: "100%" }}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      
      <View style={styles.container}>
        {/*header */}
        <View style={styles.header}>
          <View style={{ width: "20%", justifyContent: "center" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={35} color="#434b56" />
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
              Filter
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
        {/* just show me */}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>Just show me</Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* just show me  people*/}
            <FilterButtons name="People" />
            {/* just show me  jobs*/}
            <FilterButtons name="jobs" />
            {/* just show me  Content*/}
            <FilterButtons name="Content" />
            {/* just show me  Companies*/}
            <FilterButtons name="Companies" />
            {/* just show me  schools*/}
            <FilterButtons name="Schools" />
          </View>
        </View>
        {/* Connections */}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>Connections</Text>
          {/* Connections 1*/}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            {/* Connections 1*/}
            <FilterButtons name=" 1st " />
            {/* Connections 2*/}
            <FilterButtons name=" 2nd " />
            {/* Connections 3*/}
            <FilterButtons name=" 3rd " />
          </View>
        </View>
        {/* Connections of */}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>Connections of</Text>
          <View style={{ width: 140 }}>
            <FilterButtons name="Add a connection" />
          </View>
        </View>
        {/* textInput 1 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Location</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 2 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Current Companies</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 3 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Past Companies</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 4 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Industries</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 5 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Schools</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 6 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Contact Intrests</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 7 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Services</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        <View style={{ height: "10%" }}></View>
      </View>
    </ScrollView>
  );
};

export default FilterConnection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
  },
  area: {
    borderBottomWidth: 0.5,
    height: 80,
    borderBottomColor: "grey",
    padding: 15,
  },
  justshow: {
    backgroundColor: "#E72C83",
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    height: 30,
    margin: 5,
  },
  conectionsof: {
    backgroundColor: "#E72C83",
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    height: 30,
    margin: 5,
    width: 130,
  },
  textbox: {
    borderBottomWidth: 0.5,
    height: 80,
    borderBottomColor: "grey",
    padding: 15,
  },
});
