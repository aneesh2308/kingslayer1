import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Button } from "react-native-paper";
export default function ConnectionList(props) {
  const [connection, setConnection] = useState([
    {
      title: "Elsie",
      company: "Art Director",
      avataruri: {
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      },
      time: "20 mins",
      location: "India",
      id: "1",
      group: "false",
      online: "true",
    },
    {
      title: "Milke Wilson",
      company: "Graphic Designer",
      avataruri: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      time: "27 mins",
      location: "Newdelhi",
      id: "2",
      group: "false",
      online: "false",
    },
    {
      title: "Mark Johnston",
      company: "Videographer",
      avataruri: {
        uri: "https://artconnect.s3-eu-west-1.amazonaws.com/pictures/20576/original.jpeg?1576248180",
      },
      time: "30 mins",
      location: "kerla",
      id: "3",
      group: "true",
    },
    {
      title: "Vaibhav Dange",
      company: "React Native",
      avataruri: {
        uri: "https://i.pinimg.com/736x/b8/16/7d/b8167de2981e088c3a8390a6f1d354d7.jpg",
      },
      time: "37 mins",
      location: "India",
      id: "4",
      group: "true",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={connection}
        renderItem={({ item, index }) => {
          if (item.group === "false" && item.online === "true") {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  props.navigation.navigate("ChatScreen", { item })
                }
              >
                <View
                  style={{
                    width: "100%",
                    height: 90,
                    backgroundColor: "white",
                    borderBottomWidth: 0.3,
                    borderBottomColor: "#E4E4E4",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "70%",
                      height: "100%",
                      paddingVertical: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 60,
                        backgroundColor: "white",
                        elevation: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 15,
                      }}
                    >
                      <ImageBackground
                        style={{ height: 55, width: 55 }}
                        imageStyle={{ borderRadius: 60 }}
                        source={item.avataruri}
                      >
                        <View
                          style={{
                            height: 12,
                            width: 12,
                            borderRadius: 50,
                            backgroundColor: "#23D393",
                            position: "absolute",
                            top: 38,
                            left: 43,
                            borderWidth: 2,
                            borderColor: "white",
                          }}
                        ></View>
                      </ImageBackground>
                    </View>

                    <View
                      style={{ width: "70%", heigth: "100%", marginLeft: 15 }}
                    >
                      <Text
                        style={{
                          color: "#434B56",
                          fontSize: 15,
                          fontWeight: "700",
                          marginBottom: 5,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: "#434B56",
                          fontSize: 12,
                          fontWeight: "600",
                        }}
                      >
                        {item.company}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialCommunityIcons
                          name="map-marker-outline"
                          size={14}
                          color="#434B56"
                        />
                        <Text
                          style={{
                            color: "#434B56",
                            fontSize: 12,
                            fontWeight: "600",
                          }}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      paddingRight: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "#D01C90",
                        fontWeight: "700",
                        fontSize: 15,
                        marginBottom: 35,
                      }}
                    >
                      Message
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          } else if (item.group === "false" && item.online === "false") {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  props.navigation.navigate("ChatScreen", { item })
                }
              >
                <View
                  style={{
                    width: "100%",
                    height: 90,
                    backgroundColor: "white",
                    borderBottomWidth: 0.3,
                    borderBottomColor: "#E4E4E4",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "70%",
                      height: "100%",
                      paddingVertical: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 60,
                        backgroundColor: "white",
                        elevation: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 15,
                      }}
                    >
                      <ImageBackground
                        style={{ height: 55, width: 55 }}
                        imageStyle={{ borderRadius: 60 }}
                        source={item.avataruri}
                      ></ImageBackground>
                    </View>
                    <View
                      style={{ width: "70%", heigth: "100%", marginLeft: 15 }}
                    >
                      <Text
                        style={{
                          color: "#434B56",
                          fontSize: 15,
                          fontWeight: "700",
                          marginBottom: 5,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: "#434B56",
                          fontSize: 12,
                          fontWeight: "600",
                        }}
                      >
                        {item.company}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialCommunityIcons
                          name="map-marker-outline"
                          size={14}
                          color="#434B56"
                        />
                        <Text
                          style={{
                            color: "#434B56",
                            fontSize: 12,
                            fontWeight: "600",
                          }}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      paddingRight: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "#D01C90",
                        fontWeight: "700",
                        fontSize: 15,
                        marginBottom: 35,
                      }}
                    >
                      Message
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  props.navigation.navigate("ChatScreen", { item })
                }
              >
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    height: 150,
                    borderBottomWidth: 0.3,
                    borderBottomColor: "#E4E4E4",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 90,
                      backgroundColor: "white",

                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: "70%",
                        height: "100%",
                        paddingVertical: 10,
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: 60,
                          backgroundColor: "white",
                          elevation: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: 15,
                        }}
                      >
                        <ImageBackground
                          style={{ height: 55, width: 55 }}
                          imageStyle={{ borderRadius: 60 }}
                          source={item.avataruri}
                        ></ImageBackground>
                      </View>
                      <View
                        style={{ width: "70%", heigth: "100%", marginLeft: 15 }}
                      >
                        <Text
                          style={{
                            color: "#434B56",
                            fontSize: 15,
                            fontWeight: "700",
                            marginBottom: 5,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: "#434B56",
                            fontSize: 12,
                            fontWeight: "600",
                          }}
                        >
                          {item.company}
                        </Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={14}
                            color="#434B56"
                          />
                          <Text
                            style={{
                              color: "#434B56",
                              fontSize: 12,
                              fontWeight: "600",
                            }}
                          >
                            {item.location}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}></View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "30%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        paddingRight: 15,
                      }}
                    >
                      <Text
                        style={{
                          color: "#D01C90",
                          fontWeight: "700",
                          fontSize: 15,
                          marginBottom: 35,
                        }}
                      >
                        Message
                      </Text>
                    </View>
                  </View>
                  {/* ---------------------------------------------Chat4 bottom section------------------------------------- */}
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 60,
                        backgroundColor: "white",
                        elevation: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        left: 10,
                      }}
                    >
                      <ImageBackground
                        style={{ height: 35, width: 35 }}
                        imageStyle={{ borderRadius: 60 }}
                        source={item.avataruri}
                      ></ImageBackground>
                    </View>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 60,
                        backgroundColor: "white",
                        elevation: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        left: 30,
                      }}
                    >
                      <ImageBackground
                        style={{ height: 35, width: 35 }}
                        imageStyle={{ borderRadius: 60 }}
                        source={item.avataruri}
                      ></ImageBackground>
                    </View>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 60,
                        backgroundColor: "white",
                        elevation: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        right: 40,
                      }}
                    >
                      <ImageBackground
                        style={{ height: 35, width: 35 }}
                        imageStyle={{ borderRadius: 60 }}
                        source={item.avataruri}
                      ></ImageBackground>
                    </View>
                    <Text
                      style={{
                        color: "#434B56",
                        fontWeight: "700",
                        fontSize: 11,
                      }}
                    >
                      24 shared connections
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
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
});
