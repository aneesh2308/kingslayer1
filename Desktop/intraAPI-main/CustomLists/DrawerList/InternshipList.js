import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Avatar, Button } from "react-native-paper";

export default function InternshipList(props) {
  const [internship, setInternship] = useState([
    {
      title: "Elsie",
      company: "Art Director",
      avataruri: {
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      },
      time: "20 mins",
      location: "India",
      id: "1",
      appli: "Over 100 applicants",
      stipend: "Rs. 6000",
      skills: {
        one: "Abstract Designing",
        two: "Lorem Ispum",
      },
      openings: "200",
      start: "24th July",
      duration: "3 months",
    },

    {
      title: "Milke Wilson",
      company: "Graphic Designer",
      avataruri: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      time: "1 week ago",
      location: "Us",
      id: "2",
      appli: "Over 200 applicants",
      stipend: "Rs. 6000",
      skills: {
        one: "Abstract Designing",
        two: "Lorem Ispum",
      },
      openings: "200",
      start: "24th July",
      duration: "3 months",
    },
    {
      title: "Mark Johnston",
      company: "Videographer",
      avataruri: {
        uri: "https://artconnect.s3-eu-west-1.amazonaws.com/pictures/20576/original.jpeg?1576248180",
      },
      time: "2 week ago",
      location: "Uk",
      id: "3",
      appli: "Over 300 applicants",
      stipend: "Rs. 6000",
      skills: {
        one: "Abstract Designing",
        two: "Lorem Ispum",
      },
      openings: "200",
      start: "24th July",
      duration: "3 months",
    },
    {
      title: "Vaibhav Dange",
      company: "React Native",
      avataruri: {
        uri: "https://i.pinimg.com/736x/b8/16/7d/b8167de2981e088c3a8390a6f1d354d7.jpg",
      },
      time: "2 week ago",
      location: "India",
      id: "4",
      appli: "Over 400 applicants",
      stipend: "Rs. 6000",
      skills: {
        one: "Abstract Designing",
        two: "Lorem Ispum",
      },
      openings: "200",
      start: "24th July",
      duration: "3 months",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={internship}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("InternshipDetail", { item })
              }
              activeOpacity={0.7}
            >
              <View style={styles.messages}>
                <View style={styles.avatar}>
                  <Avatar.Image source={item.avataruri} size={50} style={{}} />
                  <View style={styles.greendot}></View>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: 15,
                    height: "100%",
                    width: "75%",
                    borderBottomWidth: 0.3,
                    borderBottomColor: "#e4e4e4",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity>
                      <Feather name="bookmark" size={20} color="#434B56" />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.subtitle}>{item.company}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <EvilIcons name="location" size={18} color="black" />
                    <Text
                      style={{
                        color: "#a1a1a1",
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      {item.location}
                    </Text>
                  </View>
                  <Text style={styles.bluetext}>{item.time}</Text>
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
  greendot: {
    height: 12,
    width: 12,
    borderRadius: 50,
    backgroundColor: "#23D393",
    position: "absolute",
    top: 37,
    left: 43,
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    color: "#434B56",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 5,
  },
  subtitle: {
    color: "#a1a1a1",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 5,
  },
  messages: {
    width: "100%",
    height: 100,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    elevation: 10,
  },
  bluetext: {
    color: "#1C2172",
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: 5,
    paddingLeft: 5,
  },
});
