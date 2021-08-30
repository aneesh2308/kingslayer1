import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BooksNovelList from "../CustomLists/BooksList/BooksNovelList";

const Novels = (props) => {
  return (
    <View style={styles.container}>
      <BooksNovelList navigation={props.navigation} />
    </View>
  );
};

export default Novels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
