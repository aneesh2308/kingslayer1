import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { inject, observer } from "mobx-react";
import { Avatar } from "react-native-paper";


const Notfications = (props) => {
    const [userData, setUserData] = React.useState({})
  const getUser = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
}, [])
  const New = [
    {
      img: {
        uri: "https://i.pinimg.com/originals/1d/5a/e3/1d5ae3641bddca297e6cb26917d76213.jpg",
      },
      name: "Tanya",
      sub: "liked your post",
      time: "7s ago",
      id: "1",
    },
    {
      img: {
        uri: "https://i.pinimg.com/originals/92/e6/0b/92e60bf06991c96d60ebe10da7d7215c.jpg",
      },
      name: "Tanisha",
      sub: "Started following you",
      time: "30s ago",
      id: "2",
    },
    {
      img: {
        uri: "https://i.pinimg.com/originals/0d/aa/e5/0daae50d3e9a7c79d62e5ee87229bbd6.jpg",
      },
      name: "Indra",
      sub: "Commented: Impresive App Design made ",
      time: "30s ago",
      id: "3",
    },
  ];

  const Today = [
    {
      img: {
        uri: "https://i.pinimg.com/originals/1d/5a/e3/1d5ae3641bddca297e6cb26917d76213.jpg",
      },
      name: "Meghana",
      sub: "liked your post",
      time: "14m ago",
      id: "1",
    },
    {
      img: {
        uri: "https://i.pinimg.com/originals/92/e6/0b/92e60bf06991c96d60ebe10da7d7215c.jpg",
      },
      name: "Bilal",
      sub: "Started following you",
      time: "30m ago",
      id: "2",
    },
    {
      img: {
        uri: "https://i.pinimg.com/originals/0d/aa/e5/0daae50d3e9a7c79d62e5ee87229bbd6.jpg",
      },
      name: "Shreeja",
      sub: "Commented: Impresive App Design made ",
      time: "1h ago",
      id: "3",
    },
    {
      img: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      name: "Soniya",
      sub: "Started following you",
      time: "2h ago",
      id: "4",
    },
  ];
  const ThisWeek = [
    {
      img: {
        uri: "https://i.pinimg.com/originals/1d/5a/e3/1d5ae3641bddca297e6cb26917d76213.jpg",
      },
      name: "Vaibhav",
      sub: "liked your post",
      time: "1d ago",
      id: "1",
    },
    {
      img: {
        uri: "https://i.pinimg.com/originals/92/e6/0b/92e60bf06991c96d60ebe10da7d7215c.jpg",
      },
      name: "Sakshi",
      sub: "Started following you",
      time: "2d ago",
      id: "2",
    },
    {
      img: {
        uri: "https://i.pinimg.com/originals/0d/aa/e5/0daae50d3e9a7c79d62e5ee87229bbd6.jpg",
      },
      name: "Srushti",
      sub: "Commented: Impresive App Design made ",
      time: "3d ago",
      id: "3",
    },
    {
      img: {
        uri: "https://i.pinimg.com/originals/0d/aa/e5/0daae50d3e9a7c79d62e5ee87229bbd6.jpg",
      },
      name: "Laxmi",
      sub: "Started following you",
      time: "3d ago",
      id: "4",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Today}
        ListHeaderComponent={() => {
          return (
            <View style={styles.newconatiner}>
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
                    activeOpacity={0.5}>
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
                    Notifications
                  </Text>
                </View>
                <View
                  style={{
                    width: "10%",
                    alignItems: "flex-end",
                  }}
                >
                  <Avatar.Image
                    source={{uri:userData.profile_pic_url}}
                    size={35}
                    style={{ marginRight: 20 }}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  paddingHorizontal: 15,
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    color: "#434b56",
                    fontSize: 16,
                  }}
                >
                  New
                </Text>
              </View>
              <FlatList
                keyExtractor={(item) => item.id}
                data={New}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.list}>
                      <View style={styles.avatarview}>
                        <Avatar.Image source={item.img} size={40} />
                      </View>
                      <View style={styles.textview}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={styles.sub}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                          >
                            {item.sub}
                          </Text>
                          <Entypo name="dot-single" size={20} color="#a1a1a1" />
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                      </View>
                      <View style={styles.dotsview}>
                        <TouchableOpacity activeOpacity={0.5}>
                          <MaterialCommunityIcons
                            name="dots-vertical"
                            size={24}
                            color="black"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
              <View
                style={{
                  width: "100%",
                  marginVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    color: "#434b56",
                    fontSize: 16,
                    lineHeight: 40,
                    borderTopWidth: 0.3,
                    borderTopColor: "darkgrey",
                  }}
                >
                  Today
                </Text>
              </View>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.list}>
              <View style={styles.avatarview}>
                <Avatar.Image source={item.img} size={40} />
              </View>
              <View style={styles.textview}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={styles.sub}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.sub}
                  </Text>
                  <Entypo name="dot-single" size={20} color="#a1a1a1" />
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.dotsview}>
                <TouchableOpacity activeOpacity={0.5}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View>
              <View
                style={{
                  width: "100%",
                  marginVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    color: "#434b56",
                    fontSize: 16,
                    lineHeight: 40,
                    borderTopWidth: 0.3,
                    borderTopColor: "darkgrey",
                  }}
                >
                  This Week
                </Text>
              </View>

              <FlatList
                keyExtractor={(item) => item.id}
                data={ThisWeek}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.list}>
                      <View style={styles.avatarview}>
                        <Avatar.Image source={item.img} size={40} />
                      </View>
                      <View style={styles.textview}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={styles.sub}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                          >
                            {item.sub}
                          </Text>
                          <Entypo name="dot-single" size={20} color="#a1a1a1" />
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                      </View>
                      <View style={styles.dotsview}>
                        <TouchableOpacity activeOpacity={0.5}>
                          <MaterialCommunityIcons
                            name="dots-vertical"
                            size={24}
                            color="black"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

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
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
  list: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
  },
  avatarview: {
    width: "15%",
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
  },
  textview: {
    width: "75%",
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
  },
  dotsview: {
    width: "10%",
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#434b56",
  },
  sub: {
    fontSize: 12,
    color: "#434b56",
    maxWidth: "70%",
  },
  time: {
    fontSize: 12,
    color: "#a1a1a1",
  },
  newconatiner: {
    width: "100%",
    alignItems: "center",
  },
});
export default inject("store")(observer(Notfications));
