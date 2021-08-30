import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import { Avatar } from "react-native-paper";


export default function Rewards({ navigation }) {
  const [totalamt, setTotalamt] = useState("240");

  const Rewards = [
    {
      id: "1",
      imgback: {
        uri: "https://ak3.picdn.net/shutterstock/videos/24425033/thumb/1.jpg?ip=x480",
      },
      scratch: {
        uri: "https://tricksrecharge.com/wp-content/uploads/2020/12/wp-1607540946868.jpg",
      },
      won: "Rs. 20 off",
      code: "L176293539",
      img: {
        uri: "https://image.freepik.com/free-vector/college-background-with-mortarboard_23-2147903630.jpg",
      },
      unlock: true,
    },
    {
      id: "2",
      imgback: {
        uri: "https://ak3.picdn.net/shutterstock/videos/24425033/thumb/1.jpg?ip=x480",
      },
      scratch: {
        uri: "https://tricksrecharge.com/wp-content/uploads/2020/12/wp-1607540946868.jpg",
      },
      won: "Rs. 20 off",
      code: "L176293539",
      img: {
        uri: "https://image.freepik.com/free-vector/college-background-with-mortarboard_23-2147903630.jpg",
      },
      unlock: false,
    },
    {
      id: "3",
      imgback: {
        uri: "https://ak3.picdn.net/shutterstock/videos/24425033/thumb/1.jpg?ip=x480",
      },
      scratch: {
        uri: "https://tricksrecharge.com/wp-content/uploads/2020/12/wp-1607540946868.jpg",
      },
      won: "Rs. 20 off",
      code: "L176293539",
      img: {
        uri: "https://image.freepik.com/free-vector/college-background-with-mortarboard_23-2147903630.jpg",
      },
      unlock: true,
    },
    {
      id: "4",
      imgback: {
        uri: "https://ak3.picdn.net/shutterstock/videos/24425033/thumb/1.jpg?ip=x480",
      },
      scratch: {
        uri: "https://tricksrecharge.com/wp-content/uploads/2020/12/wp-1607540946868.jpg",
      },
      won: "Rs. 20 off",
      code: "L176293539",
      img: {
        uri: "https://image.freepik.com/free-vector/college-background-with-mortarboard_23-2147903630.jpg",
      },
      unlock: false,
    },

    {
      id: "5",
      imgback: {
        uri: "https://ak3.picdn.net/shutterstock/videos/24425033/thumb/1.jpg?ip=x480",
      },
      scratch: {
        uri: "https://tricksrecharge.com/wp-content/uploads/2020/12/wp-1607540946868.jpg",
      },
      won: "Rs. 20 off",
      code: "L176293539",
      img: {
        uri: "https://image.freepik.com/free-vector/college-background-with-mortarboard_23-2147903630.jpg",
      },
      unlock: true,
    },
    {
      id: "6",
      imgback: {
        uri: "https://i.dlpng.com/static/png/6900833_preview.png",
      },
      scratch: {
        uri: "https://tricksrecharge.com/wp-content/uploads/2020/12/wp-1607540946868.jpg",
      },
      won: "Rs. 20 off",
      code: "L176293539",
      img: {
        uri: "https://image.freepik.com/free-vector/college-background-with-mortarboard_23-2147903630.jpg",
      },
      unlock: false,
    },
  ];
  const unlock = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
    {
      id: "10",
    },
    {
      id: "11",
    },
    {
      id: "12",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ position: "relative", right: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
          >
            <Ionicons name="chevron-back-outline" size={35} color="#434b56" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "#434b56",
            fontWeight: "bold",
            marginLeft: 0,
          }}
        >
          Rewards
        </Text>
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={Rewards}
        numColumns={2}
        style={{ paddingHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View style={styles.newconatiner}>
              <ImageBackground
                source={{
                  uri: "https://i.redd.it/cna5r29wx4g01.jpg",
                }}
                style={{
                  width: "100%",
                  height: 200,
                  marginVertical: 20,
                  alignItems: "center",
                  paddingTop: 20,
                }}
              >
                <Text
                  style={{ fontSize: 24, fontWeight: "700", color: "white" }}
                >
                  Rs {totalamt}
                </Text>
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "white" }}
                >
                  Total rewards
                </Text>
              </ImageBackground>
              {/* ----------------------------header--------------------------------------- */}

              <FlatList
                keyExtractor={(item) => item.id}
                data={unlock}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.box}>
                      <Entypo name="check" size={24} color="white" />
                    </View>
                  );
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    color: "#434b56",
                  }}
                >
                  My Reward
                </Text>
              </View>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          if (item.unlock === true) {
            return (
              <View style={styles.unlockreward}>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    alignSelf: "center",
                    elevation: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  <ImageBackground
                    source={item.scratch}
                    style={{
                      height: "100%",
                      width: "100%",
                      alignItems: "center",
                      padding: 0,
                      alignSelf: "center",
                    }}
                  ></ImageBackground>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.reward}>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    alignSelf: "center",
                    elevation: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  <ImageBackground
                    source={item.imgback}
                    style={{
                      height: 160,
                      width: 160,
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        marginTop: 15,
                      }}
                    />
                    <Text
                      style={{
                        marginTop: 15,
                        color: "black",
                        fontSize: 17,
                        fontWeight: "600",
                      }}
                    >
                      {item.won}
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        color: "darkblue",
                        fontSize: 17,
                        fontWeight: "700",
                      }}
                    >
                      {item.code}
                    </Text>
                  </ImageBackground>
                </View>
              </View>
            );
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 0,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 0,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    paddingHorizontal: 15,
  },
  box: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: "#4286F5",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  reward: {
    height: 190,
    width: "50%",
    borderRadius: 5,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
    padding: 10,
  },
  unlockreward: {
    height: 190,
    width: "50%",
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
    padding: 10,
  },
});
