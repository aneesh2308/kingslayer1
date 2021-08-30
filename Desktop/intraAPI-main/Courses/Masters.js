import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MastersFreeCoursesList from "../CustomLists/CoursesList/MastersFreeCoursesList";
import MastersList from "../CustomLists/CoursesList/MastersList";

const Masters = (props) => {
  return (
    <View style={styles.container}>
      <MastersList navigation={props.navigation} />
    </View>
  );
};

export default Masters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
