import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";

// import { auth, db } from "../../Config";
import { inject, observer } from "mobx-react";

const MyPosts = (props) => {
  const [images, setImages] = useState();
  const [dataloaded, setdataloaded] = useState(true);
  // const [userData, setUserData] = useState([]);

  // const getUser = async () => {
  //   await db
  //     .collection("users")
  //     .doc(auth.currentUser.uid)
  //     .onSnapshot((documentSnapshot) => {
  //       if (documentSnapshot.exists) {
  //         // console.log("User Data", documentSnapshot.data());
  //         setUserData(documentSnapshot.data());
  //       }
  //     });
  // };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     getUser();
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  const apiURL = "https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.store.getToken,
      },
    };

    fetch(`${apiURL}/user/posts?size=10&page_index=0`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setImages(res.posts);
        setdataloaded(false);
      })

      .catch((error) => console.log("error", error));
  }, []);
  // console.log(images);
  const [data, setData] = useState([
    {
      img: {
        uri: "https://www.jotform.com/blog/wp-content/uploads/2020/07/How-to-create-an-online-lecture.png",
      },
      title: "Download 01",
      id: "1",
    },
    {
      img: {
        uri: "https://www.epiphan.com/wp-content/uploads/2018/11/How-to-record-lectures_FB.png",
      },
      title: "Download 02",
      id: "2",
    },
    {
      img: {
        uri: "https://wiki.nus.edu.sg/download/attachments/300975394/lecture-hall.png?version=1&modificationDate=1595555493940&api=v2",
      },
      title: "Download 03",
      id: "3",
    },
    {
      img: {
        uri: "https://i.dlpng.com/static/png/6647063_preview.png",
      },
      title: "Download 04",
      id: "4",
    },
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOW8e9eDnQMxdK9utoW-EIN7gYMFTAnKtcyDT4uJbfOeUWWPDDAp9rc8q_XB5prZP-RvI&usqp=CAU",
      },
      title: "Download 04",
      id: "5",
    },
    {
      img: {
        uri: "https://keystonekeynote.com/wp-content/uploads/2021/02/Article-Cover-Photo-Option-1.png",
      },
      title: "Download 04",
      id: "6",
    },
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjqPGT8fUg1kJuJq0AcbEvsVMx7FG5Rt9nLD_8d8DC-jyTuUkr1m4Iwt1uONu8tEdkgo&usqp=CAU",
      },
      title: "Download 04",
      id: "7",
    },
    {
      img: {
        uri: "https://i.pinimg.com/736x/5d/7c/eb/5d7cebe77655986e7869d85e417b634a.jpg",
      },
      title: "Download 04",
      id: "8",
    },
    {
      img: {
        uri: "https://www.jotform.com/blog/wp-content/uploads/2020/07/How-to-create-an-online-lecture.png",
      },
      title: "Download 01",
      id: "9",
    },
    {
      img: {
        uri: "https://www.epiphan.com/wp-content/uploads/2018/11/How-to-record-lectures_FB.png",
      },
      title: "Download 02",
      id: "10",
    },
    {
      img: {
        uri: "https://wiki.nus.edu.sg/download/attachments/300975394/lecture-hall.png?version=1&modificationDate=1595555493940&api=v2",
      },
      title: "Download 03",
      id: "11",
    },
    {
      img: {
        uri: "https://i.dlpng.com/static/png/6647063_preview.png",
      },
      title: "Download 04",
      id: "12",
    },
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOW8e9eDnQMxdK9utoW-EIN7gYMFTAnKtcyDT4uJbfOeUWWPDDAp9rc8q_XB5prZP-RvI&usqp=CAU",
      },
      title: "Download 04",
      id: "13",
    },
    {
      img: {
        uri: "https://keystonekeynote.com/wp-content/uploads/2021/02/Article-Cover-Photo-Option-1.png",
      },
      title: "Download 04",
      id: "14",
    },
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjqPGT8fUg1kJuJq0AcbEvsVMx7FG5Rt9nLD_8d8DC-jyTuUkr1m4Iwt1uONu8tEdkgo&usqp=CAU",
      },
      title: "Download 04",
      id: "15",
    },
    {
      img: {
        uri: "https://i.pinimg.com/736x/5d/7c/eb/5d7cebe77655986e7869d85e417b634a.jpg",
      },
      title: "Download 04",
      id: "16",
    },
  ]);

  const renderFlatList = () => {
    if (dataloaded) {
      return (
        <View style={{ backgroundColor: "grey" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            data={images}
            style={{ height: "100%", width: "100%", paddingTop: 20 }}
            showsVerticalScrollIndicator={false}
            numColumns={4}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: "25%",
                    padding: 5,
                    marginVertical: 5,
                  }}
                >
                  <Image
                    source={{ uri: item.image_url }}
                    style={{ width: "100%", height: 100 }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitileHeader}>
        <View
          style={{
            width: "100%",
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
            My Posts
          </Text>
        </View>
      </View>
      {/* ---------------------------- profile --------------------------------------- */}
      <View style={styles.profile}>
        <Avatar.Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          }}
          size={110}
        />
        <View style={styles.camera}>
          <Feather name="camera" size={18} color="grey" />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#434B56",
              padding: 2,
            }}
          >
            ABC
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "#434B56",
              padding: 2,
            }}
          >
            ABC@email.com
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: "600",
              color: "#434B56",
              padding: 2,
            }}
          >
            Deaken University, Delhi, India
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Connections")}
            activeOpacity={0.5}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#434B56",
                padding: 2,
              }}
            >
              70 Connections
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderFlatList()}
    </View>
  );
};

export default inject("store")(observer(MyPosts));

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
  profile: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 20,
    paddingBottom: 10,
  },
  camera: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#1C2172",
    position: "absolute",
    left: 105,
    top: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
});
