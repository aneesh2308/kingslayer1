import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Avatar } from "react-native-paper";

const SellBook = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [Books, setBooksList] = useState([]);

  const getBooks = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";

    fetch(`${apiURL}/books`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var temp=result.filter(x=>x.bookCondition=="Old")
        console.log("result ",temp);
        setBooksList(temp);

      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    const unsubscribe = () =>
      props.navigation.addListener("focus", () => {
    getBooks();

      });
    return unsubscribe();
  }, [props.navigation]);
  return (
    <View style={styles.container}>

      {/*-----------------header------------------------- */}
      {/* ----------------------------header--------------------------------------- */}
      <View style={{ width: "100%", alignItems: "center", height: "90%" }}>
        <View style={styles.TitileHeader}>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
            }}>
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
              Sell Book
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
              size={35}
              style={{ marginRight: 20 }}
            />
          </View>
        </View>
        {/* ------------------------------------------------------------search bar -------------------------------------------------------*/}
        <View style={styles.searchbar}>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Ionicons name="search" size={18} color="#434B56" />
            </TouchableOpacity>
            <TextInput
              placeholder="Search "
              style={styles.textbox}
              placeholderTextColor="#535B65"
            />
          </View>
          <View style={{ width: "40%", alignItems: "center" }}>
            <Picker
              selectedValue={selectedValue}
              style={{
                width: "100%",
                position: "relative",
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="New Book" value="New Book" />
              <Picker.Item label="Old Book" value="Old Book" />
            </Picker>
          </View>
          <View
            style={{
              width: "10%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => props.navigation.navigate("SellBookFilter")}
            >
              <Image
                source={require("../assets/menu.png")}
                style={{ height: 100, width: 100, tintColor: "#434B56" }}
              />
            </TouchableOpacity>
          </View>
        </View>
 {/*-----------------book------------------------- */}
 <FlatList
 style={{
   width:"100%"
 }}
                data={Books}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                                          return (
                                            <View style={styles.books}>
                                  <Image
                                    style={styles.bookdesc}
                                    source={ {uri:  item.bookimg!=undefined?item.bookimg[0]:item.img.uri}}
                                  />
                                  <View
                                    style={{
                                      flexGrow: 1,
                                      paddingLeft: 20,
                                    }}
                                  >
                                    <View
                                      style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Text
                                        style={{ color: "#534b56", fontSize: 16, fontWeight: "700" }}
                                      >
                                      { item.name}
                                      </Text>
                                      <TouchableOpacity
                                        // onPress={() => props.navigation.navigate("ChangeStatus",{item:item})}
                                      >
                                        <MaterialCommunityIcons
                                          name="pencil-outline"
                                          size={20}
                                          color="#535B65"
                                        />
                                      </TouchableOpacity>
                                    </View>
                                    <Text style={{ color: "#434b56", fontSize: 15, fontWeight: "700" }}>
                                    ${ item.price}
                                    </Text>
                                  </View>
                                </View>
                                          );
                                        }}

       />

      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
          paddingBottom: 10,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={styles.post}
          onPress={() => {props.navigation.navigate("AddBooks")}}
          activeOpacity={0.7}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            SELL MORE BOOKS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SellBook;

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
  HeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
  },
  textbox: {
    width: "80%",
    fontSize: 12,
    color: "black",
    padding: 10,
  },
  books: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 0.25,
    borderBottomColor: "#e4e4e4",
    paddingVertical: 20,
  },
  bookdesc: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  post: {
    width: "100%",
    height: 50,
    backgroundColor: "#202AA8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
