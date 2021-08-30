import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import DownloadsList from "./../CustomLists/DrawerList/DownloadsList";
import { inject, observer } from "mobx-react";

const Downloads = (props) => {
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
            Downloads
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
      {/* -----------------------------Downloads search -------------------------------------- */}
      <View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#DDDEE0",
          justifyContent: "center",
          paddingLeft: 30,
        }}
      >
        <Text style={styles.subtitle}>233 Results</Text>
      </View>
      {/* -----------------------------Downloads flatlist -------------------------------------- */}
      <DownloadsList navigation={props.navigation} store={props.store} />
      {/* -----------------------------Bottom TAb-------------------------------------- */}
    </View>
  );
};

export default inject("store")(observer(Downloads));

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
    borderBottomWidth: 0,
    borderBottomColor: "darkgrey",
  },
  search: {
    width: "100%",
    height: "6%",
    backgroundColor: "#F8F8F8",
    borderRadius: 0,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  subtitle: {
    color: "#a1a1a1",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 5,
  },
});
