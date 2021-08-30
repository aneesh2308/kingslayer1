import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { Surface } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";

export default function RecordedLecCl(props) {
  const [lec, setLec] = useState([
    {
      name: "Post Problems",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mkNT3LLavVEouGw3JX4ClaOucdOXBqjreQ&usqp=CAU",
      },
      id: "1",
    },
    {
      name: "College Problems",
      img: {
        uri: "https://symbiosiscollege.edu.in/assets/images/slider/slider8.jpg",
      },
      id: "2",
    },
    {
      name: "Brain Stroming",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNzLgGGWHxoY7mX6GuBNbMzdvTMXaR_Ldbg&usqp=CAU",
      },
      id: "3",
    },
    {
      name: "Post Problems",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpPYLeZmKqy9xpFfv7KRGY8BY0Rv9bHtSjA&usqp=CAU",
      },
      id: "4",
    },
    {
      name: "post problems",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoEGMrWtrQTYeBDhnFQJfl40Jlq06nfBQgg&usqp=CAU",
      },
      id: "5",
    },
  ]);
  return (
    <View style={styles.container}>
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
            Recorded Lectures
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
            size={28}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={lec}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
              <Surface style={styles.surface}>
                <ImageBackground
                  mode="cover"
                  source={item.img}
                  style={{
                    height: 110,
                    width: 110,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <TouchableOpacity>
                    <Entypo
                      name="controller-play"
                      size={32}
                      color="white"
                      style={styles.shadow}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <Text
                  style={{ fontSize: 11, color: "#434B56", paddingTop: 10 }}
                >
                  {item.name}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "#e4e4e4",
    backgroundColor: "transparent",
  },
  surface: {
    height: 180,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 50,
    paddingLeft: 15,
  },
  shadow: {
    elevation: 50,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,

    shadowOffset: {
      width: 1,
      height: 1,
    },

    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
