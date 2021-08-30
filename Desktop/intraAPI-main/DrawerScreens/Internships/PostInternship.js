import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Avatar } from "react-native-paper";

const PostInternship = (props) => {
  return (
    <View style={styles.container}>
      
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
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
              Post an Internship
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
        {/* textInput 1 */}
        <View
          style={{
            borderBottomWidth: 0.25,
            height: 80,
            borderBottomColor: "#e4e4e4",
            width: "95%",
          }}
        >
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Internship Titile*
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput 2 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Location*
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput 3 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Company*
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput employment type */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Internship Type
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput employment type */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Industry
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput 5 */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Descrpition*
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput employment type */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Stipend
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput employment type */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Skills Required
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput employment type */}
        <View style={styles.textbox}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Openings
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/* textInput employment type */}
        <View style={{ ...styles.textbox }}>
          <Text style={{ color: "grey", fontSize: 15, paddingVertical: 10 }}>
            Perks
          </Text>
          <TextInput style={{ fontSize: 16 }} />
        </View>
        {/*button */}
        <View
          style={{
            width: "100%",
            alignItems: "center",

            justifyContent: "flex-end",
            paddingBottom: 10,
            paddingHorizontal: 15,
          }}
        >
          <TouchableOpacity
            style={styles.post}
            onPress={() => props.navigation.goBack()}
            activeOpacity={0.7}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              POST
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostInternship;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 50,
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
  textbox: {
    borderBottomWidth: 0.3,
    height: 80,
    borderBottomColor: "darkgrey",
    width: "95%",
    marginTop: 15,
  },
  post: {
    width: "100%",
    height: 50,
    backgroundColor: "#202AA8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
