import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Surface } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import { inject, observer } from "mobx-react";

function UpcomingLecList(props) {
  // const [lec, setLec] = useState([]);
  const getAssignments = () => { 
      var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    
    fetch(`${apiURL}/lecture/upcoming`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLec([result]);
        console.log(result);
        console.log(result.id);
        console.log(result.title);
        console.log(result.thumbnail_image_url);

      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getAssignments();
  }, [])
  const [lec, setLec] = useState([
    // {
    //   title: "Post Problems",
    //   thumbnail_image_url: {
    //     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mkNT3LLavVEouGw3JX4ClaOucdOXBqjreQ&usqp=CAU",
    //   },
    //   id: "XzTOhP5sxNQ3jCopnaue",
    // },
    // {
    //   title: "College Problems",
    //   thumbnail_image_url: {
    //     uri: "https://symbiosiscollege.edu.in/assets/images/slider/slider8.jpg",
    //   },
    //   id: "XzTOhP5sxNQ3jCopnaud",
    // },
    // {
    //   title: "Brain Stroming",
    //   thumbnail_image_url: {
    //     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNzLgGGWHxoY7mX6GuBNbMzdvTMXaR_Ldbg&usqp=CAU",
    //   },
    //   id: "XzTOhP5sxNQ3jCopnauc",
    // },
    // {
    //   title: "Post Problems",
    //   thumbnail_image_url: {
    //     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpPYLeZmKqy9xpFfv7KRGY8BY0Rv9bHtSjA&usqp=CAU",
    //   },
    //   id: "XzTOhP5sxNQ3jCopnaub",
    // },
    // {
    //   title: "post problems",
    //   thumbnail_image_url: {
    //     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoEGMrWtrQTYeBDhnFQJfl40Jlq06nfBQgg&usqp=CAU",
    //   },
    //   id: "XzTOhP5sxNQ3jCopnauma",
    // },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={lec}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("UpcomingLecDetail", { item })
              }>
              <Surface style={styles.surface}>
                <ImageBackground
                  mode="cover"
                  source={{uri:`${item.thumbnail_image_url}`}}
                  style={{
                    height: 130,
                    width: 130,
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
                  style={{
                    fontSize: 14,
                    color: "#434B56",
                    paddingTop: 10,
                    paddingLeft: 20,
                    fontWeight: "bold",
                    width:"90%",
                    flexWrap:"wrap",
                    flex:0.95
                  }}
                >
                  {item.title}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={({ item, index }) => {
          return <View style={{ height: 100, width: "100%" }}></View>;
        }}
      />
    </View>
  );
}
export default inject("store")(observer(UpcomingLecList));
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  surface: {
    height: 160,
    width: "100%",
    alignItems: "center",

    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
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
