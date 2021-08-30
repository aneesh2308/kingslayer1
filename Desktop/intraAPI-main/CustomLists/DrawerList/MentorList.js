import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Surface } from "react-native-paper";
import { Avatar, Button } from "react-native-paper";
export default function McqtestsList(props) {
  const [mentor, setMentor] = useState([
    {
      name: "Elsie",
      title: "Art Director",
      img: {
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      },
      time: "20 mins",
      id: "1",
      studs: "2455",
      rev: "183",
      posts: "500",
      detailhead: "Sharing my expirence with aspiring artworks",
      detail:
        "Sharing my expirence with aspiring artworks kjshdl alsd lASHKJE;ldj SADJLASKJDF  lakjflaksjfioeqwjlfkazakfla",
    },
    {
      name: "Milke Wilson",
      title: "Graphic Designer",
      img: {
        uri: "https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=",
      },
      time: "27 mins",
      id: "2",
      studs: "2425",
      rev: "183",
      posts: "50",
      detailhead: "Sharing my expirence with aspiring artworks",
      detail:
        "Sharing my expirence with aspiring artworks kjshdl alsd lASHKJE;ldj SADJLASKJDF  lakjflaksjfioeqwjlfkazakfla",
    },
    {
      name: "Mark Johnston",
      title: "Videographer",
      img: {
        uri: "https://i.pinimg.com/736x/b8/16/7d/b8167de2981e088c3a8390a6f1d354d7.jpg",
      },
      time: "30 mins",
      id: "3",
      studs: "1225",
      rev: "173",
      posts: "44",
      detailhead: "Sharing my expirence with aspiring artworks",
      detail:
        "Sharing my expirence with aspiring artworks kjshdl alsd lASHKJE;ldj SADJLASKJDF  lakjflaksjfioeqwjlfkazakfla",
    },
    {
      name: "Vaibhav Dange",
      title: "React Native",
      img: {
        uri: "https://artconnect.s3-eu-west-1.amazonaws.com/pictures/20576/original.jpeg?1576248180",
      },
      time: "37 mins",
      id: "4",
      studs: "20000",
      rev: "234",
      posts: "500",
      detailhead: "Sharing my expirence with aspiring artworks",
      detail:
        "Sharing my expirence with aspiring artworks kjshdl alsd lASHKJE;ldj SADJLASKJDF  lakjflaksjfioeqwjlfkazakfla",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={mentor}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("MentorDetail", { item })
              }
            >
              <View style={styles.mentorlist}>
                <View style={{ width: "20%" }}>
                  <Avatar.Image source={item.img} size={50} />
                </View>
                <View style={{ width: "80%", paddingLeft: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                  <Text style={styles.subtitle}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  mentorlist: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 0.3,
    paddingVertical: 30,
  },
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
  },
  subtitle: { color: "#434B56", fontSize: 12 },
  time: { fontSize: 12, color: "#434B56" },
});
