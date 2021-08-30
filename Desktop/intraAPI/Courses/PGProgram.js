import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MastersFreeCoursesList from "../CustomLists/CoursesList/MastersFreeCoursesList";

const PGProgram = (props) => {
  return <MastersFreeCoursesList navigation={props.navigation} />;
};

export default PGProgram;

const styles = StyleSheet.create({});
