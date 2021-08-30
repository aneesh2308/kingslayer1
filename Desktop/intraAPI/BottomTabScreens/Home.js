import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {ScrollView} from "react-native";
import {Avatar} from "react-native-paper";
import PostList from "../CustomLists/PostList";
import {inject, observer} from "mobx-react";
import AsyncStorage from "@react-native-community/async-storage";
import Store from "../Screens/Store";

const Home = props => {
  useEffect(() => {
    AsyncStorage.getItem("token").then(async token => {
      console.log(token, "fasnkjafnakjfnaksjfn");
      Store.setToken(token);
    });

    AsyncStorage.getItem("id").then(id => {
      Store.setUid(id);
    });
  }, []);
  return (
    <View style={styles.container}>
      <PostList navigation={props.navigation} />

      {/* ---------------------------------------------Bottom Tab------------------------------------- */}
    </View>
  );
};

export default inject("store")(observer(Home));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  },
});
