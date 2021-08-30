import React, { useState } from "react";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { TouchableOpacity } from "react-native-gesture-handler";
import FilterButtons from "../../Constants/FilterButtons";

const InternshipFilter = (props) => {
  return (
    <ScrollView
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
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
        {/* Sort by */}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>Sort By</Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            {/* Sort by 1*/}
            <FilterButtons name=" Most Recent " />
            {/* Sort by 2*/}
            <FilterButtons name=" Most Relevent " />
          </View>
        </View>
        {/* Date Posted */}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>Date Posted</Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* Date Posted 1*/}
            <FilterButtons name="Any Time" />
            {/* Date Posted 2*/}
            <FilterButtons name="Past Month" />
            {/* Date Posted 3*/}
            <FilterButtons name="Past Week" />
            {/* Date Posted 4*/}
            <FilterButtons name="Past 24 hours" />
          </View>
        </View>
        {/* textInput 1 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Experience level</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 2 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Company</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 3 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Job type</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* Remote*/}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>Remote</Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            {/* Remote1*/}
            <FilterButtons name=" On " />
            {/* Remote2*/}
            <FilterButtons name=" Off " />
          </View>
        </View>
        {/* Easy Apply*/}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>Easy Apply</Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            {/* Easy Apply1*/}
            <FilterButtons name=" On " />
            {/* Easy Apply2*/}
            <FilterButtons name=" Off " />
          </View>
        </View>
        {/* textInput 4 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Location</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* textInput 5*/}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15 }}>Title</Text>
          <TextInput
            placeholder="Any"
            placeholderTextColor="black"
            style={{ fontSize: 16 }}
          />
        </View>
        {/* Easy Apply*/}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>
            Under 10 Applicants
          </Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            {/* Easy Apply1*/}
            <FilterButtons name=" On " />
            {/* Easy Apply2*/}
            <FilterButtons name=" Off " />
          </View>
        </View>
        {/* Easy Apply*/}
        <View style={styles.area}>
          <Text style={{ color: "grey", fontSize: 15 }}>In your Network</Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            {/* Easy Apply1*/}
            <FilterButtons name=" On " />
            {/* Easy Apply2*/}
            <FilterButtons name=" Off " />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InternshipFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
  area: {
    borderBottomWidth: 0.3,
    height: 80,
    borderBottomColor: "darkgrey",
    padding: 15,
  },
  textbox: {
    borderBottomWidth: 0.3,
    height: 80,
    borderBottomColor: "darkgrey",
    padding: 15,
  },
});
